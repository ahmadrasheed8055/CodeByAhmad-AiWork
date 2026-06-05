import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
const DB_PATH = path.join(__dirname, 'db.json');
const UPLOADS_DIR = path.join(__dirname, 'public/uploads');

// Ensure uploads directory exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPG, PNG and WEBP are allowed.'));
    }
  }
});

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('public/uploads'));

// Error handling middleware for Multer
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ message: 'File is too large. Max limit is 2MB.' });
    }
    return res.status(400).json({ message: err.message });
  } else if (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
});

// Helper function to read DB
const readDB = () => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading DB:', err);
    return { admin: {}, repairServices: [], accessories: [], reviews: [] };
  }
};

// Helper function to write DB
const writeDB = (data) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing DB:', err);
  }
};

// Login Endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const db = readDB();
    
    if (!db.admin || !db.admin.password) {
      return res.status(500).json({ success: false, message: 'Admin account not configured' });
    }

    const isMatch = await bcrypt.compare(password, db.admin.password);
    
    if (db.admin.username === username && isMatch) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// GET all data
app.get('/api/data', (req, res) => {
  const db = readDB();
  res.json(db);
});

// CRUD for any category
const categories = ['accessories', 'repairServices', 'reviews'];

categories.forEach(category => {
  // GET items
  app.get(`/api/${category}`, (req, res) => {
    const db = readDB();
    res.json(db[category] || []);
  });

  // CREATE item with optional image upload
  app.post(`/api/${category}`, (req, res, next) => {
    upload.single('image')(req, res, (err) => {
      if (err) return next(err);
      
      const db = readDB();
      const data = { ...req.body };
      
      // Basic validation: ensure at least one field other than ID is present
      if (Object.keys(data).length === 0 && !req.file) {
        return res.status(400).json({ message: 'No data provided' });
      }

      // If a file was uploaded, add its path to the data
      if (req.file) {
        data.image = `/uploads/${req.file.filename}`;
      }

      const newItem = { ...data, id: Date.now() };
      
      // Convert numeric fields if necessary
      if (data.rating) newItem.rating = parseInt(data.rating);

      if (!db[category]) db[category] = [];
      db[category].push(newItem);
      writeDB(db);
      res.status(201).json(newItem);
    });
  });

  // UPDATE item with optional image upload
  app.put(`/api/${category}/:id`, (req, res, next) => {
    upload.single('image')(req, res, (err) => {
      if (err) return next(err);

      const db = readDB();
      const id = parseInt(req.params.id);
      const index = db[category]?.findIndex(item => item.id === id);
      
      if (index !== -1 && index !== undefined) {
        const updatedData = { ...req.body };
        
        if (req.file) {
          // Delete old local image if it exists
          const oldImage = db[category][index].image;
          if (oldImage && oldImage.startsWith('/uploads/')) {
            const oldPath = path.join(__dirname, 'public', oldImage);
            if (fs.existsSync(oldPath)) {
              try { fs.unlinkSync(oldPath); } catch(e) {}
            }
          }
          updatedData.image = `/uploads/${req.file.filename}`;
        }

        db[category][index] = { ...db[category][index], ...updatedData };
        writeDB(db);
        res.json(db[category][index]);
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
    });
  });

  // DELETE item
  app.delete(`/api/${category}/:id`, (req, res) => {
    const db = readDB();
    const id = parseInt(req.params.id);
    const item = db[category]?.find(i => i.id === id);
    
    if (item && item.image && item.image.startsWith('/uploads/')) {
      const filePath = path.join(__dirname, 'public', item.image);
      if (fs.existsSync(filePath)) {
        try { fs.unlinkSync(filePath); } catch(e) {}
      }
    }

    if (db[category]) {
      db[category] = db[category].filter(item => item.id !== id);
      writeDB(db);
    }
    res.json({ message: 'Item deleted' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

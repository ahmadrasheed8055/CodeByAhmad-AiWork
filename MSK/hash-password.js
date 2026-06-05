import fs from 'fs';
import bcrypt from 'bcryptjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, 'db.json');

const hashPassword = async () => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  
  // Check if password is already hashed (bcrypt hashes start with $2a$ or $2b$)
  if (!data.admin.password.startsWith('$2a$') && !data.admin.password.startsWith('$2b$')) {
    console.log('Hashing plain-text password...');
    const salt = await bcrypt.genSalt(10);
    data.admin.password = await bcrypt.hash(data.admin.password, salt);
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    console.log('Password successfully hashed in db.json');
  } else {
    console.log('Password is already hashed.');
  }
};

hashPassword();

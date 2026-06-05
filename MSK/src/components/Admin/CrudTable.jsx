import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';

const CrudTable = ({ title, items, category, refreshData, fields }) => {
  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [editFile, setEditFile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateFile = (file) => {
    if (!file) return true;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      setError('Invalid file type. Only JPG, PNG and WEBP are allowed.');
      return false;
    }
    if (file.size > 2 * 1024 * 1024) {
      setError('File size must be less than 2MB');
      return false;
    }
    setError('');
    return true;
  };

  const uploadImage = async (file) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${category}/${fileName}`;

    const { error: uploadError, data } = await supabase.storage
      .from('images')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    if (category !== 'reviews' && !selectedFile) {
      setError('Please select an image');
      setLoading(false);
      return;
    }

    if (selectedFile && !validateFile(selectedFile)) {
      setLoading(false);
      return;
    }

    try {
      let imageUrl = '';
      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile);
      }

      const itemToSave = { ...newItem };
      if (imageUrl) itemToSave.image = imageUrl;
      if (itemToSave.rating) itemToSave.rating = parseInt(itemToSave.rating);

      const { error: insertError } = await supabase
        .from(category)
        .insert([itemToSave]);

      if (insertError) throw insertError;

      setNewItem({});
      setSelectedFile(null);
      e.target.reset();
      refreshData();
    } catch (err) {
      console.error('Error adding item:', err);
      setError(err.message || 'Error adding item');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    if (editFile && !validateFile(editFile)) {
      setLoading(false);
      return;
    }

    try {
      const itemToUpdate = { ...editingItem };
      delete itemToUpdate.id; // Remove ID from payload

      if (editFile) {
        itemToUpdate.image = await uploadImage(editFile);
      }

      const { error: updateError } = await supabase
        .from(category)
        .update(itemToUpdate)
        .eq('id', editingItem.id);

      if (updateError) throw updateError;

      setEditingItem(null);
      setEditFile(null);
      refreshData();
    } catch (err) {
      console.error('Error updating item:', err);
      setError(err.message || 'Error updating item');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setLoading(true);
      try {
        const { error: deleteError } = await supabase
          .from(category)
          .delete()
          .eq('id', id);

        if (deleteError) throw deleteError;
        refreshData();
      } catch (err) {
        console.error('Error deleting item:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="crud-container">
      <h3>{title} {loading && <span style={{fontSize: '0.8rem', color: '#666'}}>(Processing...)</span>}</h3>
      {error && <p className="error-message" style={{color: 'red'}}>{error}</p>}
      
      <form className="admin-form" onSubmit={handleAdd}>
        <h4>Add New Item</h4>
        <div className="form-row">
          {fields.map(field => (
            field === 'image' ? (
              <div key={field} className="file-input-wrapper">
                <label>Upload Image (Max 2MB):</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  required
                />
              </div>
            ) : (
              <input 
                key={field}
                type={field === 'rating' ? 'number' : 'text'} 
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={newItem[field] || ''}
                onChange={(e) => setNewItem({...newItem, [field]: e.target.value})}
                required
              />
            )
          ))}
          <button type="submit" className="add-btn" disabled={loading}>Add</button>
        </div>
      </form>

      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              {fields.map(field => <th key={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</th>)}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                {editingItem && editingItem.id === item.id ? (
                  <>
                    {fields.map(field => (
                      <td key={field}>
                        {field === 'image' ? (
                          <input 
                            type="file" 
                            accept="image/*"
                            onChange={(e) => setEditFile(e.target.files[0])}
                          />
                        ) : (
                          <input 
                            type={field === 'rating' ? 'number' : 'text'} 
                            value={editingItem[field]} 
                            onChange={(e) => setEditingItem({...editingItem, [field]: e.target.value})}
                          />
                        )}
                      </td>
                    ))}
                    <td>
                      <button className="save-btn" onClick={handleUpdate} disabled={loading}>Save</button>
                      <button className="cancel-btn" onClick={() => {setEditingItem(null); setEditFile(null);}}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    {fields.map(field => (
                      <td key={field}>
                        {field === 'image' ? (
                          <img 
                            src={item[field]} 
                            alt="preview" 
                            style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px'}} 
                          />
                        ) : (
                          item[field]
                        )}
                      </td>
                    ))}
                    <td>
                      <button className="edit-btn" onClick={() => setEditingItem(item)} disabled={loading}>Edit</button>
                      <button className="delete-btn" onClick={() => handleDelete(item.id)} disabled={loading}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudTable;

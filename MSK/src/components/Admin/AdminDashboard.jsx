import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import CrudTable from './CrudTable';
import '../../styles/Admin.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('accessories');
  const [data, setData] = useState({ accessories: [], repairServices: [], reviews: [] });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: accessories } = await supabase.from('accessories').select('*').order('id', { ascending: false });
      const { data: repairServices } = await supabase.from('repairServices').select('*').order('id', { ascending: false });
      const { data: reviews } = await supabase.from('reviews').select('*').order('id', { ascending: false });
      
      setData({ 
        accessories: accessories || [], 
        repairServices: repairServices || [], 
        reviews: reviews || [] 
      });
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <h2>MSK Admin Panel</h2>
        <div className="nav-tabs">
          <button 
            className={activeTab === 'accessories' ? 'active' : ''} 
            onClick={() => setActiveTab('accessories')}
          >
            Accessories
          </button>
          <button 
            className={activeTab === 'repairServices' ? 'active' : ''} 
            onClick={() => setActiveTab('repairServices')}
          >
            Services
          </button>
          <button 
            className={activeTab === 'reviews' ? 'active' : ''} 
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </nav>

      <main className="admin-content">
        {loading ? (
          <p>Loading data from Supabase...</p>
        ) : (
          <>
            {activeTab === 'accessories' && (
              <CrudTable 
                title="Manage Accessories" 
                items={data.accessories} 
                category="accessories" 
                refreshData={fetchData} 
                fields={['name', 'category', 'price', 'image']}
              />
            )}
            {activeTab === 'repairServices' && (
              <CrudTable 
                title="Manage Repair Services" 
                items={data.repairServices} 
                category="repairServices" 
                refreshData={fetchData} 
                fields={['title', 'description', 'price', 'image']}
              />
            )}
            {activeTab === 'reviews' && (
              <CrudTable 
                title="Manage Reviews" 
                items={data.reviews} 
                category="reviews" 
                refreshData={fetchData} 
                fields={['user', 'rating', 'comment', 'date']}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;

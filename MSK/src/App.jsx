import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RepairServices from './components/RepairServices';
import AccessoriesShop from './components/AccessoriesShop';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <RepairServices />
      <AccessoriesShop />
      <Testimonials />
      <ContactSection />
      
      <footer style={{ 
        padding: '60px 5%', 
        textAlign: 'center', 
        backgroundColor: 'var(--dark)', 
        color: 'var(--white)',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container">
          <h2 style={{ color: 'var(--primary)', marginBottom: '15px' }}>MSK</h2>
          <p style={{ opacity: 0.7, maxWidth: '500px', margin: '0 auto 30px' }}>
            Your trusted partner for professional mobile repairs and premium smartphone accessories in Lahore.
          </p>
          <p style={{ fontSize: '0.9rem', opacity: 0.5 }}>
            &copy; {new Date().getFullYear()} MSK Mobile Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

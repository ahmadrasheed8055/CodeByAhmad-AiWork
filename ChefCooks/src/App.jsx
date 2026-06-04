import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CategoryBar from './components/CategoryBar/CategoryBar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import { PRODUCTS } from './data';
import './index.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(PRODUCTS);
    } else {
      const filtered = PRODUCTS.filter((product) => product.category === activeCategory);
      setFilteredProducts(filtered);
    }
  }, [activeCategory]);

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    // Smooth scroll to product grid
    const gridElement = document.getElementById('product-grid');
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <CategoryBar 
          activeCategory={activeCategory} 
          onSelectCategory={handleSelectCategory} 
        />
        <div id="product-grid">
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
      
      <footer style={{ 
        backgroundColor: '#1a1a1a', 
        color: 'white', 
        padding: '40px 0', 
        textAlign: 'center' 
      }}>
        <div className="container">
          <p>&copy; 2026 Chef Cooks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

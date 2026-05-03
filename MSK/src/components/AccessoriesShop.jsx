import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';
import { siteData } from '../data/siteData';
import '../styles/AccessoriesShop.css';

const AccessoriesShop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const products = siteData.accessories;

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="accessories" className="accessories-shop">
      <div className="container">
        <div className="section-title">
          <h2>Premium Accessories</h2>
          <p>Enhance your mobile experience with our curated collection of high-quality accessories.</p>
        </div>
        
        <div className="accessories-slider-container">
          <button className="slider-btn prev" onClick={prevSlide}><FaChevronLeft /></button>

          <div className="accessories-viewport">
            <div 
              className="accessories-track" 
              style={{ 
                transform: `translateX(calc(-1 * ${currentIndex} * (100% / ${itemsToShow})))`
              }}
            >
              {products.map((item) => (
                <div key={item.id} className="product-slide" style={{ flex: `0 0 calc(100% / ${itemsToShow})` }}>
                  <div className="product-card-premium">
                    <div className="category-tag">{item.category}</div>
                    <div className="product-image-box">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="product-details-premium">
                      <h3>{item.name}</h3>
                      <div className="product-action-row">
                        <span className="product-price-tag">{item.price}</span>
                        <button className="add-to-cart-btn">
                          <FaShoppingCart /> Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next" onClick={nextSlide}><FaChevronRight /></button>
        </div>

        <div className="slider-dots">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <span key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(i)}></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesShop;

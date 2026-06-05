import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';
import { supabase } from '../supabaseClient';
import { siteData } from '../data/siteData';
import '../styles/AccessoriesShop.css';

const AccessoriesShop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [products, setProducts] = useState([]);
  
  // Touch swipe refs
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('accessories')
          .select('*')
          .order('id', { ascending: true });
        
        if (error) throw error;
        setProducts(data || []);
      } catch (err) {
        console.error('Error fetching accessories:', err);
      }
    };
    fetchData();

    const updateItemsToShow = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const maxIndex = products.length > 0 ? Math.max(0, products.length - itemsToShow) : 0;

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    touchStart.current = 0;
    touchEnd.current = 0;
  };

  const handleBuyNow = (product) => {
    const phoneNumber = siteData.contact.phone.replace(/\s+/g, '');
    const message = `Hello MSK! I am interested in buying: ${product.name} (${product.price}). Please let me know the details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (products.length === 0) return null;

  return (
    <section id="accessories" className="accessories-shop">
      <div className="container">
        <div className="section-title">
          <h2>Premium Accessories</h2>
          <p>Enhance your mobile experience with our curated collection of high-quality accessories.</p>
        </div>
        
        <div className="accessories-slider-container">
          <button className="slider-btn prev" onClick={prevSlide}><FaChevronLeft /></button>

          <div 
            className="accessories-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="accessories-track" 
              style={{ 
                transform: `translateX(calc(-1 * ${currentIndex} * (100% / ${itemsToShow})))`
              }}
            >
              {products.filter(p => p && p.image).map((item) => (
                <div key={item.id} className="product-slide" style={{ flex: `0 0 calc(100% / ${itemsToShow})` }}>
                  <div className="product-card-premium">
                    <div className="category-tag">{item.category}</div>
                    <div className="product-image-box">
                      <img 
                        src={item.image} 
                        alt={item.name || 'Product'} 
                      />
                    </div>
                    <div className="product-details-premium">
                      <h3>{item.name}</h3>
                      <div className="product-action-row">
                        <span className="product-price-tag">
                          {item.price?.toString().toLowerCase().includes('rs') 
                            ? item.price 
                            : `Rs. ${item.price}`}
                        </span>
                        <button className="add-to-cart-btn" onClick={() => handleBuyNow(item)}>
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

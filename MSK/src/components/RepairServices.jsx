import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaTools } from 'react-icons/fa';
import { siteData } from '../data/siteData';
import '../styles/RepairServices.css';

const RepairServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const services = siteData.repairServices;

  // Touch swipe refs
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

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

  const maxIndex = Math.max(0, services.length - itemsToShow);

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

  return (
    <section id="repairs" className="repair-services">
      <div className="container">
        <div className="section-title">
          <h2>Professional Repairing</h2>
          <p>Expert hardware and software solutions for all smartphone brands.</p>
        </div>
        
        <div className="services-slider-container">
          <button className="slider-btn prev" onClick={prevSlide}><FaChevronLeft /></button>

          <div 
            className="services-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="services-track" 
              style={{ 
                transform: `translateX(calc(-1 * ${currentIndex} * (100% / ${itemsToShow})))`
              }}
            >
              {services.map((service) => (
                <div key={service.id} className="service-slide" style={{ flex: `0 0 calc(100% / ${itemsToShow})` }}>
                  <div className="service-card-premium">
                    <div className="service-image-container">
                      <img src={service.image} alt={service.title} />
                      <div className="price-tag-floating">{service.price}</div>
                    </div>
                    <div className="service-info-premium">
                      <div className="service-icon-box"><FaTools /></div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <a href="#contact" className="btn-text">Check Availability</a>
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

export default RepairServices;

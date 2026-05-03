import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { siteData } from '../data/siteData';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = siteData.reviews;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Client Satisfaction</h2>
          <p>Read what our valued customers have to say about our professional services.</p>
        </div>
        
        <div className="slider-container">
          <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous review">
            <FaChevronLeft />
          </button>
          
          <div className="testimonial-slider">
            <div 
              className="testimonial-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="review-slide">
                  <div className="review-card">
                    <FaQuoteLeft className="quote-icon" />
                    <div className="rating">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                    <p className="comment">"{review.comment}"</p>
                    <div className="user-info">
                      <h4>{review.user}</h4>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next" onClick={nextSlide} aria-label="Next review">
            <FaChevronRight />
          </button>
        </div>

        <div className="slider-dots">
          {reviews.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

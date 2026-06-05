import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { supabase } from '../supabaseClient';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState([]);

  // Touch swipe refs
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .order('id', { ascending: true });
        
        if (error) throw error;
        setReviews(data || []);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      }
    };
    fetchData();
  }, []);

  const nextSlide = () => {
    if (reviews.length === 0) return;
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (reviews.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
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

  if (reviews.length === 0) return null;

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
          
          <div 
            className="testimonial-slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="testimonial-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.filter(r => r && r.user).map((review) => (
                <div key={review.id} className="review-slide">
                  <div className="review-card">
                    <FaQuoteLeft className="quote-icon" />
                    <div className="rating">
                      {[...Array(parseInt(review.rating) || 5)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                    <p className="comment">"{review.comment || 'No comment provided'}"</p>
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

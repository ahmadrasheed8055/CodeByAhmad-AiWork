import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-video-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="hero-video-element"
        >
          <source src="/msk-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="accent-text">MSK</span> Mobile Store
          </h1>
          <h2 className="hero-subtitle">Premium Smartphone Solutions</h2>
          <p className="hero-description">
            Expert repairing services and high-end accessories at Hall Road, Lahore. 
            We bring your devices back to life with professional care.
          </p>
          <div className="hero-action-btns">
            <a href="#repairs" className="btn btn-primary btn-large">Our Services</a>
            <a href="#contact" className="btn btn-outline btn-large">Find Our Shop</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

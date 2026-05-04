import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { siteData } from '../data/siteData';
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Visit Our Store</h2>
          <p>We are located in the heart of Lahore's mobile market. Stop by for expert repairs and premium accessories.</p>
        </div>
        
        <div className="contact-wrapper">
          <div className="contact-info-card">
            <div className="shop-header">
              <h3>MSK Mobile Store</h3>
              <p>Premium Mobile Solutions & Accessories</p>
            </div>
            
            <div className="info-list">
              <div className="info-card-item">
                <div className="icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>{siteData.contact.address}</p>
                </div>
              </div>
              
              <div className="info-card-item">
                <div className="icon-box">
                  <FaPhone />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>{siteData.contact.phone}</p>
                </div>
              </div>

              <div className="info-card-item">
                <div className="icon-box">
                  <FaWhatsapp />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>{siteData.contact.phone}</p>
                </div>
              </div>
              
              <div className="info-card-item">
                <div className="icon-box">
                  <FaClock />
                </div>
                <div>
                  <h4>Opening Hours</h4>
                  <p>{siteData.contact.openingHours}</p>
                </div>
              </div>
            </div>

            <a 
              href={`https://wa.me/${siteData.contact.phone.replace(/[^0-9]/g, '')}`} 
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
          
          <div className="map-container">
            <iframe 
              src={siteData.contact.mapLocation}
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: 'var(--radius-md)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="MSK Mobile Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

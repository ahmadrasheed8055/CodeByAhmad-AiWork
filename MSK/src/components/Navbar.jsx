import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaChevronDown, FaShareAlt } from 'react-icons/fa';
import { siteData } from '../data/siteData';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSocialOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getIcon = (name) => {
    switch (name) {
      case 'Facebook': return <FaFacebook />;
      case 'Instagram': return <FaInstagram />;
      case 'WhatsApp': return <FaWhatsapp />;
      default: return null;
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <a href="#home">
            <span className="logo-brand">MSK</span>
            <span className="logo-text">MOBILE STORE</span>
          </a>
        </div>
        
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#repairs">Repairing</a></li>
          <li><a href="#accessories">Accessories</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-right">
          <div className="nav-socials-desktop">
            {siteData.socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" title={social.name}>
                {getIcon(social.name)}
              </a>
            ))}
          </div>

          <div className="social-dropdown-container" ref={dropdownRef}>
            <button className={`social-toggle ${socialOpen ? 'active' : ''}`} onClick={() => setSocialOpen(!socialOpen)}>
              <FaShareAlt />
              <FaChevronDown className={`chevron ${socialOpen ? 'rotate' : ''}`} />
            </button>
            <div className={`social-dropdown-menu ${socialOpen ? 'show' : ''}`}>
              <a href={`tel:${siteData.contact.phone}`} className="dropdown-call-item">
                <FaPhone /> <span>Call / Book Repair</span>
              </a>
              <div className="dropdown-divider"></div>
              {siteData.socials.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  {getIcon(social.name)} <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <a href={`tel:${siteData.contact.phone}`} className="nav-cta-btn desktop-only">
            <FaPhone /> <span>Book Repair</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} container`}>
        <div className={styles.left}>
          <ul className={styles.navLinks}>
            <li><a href="#home">HOME <span className={styles.arrow}>▾</span></a></li>
            <li><a href="#pages">PAGES <span className={styles.arrow}>▾</span></a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </div>
        
        <div className={styles.center}>
          <img src="/assets/cc-logo.png" alt="Chef Cooks Logo" className={styles.logo} />
        </div>
        
        <div className={styles.right}>
          <div className={styles.icons}>
            <button className={styles.iconBtn} aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            <div className={styles.phone}>
              <span className={styles.phoneIcon}>📞</span>
              <span className={styles.phoneNumber}>+91 98765 43210</span>
            </div>
            <div className={styles.cart}>
              <span className={styles.cartLabel}>CART</span>
              <div className={styles.cartBadgeContainer}>
                <span className={styles.cartIcon}>🛒</span>
                <span className={styles.badge}>3</span>
              </div>
              <span className={styles.cartPrice}>₹ 450</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

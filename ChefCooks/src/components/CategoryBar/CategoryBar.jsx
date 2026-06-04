import React from 'react';
import styles from './CategoryBar.module.css';

const CATEGORY_ICONS = {
  all: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 9H9V2H7V9H5V2H3V9C3 11.12 4.66 12.84 6.75 12.97V22H9.25V12.97C11.34 12.84 13 11.12 13 9V2H11V9ZM16 6V14H18.5V22H21V2C18.24 2 16 4.24 16 6Z" />
    </svg>
  ),
  ramen: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22,15C22,18.87 18.87,22 15,22H9C5.13,22 2,18.87 2,15V12H22V15M5.5,10L2.5,2H4.5L7,10H5.5M9,10L7,2H9L10.5,10H9M13,10L12,2H14L14.5,10H13M17,10L17.5,2H19.5L18.5,10H17Z" />
    </svg>
  ),
  pizza: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2C15.89,2 19,5.13 19,9V11H5V9C5,5.13 8.11,2 12,2M12,22C10.89,22 10,21.11 10,20C10,18.89 10.89,18 12,18C13.11,18 14,18.89 14,20C14,21.11 13.11,22 12,22M7,14C5.89,14 5,13.11 5,12H19C19,13.11 18.11,14 17,14H7Z" />
    </svg>
  ),
  burger: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5,2C13.5,2 13.5,2 13.5,2C11,2 8.95,3.7 8.19,6H11.5A3.5,3.5 0 0,1 15,9.5A3.5,3.5 0 0,1 11.5,13H8.19C8.95,15.3 11,17 13.5,17C13.5,17 13.5,17 13.5,17A7.5,7.5 0 0,0 21,9.5A7.5,7.5 0 0,0 13.5,2M4,6A2,2 0 0,0 2,8A2,2 0 0,0 4,10A2,2 0 0,0 6,8A2,2 0 0,0 4,6M4,11A2,2 0 0,0 2,13A2,2 0 0,0 4,15A2,2 0 0,0 6,13A2,2 0 0,0 4,11Z" />
    </svg>
  ),
  'french-fries': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5,2H7V8H5V2M9,2H11V10H9V2M13,2H15V8H13V2M17,2H19V10H17V2M21,12V22H3V12H21Z" />
    </svg>
  ),
  'fast-food': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />
    </svg>
  ),
  'soft-drinks': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15,2H9V4H7V6H17V4H15V2M7,22H17V8H7V22M12,10A3,3 0 0,1 15,13A3,3 0 0,1 12,16A3,3 0 0,1 9,13A3,3 0 0,1 12,10Z" />
    </svg>
  ),
};

const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'ramen', name: 'Ramen' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'burger', name: 'Burger' },
  { id: 'french-fries', name: 'French Fries' },
  { id: 'fast-food', name: 'Fast Food' },
  { id: 'soft-drinks', name: 'Soft Drinks' },
];

const CategoryBar = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className={styles.categoryBar}>
      <div className={`${styles.container} container`}>
        <div className={styles.scrollWrapper}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.categoryItem} ${activeCategory === cat.id ? styles.active : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <span className={styles.icon}>{CATEGORY_ICONS[cat.id]}</span>
              <span className={styles.name}>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;

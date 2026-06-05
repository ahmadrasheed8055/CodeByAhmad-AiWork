import React from 'react';
import styles from './ProductGrid.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} className={styles.productImg} />
        <div className={styles.badge}>New</div>
      </div>
      <div className={styles.info}>
        <div className={styles.rating}>
          {'⭐'.repeat(Math.floor(product.rating))}
          <span className={styles.ratingValue}>({product.rating})</span>
        </div>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.bottomRow}>
          <span className={styles.price}>₹ {product.price}</span>
          <button className={styles.buyBtn}>🛒 BUY</button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className={styles.noProducts}>
        <p>No products found in this category.</p>
      </div>
    );
  }

  return (
    <section className={styles.productSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

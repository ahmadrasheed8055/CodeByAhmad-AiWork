import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <p className={styles.tagline}>Do what makes you... 💛</p>
          <h1 className={styles.title}>
            <span className={styles.yellowText}>CHEF COOKS</span> TASTES BETTER <br />
            THAN <span className={styles.blackText}>SKINNY</span> FEELS.
          </h1>
          <button className={styles.ctaBtn}>GET IT NOW</button>
        </div>
        
        <div className={styles.imageContainer}>
          <img src="/assets/hero-pizza.png" alt="Delicious Pizza" className={styles.heroImg} />
        </div>
      </div>
      
      {/* Decorative elements to match the style */}
      <div className={styles.decor1}>🍃</div>
      <div className={styles.decor2}>🌶️</div>
      <div className={styles.decor3}>🍄</div>
    </section>
  );
};

export default Hero;

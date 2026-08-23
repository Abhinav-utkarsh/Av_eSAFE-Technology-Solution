// src/components/common/ScrollToTop.jsx

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      className={styles.scrollButton}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <span className={styles.ring}></span>

      <span className={styles.innerGlow}></span>

      <span className={styles.icon}>
        <ArrowUp size={21} strokeWidth={2} />
      </span>

      <span className={styles.pulse}></span>
    </button>
  );
};

export default ScrollToTop;
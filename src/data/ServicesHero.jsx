// src/components/sections/services/ServicesHero.jsx
import { motion } from 'framer-motion';
import styles from './ServicesHero.module.css';

const ServicesHero = () => {
  return (
    <motion.section 
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className={styles.headline}>
        Engineering Solutions <strong>That Move Businesses Forward.</strong>
      </h1>
      <p className={styles.subtitle}>We combine deep technical expertise with a passion for innovation to deliver technology solutions that solve real-world problems and create lasting value.</p>
    </motion.section>
  );
};

export default ServicesHero;
// src/components/common/Button.jsx
import { motion } from 'framer-motion';
import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
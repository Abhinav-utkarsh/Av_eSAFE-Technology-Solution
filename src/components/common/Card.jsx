// src/components/common/Card.jsx
import { motion } from 'framer-motion';
import styles from './Card.module.css';

const Card = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`${styles.card} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
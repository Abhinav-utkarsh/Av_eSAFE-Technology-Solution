// src/components/sections/home/TrustStrip.jsx
import styles from './TrustStrip.module.css';
import { motion } from 'framer-motion';

const technologies = ["AI", "Automation", "Software", "Cloud", "Quality Engineering"];

const TrustStrip = () => {
  return (
    <div className={styles.stripContainer}>
      <div className={styles.strip}>
        {technologies.map((tech, i) => (
          <motion.span key={i} className={styles.techItem}>
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default TrustStrip;
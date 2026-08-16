// src/components/common/SectionHeading.jsx
import styles from './SectionHeading.module.css';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className={styles.headingContainer}>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.decorator}></div>
    </div>
  );
};

export default SectionHeading;
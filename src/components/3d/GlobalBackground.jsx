// src/components/3d/GlobalBackground.jsx
import HeroScene from './HeroScene';
import styles from './GlobalBackground.module.css';

const GlobalBackground = () => {
  return (
    <div className={styles.backgroundCanvas}>
      <HeroScene />
    </div>
  );
};

export default GlobalBackground;
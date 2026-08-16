// src/components/sections/home/AboutSection.jsx
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <motion.section 
      className={styles.aboutSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <SectionHeading 
        subtitle="About Av_eSAFE"
        title="Technology Built Around Possibility."
      />
      <p className={styles.description}>
        Av_eSAFE is a technology solutions company focused on building modern digital products, intelligent automation, and innovative technology experiences. We are driven by an engineering mindset and a passion for turning complex challenges into scalable, high-quality digital solutions.
      </p>
      <Button as={NavLink} to="/about" variant="secondary">Discover Av_eSAFE</Button>
    </motion.section>
  );
};

export default AboutSection;
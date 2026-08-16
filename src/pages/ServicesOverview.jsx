// src/pages/ServicesOverview.jsx
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import { servicesData } from '../data/services.jsx'; // Corrected path
import styles from './ServicesOverview.module.css';
import { motion } from 'framer-motion';

const ServicesOverview = () => {
  return (
    <section className={styles.servicesSection}>
      <SectionHeading
        subtitle="From Idea to Intelligent Product"
        title="What We Do"
      />
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={styles.serviceCard}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
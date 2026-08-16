// src/components/sections/services/ServiceDetailCard.jsx
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import styles from './ServiceDetailCard.module.css';
import { CheckCircle } from 'lucide-react';

const ServiceDetailCard = ({ service, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <Card className={`${styles.serviceCard} ${isReversed ? styles.reversed : ''}`}>
        <div className={styles.iconWrapper}>{service.icon}</div>
        <div className={styles.content}>
          <h3 className={styles.title}>{service.title}</h3>
          <p className={styles.description}>{service.description}</p>
          <ul className={styles.capabilities}>
            {service.capabilities.map((cap, i) => <li key={i}><CheckCircle size={16} /> {cap}</li>)}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceDetailCard;
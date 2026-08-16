// src/components/sections/about/OurStory.jsx
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import styles from './OurStory.module.css';

const timelineEvents = [
  { year: '2023', title: 'The Beginning', description: 'Av_eSAFE starts with a simple goal: learn, build, experiment, and solve real technology problems.' },
  { year: '', title: 'Web & Software Projects', description: 'The journey expands into building practical web applications and software solutions.' },
  { year: '', title: 'Automation & Quality Engineering', description: 'A focus on reliability and efficiency leads to deep dives into test automation and quality engineering.' },
  { year: '', title: 'AI & Generative AI', description: 'Exploration into artificial intelligence and generative models opens up new possibilities for innovation.' },
  { year: '', title: 'Av_eSAFE Products & Ecosystem', description: 'The focus shifts to creating a cohesive ecosystem of interconnected products and projects.' },
  { year: '', title: 'Technology Solutions', description: 'Evolving into a broader provider of technology solutions, leveraging a multi-disciplinary skill set.' },
];

const OurStory = () => {
  return (
    <section className={styles.ourStory}>
      <SectionHeading 
        subtitle="Our Journey"
        title="From an Idea to a Growing Technology Ecosystem."
      />
      <div className={styles.timeline}>
        {timelineEvents.map((event, index) => (
          <motion.div 
            className={styles.timelineItem} 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className={styles.timelineContent}>
              {event.year && <span className={styles.year}>{event.year}</span>}
              <h3 className={styles.title}>{event.title}</h3>
              <p className={styles.description}>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurStory;
// src/components/sections/about/AboutHero.jsx

import { motion } from 'framer-motion';
import styles from './AboutHero.module.css';

const AboutHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>

        {/* =====================================================
            EYEBROW
            ===================================================== */}

        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ABOUT AV_eSAFE
        </motion.div>


        {/* =====================================================
            MAIN STORY HEADLINE
            ===================================================== */}

        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Built from curiosity.
          <span> Engineered with purpose.</span>
        </motion.h1>


        {/* =====================================================
            STORY INTRO
            ===================================================== */}

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Every technology journey starts with a question:
          <strong> What if we could build something better?</strong>
        </motion.p>


        {/* =====================================================
            FOUNDER STORY
            ===================================================== */}

        <motion.div
          className={styles.story}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >

          <p>
            For <strong>Abhinav Utkarsh</strong>, that question became
            a way of learning — by experimenting, building, testing,
            and continuously improving.
          </p>

          <p>
            Av_eSAFE was founded with a simple belief:
            <strong> knowledge becomes meaningful when it is turned
            into something that works.</strong>
          </p>

          <p>
            What began as a hands-on journey across software
            engineering, quality engineering, automation, and
            emerging AI technologies has evolved into a broader
            vision — building an ecosystem where ideas can move
            from experimentation to practical technology.
          </p>

          <p>
            Today, Av_eSAFE brings together
            <strong> software engineering, Quality Engineering,
            automation, Artificial Intelligence, Generative AI,
            and digital innovation</strong> to create products
            and solutions for an evolving digital world.
          </p>

        </motion.div>


        {/* =====================================================
            STORY MARKER
            ===================================================== */}

        <motion.div
          className={styles.storyMarker}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <span className={styles.markerLine}></span>

          <span className={styles.markerText}>
            THE JOURNEY CONTINUES
          </span>

          <span className={styles.markerLine}></span>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;
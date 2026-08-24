// src/pages/Hero.jsx

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import Button from '../components/common/Button';
import styles from './Hero.module.css';


/* =========================================================
   HERO SECTION
   ========================================================= */

const Hero = () => {
  const sectionRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });


  /* =========================================================
     MOUSE TRACKING
     ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleMouseMove = (event) => {
      const rect = section.getBoundingClientRect();

      mouse.current.x =
        ((event.clientX - rect.left) / rect.width) * 2 - 1;

      mouse.current.y =
        ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };

    const handleMouseLeave = () => {
      mouse.current.x = 0;
      mouse.current.y = 0;
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className={styles.hero}
    >

      {/* =====================================================
          HERO CONTENT
          3D SPHERE REMOVED
          ===================================================== */}

      <div className={styles.heroContent}>

        {/* EYEBROW */}
        <motion.div
          className={styles.eyebrow}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
            delay: 0.6,
          }}
        >
          AV_eSAFE TECHNOLOGY SOLUTIONS
        </motion.div>


        {/* TITLE */}
        <motion.h1
          className={styles.title}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        >
          Engineering Tomorrow's{' '}

          <span className={styles.highlight}>
            Digital World.
          </span>
        </motion.h1>


        {/* SUBTITLE */}
        <motion.p
          className={styles.subtitle}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeInOut',
          }}
        >
          Av_eSAFE Technology Solutions architects intelligent
          digital experiences, automation, and technology
          solutions that transform ideas into scalable products.
        </motion.p>


        {/* ===================================================
            CTA BUTTONS
            =================================================== */}

        <motion.div
          className={styles.ctaContainer}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: 'easeInOut',
          }}
        >

          {/* EXPLORE OUR SOLUTIONS */}

          <Link
            to="/services"
            className={styles.buttonLink}
          >
            <Button variant="primary">
              Explore Our Solutions

              <ArrowRight
                size={18}
                style={{
                  marginLeft: '8px',
                }}
              />
            </Button>
          </Link>


          {/* START A CONVERSATION */}

          <Link
            to="/contact"
            className={styles.buttonLink}
          >
            <Button variant="secondary">
              Start a Conversation
            </Button>
          </Link>

        </motion.div>
        
         {/* EYEBROW */}
        <motion.div
          className={styles.eyebrow}
          initial={{
            opacity: 0,
            y: 20,
            marginTop: '30px',
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
            delay: 0.6,
          }}
        >
          Turning Concepts into Clicks
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;
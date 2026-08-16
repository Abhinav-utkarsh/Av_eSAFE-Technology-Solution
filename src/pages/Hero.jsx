// src/pages/Hero.jsx

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { MathUtils } from 'three';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import Button from '../components/common/Button';
import styles from './Hero.module.css';


/* =========================================================
   CENTRAL INTERACTIVE 3D PARTICLE GLOBE
   ========================================================= */

const InteractiveSphere = ({ mouse }) => {
  const pointsRef = useRef(null);

  const positions = useMemo(() => {
    const count = 5500;
    const radius = 3.4;

    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      data[i * 3] =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      data[i * 3 + 1] =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      data[i * 3 + 2] =
        radius *
        Math.cos(phi);
    }

    return data;
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    /*
     * Continuous 3D rotation
     */
    pointsRef.current.rotation.y += delta * 0.12;

    /*
     * Mouse-controlled tilt
     */
    const targetX = mouse.current.y * 0.20;
    const targetZ = -mouse.current.x * 0.20;

    pointsRef.current.rotation.x = MathUtils.lerp(
      pointsRef.current.rotation.x,
      targetX,
      delta * 3
    );

    pointsRef.current.rotation.z = MathUtils.lerp(
      pointsRef.current.rotation.z,
      targetZ,
      delta * 3
    );
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#3672FF"
        size={0.006}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  );
};


/* =========================================================
   HERO SECTION
   ========================================================= */

const Hero = () => {
  const sectionRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });


  /*
   * Mouse tracking
   */
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

    section.addEventListener(
      'mousemove',
      handleMouseMove
    );

    section.addEventListener(
      'mouseleave',
      handleMouseLeave
    );

    return () => {
      section.removeEventListener(
        'mousemove',
        handleMouseMove
      );

      section.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className={styles.hero}
    >

      {/* =====================================================
          3D BACKGROUND
          DO NOT MODIFY
          ===================================================== */}

      <div className={styles.heroAnimation}>

        <Canvas
          camera={{
            position: [0, 0, 8],
            fov: 55,
          }}
          dpr={[1, 1.5]}
        >

          <InteractiveSphere mouse={mouse} />

        </Canvas>

      </div>


      {/* =====================================================
          HERO CONTENT
          ===================================================== */}

      <div className={styles.heroContent}>

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
            HERO CTA BUTTONS
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

          {/* -----------------------------------------------
              EXPLORE OUR SOLUTIONS
              Goes to Services
              ----------------------------------------------- */}

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


          {/* -----------------------------------------------
              START A CONVERSATION
              Goes to Contact
              ----------------------------------------------- */}

          <Link
            to="/contact"
            className={styles.buttonLink}
          >

            <Button variant="secondary">
              Start a Conversation
            </Button>

          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;
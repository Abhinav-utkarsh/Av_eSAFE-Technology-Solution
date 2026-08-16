// src/pages/FounderSection.jsx

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BrainCircuit,
  Code2,
  ShieldCheck,
} from 'lucide-react';

import SectionHeading from '../components/common/SectionHeading';
import styles from './FounderSection.module.css';

const FounderSection = () => {
  return (
    <motion.section
      className={styles.founderSection}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >

      {/* =====================================================
          SECTION HEADING
          ===================================================== */}

      <SectionHeading
        subtitle="The Founder"
        title="Built by an Engineer Who Believes in Learning by Building."
      />


      {/* =====================================================
          FOUNDER CONTENT
          ===================================================== */}

      <div className={styles.founderGrid}>

        {/* ===================================================
            PROFILE CARD
            =================================================== */}

        <motion.div
          className={styles.profileCard}
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className={styles.avatarWrapper}>

            <div className={styles.avatarGlow} />

            <img
              src="/images/abhinav-utkarsh.jpg"
              alt="Abhinav Utkarsh - Founder of Av_eSAFE"
              className={styles.avatar}
            />

          </div>


          <div className={styles.profileInfo}>

            <h3>
              Abhinav Utkarsh
            </h3>

            <p>
              Founder · Av_eSAFE Technology Solutions
            </p>

          </div>


          <div className={styles.profileTags}>

            <span>
              Software Engineering
            </span>

            <span>
              Quality Engineering
            </span>

            <span>
              AI & Automation
            </span>

          </div>

        </motion.div>


        {/* ===================================================
            FOUNDER BIO
            =================================================== */}

        <motion.div
          className={styles.founderContent}
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >

          <div className={styles.founderIntro}>

            <span>
              ENGINEER · BUILDER · LEARNER
            </span>

            <h3>
              Turning knowledge into
              <strong>
                {' '}things that work.
              </strong>
            </h3>

          </div>


          <p>
            Av_eSAFE was founded by <strong>Abhinav Utkarsh</strong>,
            a technology professional and builder with a strong
            interest in software engineering, quality engineering,
            automation, and Generative AI.
          </p>


          <p>
            His professional experience as a Quality Engineering /
            SDET professional has shaped Av_eSAFE's emphasis on
            reliability, automation, testing, and engineering
            quality. This perspective brings together innovation
            with practical engineering discipline.
          </p>


          <p>
            Alongside his professional work, Abhinav builds software,
            AI, and automation projects through the Av_eSAFE ecosystem,
            turning ideas and technical experimentation into practical
            digital products.
          </p>


          {/* =================================================
              FOCUS AREAS
              ================================================= */}

          <div className={styles.focusGrid}>

            <div className={styles.focusItem}>

              <div className={styles.focusIcon}>
                <Code2 size={20} />
              </div>

              <div>
                <h4>
                  Engineering
                </h4>

                <p>
                  Software & digital solutions
                </p>
              </div>

            </div>


            <div className={styles.focusItem}>

              <div className={styles.focusIcon}>
                <ShieldCheck size={20} />
              </div>

              <div>
                <h4>
                  Quality
                </h4>

                <p>
                  QE, testing & automation
                </p>
              </div>

            </div>


            <div className={styles.focusItem}>

              <div className={styles.focusIcon}>
                <BrainCircuit size={20} />
              </div>

              <div>
                <h4>
                  Intelligence
                </h4>

                <p>
                  AI & Generative AI
                </p>
              </div>

            </div>


            <div className={styles.focusItem}>

              <div className={styles.focusIcon}>
                <Award size={20} />
              </div>

              <div>
                <h4>
                  Continuous Learning
                </h4>

                <p>
                  Learn by building
                </p>
              </div>

            </div>

          </div>


          {/* =================================================
              CONTACT BUTTON
              ================================================= */}

          <a
            href="/contact"
            className={styles.profileButton}
          >
            Connect with Av_eSAFE
            <ArrowRight size={17} />
          </a>

        </motion.div>

      </div>


      {/* =====================================================
          FOUNDER QUOTE
          ===================================================== */}

      <motion.div
        className={styles.founderQuote}
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
      >

        <div className={styles.quoteMark}>
          "
        </div>

        <p>
          Learning becomes meaningful when it turns into something
          you can build, test, improve, and share with the world.
        </p>

        <span>
          — Abhinav Utkarsh
        </span>

      </motion.div>

    </motion.section>
  );
};

export default FounderSection;
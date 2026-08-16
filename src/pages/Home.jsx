// src/pages/Home.jsx

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

import { NavLink } from 'react-router-dom';

import PageContainer from '../components/common/PageContainer';

import Hero from './Hero';
import TrustStrip from './TrustStrip';
import ServicesOverview from './ServicesOverview';
import AboutSection from '../components/3d/AboutSection';

import styles from './Home.module.css';


/* =========================================================
   WHY AV_eSAFE
   ========================================================= */

const whyAvESafe = [
  {
    icon: <BrainCircuit size={24} />,
    title: 'AI & Intelligence',
    description:
      'We explore practical applications of AI and Generative AI to create smarter digital experiences and engineering workflows.',
  },
  {
    icon: <Workflow size={24} />,
    title: 'Automation',
    description:
      'We transform repetitive processes into connected, intelligent workflows that improve efficiency and consistency.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Quality Engineering',
    description:
      'Quality is engineered into the lifecycle through automation, validation, testing, and reliable engineering practices.',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Software Engineering',
    description:
      'We build modern digital solutions with maintainability, scalability, usability, and long-term evolution in mind.',
  },
];


/* =========================================================
   TECHNOLOGY AREAS
   ========================================================= */

const technologyAreas = [
  'Artificial Intelligence',
  'Generative AI',
  'Quality Engineering',
  'Test Automation',
  'Workflow Automation',
  'Software Engineering',
  'Cloud Technologies',
  'Digital Experiences',
];


/* =========================================================
   HOME
   ========================================================= */

const Home = () => {
  return (
    <main className={styles.homePage}>

      {/* =====================================================
          HERO
          DO NOT MODIFY HERO / 3D ANIMATION
          ===================================================== */}

      <Hero />


      {/* =====================================================
          TRUST STRIP
          ===================================================== */}

      <TrustStrip />


      <PageContainer>

        {/* ===================================================
            EXISTING 3D ABOUT
            =================================================== */}

        <AboutSection />


        {/* ===================================================
            WHY AV_eSAFE
            =================================================== */}

        <section className={styles.whySection}>

          <div className={styles.sectionHeading}>

            <span>WHY AV_eSAFE</span>

            <h2>
              Engineering with
              <strong> purpose.</strong>
            </h2>

            <p>
              We bring together engineering discipline, intelligent
              technology, automation, and quality to turn complex
              technology challenges into practical digital solutions.
            </p>

          </div>


          <div className={styles.whyGrid}>

            {whyAvESafe.map((item, index) => (

              <motion.article
                key={item.title}
                className={styles.whyCard}

                initial={{
                  opacity: 0,
                  y: 25,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.2,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <div className={styles.whyIcon}>
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </motion.article>

            ))}

          </div>

        </section>


        {/* ===================================================
            SERVICES OVERVIEW
            =================================================== */}

        <ServicesOverview />


        {/* ===================================================
            TECHNOLOGY LANDSCAPE
            =================================================== */}

        <section className={styles.technologySection}>

          <div className={styles.technologyContent}>

            <div className={styles.technologyHeader}>

              <span>
                OUR TECHNOLOGY LANDSCAPE
              </span>

              <h2>
                From emerging ideas
                <strong> to engineered solutions.</strong>
              </h2>

              <p>
                Our ecosystem connects modern software engineering
                with AI, automation, quality engineering, and cloud
                technologies to create solutions designed for the
                evolving digital world.
              </p>

            </div>


            <div className={styles.technologyTags}>

              {technologyAreas.map((technology) => (

                <span key={technology}>
                  <Sparkles size={14} />
                  {technology}
                </span>

              ))}

            </div>

          </div>

        </section>


        {/* ===================================================
            AV_eSAFE ECOSYSTEM + FOUNDER
            =================================================== */}

        <section className={styles.ecosystemSection}>

          <motion.div
            className={styles.ecosystemCard}

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.15,
            }}

            transition={{
              duration: 0.7,
            }}
          >

            {/* =================================================
                LEFT — FOUNDER ORBIT
                ================================================= */}

            <div className={styles.founderOrbitVisual}>

              <div className={styles.founderOrbitOuter} />

              <div className={styles.founderOrbitMiddle} />

              <div className={styles.founderOrbitInner} />


              <div className={styles.founderAvatarRing}>

                <img
                  src="/images/abhinav-utkarsh.jpg"
                  alt="Abhinav Utkarsh - Founder of Av_eSAFE Technology Solutions"
                  className={styles.founderAvatar}
                />

              </div>

            </div>


            {/* =================================================
                RIGHT — CONTENT
                ================================================= */}

            <div className={styles.ecosystemContent}>

              <span className={styles.ecosystemEyebrow}>
                THE AV_eSAFE ECOSYSTEM
              </span>


              <h2>
                One ecosystem.
                <strong>
                  Multiple possibilities.
                </strong>
              </h2>


              <p>
                Products, services, experimentation, and engineering
                come together to create a technology ecosystem that
                continuously learns, evolves, and builds what&apos;s next.
              </p>


              <p>
                Founded by <strong>Abhinav Utkarsh</strong>, Av_eSAFE
                brings together software engineering, quality engineering,
                automation, AI, and emerging technologies with a simple
                philosophy: turn knowledge into things that work.
              </p>


              {/* =================================================
                  HIGHLIGHTS
                  ================================================= */}

              <div className={styles.ecosystemHighlights}>

                <div>
                  <BrainCircuit size={17} />
                  <span>AI &amp; Innovation</span>
                </div>

                <div>
                  <Workflow size={17} />
                  <span>Automation</span>
                </div>

                <div>
                  <ShieldCheck size={17} />
                  <span>Quality Engineering</span>
                </div>

              </div>


              {/* =================================================
                  ACTIONS
                  ================================================= */}

              <div className={styles.ecosystemActions}>

                <NavLink
                  to="/ecosystem"
                  className={styles.outlineButton}
                >
                  Explore Our Ecosystem
                  <ArrowRight size={18} />
                </NavLink>


                <NavLink
                  to="/about"
                  className={styles.textButton}
                >
                  About Av_eSAFE
                  <ArrowRight size={17} />
                </NavLink>

              </div>

            </div>

          </motion.div>

        </section>


        {/* ===================================================
            FINAL CTA
            =================================================== */}

        <section className={styles.homeCta}>

          <div className={styles.ctaContent}>

            <span>
              ENGINEERING WHAT&apos;S NEXT
            </span>

            <h2>
              Have a technology
              <strong> challenge?</strong>
            </h2>

            <p>
              Whether you&apos;re building a new digital product,
              improving software quality, automating a workflow,
              or exploring AI, let&apos;s turn the idea into something
              practical.
            </p>


            <div className={styles.ctaActions}>

              <NavLink
                to="/contact"
                className={styles.primaryButton}
              >
                Start a Conversation
                <ArrowRight size={18} />
              </NavLink>


              <NavLink
                to="/products"
                className={styles.secondaryButton}
              >
                Explore Products
                <ArrowRight size={18} />
              </NavLink>

            </div>

          </div>

        </section>

      </PageContainer>

    </main>
  );
};


export default Home;
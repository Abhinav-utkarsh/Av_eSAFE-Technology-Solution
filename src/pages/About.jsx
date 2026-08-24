// src/pages/About.jsx

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Compass,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

import PageContainer from '../components/common/PageContainer';
import AboutHero from './AboutHero';
import OurStory from '../components/3d/OurStory';
import FounderSection from './FounderSection';

import styles from './About.module.css';


/* =========================================================
   CORE VALUES
   ========================================================= */

const values = [
  {
    icon: <Lightbulb size={24} />,
    title: 'Curiosity',
    description:
      'We continuously explore new technologies, ideas, and approaches to understand what is possible and where technology can create meaningful value.',
  },

  {
    icon: <ShieldCheck size={24} />,
    title: 'Quality',
    description:
      'We believe quality should be engineered into the product from the beginning rather than treated as a final checkpoint.',
  },

  {
    icon: <Workflow size={24} />,
    title: 'Automation',
    description:
      'We look for opportunities to eliminate repetitive work, connect systems, and make technology workflows more intelligent.',
  },

  {
    icon: <BrainCircuit size={24} />,
    title: 'Intelligence',
    description:
      'We explore practical applications of AI and Generative AI to make digital experiences and engineering processes smarter.',
  },
];


/* =========================================================
   ENGINEERING PRINCIPLES
   ========================================================= */

const principles = [
  {
    number: '01',
    title: 'Understand the problem',
    description:
      'Technology should start with a real problem, not simply with a technology trend.',
  },

  {
    number: '02',
    title: 'Engineer with purpose',
    description:
      'Every architecture, workflow, and automation decision should contribute to a measurable outcome.',
  },

  {
    number: '03',
    title: 'Build for evolution',
    description:
      'Products and solutions should be designed to grow, adapt, and improve as requirements change.',
  },

  {
    number: '04',
    title: 'Keep learning',
    description:
      'Technology never stands still. Continuous experimentation and learning are part of our engineering culture.',
  },
];


/* =========================================================
   ABOUT PAGE
   ========================================================= */

const About = () => {
  return (
    <main className={styles.aboutPage}>

      {/* =====================================================
          HERO
          ===================================================== */}

      <AboutHero />


      {/* =====================================================
          OUR STORY
          ===================================================== */}

      <section className={styles.storySection}>

        <PageContainer>

          <OurStory />

        </PageContainer>

      </section>


      {/* =====================================================
          WHO WE ARE
          ===================================================== */}

      <section className={styles.identitySection}>

        <PageContainer>

          <motion.div
            className={styles.identityGrid}

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
              duration: 0.6,
            }}
          >

            <div className={styles.identityLabel}>

              <span>
                WHO WE ARE
              </span>

              <div className={styles.identityLine} />

            </div>


            <div className={styles.identityContent}>

              <h2>
                A technology company
                <strong>
                  {' '}built around engineering.
                </strong>
              </h2>


              <p>
                Av_eSAFE Technology Solutions is focused on building
                intelligent digital experiences, software solutions,
                automation, and quality engineering capabilities.
              </p>


              <p>
                Our approach brings together software engineering,
                quality engineering, automation, cloud technologies,
                and artificial intelligence to transform ideas into
                practical digital products and solutions.
              </p>

            </div>

          </motion.div>

        </PageContainer>

      </section>


      {/* =====================================================
          VALUES
          ===================================================== */}

      <section className={styles.valuesSection}>

        <PageContainer>

          <div className={styles.sectionHeading}>

            <span>
              WHAT DRIVES US
            </span>


            <h2>
              Technology is only powerful
              <strong>
                {' '}when it creates value.
              </strong>
            </h2>


            <p>
              These principles influence how we think about products,
              engineering, collaboration, and innovation.
            </p>

          </div>


          <div className={styles.valuesGrid}>

            {values.map((value, index) => (

              <motion.article
                key={value.title}

                className={styles.valueCard}

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

                <div className={styles.valueIcon}>
                  {value.icon}
                </div>


                <h3>
                  {value.title}
                </h3>


                <p>
                  {value.description}
                </p>

              </motion.article>

            ))}

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          ENGINEERING PHILOSOPHY
          ===================================================== */}

      <section className={styles.philosophySection}>

        <PageContainer>

          <div className={styles.philosophyCard}>

            <div className={styles.philosophyVisual}>

              <div className={styles.philosophyCore}>
                <Code2 size={32} />
              </div>


              <div className={styles.philosophyOrbit} />

              <div
                className={`${styles.philosophyOrbit} ${styles.philosophyOrbitTwo}`}
              />


              <div
                className={`${styles.philosophyOrbit} ${styles.philosophyOrbitThree}`}
              />

            </div>


            <div className={styles.philosophyContent}>

              <span>
                OUR ENGINEERING PHILOSOPHY
              </span>


              <h2>
                Build today.
                <strong>
                  {' '}Think beyond tomorrow.
                </strong>
              </h2>


              <p>
                We believe good engineering balances innovation with
                reliability. Technology should be exciting, but it
                should also be understandable, maintainable, testable,
                and ready to evolve.
              </p>


              <div className={styles.philosophyPoints}>

                <div>
                  <Rocket size={18} />

                  <span>
                    Scalable by design
                  </span>
                </div>


                <div>
                  <ShieldCheck size={18} />

                  <span>
                    Quality engineered from the start
                  </span>
                </div>


                <div>
                  <BrainCircuit size={18} />

                  <span>
                    Intelligence where it matters
                  </span>
                </div>


                <div>
                  <Workflow size={18} />

                  <span>
                    Automation that creates value
                  </span>
                </div>

              </div>

            </div>

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          HOW WE THINK
          ===================================================== */}

      <section className={styles.principlesSection}>

        <PageContainer>

          <div className={styles.sectionHeading}>

            <span>
              HOW WE THINK
            </span>


            <h2>
              From idea
              <strong>
                {' '}to impact.
              </strong>
            </h2>


            <p>
              Our mindset is simple: understand deeply, engineer
              thoughtfully, and continuously improve.
            </p>

          </div>


          <div className={styles.principlesGrid}>

            {principles.map((principle, index) => (

              <motion.article
                key={principle.number}

                className={styles.principleCard}

                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -20 : 20,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
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

                <div className={styles.principleNumber}>
                  {principle.number}
                </div>


                <div>

                  <h3>
                    {principle.title}
                  </h3>


                  <p>
                    {principle.description}
                  </p>

                </div>

              </motion.article>

            ))}

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          FOUNDER
          ===================================================== */}

      <section className={styles.founderSection}>

        <FounderSection />

      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className={styles.aboutCta}>

        <PageContainer>

          <div className={styles.ctaInner}>

            <div>

              <span>
                BUILD WHAT'S NEXT
              </span>


              <h2>
                Have an idea worth
                <strong>
                  {' '}engineering?
                </strong>
              </h2>


              <p>
                Explore our services, discover our products, or start
                a conversation about your next technology challenge.
              </p>

            </div>


            <div className={styles.ctaActions}>

              <a
                href="/services"
                className={styles.secondaryButton}
              >

                Explore Services

                <ArrowRight size={18} />

              </a>

            </div>

          </div>

        </PageContainer>

      </section>

    </main>
  );
};


export default About;
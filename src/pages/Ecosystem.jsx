// src/pages/Ecosystem.jsx

import { motion } from 'framer-motion';
import {
  Boxes,
  BrainCircuit,
  Code2,
  FlaskConical,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  ArrowRight,
  ExternalLink,
  UserRound,
} from 'lucide-react';

import { NavLink } from 'react-router-dom';

import PageContainer from '../components/common/PageContainer';
import styles from './Ecosystem.module.css';


/* =========================================================
   ECOSYSTEM PILLARS
   ========================================================= */

const ecosystemPillars = [
  {
    icon: <Boxes size={28} />,
    number: '01',
    title: 'Intelligent Products',

    description:
      'We turn engineering ideas into focused digital products that combine software, AI, automation, and quality engineering to solve practical technology challenges.',

    capabilities: [
      'AI-powered platforms',
      'Automation products',
      'Quality engineering solutions',
    ],

    link: '/products',
    linkText: 'Explore Products',
  },

  {
    icon: <Code2 size={28} />,
    number: '02',
    title: 'Bespoke Solutions',

    description:
      'Every business has different technology challenges. We design and engineer tailored digital solutions around specific workflows, requirements, and strategic goals.',

    capabilities: [
      'Custom software engineering',
      'Digital experiences',
      'Automation & integration',
    ],

    link: '/services',
    linkText: 'Explore Solutions',
  },

  {
    icon: <FlaskConical size={28} />,
    number: '03',
    title: 'Innovation & Research',

    description:
      'Our ecosystem continuously explores emerging technologies, including Generative AI and intelligent automation, turning experimentation into practical possibilities.',

    capabilities: [
      'Generative AI exploration',
      'Emerging technology experiments',
      'Prototype & product innovation',
    ],

    link: '/about',
    linkText: 'Explore Innovation',
  },
];


/* =========================================================
   ECOSYSTEM ENGINE
   ========================================================= */

const ecosystemLayers = [
  {
    icon: <BrainCircuit size={24} />,
    title: 'Intelligence',

    description:
      'AI, Generative AI, data-driven thinking, and intelligent decision support.',
  },

  {
    icon: <Workflow size={24} />,
    title: 'Automation',

    description:
      'Connected workflows that reduce repetitive effort and improve operational efficiency.',
  },

  {
    icon: <ShieldCheck size={24} />,
    title: 'Quality',

    description:
      'Quality engineering and automation practices that build confidence into digital products.',
  },

  {
    icon: <Rocket size={24} />,
    title: 'Engineering',

    description:
      'Modern software engineering and cloud-ready architecture built for scalable digital products.',
  },
];


/* =========================================================
   ECOSYSTEM PAGE
   ========================================================= */

const Ecosystem = () => {
  return (
    <main className={styles.ecosystemPage}>

      {/* =====================================================
          HERO
          ===================================================== */}

      <motion.section
        className={styles.ecosystemHero}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >

        <PageContainer>

          <div className={styles.heroContent}>

            <div className={styles.heroEyebrow}>
              <Sparkles size={15} />
              AV_eSAFE TECHNOLOGY ECOSYSTEM
            </div>

            <h1>
              Where ideas become
              <span> intelligent technology.</span>
            </h1>

            <p>
              Av_eSAFE brings together software engineering, quality
              engineering, automation, AI, and continuous innovation
              to create a connected technology ecosystem.
            </p>

          </div>

        </PageContainer>

      </motion.section>


      {/* =====================================================
          FOUNDER + INTRO
          ===================================================== */}

      <section className={styles.introSection}>

        <PageContainer>

          <div className={styles.founderIntroGrid}>

            {/* =================================================
                FOUNDER CARD
                ================================================= */}

            <motion.div
              className={styles.founderCard}
              initial={{
                opacity: 0,
                x: -35,
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
                duration: 0.7,
              }}
            >

              <div className={styles.founderAvatarWrapper}>

                <div className={styles.founderGlow} />

                <img
                  src="/images/abhinav-utkarsh.jpg"
                  alt="Abhinav Utkarsh - Founder of Av_eSAFE Technology Solutions"
                  className={styles.founderAvatar}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                    event.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />

                {/* Fallback if image is missing */}
                <div className={styles.avatarFallback}>
                  <UserRound size={54} />
                </div>

              </div>


              <span className={styles.founderEyebrow}>
                THE FOUNDER
              </span>

              <h2>
                Abhinav Utkarsh
              </h2>

              <p className={styles.founderRole}>
                Founder · Av_eSAFE Technology Solutions
              </p>

              <p className={styles.founderShortBio}>
                Technology professional, engineer, and builder
                focused on software engineering, quality engineering,
                automation, and Generative AI.
              </p>

              <div className={styles.founderTags}>

                <span>Software Engineering</span>

                <span>Quality Engineering</span>

                <span>AI & Automation</span>

              </div>


              <a
                href="https://abhinavutkarsh.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.founderProfileLink}
              >
                View Founder Profile
                <ExternalLink size={15} />
              </a>

            </motion.div>


            {/* =================================================
                INTRO CONTENT
                ================================================= */}

            <motion.div
              className={styles.introContent}
              initial={{
                opacity: 0,
                x: 35,
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
                duration: 0.7,
              }}
            >

              <div className={styles.introLabel}>

                <span>
                  THE AV_eSAFE APPROACH
                </span>

                <div className={styles.introLine} />

              </div>


              <h2>
                Engineering is more than
                <strong> building software.</strong>
              </h2>


              <p>
                Av_eSAFE was founded by Abhinav Utkarsh with a
                simple belief: technology becomes meaningful when
                knowledge is turned into something useful.
              </p>

              <p>
                The ecosystem brings together software engineering,
                quality engineering, automation, artificial intelligence,
                cloud technologies, and continuous experimentation.
              </p>

              <p>
                From learning and technical experimentation to
                products and real-world solutions, Av_eSAFE is designed
                as a continuous journey of building, testing,
                improving, and evolving.
              </p>


              <div className={styles.founderQuote}>
                <span className={styles.quoteMark}>
                  “
                </span>

                <p>
                  Turning knowledge into things that work.
                </p>

                <span className={styles.quoteAuthor}>
                  — Av_eSAFE philosophy
                </span>
              </div>


              <div className={styles.introActions}>

                <NavLink
                  to="/about"
                  className={styles.outlineButton}
                >
                  About Av_eSAFE
                  <ArrowRight size={17} />
                </NavLink>

                <NavLink
                  to="/contact"
                  className={styles.textButton}
                >
                  Work with us
                  <ArrowRight size={17} />
                </NavLink>

              </div>

            </motion.div>

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          THREE PILLARS
          ===================================================== */}

      <section className={styles.pillarsSection}>

        <PageContainer>

          <div className={styles.sectionHeading}>

            <span>
              OUR THREE PILLARS
            </span>

            <h2>
              One ecosystem.
              <strong> Multiple possibilities.</strong>
            </h2>

            <p>
              The Av_eSAFE ecosystem is built around three connected
              areas that allow us to move from an idea to an engineered
              solution and continuously improve it.
            </p>

          </div>


          <div className={styles.pillarsGrid}>

            {ecosystemPillars.map((pillar, index) => (

              <motion.article
                key={pillar.title}
                className={styles.pillarCard}

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
                  amount: 0.2,
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >

                <div className={styles.pillarTop}>

                  <div className={styles.pillarIcon}>
                    {pillar.icon}
                  </div>

                  <span className={styles.pillarNumber}>
                    {pillar.number}
                  </span>

                </div>


                <span className={styles.pillarLabel}>
                  ECOSYSTEM PILLAR
                </span>


                <h3>
                  {pillar.title}
                </h3>


                <p className={styles.pillarDescription}>
                  {pillar.description}
                </p>


                <div className={styles.capabilities}>

                  {pillar.capabilities.map((capability) => (

                    <div
                      key={capability}
                      className={styles.capability}
                    >

                      <span />

                      {capability}

                    </div>

                  ))}

                </div>


                <NavLink
                  to={pillar.link}
                  className={styles.pillarFooter}
                  aria-label={pillar.linkText}
                >

                  <span>
                    {pillar.linkText}
                  </span>

                  <ArrowRight size={17} />

                </NavLink>

              </motion.article>

            ))}

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          ECOSYSTEM ENGINE
          ===================================================== */}

      <section className={styles.engineSection}>

        <PageContainer>

          <div className={styles.engineHeader}>

            <span>
              THE ENGINE BEHIND THE ECOSYSTEM
            </span>

            <h2>
              Intelligence.
              <strong>
                {' '}Automation. Quality. Engineering.
              </strong>
            </h2>

            <p>
              Different disciplines come together to create a
              continuous technology development cycle.
            </p>

          </div>


          <div className={styles.engineGrid}>

            {ecosystemLayers.map((layer, index) => (

              <motion.div
                key={layer.title}
                className={styles.engineCard}

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
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <div className={styles.engineIcon}>
                  {layer.icon}
                </div>

                <div>

                  <h3>
                    {layer.title}
                  </h3>

                  <p>
                    {layer.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          CONTINUOUS INNOVATION
          ===================================================== */}

      <section className={styles.innovationSection}>

        <PageContainer>

          <div className={styles.innovationCard}>

            <div className={styles.innovationVisual}>

              <div
                className={`${styles.orbit} ${styles.orbitOne}`}
              />

              <div
                className={`${styles.orbit} ${styles.orbitTwo}`}
              />

              <div
                className={`${styles.orbit} ${styles.orbitThree}`}
              />

              <div className={styles.innovationCore}>
                <Sparkles size={30} />
              </div>

            </div>


            <div className={styles.innovationContent}>

              <span>
                CONTINUOUS INNOVATION
              </span>

              <h2>
                Build.
                <strong>
                  {' '}Learn. Improve. Repeat.
                </strong>
              </h2>

              <p>
                Our ecosystem is designed to keep evolving. Ideas
                become experiments, experiments become products,
                and products create new opportunities to learn and
                engineer what comes next.
              </p>


              <div className={styles.innovationPoints}>

                <div>
                  <Layers3 size={18} />

                  <span>
                    Experimentation
                  </span>
                </div>


                <div>
                  <BrainCircuit size={18} />

                  <span>
                    AI & Emerging Technology
                  </span>
                </div>


                <div>
                  <Rocket size={18} />

                  <span>
                    Product Innovation
                  </span>
                </div>

              </div>

            </div>

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className={styles.ecosystemCta}>

        <PageContainer>

          <div className={styles.ctaInner}>

            <div>

              <span>
                ENGINEER WHAT'S NEXT
              </span>

              <h2>
                Let's build something
                <strong> meaningful.</strong>
              </h2>

              <p>
                Have a technology challenge, product idea, or
                opportunity to automate? Let's explore where it
                can go.
              </p>

            </div>


            <NavLink
              to="/contact"
              className={styles.ctaButton}
            >

              Start a Conversation

              <ArrowRight size={18} />

            </NavLink>

          </div>

        </PageContainer>

      </section>

    </main>
  );
};


export default Ecosystem;
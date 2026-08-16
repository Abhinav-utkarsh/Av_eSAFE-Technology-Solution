// src/pages/Services.jsx

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

import PageContainer from '../components/common/PageContainer';
import ServicesHero from '../data/ServicesHero';
import ServiceDetailCard from '../data/ServiceDetailCard';
import { serviceDetailsData } from '../data/serviceDetails.jsx';

import styles from './Services.module.css';


/* =========================================================
   DELIVERY APPROACH
   ========================================================= */

const deliverySteps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We begin by understanding the business problem, user needs, existing systems, constraints, and desired outcomes.',
    icon: <BrainCircuit size={24} />,
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We translate requirements into a practical technology approach covering architecture, workflows, automation, quality, and user experience.',
    icon: <Layers3 size={24} />,
  },
  {
    number: '03',
    title: 'Engineer',
    description:
      'We build, integrate, automate, and validate the solution using modern software and quality engineering practices.',
    icon: <Code2 size={24} />,
  },
  {
    number: '04',
    title: 'Evolve',
    description:
      'We continuously improve the solution through feedback, testing, optimization, monitoring, and emerging technology.',
    icon: <Rocket size={24} />,
  },
];


/* =========================================================
   CORE CAPABILITIES
   ========================================================= */

const capabilities = [
  {
    icon: <BrainCircuit size={22} />,
    title: 'AI & Generative AI',
    description:
      'Practical AI solutions, LLM-powered experiences, prompt engineering, intelligent workflows, and AI-assisted productivity.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Quality Engineering',
    description:
      'Functional testing, automation, regression, API validation, quality strategy, and engineering practices built around reliability.',
  },
  {
    icon: <Workflow size={22} />,
    title: 'Automation',
    description:
      'Workflow automation and system integration designed to reduce repetitive work and improve operational efficiency.',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Software Engineering',
    description:
      'Modern web applications, scalable software architectures, APIs, integrations, and digital experiences.',
  },
];


/* =========================================================
   SERVICES PAGE
   ========================================================= */

const Services = () => {
  return (
    <main className={styles.servicesPage}>

      {/* =====================================================
          HERO
          ===================================================== */}

      <ServicesHero />


      {/* =====================================================
          INTRODUCTION
          ===================================================== */}

      <section className={styles.introSection}>

        <PageContainer>

          <motion.div
            className={styles.introGrid}
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

            <div className={styles.introLabel}>

              <span>
                WHAT WE DO
              </span>

              <div className={styles.introLine} />

            </div>


            <div className={styles.introContent}>

              <h2>
                Technology solutions
                <strong>
                  {' '}engineered around your goals.
                </strong>
              </h2>

              <p>
                Av_eSAFE Technology Solutions combines software
                engineering, quality engineering, automation, and
                artificial intelligence to help transform ideas and
                technology challenges into practical digital solutions.
              </p>

              <p>
                Whether you need to modernize an application, automate
                a workflow, improve software quality, or explore an
                AI-powered solution, we focus on engineering outcomes
                that are scalable, maintainable, and useful in the real
                world.
              </p>

            </div>

          </motion.div>

        </PageContainer>

      </section>


      {/* =====================================================
          EXISTING SERVICES
          ===================================================== */}

      <section className={styles.servicesSection}>

        <PageContainer>

          <div className={styles.sectionHeading}>

            <span>
              OUR SERVICES
            </span>

            <h2>
              From engineering challenges
              <strong>
                {' '}to digital possibilities.
              </strong>
            </h2>

            <p>
              Explore the capabilities we bring together to design,
              build, test, automate, and continuously improve modern
              technology solutions.
            </p>

          </div>


          <div className={styles.serviceDetails}>

            {serviceDetailsData.map((service, index) => (
              <ServiceDetailCard
                key={index}
                service={service}
                index={index}
              />
            ))}

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          CORE CAPABILITIES
          ===================================================== */}

      <section className={styles.capabilitiesSection}>

        <PageContainer>

          <div className={styles.sectionHeading}>

            <span>
              OUR ENGINEERING CAPABILITIES
            </span>

            <h2>
              Different disciplines.
              <strong>
                {' '}One engineering mindset.
              </strong>
            </h2>

            <p>
              Our capabilities are designed to work together rather
              than exist as isolated services.
            </p>

          </div>


          <div className={styles.capabilitiesGrid}>

            {capabilities.map((capability, index) => (

              <motion.article
                key={capability.title}
                className={styles.capabilityCard}
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

                <div className={styles.capabilityIcon}>
                  {capability.icon}
                </div>


                <h3>
                  {capability.title}
                </h3>


                <p>
                  {capability.description}
                </p>


                <CheckCircle2
                  size={18}
                  className={styles.capabilityCheck}
                />

              </motion.article>

            ))}

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          DELIVERY PROCESS
          ===================================================== */}

      <section className={styles.processSection}>

        <PageContainer>

          <div className={styles.processHeader}>

            <span>
              HOW WE WORK
            </span>

            <h2>
              From first conversation
              <strong>
                {' '}to continuous improvement.
              </strong>
            </h2>

            <p>
              A simple, transparent engineering approach that keeps
              technology aligned with the problem it is meant to solve.
            </p>

          </div>


          <div className={styles.processGrid}>

            {deliverySteps.map((step, index) => (

              <motion.article
                key={step.number}
                className={styles.processCard}
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

                <div className={styles.processTop}>

                  <div className={styles.processIcon}>
                    {step.icon}
                  </div>

                  <span>
                    {step.number}
                  </span>

                </div>


                <h3>
                  {step.title}
                </h3>


                <p>
                  {step.description}
                </p>

              </motion.article>

            ))}

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          ENGINEERING PRINCIPLES
          ===================================================== */}

      <section className={styles.principlesSection}>

        <PageContainer>

          <div className={styles.principlesCard}>

            <div className={styles.principlesVisual}>

              <div className={styles.principleOrb}>
                <Sparkles size={32} />
              </div>

              <div className={styles.principleRing} />

              <div
                className={`${styles.principleRing} ${styles.principleRingTwo}`}
              />

            </div>


            <div className={styles.principlesContent}>

              <span>
                OUR ENGINEERING MINDSET
              </span>

              <h2>
                Build for today.
                <strong>
                  {' '}Engineer for tomorrow.
                </strong>
              </h2>

              <p>
                We don't believe technology should simply work at
                launch. It should be understandable, maintainable,
                testable, scalable, and ready to evolve as the
                business grows.
              </p>


              <div className={styles.principleList}>

                <div>
                  <CheckCircle2 size={18} />

                  <span>
                    Quality built into the development lifecycle
                  </span>
                </div>


                <div>
                  <CheckCircle2 size={18} />

                  <span>
                    Automation wherever it creates real value
                  </span>
                </div>


                <div>
                  <CheckCircle2 size={18} />

                  <span>
                    AI applied where it solves a meaningful problem
                  </span>
                </div>


                <div>
                  <CheckCircle2 size={18} />

                  <span>
                    Scalable and maintainable engineering practices
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

      <section className={styles.servicesCta}>

        <PageContainer>

          <div className={styles.ctaInner}>

            <div>

              <span>
                HAVE A TECHNOLOGY CHALLENGE?
              </span>

              <h2>
                Let's engineer
                <strong>
                  {' '}what's next.
                </strong>
              </h2>

              <p>
                Tell us what you're trying to build, improve, test,
                or automate. We'll explore the problem with you and
                identify a practical path forward.
              </p>

            </div>


            <a
              href="/contact"
              className={styles.ctaButton}
              aria-label="Start a conversation with Av_eSAFE"
            >

              Start a Conversation

              <ArrowRight size={18} />

            </a>

          </div>

        </PageContainer>

      </section>

    </main>
  );
};


export default Services;
// src/pages/Products.jsx

import { motion } from 'framer-motion';
import {
  Cpu,
  Bot,
  CloudCog,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Workflow,
  BrainCircuit,
} from 'lucide-react';

import PageContainer from '../components/common/PageContainer';
import styles from './Products.module.css';


/* =========================================================
   PRODUCTS
   ========================================================= */

const products = [
  {
    icon: <Cpu size={30} />,
    name: 'NexusQA',
    category: 'Quality Engineering',

    tagline:
      'Intelligent Quality Engineering for modern software teams.',

    description:
      'An AI-powered quality engineering platform concept designed to help teams accelerate test creation, execution, maintenance, and release validation while reducing repetitive manual effort.',

    capabilities: [
      'AI-assisted test generation',
      'Automation-first testing workflows',
      'Regression and release validation',
    ],

    link: '/services',
  },

  {
    icon: <Bot size={30} />,
    name: 'Synapse Automate',
    category: 'AI & Automation',

    tagline:
      'Connect systems. Automate workflows. Work smarter.',

    description:
      'An intelligent workflow automation platform concept focused on connecting business processes, applications, and services through AI-assisted automation logic.',

    capabilities: [
      'Intelligent workflow orchestration',
      'Cross-system process automation',
      'AI-assisted decision workflows',
    ],

    link: '/services',
  },

  {
    icon: <CloudCog size={30} />,
    name: 'Aether Deploy',
    category: 'Software & Cloud',

    tagline:
      'Build and deliver resilient digital applications.',

    description:
      'A cloud-native engineering framework concept focused on simplifying application development, deployment, and scalable service architectures for modern digital products.',

    capabilities: [
      'Cloud-native application architecture',
      'Scalable service deployment',
      'Modern microservice foundations',
    ],

    link: '/services',
  },
];


/* =========================================================
   PRODUCT PRINCIPLES
   ========================================================= */

const productPrinciples = [
  {
    icon: <BrainCircuit size={24} />,

    title: 'AI-First Thinking',

    description:
      'We explore practical applications of AI and intelligent automation to make engineering workflows faster, smarter, and more adaptive.',
  },

  {
    icon: <Workflow size={24} />,

    title: 'Automation by Design',

    description:
      'Our products focus on reducing repetitive work and creating connected workflows that help teams move from manual processes to intelligent systems.',
  },

  {
    icon: <ShieldCheck size={24} />,

    title: 'Engineering with Quality',

    description:
      'Reliability, maintainability, scalability, and quality engineering remain central to how we approach digital product development.',
  },
];


/* =========================================================
   PRODUCTS PAGE
   ========================================================= */

const Products = () => {
  return (
    <main className={styles.productsPage}>

      {/* =====================================================
          PAGE HERO
          ===================================================== */}

      <motion.section
        className={styles.productsHero}

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

              AV_eSAFE PRODUCT ECOSYSTEM
            </div>


            <h1>
              Products built for the
              <span> digital future.</span>
            </h1>


            <p>
              We transform engineering ideas into intelligent digital
              products that help teams build, automate, test, and
              scale with confidence.
            </p>

          </div>

        </PageContainer>

      </motion.section>


      {/* =====================================================
          PRODUCTS
          ===================================================== */}

      <section className={styles.productsSection}>

        <PageContainer>

          <div className={styles.sectionHeading}>

            <span>
              OUR PRODUCTS
            </span>


            <h2>
              Engineering ideas into
              <strong> usable technology.</strong>
            </h2>


            <p>
              Our product direction combines software engineering,
              quality engineering, automation, AI, and cloud
              technologies to solve practical digital challenges.
            </p>

          </div>


          <div className={styles.productsGrid}>

            {products.map((product, index) => (

              <motion.article
                key={product.name}

                className={styles.productCard}

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

                {/* Card Top */}

                <div className={styles.cardTop}>

                  <div className={styles.cardIcon}>
                    {product.icon}
                  </div>


                  <span className={styles.cardNumber}>
                    0{index + 1}
                  </span>

                </div>


                {/* Category */}

                <div className={styles.cardCategory}>
                  {product.category}
                </div>


                {/* Product Name */}

                <h3>
                  {product.name}
                </h3>


                {/* Tagline */}

                <h4>
                  {product.tagline}
                </h4>


                {/* Description */}

                <p className={styles.cardDescription}>
                  {product.description}
                </p>


                {/* Capabilities */}

                <div className={styles.capabilities}>

                  {product.capabilities.map(
                    (capability) => (

                      <div
                        key={capability}
                        className={styles.capability}
                      >

                        <span />

                        {capability}

                      </div>

                    )
                  )}

                </div>


                {/* Working Link */}

                <a
                  href={product.link}
                  className={styles.cardFooter}

                  aria-label={`Explore ${product.name} solutions`}
                >

                  <span>
                    Explore product direction
                  </span>


                  <ArrowRight size={18} />

                </a>

              </motion.article>

            ))}

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          PRODUCT PHILOSOPHY
          ===================================================== */}

      <section className={styles.philosophySection}>

        <PageContainer>

          <div className={styles.philosophyGrid}>

            <div className={styles.philosophyIntro}>

              <span>
                OUR PRODUCT PHILOSOPHY
              </span>


              <h2>
                Technology should
                <strong>
                  simplify complexity.
                </strong>
              </h2>


              <p>
                At Av_eSAFE, we are interested in technology that
                creates measurable value. Our product thinking
                combines engineering discipline with AI,
                automation, and modern digital architecture.
              </p>

            </div>


            <div className={styles.principles}>

              {productPrinciples.map(
                (principle, index) => (

                  <motion.div
                    key={principle.title}

                    className={styles.principle}

                    initial={{
                      opacity: 0,
                      x: 20,
                    }}

                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}

                    viewport={{
                      once: true,
                    }}

                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >

                    <div className={styles.principleIcon}>
                      {principle.icon}
                    </div>


                    <div>

                      <h3>
                        {principle.title}
                      </h3>


                      <p>
                        {principle.description}
                      </p>

                    </div>

                  </motion.div>

                )
              )}

            </div>

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className={styles.productCta}>

        <PageContainer>

          <div className={styles.ctaInner}>

            <div>

              <span>
                BUILD THE NEXT POSSIBILITY
              </span>


              <h2>
                Have an idea worth
                <strong>
                  engineering?
                </strong>
              </h2>


              <p>
                Let's turn your technology challenge or product
                idea into something practical, scalable, and ready
                for the real world.
              </p>

            </div>


            {/* Working Contact Link */}

            

          </div>

        </PageContainer>

      </section>

    </main>
  );
};


export default Products;
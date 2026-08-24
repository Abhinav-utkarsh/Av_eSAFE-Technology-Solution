// src/components/layout/Footer.jsx

import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import { Orbit } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>

      {/* =====================================================
          CTA
          ===================================================== */}

      <div className={styles.ctaSection}>
        <div className={styles.container}>

          <div className={styles.ctaContent}>

            <div>
              <span className={styles.eyebrow}>
                BUILD WHAT'S NEXT
              </span>

              <h2>
                Have an idea worth
                <span> engineering?</span>
              </h2>

              <p>
                From software engineering and quality engineering
                to AI, automation, and digital solutions, let's
                turn your idea into something practical and scalable.
              </p>
            </div>

            <NavLink
              to="/contact"
              className={styles.ctaButton}
            >
              Start a Conversation
              <span className={styles.arrow}>→</span>
            </NavLink>

          </div>

        </div>
      </div>


      {/* =====================================================
          MAIN FOOTER
          ===================================================== */}

      <div className={styles.container}>

        <div className={styles.grid}>

          {/* =================================================
              BRAND
              ================================================= */}

          <div className={styles.about}>

            <NavLink
              to="/"
              className={styles.footerLogo}
            >

              {/* Logo icon covers both text lines */}

              <div className={styles.footerLogoIcon}>
                <Orbit
                  size={34}
                  strokeWidth={1.5}
                />
              </div>


              {/* Two-line brand text */}

              <div className={styles.footerLogoText}>

                <span className={styles.footerLogoMain}>
                  Av_eSAFE Technology Solutions
                </span>

                <span className={styles.footerLogoTagline}>
                  Turning concepts into clicks
                </span>

              </div>

            </NavLink>


            <p>
              Av_eSAFE Technology Solutions architects intelligent
              digital experiences, automation, and technology
              solutions that transform ideas into scalable products.
            </p>


            <p className={styles.brandStatement}>
              Engineering tomorrow's digital world.
            </p>

          </div>


          {/* =================================================
              SOLUTIONS
              ================================================= */}

          <div className={styles.links}>

            <h4>
              Solutions
            </h4>

            <ul>

              <li>
                <NavLink to="/services">
                  Software Engineering
                </NavLink>
              </li>

              <li>
                <NavLink to="/services">
                  Quality Engineering
                </NavLink>
              </li>

              <li>
                <NavLink to="/services">
                  Test Automation
                </NavLink>
              </li>

              <li>
                <NavLink to="/services">
                  AI &amp; Generative AI
                </NavLink>
              </li>

              <li>
                <NavLink to="/services">
                  Workflow Automation
                </NavLink>
              </li>

              <li>
                <NavLink to="/services">
                  Cloud Engineering
                </NavLink>
              </li>

            </ul>

          </div>


          {/* =================================================
              AV_eSAFE ECOSYSTEM
              ================================================= */}

          <div className={styles.links}>

            <h4>
              Av_eSAFE Ecosystem
            </h4>

            <ul>

              <li>
                <NavLink to="/products">
                  NexusQA
                </NavLink>
              </li>

              <li>
                <NavLink to="/products">
                  Synapse Automate
                </NavLink>
              </li>

              <li>
                <NavLink to="/products">
                  Aether Deploy
                </NavLink>
              </li>

              <li>
                <a
                  href="https://avesafegurukul.wuaze.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Av_eSAFE Gurukul ↗
                </a>
              </li>

              <li>
                <a
                  href="https://avesafechronoscope.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CHRONOSCOPE ↗
                </a>
              </li>

            </ul>

          </div>


          {/* =================================================
              CONNECT
              ================================================= */}

          <div className={styles.links}>

            <h4>
              Connect
            </h4>

            <ul>

              <li>
                <a href="mailto:contact@avesafe.com">
                  Email Us
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Abhinav-utkarsh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Abhinav-utkarsh/av-esafe-ai-agentic-task-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AI Agentic Task Manager ↗
                </a>
              </li>

              <li>
                <a
                  href="https://abhinavutkarsh.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Founder Portfolio ↗
                </a>
              </li>

              <li>
                <NavLink to="/contact">
                  Contact Av_eSAFE
                </NavLink>
              </li>

            </ul>

          </div>

        </div>


        {/* =====================================================
            BOTTOM BAR
            ===================================================== */}

        <div className={styles.bottomBar}>

          <p>
            © {currentYear} Av_eSAFE Technology Solutions.
            All Rights Reserved.
          </p>

          <p className={styles.tagline}>
            Engineering <span>what's next.</span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
// src/components/layout/Navbar.jsx

import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/navigation';
import styles from './Navbar.module.css';
import { Menu, X, Orbit } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from '../common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.scrolled : ''
      }`}
      id="main-header"
    >
      <div className={styles.container}>

        {/* =====================================================
            AV_eSAFE BRAND
            ===================================================== */}

        <NavLink to="/" className={styles.logo}>

          <div className={styles.logoText}>

            <span className={styles.logoMain}>
              Av_eSAFE
            </span>

            <span className={styles.logoCompany}>
              Technology Solutions
            </span>

            <span className={styles.logoTagline}>
              Turning concepts into clicks
            </span>

          </div>


          {/* Brand / Ecosystem Icon */}

          <div className={styles.logoIcon}>
            <Orbit
              size={29}
              strokeWidth={1.6}
            />
          </div>

        </NavLink>


        {/* =====================================================
            NAVIGATION
            ===================================================== */}

        <nav
          className={`${styles.nav} ${
            isOpen ? styles.navOpen : ''
          }`}
        >

          {navLinks.map((link) => (

            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.active}`
                  : styles.navLink
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>

          ))}

        </nav>


        {/* =====================================================
            ACTIONS
            ===================================================== */}

        <div className={styles.actions}>

          <NavLink
            to="/contact"
            className={styles.desktopCtaLink}
          >
            <Button className={styles.desktopCta}>
              Let's Talk
            </Button>
          </NavLink>


          {/* Mobile Menu */}

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={
              isOpen
                ? 'Close navigation'
                : 'Open navigation'
            }
            aria-expanded={isOpen}
          >

            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}

          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;
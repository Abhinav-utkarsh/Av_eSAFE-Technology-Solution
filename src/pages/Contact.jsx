// src/pages/Contact.jsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';

import PageContainer from '../components/common/PageContainer';
import styles from './Contact.module.css';


const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus('loading');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus('error');
      setMessage(
        'Contact form is not configured yet. Please add the Web3Forms access key.'
      );
      return;
    }

    formData.append('access_key', accessKey);

    /*
     * Web3Forms configuration
     */
    formData.append(
      'subject',
      'New Av_eSAFE Website Enquiry'
    );

    formData.append(
      'from_name',
      'Av_eSAFE Website'
    );

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setMessage(
          'Thank you! Your message has been sent successfully. Our team will get back to you soon.'
        );

        form.reset();
      } else {
        setStatus('error');
        setMessage(
          result.message ||
            'Something went wrong while sending your message.'
        );
      }
    } catch (error) {
      console.error('Contact form error:', error);

      setStatus('error');
      setMessage(
        'Unable to send your message right now. Please try again or email us directly.'
      );
    }
  };


  return (
    <main className={styles.contactPage}>

      {/* =====================================================
          HERO
          ===================================================== */}

      <motion.section
        className={styles.contactHero}
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
              Let’s Create Something Intelligent
            </div>

            <h1>
              Start a
              <span> conversation.</span>
            </h1>

            <p>
              Have a technology challenge, product idea, automation
              opportunity, or simply want to explore what's possible?
              We'd love to hear from you.
            </p>

          </div>

        </PageContainer>

      </motion.section>


      {/* =====================================================
          CONTACT AREA
          ===================================================== */}

      <section className={styles.contactSection}>

        <PageContainer>

          <div className={styles.contactGrid}>

            {/* =================================================
                FORM
                ================================================= */}

            <motion.div
              className={styles.formCard}
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
            >

              <div className={styles.formHeader}>

                <div className={styles.formIcon}>
                  <MessageSquare size={22} />
                </div>

                <div>
                  <span>CONTACT US</span>

                  <h2>
                    Tell us about your idea.
                  </h2>
                </div>

              </div>


              <p className={styles.formIntro}>
                Fill in the details below and our team will review
                your enquiry and get back to you.
              </p>


              <form
                onSubmit={handleSubmit}
                className={styles.contactForm}
              >

                {/* Honeypot spam protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className={styles.hiddenField}
                  tabIndex="-1"
                  autoComplete="off"
                />


                <div className={styles.formRow}>

                  <div className={styles.formGroup}>

                    <label htmlFor="name">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />

                  </div>


                  <div className={styles.formGroup}>

                    <label htmlFor="email">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                    />

                  </div>

                </div>


                <div className={styles.formRow}>

                  <div className={styles.formGroup}>

                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                    />

                  </div>


                  <div className={styles.formGroup}>

                    <label htmlFor="company">
                      Company
                    </label>

                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your company"
                    />

                  </div>

                </div>


                <div className={styles.formGroup}>

                  <label htmlFor="enquiry">
                    What can we help with? *
                  </label>

                  <select
                    id="enquiry"
                    name="enquiry"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>

                    <option value="Software Development">
                      Software Development
                    </option>

                    <option value="AI & Generative AI">
                      AI & Generative AI
                    </option>

                    <option value="Automation">
                      Automation
                    </option>

                    <option value="Quality Engineering">
                      Quality Engineering
                    </option>

                    <option value="Product Development">
                      Product Development
                    </option>

                    <option value="Technology Consulting">
                      Technology Consulting
                    </option>

                    <option value="Partnership">
                      Partnership
                    </option>

                    <option value="General Enquiry">
                      General Enquiry
                    </option>

                  </select>

                </div>


                <div className={styles.formGroup}>

                  <label htmlFor="message">
                    Your Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us about your requirement, challenge, or idea..."
                    required
                  />

                </div>


                {status !== 'idle' && (
                  <div
                    className={
                      status === 'success'
                        ? styles.successMessage
                        : styles.errorMessage
                    }
                  >

                    {status === 'success' ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      <MessageSquare size={20} />
                    )}

                    <span>{message}</span>

                  </div>
                )}


                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={status === 'loading'}
                >

                  {status === 'loading' ? (
                    <>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={17} />
                    </>
                  )}

                </button>


                <p className={styles.formNote}>
                  By submitting this form, you agree to be contacted
                  regarding your enquiry.
                </p>

              </form>

            </motion.div>


            {/* =================================================
                CONTACT INFORMATION
                ================================================= */}

            <motion.aside
              className={styles.contactInfo}
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
            >

              <span className={styles.infoEyebrow}>
                CONTACT DETAILS
              </span>

              <h2>
                Let's start with
                <strong> a conversation.</strong>
              </h2>

              <p>
                Whether you're exploring a new digital product,
                looking to automate a workflow, or need engineering
                support, we're open to discussing the possibilities.
              </p>


              {/* Email */}

              <a
                href="mailto:avesafe.solutions@gmail.com"
                className={styles.infoItem}
              >

                <div className={styles.infoIcon}>
                  <Mail size={19} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    avesafe.solutions@gmail.com
                  </strong>
                </div>

              </a>


              {/* Phone */}

              <div className={styles.infoItem}>

                <div className={styles.infoIcon}>
                  <Phone size={19} />
                </div>

                <div>
                  <span>Response</span>
                  <strong>
                    We'll get back to you soon
                  </strong>
                </div>

              </div>


              {/* Availability */}

              <div className={styles.infoItem}>

                <div className={styles.infoIcon}>
                  <Clock3 size={19} />
                </div>

                <div>
                  <span>Availability</span>
                  <strong>
                    Monday – Friday
                  </strong>
                </div>

              </div>


              <div className={styles.infoDivider} />


              <div className={styles.quickContact}>

                <div className={styles.quickIcon}>
                  <ArrowRight size={18} />
                </div>

                <div>

                  <h3>
                    Not sure where to start?
                  </h3>

                  <p>
                    That's completely fine. Tell us what you're
                    trying to achieve and we'll help identify the
                    right direction.

                  </p>

                </div>

              </div>

            </motion.aside>

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          MAP
          ===================================================== */}

      <section className={styles.mapSection}>

        <PageContainer>

          <div className={styles.mapHeader}>

            <div>

              <span>
                FIND US
              </span>

              <h2>
                Where we're
                <strong> building from.</strong>
              </h2>

            </div>

            <p>
              Our technology journey is rooted in India, with a
              digital-first approach that lets us collaborate
              beyond geographical boundaries.
            </p>

          </div>


          <div className={styles.mapWrapper}>

            {/* Replace the iframe source with your exact
                office/location once finalized. */}

            <iframe
              title="Av_eSAFE location"
              src="https://www.google.com/maps?q=Bengaluru%2C%20Karnataka%2C%20India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className={styles.mapOverlay}>

              <MapPin size={20} />

              <div>
                <strong>
                  Av_eSAFE Technology Solutions
                </strong>

                <span>
                  Bengaluru, Karnataka, India
                </span>
              </div>

            </div>

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          WHAT HAPPENS NEXT
          ===================================================== */}

      <section className={styles.nextSection}>

        <PageContainer>

          <div className={styles.nextHeader}>

            <span>
              WHAT HAPPENS NEXT
            </span>

            <h2>
              Simple. Clear.
              <strong> Focused.</strong>
            </h2>

          </div>


          <div className={styles.nextGrid}>

            <div className={styles.nextCard}>

              <span>01</span>

              <h3>
                Tell us what you need
              </h3>

              <p>
                Share your challenge, requirement, product idea,
                or technology goal through the contact form.
              </p>

            </div>


            <div className={styles.nextCard}>

              <span>02</span>

              <h3>
                We understand the problem
              </h3>

              <p>
                We'll review your enquiry and understand the
                context before discussing potential approaches.
              </p>

            </div>


            <div className={styles.nextCard}>

              <span>03</span>

              <h3>
                Build the right path
              </h3>

              <p>
                Together we'll identify a practical direction,
                whether that's a solution, product, automation,
                or engineering engagement.
              </p>

            </div>

          </div>

        </PageContainer>

      </section>


      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className={styles.finalCta}>

        <PageContainer>

          <div className={styles.finalCtaInner}>

            <div>

              <span>
                ENGINEER WHAT'S NEXT
              </span>

              <h2>
                Your next idea could
                <strong> start here.</strong>
              </h2>

            </div>

            <a
              href="mailto:connect@avesafe.com"
              className={styles.emailButton}
            >
              Email Av_eSAFE
              <Mail size={17} />
            </a>

          </div>

        </PageContainer>

      </section>

    </main>
  );
};

export default Contact;

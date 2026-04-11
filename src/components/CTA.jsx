import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section id="contact" className={styles.section}>
      {/* Decorative blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      {/* Floating emoji decorations */}
      {['🥦', '🍅', '🥕', '🥒', '🧅'].map((e, i) => (
        <motion.span
          key={i}
          className={styles.floatEmoji}
          style={{ left: `${10 + i * 18}%`, top: `${20 + (i % 2) * 40}%` }}
          animate={{ y: [0, -15, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
        >
          {e}
        </motion.span>
      ))}

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className={styles.badge}>🌿 Join the Freshness</span>
          <h2 className={styles.heading}>
            Ready to Explore<br />
            <span className={styles.accent}>Nature's Bounty?</span>
          </h2>
          <p className={styles.desc}>
            Discover our complete collection of farm-fresh vegetables,
            learn their health benefits, and bring the best of nature to your table every day.
          </p>

          <div className={styles.actions}>
            <motion.a
              href="#varieties"
              className={styles.btnPrimary}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.97 }}
              id="cta-explore-btn"
            >
              Explore All Varieties 🥬
            </motion.a>
            <motion.a
              href="#about"
              className={styles.btnOutline}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              id="cta-about-btn"
            >
              Learn More About JSK
            </motion.a>
          </div>

          {/* JSK Logo section */}
          <div className={styles.logoSection}>
            <Logo size={36} />
            <div className={styles.logoText}>
              <strong>JSK</strong>
              <span>Vegetable Variety</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

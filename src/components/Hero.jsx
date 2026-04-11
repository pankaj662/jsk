import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import styles from './Hero.module.css';

const floatingVeggies = ['🥦', '🥕', '🥬', '🥒', '🍅', '🧅', '🌶️', '🥔'];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Animated background blobs */}
      <div className={styles.blobTop} />
      <div className={styles.blobBottom} />

      {/* Floating emoji decorations */}
      {floatingVeggies.map((emoji, i) => (
        <motion.span
          key={i}
          className={styles.floatingEmoji}
          style={{
            left: `${8 + i * 11}%`,
            top: `${15 + (i % 3) * 25}%`,
            fontSize: `${1.4 + (i % 3) * 0.4}rem`,
          }}
          animate={{ y: [0, -18, 0], rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        >
          {emoji}
        </motion.span>
      ))}

      <div className={styles.inner}>
        {/* Left Text */}
        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            🌱 Fresh From the Farm
          </motion.div>

          <h1 className={styles.headline}>
            <span className={styles.headlineLight}>Vegetable</span>
            <br />
            <span className={styles.headlineBold}>Variety</span>
          </h1>

          <p className={styles.subtext}>
            Discover nature's finest selection — from farm to table.
            Explore the rich flavors, health benefits, and cultural stories
            behind India's most beloved vegetables.
          </p>

          <div className={styles.actions}>
            <motion.a
              href="#varieties"
              className={styles.btnPrimary}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(99,209,205,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Start 🚀
            </motion.a>
            <motion.a
              href="#about"
              className={styles.btnOutline}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
            </motion.a>
          </div>

          {/* Stats strip */}
          <div className={styles.statsStrip}>
            {[
              { num: '14+', label: 'Varieties' },
              { num: '100%', label: 'Fresh' },
              { num: '2', label: 'Languages' },
            ].map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Imagery Grid */}
        <motion.div
          className={styles.imageSide}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className={styles.imageGrid}>
            <motion.div
              className={`${styles.imgCard} ${styles.imgCardLarge}`}
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://loremflickr.com/900/600/vegetables,farm/all"
                alt="Colorful vegetables"
              />
              <div className={styles.imgOverlay} />
            </motion.div>
            <motion.div
              className={`${styles.imgCard} ${styles.imgCardSmall}`}
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://loremflickr.com/500/500/farmer,harvest/all"
                alt="Farmer with vegetables"
              />
            </motion.div>
            <motion.div
              className={`${styles.imgCard} ${styles.imgCardSmall2}`}
              whileHover={{ scale: 1.04, rotate: -1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://loremflickr.com/500/400/market,vegetable/all"
                alt="Fresh vegetable market"
              />
            </motion.div>
          </div>

          {/* Floating card */}
          <motion.div
            className={styles.floatingCard}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Logo size={32} />
            <div>
              <div className={styles.floatingCardTitle}>Farm Fresh</div>
              <div className={styles.floatingCardSub}>Straight to your table</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

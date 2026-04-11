import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import styles from './About.module.css';

const features = [
  { icon: '🌱', title: 'Farm Fresh', desc: 'Sourced directly from local farms with care and precision.' },
  { icon: '🥗', title: 'Nutritious', desc: 'Every vegetable packed with essential vitamins and minerals.' },
  { icon: '🌍', title: 'Culturally Rich', desc: 'Celebrating vegetables across Indian and global cuisines.' },
  { icon: '💚', title: 'Sustainably Grown', desc: 'Committed to eco-friendly and sustainable farming practices.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        {/* Left image collage */}
        <motion.div
          className={styles.imageSide}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className={styles.imgMainWrap}>
            <img
              src="https://loremflickr.com/800/800/vegetables,harvest/all"
              alt="Colorful vegetable market"
              className={styles.imgMain}
            />
          </div>
          <div className={styles.imgSecondaryWrap}>
            <img
              src="https://loremflickr.com/500/600/vegetables,basket/all"
              alt="Fresh produce"
              className={styles.imgSecondary}
            />
          </div>
          <motion.div
            className={styles.badgeCard}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Logo size={34} />
            <div>
              <div className={styles.badgeTitle}>100% Natural</div>
              <div className={styles.badgeSub}>No preservatives added</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          <span className={styles.tag}>About JSK</span>
          <h2 className={styles.heading}>
            Bringing Nature's <br />
            <span className={styles.headingAccent}>Finest to You</span>
          </h2>
          <p className={styles.desc}>
            JSK is passionate about nature's vibrant garden. We believe every vegetable has a
            story — a cultural heritage, a nutritional benefit, and a culinary magic that
            transforms simple ingredients into extraordinary meals.
          </p>
          <p className={styles.desc}>
            From the mighty Potato crowned "King of Vegetables" to the fiery Green Chilli that
            ignites every dish — we celebrate each variety in both <strong>English</strong> and{' '}
            <strong>Gujarati</strong>, bridging cultures through food.
          </p>

          <motion.div
            className={styles.features}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map(f => (
              <motion.div key={f.title} className={styles.featureCard} variants={itemVariants}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <div>
                  <div className={styles.featureTitle}>{f.title}</div>
                  <div className={styles.featureDesc}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

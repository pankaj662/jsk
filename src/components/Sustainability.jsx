import React from 'react';
import { motion } from 'framer-motion';
import styles from './Sustainability.module.css';

const pillars = [
  { icon: '🌿', title: 'Organic Farming', desc: 'We partner with farmers who use natural compost and avoid harmful pesticides to keep our soil alive and healthy.' },
  { icon: '💧', title: 'Water Conservation', desc: 'Drip irrigation and rainwater harvesting are at the heart of our water-smart farming approach.' },
  { icon: '♻️', title: 'Zero Waste Goal', desc: 'From farm rejects to compost, we ensure every part of the produce serves a purpose — nothing goes to waste.' },
  { icon: '🌍', title: 'Carbon Reduction', desc: 'By sourcing locally and optimizing logistics, we actively work to minimize our carbon footprint.' },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className={styles.sustainability}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.tag}>Eco Commitment</span>
          <h2 className={styles.title}>Our <span className={styles.accent}>Sustainability</span></h2>
          <p className={styles.subtitle}>
            A greener planet starts with responsible farming. We are committed to protecting the earth that feeds us all.
          </p>
        </motion.div>

        <div className={styles.pillars}>
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className={styles.pillarCard}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className={styles.pillarIcon}>{pillar.icon}</div>
              <div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <div className={styles.bannerText}>
            <h3>🌱 Planting a Seed for Every Order</h3>
            <p>For every bulk order fulfilled, JSK contributes to local tree-planting initiatives. Together, we grow.</p>
          </div>
          <div className={styles.bannerStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>5000+</span>
              <span className={styles.statLabel}>Trees Planted</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>80%</span>
              <span className={styles.statLabel}>Organic Partners</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>30%</span>
              <span className={styles.statLabel}>Less Water Used</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

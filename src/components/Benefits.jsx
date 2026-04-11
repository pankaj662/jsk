import React from 'react';
import { motion } from 'framer-motion';
import styles from './Benefits.module.css';

const benefits = [
  {
    icon: '🫀',
    title: 'Heart Health',
    desc: 'Rich in potassium, fiber and antioxidants that keep your heart strong and healthy.',
    color: '#fee2e2',
    accent: '#ef4444',
  },
  {
    icon: '🦴',
    title: 'Strong Bones',
    desc: 'Loaded with calcium and Vitamin K, essential for maintaining bone density.',
    color: '#fef3c7',
    accent: '#f59e0b',
  },
  {
    icon: '🧠',
    title: 'Brain Power',
    desc: 'B-vitamins and folate support cognitive function and brain development.',
    color: '#dbeafe',
    accent: '#3b82f6',
  },
  {
    icon: '⚡',
    title: 'Energy Boost',
    desc: 'Complex carbs and natural sugars provide sustained energy throughout the day.',
    color: '#dcfce7',
    accent: '#22c55e',
  },
  {
    icon: '🛡️',
    title: 'Immunity Shield',
    desc: 'Vitamin C and phytonutrients fortify your immune system naturally.',
    color: '#f3e8ff',
    accent: '#a855f7',
  },
  {
    icon: '✨',
    title: 'Glowing Skin',
    desc: 'Antioxidants and water content keep your skin hydrated and radiant.',
    color: '#ffedd5',
    accent: '#f97316',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Benefits() {
  return (
    <section id="benefits" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.tag}>Why Vegetables?</span>
          <h2 className={styles.heading}>
            The <span className={styles.accent}>Power</span> of Nature
          </h2>
          <p className={styles.sub}>
            Every vegetable is a powerhouse of nutrients. Here's why you should eat more of them daily.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map(b => (
            <motion.div
              key={b.title}
              className={styles.card}
              style={{ '--card-bg': b.color, '--card-accent': b.accent }}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: `0 16px 40px ${b.accent}25` }}
              transition={{ duration: 0.25 }}
            >
              <div className={styles.iconWrap} style={{ background: b.color }}>
                <span className={styles.icon}>{b.icon}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.cardDesc}>{b.desc}</p>
              </div>
              <div className={styles.accentBar} style={{ background: b.accent }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

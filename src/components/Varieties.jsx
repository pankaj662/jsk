import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { vegetablesData } from '../data/vegetables';
import VegetableCard from './VegetableCard';
import styles from './Varieties.module.css';

const filters = ['All', 'Root', 'Leafy', 'Fruit Veggie', 'Spicy', 'Fruity'];

export default function Varieties() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? vegetablesData
      : vegetablesData.filter(v => v.category === activeFilter);

  return (
    <section id="varieties" className={styles.section}>
      {/* Decorative background */}
      <div className={styles.bgDecor} />

      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.tag}>Our Collection</span>
          <h2 className={styles.heading}>
            Vegetable <span className={styles.accent}>Variety List</span>
          </h2>
          <p className={styles.subheading}>
            Click any card to flip and read the Gujarati description 🇮🇳
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(f)}
              id={`filter-${f.toLowerCase().replace(' ', '-')}`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          className={styles.grid}
          layout
        >
          {filtered.map((veg, i) => (
            <VegetableCard key={veg.id} veg={veg} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

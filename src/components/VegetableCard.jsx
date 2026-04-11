import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import styles from './VegetableCard.module.css';

export default function VegetableCard({ veg, index }) {
  const [flipped, setFlipped] = useState(false);
  const [imgSrc, setImgSrc] = useState(veg.image);

  // Sync image source when product data changes
  React.useEffect(() => {
    setImgSrc(veg.image);
  }, [veg.image]);

  return (
    <motion.div
      className={styles.cardWrap}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: 'easeOut' }}
    >
      <div
        className={`${styles.card} ${flipped ? styles.cardFlipped : ''}`}
        onClick={() => setFlipped(f => !f)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setFlipped(f => !f)}
        aria-label={`${veg.name} card - click to flip`}
      >
        {/* Front */}
        <div className={styles.cardFront}>
          <div className={styles.imgWrap}>
            <img 
              src={imgSrc} 
              alt={veg.name} 
              className={styles.img} 
              onError={() => {
                if (imgSrc !== veg.backup) {
                  setImgSrc(veg.backup);
                }
              }}
            />
            <div className={styles.imgGradient} />
            <span className={styles.number}>#{String(index + 1).padStart(2, '0')}</span>
          </div>

          <div className={styles.body} style={{ background: veg.color }}>
            <div className={styles.header}>
              <span className={styles.emojiIcon}>{veg.icon}</span>
              <div>
                <h3 className={styles.name}>{veg.name}</h3>
                <p className={styles.subtitle}>{veg.title}</p>
              </div>
            </div>

            <p className={styles.desc}>{veg.description}</p>

            <div className={styles.flipHint}>
              <span>🔄 View in Gujarati</span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className={styles.cardBack}>
          <div className={styles.backHeader}>
            <Logo size={40} />
            <span className={styles.backName}>{veg.name}</span>
          </div>
          <div className={styles.gujaratiSection}>
            <div className={styles.gujaratiLabel}>ગુજરાતી</div>
            <p className={styles.gujaratiText}>{veg.gujarati}</p>
          </div>
          <div className={styles.flipHintBack}>
            <span>↩ Back to English</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

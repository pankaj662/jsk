import React from 'react';
import Logo from './Logo';
import styles from './Footer.module.css';

const footerLinks = {
  'Varieties': ['Potato', 'Onion', 'Cucumber', 'Broccoli', 'Cabbage', 'Green Chillies'],
  'Company': ['About Us', 'Our Mission', 'Sustainability', 'Contact'],
  'Resources': ['Health Benefits', 'Recipes', 'Gujarati Guide', 'Blog'],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Logo size={36} />
            <span>JSK</span>
          </div>
          <p className={styles.tagline}>
            Celebrating the vibrant world of vegetables — from farm to table,
            in English and Gujarati.
          </p>
          <div className={styles.socials}>
            {['🌐', '📘', '📸', '🐦'].map((icon, i) => (
              <button key={i} className={styles.socialBtn} aria-label="Social link">
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section} className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>{section}</h4>
            <ul className={styles.linkList}>
              {links.map(link => (
                <li key={link}>
                  <a href="#varieties" className={styles.footerLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>© {year} JSK Vegetable Variety. All rights reserved.</span>
          <span className={styles.madeWith}>Made with 💚 and fresh vegetables</span>
        </div>
      </div>
    </footer>
  );
}

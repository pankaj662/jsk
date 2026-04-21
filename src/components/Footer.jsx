import React from 'react';
import Logo from './Logo';
import styles from './Footer.module.css';

import Instagram from './assets/instagram.svg?react';
import Facebook from './assets/facebook.svg?react';
import YouTube from './assets/youtube.svg?react';
import Telegram from './assets/telegram.svg?react';

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

          {/* 🔥 Social Icons (Updated) */}
          <div className={styles.socials}>

            <Instagram 
              className={styles.icon}
              onClick={() => window.open(' https://www.instagram.com/industryjsk?igsh=MWxpNG85ZXZvaXRuOQ==')}
            />

            <Facebook 
              className={styles.icon}
              onClick={() => window.open('https://facebook.com')}
            />

            <YouTube 
              className={styles.icon}
              onClick={() => window.open('https://youtube.com')}
            />

            <Telegram 
              className={styles.icon}
              onClick={() => window.open('https://telegram.org')}
            />

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
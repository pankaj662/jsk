import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Mission', href: '#mission' },
  { label: 'Eco', href: '#sustainability' },
  { label: 'Varieties', href: '#varieties' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onContactOpen, onMissionOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, label, href) => {
    if (label === 'Contact') {
      e.preventDefault();
      onContactOpen && onContactOpen();
    } else if (label === 'Mission') {
      e.preventDefault();
      onMissionOpen && onMissionOpen();
    }
  };

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#hero" className={styles.logo}>
          <Logo size={36} />
          <span className={styles.logoText}>JSK</span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a 
                href={link.href} 
                className={styles.link} 
                onClick={(e) => handleLinkClick(e, link.label, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#varieties" className={styles.ctaBtn}>Explore Now</a>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.barOpen : styles.bar} />
          <span className={menuOpen ? styles.barHide : styles.bar} />
          <span className={menuOpen ? styles.barOpenReverse : styles.bar} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={(e) => {
                  setMenuOpen(false);
                  handleLinkClick(e, link.label, link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

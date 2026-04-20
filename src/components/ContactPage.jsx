import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import styles from './ContactPage.module.css';

const contactInfo = [
  {
    icon: <Phone size={24} />,
    label: 'Phone',
    value: '+91 7067465249',
    link: 'tel:+917067465249',
  },
  {
    icon: <MessageCircle size={24} />,
    label: 'WhatsApp',
    value: '+91 70674 65249',
    link: 'https://wa.me/7067465249',
  },
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'contact@jskfarm.com',
    link: 'mailto:contact@jskfarm.com',
  },
  {
    icon: <MapPin size={24} />,
    label: 'Address',
    value: 'JSK Farm, Green Valley Road, Rajasthan, India',
    link: null,
  },
  {
    icon: <Clock size={24} />,
    label: 'Working Hours',
    value: 'Mon – Sat: 8:00 AM – 6:00 PM\nSunday: Closed',
    link: null,
  },
];

const socialLinks = [
  { icon: <Facebook size={22} />, label: 'Facebook', href: 'https://facebook.com' },
  { icon: <Instagram size={22} />, label: 'Instagram', href: 'https://instagram.com' },
  { icon: <Twitter size={22} />, label: 'Twitter', href: 'https://twitter.com' },
  { icon: <MessageCircle size={22} />, label: 'WhatsApp', href: 'https://wa.me/919876543210' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', damping: 15 } },
};

export default function ContactPage({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
        >
          {/* Close Button */}
          <motion.button
            className={styles.closeBtn}
            onClick={onClose}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            ✕
          </motion.button>

          <motion.div
            className={styles.pageContent}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.85, y: 60, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 60, opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring', damping: 20 }}
          >
            {/* Header */}
            <motion.div
              className={styles.header}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className={styles.title}>
                Contact <span>Us</span>
              </h1>
              <p className={styles.subtitle}>
                Hum se judne ke liye neeche di gayi kisi bhi information ka use karein. Hum aapki seva mein hamesha taiyaar hain!
              </p>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
              className={styles.cardsGrid}
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {contactInfo.map((item, i) => (
                <motion.div
                  className={styles.card}
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={styles.cardIcon}>{item.icon}</div>
                  <div className={styles.cardLabel}>{item.label}</div>
                  {item.link ? (
                    <a href={item.link} className={styles.cardValue} target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <div className={styles.cardValue} style={{ whiteSpace: 'pre-line' }}>{item.value}</div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Map Embed */}
            <motion.div
              className={styles.mapWrapper}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <h3 className={styles.mapTitle}>📍 Hamari Location</h3>
              <div className={styles.mapFrame}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5476!2d75.78!3d26.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ5JzEyLjAiTiA3NcKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JSK Farm Location"
                />
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className={styles.socialSection}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className={styles.socialTitle}>Follow Us</h3>
              <div className={styles.socialRow}>
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    whileHover={{ y: -5, scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1, type: 'spring' }}
                  >
                    {s.icon}
                    <span>{s.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

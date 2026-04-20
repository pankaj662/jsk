import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sprout, Carrot, Leaf, Apple } from 'lucide-react';
import styles from './VideoShowcase.module.css';
import JSK1 from '../assets/JSK1.mp4'

export default function VideoShowcase() {
  const containerRef = useRef(null);
  
  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Apply a spring physics layer to make scroll animations buttery smooth
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Floating background elements moving at different speeds (parallax)
  const y1 = useTransform(smoothProgress, [0, 1], [200, -200]);
  const y2 = useTransform(smoothProgress, [0, 1], [-300, 300]);
  const y3 = useTransform(smoothProgress, [0, 1], [100, -300]);
  
  // 3D popout and rotate effects for the main video wrapper
  const scale = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0.9, 1.02, 0.9]);
  const rotateX = useTransform(smoothProgress, [0.2, 0.5, 0.8], [15, 0, -15]);
  const opacity = useTransform(smoothProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);

  return (
    <section className={styles.container} ref={containerRef}>
      
      {/* Background Glowing Orbs */}
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      {/* Floating Rotating Icons */}
      <motion.div className={styles.floatingIcon} style={{ top: '10%', left: '5%', y: y1 }} animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }} transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}>
        <Sprout size={80} />
      </motion.div>
      
      <motion.div className={styles.floatingIcon} style={{ top: '60%', left: '15%', y: y2 }} animate={{ rotate: [0, -360], scale: [1, 1.2, 1] }} transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity } }}>
        <Carrot size={100} />
      </motion.div>
      
      <motion.div className={styles.floatingIcon} style={{ top: '20%', right: '5%', y: y2 }} animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }} transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}>
        <Apple size={70} />
      </motion.div>
      
      <motion.div className={styles.floatingIcon} style={{ top: '70%', right: '10%', y: y3 }} animate={{ rotate: [0, -360], scale: [1, 1.25, 1] }} transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 7, repeat: Infinity } }}>
        <Leaf size={120} />
      </motion.div>

      {/* Main Video Frame with 3D Scroll Effects */}
      <motion.div 
        className={styles.videoWrapper}
        style={{ scale, rotateX, opacity }}
        whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.3 } }}
      >
        <motion.h2 
          className={styles.heading}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Farm Fresh Quality
        </motion.h2>
        
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          src={JSK1}
        />
      </motion.div>
    </section>
  );
}

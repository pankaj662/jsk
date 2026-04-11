import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Varieties from './components/Varieties';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #52b788, #63d1cd)',
          transformOrigin: '0%',
          zIndex: 9999,
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Varieties />
        <Benefits />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

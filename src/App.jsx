import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Video from './components/VideoFrame'
import About from './components/About';
import Mission from './components/Mission';
import Sustainability from './components/Sustainability';
import VideoShowcase from './components/VideoShowcase';
import Varieties from './components/Varieties';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import Resources from './components/Resources';
import HealthBenefits from './components/HealthBenefits';
import Recipes from './components/Recipes';
import GujaratiGuide from './components/GujaratiGuide';
import Blog from './components/Blog';
import './App.css';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [missionOpen, setMissionOpen] = useState(false);
  const [activeResource, setActiveResource] = useState(null);

  const handleResourceOpen = (name) => {
    // Normalize names to match component keys
    const map = {
      'Health Benefits': 'health',
      'Recipes': 'recipes',
      'Gujarati Guide': 'gujarati',
      'Blog': 'blog'
    };
    setActiveResource(map[name] || null);
  };

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

      <Navbar 
        onContactOpen={() => setContactOpen(true)} 
        onMissionOpen={() => setMissionOpen(true)} 
      />

      <main>
        <Hero />
        <Video/>
        <About />
        <Sustainability />
        <VideoShowcase />
        <Varieties />
        <Benefits />
        <CTA />
      </main>

      <Footer 
        onContactOpen={() => setContactOpen(true)} 
        onMissionOpen={() => setMissionOpen(true)}
        onResourceOpen={handleResourceOpen}
      />

      {/* Overlays */}
      <ContactPage isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <Mission isOpen={missionOpen} onClose={() => setMissionOpen(false)} />

      {/* Resource Overlays */}
      <HealthBenefits 
        isOpen={activeResource === 'health'} 
        onClose={() => setActiveResource(null)} 
      />
      <Recipes 
        isOpen={activeResource === 'recipes'} 
        onClose={() => setActiveResource(null)} 
      />
      <GujaratiGuide 
        isOpen={activeResource === 'gujarati'} 
        onClose={() => setActiveResource(null)} 
      />
      <Blog 
        isOpen={activeResource === 'blog'} 
        onClose={() => setActiveResource(null)} 
      />
    </>
  );
}

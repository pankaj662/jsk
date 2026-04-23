import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const missionPoints = [
  { 
    title: 'Purity First', 
    desc: '100% natural, preservative‑free produce grown with love and respect for the earth.',
    icon: '🌱'
  },
  { 
    title: 'Eco-Logistics', 
    desc: 'Minimizing our carbon footprint through sustainable packaging and local distribution.',
    icon: '🚚'
  },
  { 
    title: 'Community Education', 
    desc: 'Empowering families with the knowledge to make healthier food choices every day.',
    icon: '📚'
  },
  { 
    title: 'Farmer Empowerment', 
    desc: 'Supporting local agricultural communities with fair trade and modern techniques.',
    icon: '🤝'
  }
];

export default function Mission({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1b4332 0%, #081c15 100%)',
            zIndex: 10000,
            overflowY: 'auto',
            padding: '80px 20px',
            color: '#fff'
          }}
        >
          {/* Animated Background Elements */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'fixed',
              top: '-10%',
              right: '-10%',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, #52b788 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
              pointerEvents: 'none'
            }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'fixed',
              top: '30px',
              right: '30px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer',
              zIndex: 10001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ✕
          </button>

          <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '80px' }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ color: '#52b788', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.9rem' }}
              >
                Our Purpose
              </motion.span>
              <h1 style={{ fontSize: '5rem', fontWeight: '900', marginTop: '10px', background: 'linear-gradient(90deg, #fff, #52b788)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Our Mission
              </h1>
              <p style={{ fontSize: '1.4rem', lineHeight: '1.8', opacity: 0.8, maxWidth: '800px', margin: '30px auto' }}>
                At JSK Farm, our mission is to redefine the journey from soil to plate. We are committed to a future where every meal is a celebration of health, sustainability, and community.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
              {missionPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.15, duration: 0.7 }}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    padding: '40px',
                    borderRadius: '32px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(5px)'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{point.icon}</div>
                  <h3 style={{ fontSize: '1.8rem', color: '#52b788', marginBottom: '15px' }}>{point.title}</h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.7', opacity: 0.7 }}>{point.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              style={{ marginTop: '80px', textAlign: 'center', padding: '60px', borderRadius: '40px', border: '2px solid rgba(82, 183, 136, 0.2)' }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Join the Movement</h2>
              <p style={{ marginBottom: '40px', opacity: 0.6 }}>Every harvest is a step towards a greener, healthier world.</p>
              <button 
                onClick={onClose}
                style={{
                  padding: '20px 60px',
                  borderRadius: '100px',
                  border: 'none',
                  background: '#52b788',
                  color: '#1b4332',
                  fontSize: '1.2rem',
                  fontWeight: '900',
                  cursor: 'pointer',
                  boxShadow: '0 15px 30px rgba(82, 183, 136, 0.3)'
                }}
              >
                Explore the Farm
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

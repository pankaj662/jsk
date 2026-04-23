import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const benefits = [
  { title: 'Vitamin Rich', desc: 'Contains high levels of Vitamin A, C, and K for overall vitality.', icon: '🌟' },
  { title: 'Heart Healthy', desc: 'Rich in potassium and antioxidants that support cardiovascular function.', icon: '❤️' },
  { title: 'Digestion', desc: 'Natural fiber helps maintain a healthy digestive tract.', icon: '🍃' },
  { title: 'Bone Strength', desc: 'Calcium and magnesium for maintaining strong and healthy bones.', icon: '🦴' },
  { title: 'Skin Glow', desc: 'Hydrating nutrients that help keep your skin clear and radiant.', icon: '✨' },
  { title: 'Natural Detox', desc: 'Chlorophyll and other enzymes help detoxify the body naturally.', icon: '💧' }
];

export default function HealthBenefits({ isOpen, onClose }) {
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
            background: 'rgba(255, 255, 255, 0.98)',
            zIndex: 10000,
            overflowY: 'auto',
            padding: '60px 20px',
            backdropFilter: 'blur(10px)'
          }}
        >
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
              background: '#1b4332',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              zIndex: 10001
            }}
          >
            ✕
          </button>

          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ textAlign: 'center', marginBottom: '80px' }}
            >
              <h2 style={{ fontSize: '4rem', fontWeight: '900', color: '#1b4332', marginBottom: '20px' }}>Health Benefits</h2>
              <p style={{ fontSize: '1.4rem', color: '#52b788', maxWidth: '800px', margin: '0 auto' }}>
                At JSK Farm, we believe that food is medicine. Explore how our fresh, chemical-free produce transforms your health from the inside out.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              {benefits.map((b, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  style={{
                    background: '#f8fdfa',
                    padding: '40px',
                    borderRadius: '32px',
                    border: '1px solid #e0f2f1',
                    boxShadow: '0 15px 40px rgba(45, 106, 79, 0.05)'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '25px' }}>{b.icon}</div>
                  <h3 style={{ fontSize: '1.8rem', color: '#1b4332', marginBottom: '15px' }}>{b.title}</h3>
                  <p style={{ color: '#555', lineHeight: '1.8', fontSize: '1.1rem' }}>{b.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ marginTop: '100px', textAlign: 'center', background: '#1b4332', padding: '60px', borderRadius: '40px', color: '#fff' }}
            >
              <h3 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Start Your Journey Today</h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '40px' }}>Experience the difference of truly fresh, farm-grown nutrition.</p>
              <button onClick={onClose} style={{ padding: '18px 45px', borderRadius: '100px', border: 'none', background: '#52b788', color: '#fff', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
                Back to Farm
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

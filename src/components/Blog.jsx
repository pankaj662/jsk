import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const posts = [
  { 
    title: 'The Secret to Winter Greens', 
    date: 'Oct 12, 2023', 
    category: 'Farming',
    excerpt: 'How we keep our broccoli and cabbage thriving even in the coldest months of the year...'
  },
  { 
    title: 'Organic vs. Conventional: The Real Difference', 
    date: 'Sep 28, 2023', 
    category: 'Health',
    excerpt: 'Understanding the impact of chemical fertilizers on nutritional density and long-term health...'
  },
  { 
    title: 'A Day in the Life at JSK Farm', 
    date: 'Sep 15, 2023', 
    category: 'Behind the Scenes',
    excerpt: 'From dawn till dusk, see what it takes to bring the freshest vegetables to your table...'
  },
  {
    title: 'Sustainable Water Management',
    date: 'Aug 30, 2023',
    category: 'Environment',
    excerpt: 'Our innovative drip irrigation systems and how they save thousands of liters of water daily...'
  }
];

export default function Blog({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#ffffff',
            zIndex: 10000,
            overflowY: 'auto',
            padding: '100px 20px'
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
              zIndex: 10001
            }}
          >
            ✕
          </button>

          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ textAlign: 'center', marginBottom: '80px' }}
            >
              <h2 style={{ fontSize: '4rem', fontWeight: '900', color: '#1b4332' }}>Farm Journal</h2>
              <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '10px' }}>Insights, news, and stories from the heart of our farm.</p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px' }}>
              {posts.map((post, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{ 
                    height: '300px', 
                    background: `linear-gradient(45deg, #1b4332, #52b788)`, 
                    borderRadius: '40px', 
                    marginBottom: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '4rem'
                  }}>
                    📖
                  </div>
                  <div style={{ padding: '0 10px' }}>
                    <span style={{ color: '#52b788', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>{post.category}</span>
                    <h3 style={{ fontSize: '2rem', color: '#1b4332', margin: '15px 0' }}>{post.title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#999', fontSize: '1rem' }}>{post.date}</span>
                      <span style={{ color: '#1b4332', fontWeight: 'bold' }}>Read More →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

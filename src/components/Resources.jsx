import React from 'react';
import { motion } from 'framer-motion';

const resources = [
  { title: 'Farming Guides', count: '12 Articles', desc: 'Expert advice on soil health, pest management, and seasonal planting.' },
  { title: 'Sustainability Reports', count: '4 PDFs', desc: 'Our annual impact reports detailing our commitment to the environment.' },
  { title: 'Produce Calendar', count: 'Live Tool', desc: 'A dynamic guide to what’s in season and at peak freshness right now.' }
];

export default function Resources() {
  return (
    <section id="resources" style={{ padding: '100px 20px', background: '#fdfdfd' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '70px' }}
        >
          <h2 style={{ fontSize: '3rem', color: '#1b4332', fontWeight: '800' }}>Educational Resources</h2>
          <div style={{ width: '80px', height: '4px', background: '#52b788', margin: '20px auto' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {resources.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              style={{
                background: '#fff',
                padding: '40px',
                borderRadius: '24px',
                border: '1px solid #eee',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ borderColor: '#52b788', boxShadow: '0 15px 40px rgba(82, 183, 136, 0.1)' }}
            >
              <span style={{ background: '#e8f5e9', color: '#2e7d32', padding: '6px 12px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                {res.count}
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#1b4332', margin: '20px 0 10px' }}>{res.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>{res.desc}</p>
              <a href="#" style={{ color: '#2d6a4f', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Explore More <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

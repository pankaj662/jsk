import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Truck, Sprout, Heart } from 'lucide-react';

const gujaratiPoints = [
  { icon: <Sprout size={32} color="#2e7d32" />, title: 'કુદરતી ખેતી', text: 'અમે કોઈ પણ પ્રકારના ઝેરી રસાયણો વગર ખેતી કરીએ છીએ.' },
  { icon: <Truck size={32} color="#2e7d32" />, title: 'સીધું ખેતરથી', text: 'શાકભાજી સીધા ખેતરમાંથી તમારા સુધી પહોંચાડવામાં આવે છે.' },
  { icon: <Leaf size={32} color="#2e7d32" />, title: 'વૈવિધ્ય', text: 'બટાકા, ડુંગળી થી લઈને બ્રોકોલી સુધીના અનેક શાકભાજી.' }
];

export default function GujaratiGuide({ isOpen, onClose }) {
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
            background: 'linear-gradient(135deg, #f1f8e9 0%, #e8f5e9 100%)',
            zIndex: 10000,
            overflowY: 'auto',
            padding: '60px 20px',
            backdropFilter: 'blur(15px)'
          }}
        >
          {/* Floating Background Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'fixed',
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
                fontSize: '2rem',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            >
              🍃
            </motion.div>
          ))}

          {/* Close Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: 'none',
              background: '#2e7d32',
              color: '#fff',
              fontSize: '28px',
              cursor: 'pointer',
              zIndex: 10001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(46, 125, 50, 0.3)'
            }}
          >
            ✕
          </motion.button>

          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                background: '#fff',
                padding: '60px',
                borderRadius: '50px',
                boxShadow: '0 50px 120px rgba(0,0,0,0.08)',
                textAlign: 'center'
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12, delay: 0.2 }}
                style={{ fontSize: '4rem', marginBottom: '20px' }}
              >
                🙏
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ fontSize: '3rem', color: '#1b5e20', marginBottom: '10px' }}
              >
                નમસ્તે
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ fontSize: '1.8rem', color: '#2e7d32', marginBottom: '40px', opacity: 0.7 }}
              >
                ગુજરાતી માર્ગદર્શિકા
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#333', marginBottom: '50px' }}
              >
                <b>JSK ફાર્મ</b> માં આપનું સ્વાગત છે! અમે ગાંધીનગરના પેથાપુરમાં સ્થિત છીએ અને અમારો મુખ્ય ઉદ્દેશ્ય લોકોને તાજા અને પૌષ્ટિક શાકભાજી પૂરા પાડવાનો છે.
              </motion.p>

              <div style={{ display: 'grid', gap: '30px', textAlign: 'left' }}>
                {gujaratiPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + idx * 0.2 }}
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '20px',
                      padding: '25px',
                      background: '#f9fdf9',
                      borderRadius: '25px',
                      border: '1px solid #edf7ed'
                    }}
                  >
                    <div style={{ padding: '15px', background: '#fff', borderRadius: '18px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                      {point.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.4rem', color: '#1b5e20', marginBottom: '5px' }}>{point.title}</h4>
                      <p style={{ color: '#4caf50', fontSize: '1.1rem' }}>{point.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{ marginTop: '60px' }}
              >
                <div style={{ 
                  display: 'inline-block', 
                  padding: '20px 40px', 
                  background: '#2e7d32', 
                  color: '#fff', 
                  borderRadius: '100px',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  boxShadow: '0 15px 35px rgba(46, 125, 50, 0.2)'
                }}>
                  "સ્વસ્થ આહાર, સ્વસ્થ જીવન"
                </div>
              </motion.div>

              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  marginTop: '40px',
                  background: 'none',
                  border: 'none',
                  color: '#2e7d32',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  textDecoration: 'underline'
                }}
              >
                પાછા જાઓ
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

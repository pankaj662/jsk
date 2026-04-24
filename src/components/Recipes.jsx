import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChefHat, Utensils, Zap } from 'lucide-react';

const recipes = [
  { 
    name: 'Roasted Root Medley', 
    time: '45 mins', 
    difficulty: 'Easy', 
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Potato', 'Carrot', 'Onion', 'Garlic', 'Rosemary'],
    instructions: 'Chop vegetables, toss with olive oil and rosemary, roast at 200°C until golden.'
  },
  { 
    name: 'Farm-Style Green Salad', 
    time: '15 mins', 
    difficulty: 'Quick', 
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Cucumber', 'Lettuce', 'Green Chillies', 'Lemon', 'Coriander'],
    instructions: 'Slice cucumber and lettuce, add chopped chillies, dress with lemon juice and salt.'
  },
  { 
    name: 'Spiced Vegetable Curry', 
    time: '60 mins', 
    difficulty: 'Medium', 
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Cabbage', 'Broccoli', 'Onion', 'Tomato', 'Indian Spices'],
    instructions: 'Saute onions and tomatoes, add spices, stir in cabbage and broccoli, simmer until tender.'
  }
];

export default function Recipes({ isOpen, onClose }) {
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
            background: 'rgba(240, 247, 244, 0.98)',
            zIndex: 10000,
            overflowY: 'auto',
            padding: '80px 20px',
            backdropFilter: 'blur(15px)'
          }}
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: 'none',
              background: '#1b4332',
              color: '#fff',
              fontSize: '28px',
              cursor: 'pointer',
              zIndex: 10001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            ✕
          </motion.button>

          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '80px' }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ fontSize: '3rem', marginBottom: '10px' }}
              >
                🍳
              </motion.div>
              <h2 style={{ fontSize: '4.5rem', fontWeight: '900', color: '#1b4332', letterSpacing: '-2px' }}>Farm-to-Table Recipes</h2>
              <p style={{ fontSize: '1.4rem', color: '#2d6a4f', marginTop: '10px' }}>
                Gourmet meals made simple with seasonal JSK Farm produce.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '50px' }}>
              {recipes.map((recipe, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.15 }}
                  whileHover={{ y: -15 }}
                  style={{
                    background: '#fff',
                    borderRadius: '50px',
                    overflow: 'hidden',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                     <motion.img 
                        src={recipe.image} 
                        alt={recipe.name}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                     />
                     <div style={{ 
                        position: 'absolute', 
                        top: '20px', 
                        left: '20px', 
                        background: 'rgba(255,255,255,0.9)', 
                        padding: '10px 20px', 
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontWeight: 'bold',
                        color: '#1b4332',
                        backdropFilter: 'blur(5px)'
                     }}>
                        <Zap size={18} fill="#ffb703" color="#ffb703" />
                        Fresh Selection
                     </div>
                  </div>

                  <div style={{ padding: '45px' }}>
                    <h3 style={{ fontSize: '2.2rem', color: '#1b4332', marginBottom: '15px', fontWeight: '800' }}>{recipe.name}</h3>
                    
                    <div style={{ display: 'flex', gap: '25px', marginBottom: '35px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#52b788', fontWeight: '700' }}>
                        <Clock size={20} /> {recipe.time}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#52b788', fontWeight: '700' }}>
                        <ChefHat size={20} /> {recipe.difficulty}
                      </div>
                    </div>
                    
                    <div style={{ marginBottom: '35px' }}>
                      <h4 style={{ color: '#1b4332', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem' }}>
                        <Utensils size={18} /> Ingredients:
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        {recipe.ingredients.map((ing, i) => (
                          <motion.span 
                            key={ing}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            style={{ 
                              background: '#f0f7f4', 
                              padding: '8px 18px', 
                              borderRadius: '15px', 
                              fontSize: '1rem', 
                              color: '#2d6a4f',
                              fontWeight: '600',
                              border: '1px solid #e0ece6'
                            }}
                          >
                            {ing}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div style={{ 
                      padding: '25px', 
                      background: '#fdfdfd', 
                      borderRadius: '25px', 
                      borderLeft: '5px solid #52b788'
                    }}>
                      <h4 style={{ color: '#1b4332', marginBottom: '10px', fontSize: '1.1rem' }}>Preparation:</h4>
                      <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.1rem' }}>{recipe.instructions}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{ 
                marginTop: '100px', 
                textAlign: 'center', 
                padding: '60px', 
                background: '#1b4332', 
                borderRadius: '50px',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
               <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', position: 'relative', zIndex: 1 }}>Hungry for more?</h3>
               <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '40px', position: 'relative', zIndex: 1 }}>
                 New seasonal recipes are added every week. Stay tuned!
               </p>
               <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                style={{
                  padding: '20px 60px',
                  borderRadius: '100px',
                  border: 'none',
                  background: '#52b788',
                  color: '#fff',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  position: 'relative',
                  zIndex: 1
                }}
               >
                 Back to Harvest
               </motion.button>
               
               {/* Background Decorative Circles */}
               <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
               <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '150px', height: '150px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

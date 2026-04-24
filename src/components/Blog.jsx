import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const posts = [
  { 
    title: 'The Secret to Winter Greens', 
    date: 'Oct 12, 2023', 
    category: 'Farming',
    author: 'Sunil Patel',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&q=80&w=800',
    excerpt: 'How we keep our broccoli and cabbage thriving even in the coldest months of the year...',
    content: `
      Maintaining a thriving vegetable garden during the winter months requires a combination of traditional wisdom and modern technology. At JSK Farm, we've perfected the art of the "Winter Harvest."

      The first secret lies in the soil temperature. By using organic mulch and raised beds, we ensure that the roots of our broccoli and cabbage stay insulated from the ground frost. We also employ a unique double-layer greenhouse system that traps solar heat during the day and releases it slowly throughout the night.

      But it's not just about warmth. Winter greens actually benefit from a light frost, which triggers a natural process called "sweetening." As temperatures drop, the plants convert starches into sugars as a form of natural anti-freeze, resulting in a flavor profile that you simply can't find in summer-grown crops.

      Key Techniques We Use:
      1. Cold Frames: Custom-built structures to protect delicate seedlings.
      2. Humidity Control: Essential for preventing fungal growth in damp winter air.
      3. Strategic Planting: Choosing heirloom varieties specifically bred for cold resilience.
    `
  },
  { 
    title: 'Organic vs. Conventional: The Real Difference', 
    date: 'Sep 28, 2023', 
    category: 'Health',
    author: 'Dr. Ananya Shah',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Understanding the impact of chemical fertilizers on nutritional density and long-term health...',
    content: `
      In an era where convenience often trumps quality, the debate between organic and conventional farming has never been more relevant. At JSK Farm, we believe that the health of the soil directly dictates the health of the consumer.

      Conventional farming relies heavily on synthetic NPK (Nitrogen, Phosphorus, Potassium) fertilizers. While these produce large, visually appealing vegetables, they often lack the complex micronutrient profiles found in soil enriched with organic compost and natural minerals.

      Our research shows that organic vegetables from our farm contain up to 30% more antioxidants and significantly higher levels of Vitamin C compared to local supermarket varieties. This is because organic plants must develop their own defense mechanisms against pests, which leads to the production of beneficial phytochemicals.

      The Environmental Impact:
      Organic farming isn't just better for you; it's vital for the planet. By avoiding synthetic pesticides, we protect the local bee populations and ensure that our groundwater remains pure.
    `
  },
  { 
    title: 'A Day in the Life at JSK Farm', 
    date: 'Sep 15, 2023', 
    category: 'Behind the Scenes',
    author: 'Rajiv Mehta',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    excerpt: 'From dawn till dusk, see what it takes to bring the freshest vegetables to your table...',
    content: `
      4:30 AM. The first light hasn't even hit the horizon, but the JSK Farm team is already in the fields. This is the "Magic Hour" for harvesting. Vegetables picked in the pre-dawn cool retain more moisture and stay fresh much longer.

      By 8:00 AM, the harvest is moving into our sorting facility. Here, every single tomato, carrot, and leaf of kale is inspected by hand. Only the best make it to our crates.

      The afternoon is dedicated to farm maintenance and innovation. We spend hours testing soil pH levels and adjusting our automated irrigation schedules. It's a blend of hard manual labor and high-tech agricultural science.

      Sustainability at Every Step:
      - Solar powered packing shed.
      - Zero-waste composting of all "imperfect" vegetables.
      - Community sharing programs for local schools.
    `
  },
  {
    title: 'Sustainable Water Management',
    date: 'Aug 30, 2023',
    category: 'Environment',
    author: 'Vikram Singh',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Our innovative drip irrigation systems and how they save thousands of liters of water daily...',
    content: `
      Water is the lifeblood of any farm, but in our region, it's also a precious and limited resource. JSK Farm has invested heavily in a "Precision Irrigation" network that has reduced our water consumption by nearly 40%.

      Traditional spray irrigation loses up to 50% of water to evaporation. Our subsurface drip system delivers water directly to the root zone, exactly where the plant needs it most. Sensors embedded in the soil communicate with our central computer, providing real-time data on soil moisture levels.

      We also practice rainwater harvesting. Our massive collection tanks can store up to 500,000 liters, allowing us to survive even the longest dry spells without putting pressure on local municipal supplies.

      Why Precision Matters:
      - Prevents soil erosion.
      - Reduces weed growth (since we only water the crops).
      - Minimizes the risk of leaf diseases caused by over-wetting.
    `
  }
];

export default function Blog({ isOpen, onClose }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="blog-overlay"
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
            background: '#f8faf9',
            zIndex: 10000,
            overflowY: 'auto',
          }}
        >
          {/* Top Bar */}
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '30px 50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 10002,
            background: 'rgba(248, 250, 249, 0.8)',
            backdropFilter: 'blur(10px)',
          }}>
            <button
              onClick={selectedPost ? () => setSelectedPost(null) : onClose}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.2rem',
                fontWeight: '800',
                color: '#1b4332',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              {selectedPost ? '← Back to Journal' : '✕ Close Journal'}
            </button>
            <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1b4332', textTransform: 'uppercase', letterSpacing: '2px' }}>
              JSK Farm Stories
            </div>
          </div>

          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '150px 20px 100px' }}>
            <AnimatePresence mode="wait">
              {!selectedPost ? (
                <motion.div
                  key="list-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{ textAlign: 'center', marginBottom: '100px' }}
                  >
                    <h2 style={{ 
                      fontSize: '5rem', 
                      fontWeight: '900', 
                      color: '#1b4332', 
                      letterSpacing: '-2px',
                      lineHeight: '1'
                    }}>Farm Journal</h2>
                    <p style={{ 
                      fontSize: '1.4rem', 
                      color: '#444', 
                      marginTop: '20px',
                      maxWidth: '600px',
                      margin: '20px auto 0'
                    }}>Insights, news, and stories from the heart of our sustainable farming journey.</p>
                  </motion.div>

                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
                    gap: '80px 40px' 
                  }}>
                    {posts.map((post, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.15 }}
                        whileHover={{ y: -15 }}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setSelectedPost(post)}
                      >
                        <div style={{ 
                          height: '400px', 
                          borderRadius: '50px', 
                          marginBottom: '35px',
                          overflow: 'hidden',
                          position: 'relative',
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                        }}>
                          <img 
                            src={post.image} 
                            alt={post.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          />
                          <div style={{
                            position: 'absolute',
                            top: '30px',
                            left: '30px',
                            padding: '10px 25px',
                            background: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '100px',
                            color: '#1b4332',
                            fontWeight: '800',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>
                            {post.category}
                          </div>
                        </div>
                        
                        <div style={{ padding: '0 20px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <span style={{ height: '2px', width: '40px', background: '#52b788' }}></span>
                            <span style={{ color: '#666', fontSize: '1rem', fontWeight: '600' }}>{post.date} • {post.readTime}</span>
                          </div>
                          
                          <h3 style={{ 
                            fontSize: '2.5rem', 
                            color: '#1b4332', 
                            margin: '10px 0 20px',
                            lineHeight: '1.2',
                            fontWeight: '800'
                          }}>{post.title}</h3>
                          
                          <p style={{ 
                            color: '#555', 
                            lineHeight: '1.9', 
                            fontSize: '1.2rem', 
                            marginBottom: '30px',
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>{post.excerpt}</p>
                          
                          <div style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '10px',
                            color: '#1b4332', 
                            fontWeight: '800',
                            fontSize: '1.1rem',
                          }}>
                            Read Full Story <span>→</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="detail-view"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  style={{ maxWidth: '900px', margin: '0 auto' }}
                >
                  <div style={{ marginBottom: '60px' }}>
                    <span style={{ color: '#52b788', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>{selectedPost.category}</span>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: '900', color: '#1b4332', margin: '20px 0', lineHeight: '1.1' }}>{selectedPost.title}</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginTop: '30px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#1b4332', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                          {selectedPost.author.charAt(0)}
                        </div>
                        <div>
                          <p style={{ fontWeight: '800', color: '#1b4332' }}>{selectedPost.author}</p>
                          <p style={{ color: '#666', fontSize: '0.9rem' }}>Author</p>
                        </div>
                      </div>
                      <div style={{ height: '40px', width: '1px', background: '#ddd' }}></div>
                      <div>
                        <p style={{ fontWeight: '800', color: '#1b4332' }}>{selectedPost.date}</p>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>{selectedPost.readTime}</p>
                      </div>
                    </div>
                  </div>

                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title}
                    style={{
                      width: '100%',
                      height: '600px',
                      objectFit: 'cover',
                      borderRadius: '60px',
                      marginBottom: '60px',
                      boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
                    }}
                  />

                  <div style={{ 
                    fontSize: '1.4rem', 
                    color: '#333', 
                    lineHeight: '2', 
                    whiteSpace: 'pre-line',
                    fontFamily: 'Georgia, serif'
                  }}>
                    {selectedPost.content}
                  </div>

                  <div style={{ 
                    marginTop: '80px', 
                    padding: '60px', 
                    background: '#1b4332', 
                    borderRadius: '50px', 
                    color: '#fff',
                    textAlign: 'center'
                  }}>
                    <h4 style={{ fontSize: '2rem', marginBottom: '20px' }}>Enjoyed this story?</h4>
                    <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '30px' }}>Subscribe to our newsletter for more farm-to-table insights.</p>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        style={{ padding: '15px 30px', borderRadius: '100px', border: 'none', width: '300px', fontSize: '1.1rem' }}
                      />
                      <button style={{ padding: '15px 40px', borderRadius: '100px', border: 'none', background: '#52b788', color: '#fff', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}>Join Now</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

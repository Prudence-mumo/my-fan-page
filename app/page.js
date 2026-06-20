"use client"; // Tells Next.js this is an interactive client component

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  // Original dishes list matching your exact images and descriptions
  const initialDishes = [
    { id: 1, name: 'Savory Fish', desc: 'Perfectly pan-seared or wet-fried tilapia with a golden, crispy skin.', img: '/fish.jpg', emoji: '🐟' },
    { id: 2, name: 'Fresh Green Salad', desc: 'A crisp, refreshing mix of seasonal greens and light dressing.', img: '/salad.jpeg', emoji: '🥗' },
    { id: 3, name: 'Sweet Fruits', desc: 'A colorful assortment of juicy, naturally sweet seasonal fruits.', img: '/fruits.jpeg', emoji: '🍉' },
    { id: 4, name: 'Ugali', desc: 'A classic, steaming hot maize meal staple that pairs perfectly with fish.', img: '/ugali.jpeg', emoji: '🫓' },
    { id: 5, name: 'Nyama Choma', desc: 'Tender, succulent goat or beef grilled over hot coals to smoky perfection.', img: '/Nyama-Choma.jpg.webp', emoji: '🥩' },
    { id: 6, name: 'Sukuma Wiki', desc: 'Earthy, fragrant collard greens sautéed with onions, garlic, and fresh tomatoes.', img: '/Sukuma-Wiki.webp', emoji: '🥬' },
    { id: 7, name: 'Mukimo', desc: 'A traditional, flavorful mash of potatoes, corn, and greens mixed beautifully.', img: '/mukimo.jpeg', emoji: '🥔' },
    { id: 8, name: 'Soft Chapati', desc: 'Flaky, multi-layered, and golden-brown flatbread served soft and warm.', img: '/soft_chapati.jpeg', emoji: '🫓' },
    { id: 9, name: 'Kuku Kienyeji', desc: 'Slow-simmered, free-range chicken stew infused with rich local herbs.', img: '/kuku-kienyeji.jpg', emoji: '🍗' },
    { id: 10, name: 'Sweet Mandazi', desc: 'Fluffy, golden-brown Kenyan donuts with a hint of warm cardamom.', img: '/mandazi.jpeg', emoji: '🍩' }
  ];

  // Track which dish IDs have been liked
  const [likedDishes, setLikedDishes] = useState({});

  // Toggles the specific dish state between grey (unliked) and red (liked)
  const toggleLike = (id) => {
    setLikedDishes((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fbfbfa', paddingBottom: '5rem', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      
      {/* Centered Main Header Block */}
      <header style={{ textAlign: 'center', padding: '5rem 1rem 3rem 1rem' }}>
        <h1 style={{ fontSize: '3.2rem', fontWeight: '700', color: '#1a3636', marginBottom: '0.75rem' }}>
          Karibu Kitchen
        </h1>
        <div style={{ width: '40px', height: '1.5px', backgroundColor: '#d4af37', margin: '0 auto 1.25rem auto' }}></div>
        <p style={{ fontSize: '1.05rem', color: '#7a8a7c', letterSpacing: '0.5px' }}>
          Authentic Kenyan Dining & Fine Traditional Flavors
        </p>
      </header>

      {/* Two-by-Two Centered Layout Container */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '2.5rem'
        }}>
          {initialDishes.map((dish) => {
            const isLiked = likedDishes[dish.id]; // Checks if current card is liked

            return (
              <div key={dish.id} style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
                border: '1px solid #f0f2f1',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Image Container */}
                <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                  <Image 
                    src={dish.img} 
                    alt={dish.name} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                {/* Content Block */}
                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1.1rem' }}>{dish.emoji}</span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1a3636' }}>
                        {dish.name}
                      </h3>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#6e7e71', lineHeight: '1.6' }}>
                      {dish.desc}
                    </p>
                  </div>
                  
                  {/* Card Bottom Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f5f7f6', paddingTop: '1rem', marginTop: 'auto' }}>
                    <span style={{ color: '#d4af37', fontSize: '0.9rem', letterSpacing: '2px' }}>★★★★★</span>
                    
                    {/* Interactive Like Button */}
                    <button 
                      onClick={() => toggleLike(dish.id)}
                      style={{ 
                        padding: '0.4rem 1.1rem', 
                        border: '1px solid #eef1f0', 
                        borderRadius: '20px', 
                        // Automatically switches text background and colors depending on state
                        backgroundColor: isLiked ? '#ffeeef' : '#fbfbfa', 
                        color: isLiked ? '#dc2626' : '#4a5a4d',
                        cursor: 'pointer', 
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span>{isLiked ? '❤️' : '🤍'}</span>
                      <span>Like</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}

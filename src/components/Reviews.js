import React from 'react';

const Reviews = () => {
  const reviewsData = [
    { name: "Elena V.", text: "The silhouette of the Midnight Velvet is sheer perfection. Every stitch speaks of luxury.", city: "Paris" },
    { name: "Marcus G.", text: "Exquisite fabric quality. You can feel the craftsmanship in the weight of the silk.", city: "New York" },
    { name: "Aria S.", text: "The fastest shipping and most beautiful packaging I've ever seen in high-fashion.", city: "Milan" }
  ];

  return (
    <section id="reviews" style={styles.section}>
      {/* 1. Animated Background Layer */}
      <div style={styles.bgOverlay}></div>
      
      {/* 2. Floating Decorative Elements */}
      <div className="floating-circle" style={styles.circle1}></div>
      <div className="floating-circle" style={styles.circle2}></div>

      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.label}>TESTIMONIALS</span>
          <h2 style={styles.mainTitle}>Voices of <span style={{color: '#d4af37'}}>Elegance</span></h2>
        </div>

        <div style={styles.grid}>
          {reviewsData.map((r, i) => (
            <div 
              key={i} 
              className="review-card" 
              style={{...styles.card, animationDelay: `${i * 0.2}s`}}
            >
              <div style={styles.quoteIcon}>{r.icon}</div>
              <div style={styles.stars}>★★★★★</div>
              <p style={styles.text}>"{r.text}"</p>
              
              <div style={styles.authorBox}>
                <div style={styles.avatar}>{r.name.charAt(0)}</div>
                <div>
                  <h4 style={styles.name}>{r.name}</h4>
                  <small style={styles.city}>{r.city}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Global Styles for Animations */}
      <style>
        {`
          #reviews {
            perspective: 1000px;
          }
          .review-card {
            backdrop-filter: blur(15px);
            animation: slideUpFade 1s ease-out forwards;
            opacity: 0;
          }
          .review-card:hover {
            transform: translateY(-15px) rotateX(5deg) !important;
            border-color: #d4af37 !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
          }
          .floating-circle {
            position: absolute;
            border-radius: 50%;
            background: linear-gradient(45deg, rgba(212, 175, 55, 0.2), transparent);
            z-index: 0;
            filter: blur(40px);
            animation: float 10s infinite alternate;
          }
          @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            from { transform: translate(0, 0); }
            to { transform: translate(30px, 50px); }
          }
        `}
      </style>
    </section>
  );
};

const styles = {
  section: {
    height: '100vh', // Takes up full laptop screen
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '0 8%',
    backgroundColor: '#0a0a0a', // Deep dark theme for luxury
    backgroundImage: 'url("https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600")', // Fashion show background
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Parallax effect
    overflow: 'hidden'
  },
  bgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.95) 100%)',
    zIndex: 1
  },
  container: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    maxWidth: '1200px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  label: {
    color: '#d4af37',
    letterSpacing: '8px',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  mainTitle: {
    fontSize: '4rem',
    color: '#fff',
    margin: '10px 0',
    fontWeight: '200'
  },
  grid: {
    display: 'flex',
    gap: '30px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  card: {
    background: 'rgba(255, 255, 255, 0.05)', // Glassmorphism
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '40px',
    width: '320px',
    borderRadius: '15px',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  quoteIcon: {
    fontSize: '2rem',
    marginBottom: '20px'
  },
  stars: {
    color: '#d4af37',
    fontSize: '14px',
    marginBottom: '15px'
  },
  text: {
    color: '#ddd',
    fontSize: '1.1rem',
    fontStyle: 'italic',
    lineHeight: '1.8',
    marginBottom: '30px'
  },
  authorBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    paddingTop: '20px'
  },
  avatar: {
    width: '45px',
    height: '45px',
    background: '#d4af37',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#000'
  },
  name: {
    color: '#fff',
    margin: 0,
    fontSize: '1rem'
  },
  city: {
    color: '#888'
  },
  circle1: {
    width: '400px', height: '400px', top: '-100px', right: '-50px'
  },
  circle2: {
    width: '300px', height: '300px', bottom: '-50px', left: '-50px'
  }
};

export default Reviews;
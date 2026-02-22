import React, { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: "Midnight Silhouette", price: 299, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600", tag: "Limited" },
  { id: 2, name: "Ivory Silk Wrap", price: 145, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600", tag: "New" },
  { id: 3, name: "Obsidian Gown", price: 320, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600", tag: "Trending" },
  { id: 4, name: "Lace Renaissance", price: 850, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600", tag: "Bespoke" },
  { id: 5, name: "Saffron Mini", price: 190, image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=600", tag: "Limited" },
  { id: 6, name: "Ethereal Maxi", price: 125, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600", tag: "New" },
  { id: 7, name: "Emerald Gala", price: 410, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600", tag: "Luxury" },
  { id: 8, name: "Night Slip", price: 215, image: "https://images.unsplash.com/photo-1533659828870-95ee305cee3e?w=600", tag: "Trending" },
  { id: 9, name: "Ivory Silk Wrap", price: 145, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600", tag: "New" },
];

const Category = ({ onAddToCart }) => {
  return (
    <section id="shop" style={styles.section}>
      {/* Background Decorative Text */}
      <div style={styles.bgText}>COLLECTION</div>

      <div style={styles.header}>
        <h4 style={styles.subtitle}>EXCLUSIVE PIECES</h4>
        <h2 style={styles.mainTitle}>The Editorial <span style={{color: '#d4af37'}}>Selection</span></h2>
        <p style={styles.description}>Curated fashion for those who define their own trends.</p>
      </div>

      <div style={styles.grid}>
        {PRODUCTS.map((p) => (
          <div key={p.id} style={styles.card} className="product-card">
            <div style={styles.imageContainer}>
              {/* Tag */}
              <span style={styles.tag}>{p.tag}</span>
              
              <img src={p.image} alt={p.name} style={styles.image} />
              
              {/* Luxury Hover Overlay */}
              <div className="overlay" style={styles.overlay}>
                <button 
                  onClick={() => onAddToCart(p)} 
                  style={styles.cartButton}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#d4af37';
                    e.target.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#fff';
                    e.target.style.color = '#1a1a1a';
                  }}
                >
                  ADD TO BAG
                </button>
              </div>
            </div>

            <div style={styles.info}>
              <h3 style={styles.name}>{p.name}</h3>
              <div style={styles.priceContainer}>
                <span style={styles.line}></span>
                <span style={styles.price}>${p.price}.00</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded CSS for Hover Animations */}
      <style>
        {`
          .product-card:hover .overlay {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .product-card:hover img {
            transform: scale(1.1);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 8%',
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  bgText: {
    position: 'absolute',
    top: '10%',
    left: '-5%',
    fontSize: '12vw',
    fontWeight: '900',
    color: '#f9f9f9',
    zIndex: 0,
    pointerEvents: 'none',
    userSelect: 'none'
  },
  header: {
    position: 'relative',
    zIndex: 1,
    marginBottom: '80px',
    textAlign: 'center'
  },
  subtitle: {
    letterSpacing: '6px',
    color: '#d4af37',
    fontSize: '13px',
    marginBottom: '15px'
  },
  mainTitle: {
    fontSize: '3.5rem',
    fontWeight: '300',
    margin: 0,
    letterSpacing: '-1px'
  },
  description: {
    color: '#888',
    marginTop: '15px',
    fontSize: '1.1rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '50px 30px',
    position: 'relative',
    zIndex: 1
  },
  card: {
    position: 'relative',
    transition: 'transform 0.5s ease',
  },
  imageContainer: {
    position: 'relative',
    height: '480px',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.8s cubic-bezier(0.2, 1, 0.3, 1)',
  },
  tag: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    background: '#fff',
    padding: '5px 15px',
    fontSize: '10px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    zIndex: 2,
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(26, 26, 26, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.5s ease',
    zIndex: 3
  },
  cartButton: {
    background: '#fff',
    color: '#1a1a1a',
    border: 'none',
    padding: '15px 40px',
    fontWeight: '900',
    fontSize: '12px',
    letterSpacing: '3px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
  },
  info: {
    marginTop: '25px',
    textAlign: 'left'
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: '400',
    margin: '0 0 8px 0',
    letterSpacing: '0.5px'
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  line: {
    width: '30px',
    height: '1px',
    background: '#d4af37'
  },
  price: {
    fontSize: '1.1rem',
    color: '#d4af37',
    fontWeight: '600'
  }
};

export default Category;
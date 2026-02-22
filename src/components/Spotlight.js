import React, { useState, useEffect } from 'react';

const Spotlight = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [stock, setStock] = useState(7); // Urgency: Limited stock

  return (
    <section id="spotlight" style={styles.section}>
      {/* BACKGROUND WATERMARK */}
      <div style={styles.bgText}>LTD_01</div>

      <div style={styles.container}>
        
        {/* LEFT: TECHNICAL SPECS (35% BLACK VIBE) */}
        <div style={styles.specsSide}>
          <div style={styles.label}>TECHNICAL ARCHIVE</div>
          <h3 style={styles.specTitle}>SERIES_026 <br/> <span style={{color: '#c5a059'}}>CABAN JACKET</span></h3>
          
          <div style={styles.specGrid}>
            <div style={styles.specItem}>
              <span style={styles.specTag}>MATERIAL</span>
              <span style={styles.specVal}>Heavyweight Japanese Wool</span>
            </div>
            <div style={styles.specItem}>
              <span style={styles.specTag}>EDITION</span>
              <span style={styles.specVal}>Limited (1 of 50)</span>
            </div>
            <div style={styles.specItem}>
              <span style={styles.specTag}>STITCH</span>
              <span style={styles.specVal}>Hand-Finished / London</span>
            </div>
          </div>

          <div style={styles.urgencyBox}>
            <div style={styles.pulseDot}></div>
            <span style={styles.urgencyText}>ONLY {stock} PIECES REMAINING</span>
          </div>
        </div>

        {/* CENTER: THE MASTERPIECE IMAGE */}
        <div 
          style={styles.imageWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={{
            ...styles.imageFrame,
            transform: isHovered ? 'scale(1.02)' : 'scale(1)'
          }}>
            <img 
              src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260" 
              alt="Exclusive Piece" 
              style={styles.img}
            />
          </div>
          {/* Floating Gold Price Tag */}
          <div style={styles.priceTag}>
            <span style={styles.priceCurrency}>$</span>
            <span style={styles.priceNum}>850</span>
          </div>
        </div>

        {/* RIGHT: ACTION (5% GOLD ANCHOR) */}
        <div style={styles.actionSide}>
          <div style={styles.verticalText}>EXCLUSIVE RELEASE</div>
          <button 
            style={{
              ...styles.mainBtn,
              backgroundColor: isHovered ? '#c5a059' : '#000'
            }}
            onClick={() => alert('Added Exclusive Piece to Bag')}
          >
            ACQUIRE NOW —
          </button>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    height: '110vh',
    backgroundColor: '#ececec', // 60% White
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    fontFamily: '"Inter", sans-serif'
  },
  bgText: {
    position: 'absolute',
    top: '10%',
    left: '-5%',
    fontSize: '25vw',
    fontWeight: '900',
    color: '#f5f5f5',
    zIndex: 0,
    userSelect: 'none'
  },
  container: {
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2
  },
  specsSide: {
    flex: '0 0 30%',
  },
  label: {
    fontSize: '10px',
    letterSpacing: '5px',
    color: '#aaa',
    marginBottom: '20px'
  },
  specTitle: {
    fontSize: '3vw',
    fontWeight: '900',
    lineHeight: '1.1',
    color: '#000',
    marginBottom: '50px'
  },
  specGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    borderLeft: '1px solid #eee',
    paddingLeft: '30px'
  },
  specItem: {
    display: 'flex',
    flexDirection: 'column'
  },
  specTag: {
    fontSize: '9px',
    letterSpacing: '2px',
    color: '#c5a059',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  specVal: {
    fontSize: '14px',
    color: '#444'
  },
  urgencyBox: {
    marginTop: '60px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '15px 25px',
    backgroundColor: '#000', // 35% Black anchor
    width: 'fit-content'
  },
  pulseDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#c5a059',
    borderRadius: '50%',
    boxShadow: '0 0 10px #c5a059'
  },
  urgencyText: {
    color: '#fff',
    fontSize: '10px',
    letterSpacing: '2px',
    fontWeight: '700'
  },
  imageWrapper: {
    flex: '0 0 40%',
    position: 'relative',
    height: '70vh'
  },
  imageFrame: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: '0 50px 100px rgba(0,0,0,0.1)'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  priceTag: {
    position: 'absolute',
    bottom: '-30px',
    right: '-30px',
    backgroundColor: '#fff',
    padding: '40px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
  },
  priceCurrency: { fontSize: '14px', verticalAlign: 'top', color: '#c5a059' },
  priceNum: { fontSize: '40px', fontWeight: '900', color: '#000' },
  actionSide: {
    flex: '0 0 15%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: '70vh',
    justifyContent: 'space-between'
  },
  verticalText: {
    writingMode: 'vertical-rl',
    fontSize: '10px',
    letterSpacing: '10px',
    color: '#ccc',
    fontWeight: '600'
  },
  mainBtn: {
    border: 'none',
    color: '#fff',
    padding: '25px 40px',
    fontSize: '11px',
    fontWeight: '900',
    letterSpacing: '3px',
    cursor: 'pointer',
    transition: '0.4s ease',
    whiteSpace: 'nowrap'
  }
};

export default Spotlight;
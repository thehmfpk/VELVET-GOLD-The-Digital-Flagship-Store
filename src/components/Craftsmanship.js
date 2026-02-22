import React, { useEffect, useState, useRef } from 'react';

const Craftsmanship = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation Helper
  const revealStyle = (delay) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  });

  return (
    <section ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        
        {/* LEFT: THE TEXT BLUEPRINT */}
        <div style={styles.textSide}>
          <div style={revealStyle(0.1)}>
            <div style={styles.label}>CRAFT & ORIGIN</div>
            <h2 style={styles.title}>
              THE <span style={styles.goldThin}>SILHOUETTE</span> <br/> ARCHITECTURE
            </h2>
          </div>
          
          {[
            { num: '01', title: 'JAPANESE RAW SELVEDGE', desc: 'Sourced from the Kojima district, our denim is woven on vintage shuttle looms.' },
            { num: '02', title: 'REINFORCED STITCHING', desc: 'Every stress point is bar-tacked with industrial-grade gold thread.' },
            { num: '03', title: 'GHOST BUTTONS', desc: 'Hidden matte-black hardware for a seamless, architectural finish.' }
          ].map((item, index) => (
            <div key={index} style={{ ...styles.feature, ...revealStyle(0.3 + index * 0.2) }}>
              <div style={styles.num}>{item.num}</div>
              <div style={styles.featureContent}>
                <h4 style={styles.featureTitle}>{item.title}</h4>
                <p style={styles.featureDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: THE VISUAL */}
        <div style={{ 
          ...styles.visualSide, 
          opacity: isVisible ? 1 : 0, 
          transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
          transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
        }}>
          <div style={styles.imageBox}>
            <img 
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260" 
              alt="Fabric Detail" 
              style={{
                ...styles.mainImg,
                transform: isVisible ? 'scale(1)' : 'scale(1.1)',
                transition: 'transform 2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
              }}
            />
            {/* Animated Gold Needle */}
            <div style={{
              ...styles.goldLine,
              width: isVisible ? '120px' : '0px',
              transition: 'width 1s ease 1.2s'
            }}></div>
            <div style={styles.coordText}>51.5074° N, 0.1278° W</div>
          </div>
          
          <div style={{
            ...styles.floatingTag,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 1.5s'
          }}>
            <span style={{fontWeight: '900'}}>QUALITY</span> / 100%
          </div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh', // Fits exactly in screen
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    fontFamily: '"Inter", sans-serif',
    overflow: 'hidden',
    padding: '80px 0'
  },
  container: {
    width: '85%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '100px'
  },
  textSide: {
    flex: '1',
  },
  label: {
    fontSize: '11px',
    letterSpacing: '5px',
    color: '#aaa',
    marginBottom: '20px'
  },
  title: {
    fontSize: '3.8vw',
    fontWeight: '900',
    color: '#000',
    lineHeight: '1.1',
    marginBottom: '50px'
  },
  goldThin: {
    color: '#c5a059',
    fontWeight: '200',
    fontStyle: 'italic'
  },
  feature: {
    display: 'flex',
    gap: '30px',
    marginBottom: '35px',
    borderBottom: '1px solid #f5f5f5',
    paddingBottom: '25px'
  },
  num: {
    fontSize: '12px',
    fontWeight: '900',
    color: '#c5a059'
  },
  featureTitle: {
    fontSize: '13px',
    letterSpacing: '2px',
    color: '#000',
    marginBottom: '8px'
  },
  featureDesc: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.6',
    maxWidth: '420px'
  },
  visualSide: {
    flex: '1',
    position: 'relative'
  },
  imageBox: {
    width: '100%',
    height: '75vh', // Proportional to screen height
    backgroundColor: '#f9f9f9',
    position: 'relative',
    overflow: 'hidden'
  },
  mainImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(10%)'
  },
  goldLine: {
    position: 'absolute',
    top: '50%',
    left: '-60px',
    height: '1px',
    backgroundColor: '#c5a059',
    zIndex: 10
  },
  coordText: {
    position: 'absolute',
    bottom: '-35px',
    right: '0',
    fontSize: '10px',
    letterSpacing: '3px',
    color: '#aaa'
  },
  floatingTag: {
    position: 'absolute',
    top: '40px',
    right: '-20px',
    backgroundColor: '#000',
    color: '#fff',
    padding: '15px 30px',
    fontSize: '10px',
    letterSpacing: '4px',
    boxShadow: '20px 20px 40px rgba(0,0,0,0.1)'
  }
};

export default Craftsmanship;
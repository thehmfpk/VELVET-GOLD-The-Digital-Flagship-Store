import React, { useEffect, useState } from 'react';

const Navbar = ({ cartCount, isCartOpen, onToggleCart }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'shop', 'reviews'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
      if (window.scrollY < 100) setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = (section) => ({
    ...styles.linkBtn,
    color: activeSection === section ? '#c5a059' : '#000',
    // Custom active indicator: small gold bar
    borderBottom: activeSection === section ? '2px solid #c5a059' : '2px solid transparent',
  });

  return (
    <nav style={styles.nav}>
      {/* 1. UNIQUE ARCHITECTURAL LOGO */}
      <div 
        style={styles.logo} 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <span style={styles.logoV}>VELVET</span>
        <span style={styles.logoRest}></span>
        <span style={styles.logoGold}>GOLD</span>
      </div>

      {/* 2. NAVIGATION LINKS */}
      <div style={styles.links}>
        <button style={navLinkStyle('home')} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Archive
        </button>
        <button style={navLinkStyle('shop')} onClick={() => document.getElementById('shop').scrollIntoView({behavior: 'smooth'})}>
          Collection
        </button>
        <button style={navLinkStyle('reviews')} onClick={() => document.getElementById('reviews').scrollIntoView({behavior: 'smooth'})}>
          Journal
        </button>

        {/* 3. UNIQUE ROUNDED CAPSULE CART */}
        <button 
          style={{
            ...styles.cartBtn, 
            background: isCartOpen ? '#c5a059' : '#000',
            borderRadius: '100px', // Round style as requested
          }} 
          onClick={onToggleCart}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            if(!isCartOpen) e.target.style.background = '#333';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            if(!isCartOpen) e.target.style.background = '#000';
          }}
        >
          {isCartOpen ? (
            <span style={styles.btnContent}>CLOSE ×</span>
          ) : (
            <span style={styles.btnContent}>
              BAG <span style={styles.badge}>{cartCount}</span>
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

const styles = {
  nav: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: '15px 8%', 
    background: 'rgba(255, 255, 255, 0.92)', 
    backdropFilter: 'blur(12px)', 
    position: 'fixed', 
    top: 0, 
    left: 0,
    right: 0,
    zIndex: 10000, 
    borderBottom: '1px solid rgba(0,0,0,0.03)',
    transition: 'all 0.4s ease'
  },
  // Unique Text Style for Logo
  logo: { 
    fontSize: '1.5rem', 
    cursor: 'pointer',
    color: '#000',
    display: 'flex',
    alignItems: 'baseline',
    gap: '2px'
  },
  logoV: {
    fontWeight: '900',
    fontSize: '2rem',
    letterSpacing: '-2px'
  },
  logoRest: {
    fontWeight: '200',
    fontSize: '0.9rem',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    marginRight: '8px'
  },
  logoGold: {
    fontWeight: '900',
    color: '#c5a059',
    letterSpacing: '1px'
  },
  links: { 
    display: 'flex', 
    gap: '35px', 
    alignItems: 'center' 
  },
  linkBtn: { 
    background: 'none', 
    border: 'none', 
    padding: '8px 0',
    cursor: 'pointer', 
    fontWeight: '700', 
    fontSize: '10px', 
    textTransform: 'uppercase',
    letterSpacing: '2px',
    transition: 'all 0.3s ease',
  },
  cartBtn: { 
    color: '#fff', 
    padding: '10px 28px', 
    border: 'none', 
    cursor: 'pointer', 
    fontWeight: 'bold', 
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    minWidth: '120px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  },
  btnContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontSize: '10px',
    letterSpacing: '2px'
  },
  badge: {
    background: '#fff',
    color: '#000',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '9px',
    fontWeight: '900'
  }
};

export default Navbar;
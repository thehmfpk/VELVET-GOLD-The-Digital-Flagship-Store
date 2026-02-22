import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Category from './components/Category';
import Spotlight from './components/Spotlight'; // Added
import Craftsmanship from './components/Craftsmanship'; // Added
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 1. Add to Cart Logic
  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }]);
  };

  // 2. Remove from Cart Logic
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.cartId !== id));
  };

  // 3. Toggle Cart Logic
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // 4. Calculate Total Price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.appWrapper}>
      {/* Fixed Navbar with Toggle Logic */}
      <Navbar 
        cartCount={cart.length} 
        isCartOpen={isCartOpen} 
        onToggleCart={toggleCart} 
      />

      {/* Main Page Content */}
      <main>
        <Hero />
        
        {/* Category Section with Passive Add to Cart */}
        <Category onAddToCart={addToCart} />

        {/* --- ADDED COMPONENTS START --- */}
        
        {/* Spotlight: Pass a specific object so it adds correctly to your array */}
        <Spotlight onAddToCart={() => addToCart({ 
          id: 'ltd-01', 
          name: 'SERIES_026 CABAN JACKET', 
          price: 850, 
          image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg' 
        })} />

        <Craftsmanship />

        {/* --- ADDED COMPONENTS END --- */}
        
        {/* Full Screen Immersive Reviews */}
        <Reviews />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Conditional Cart Sidebar */}
      {isCartOpen && (
        <CartSidebar 
          cart={cart} 
          onClose={() => setIsCartOpen(false)} 
          onRemove={removeFromCart}
          total={totalPrice}
        />
      )}
    </div>
  );
}

const styles = {
  appWrapper: {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Inter', sans-serif",
    overflowX: 'hidden',
  }
};

export default App;
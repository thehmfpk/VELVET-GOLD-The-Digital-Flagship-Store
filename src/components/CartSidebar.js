import React from 'react';

const CartSidebar = ({ cart, onClose, onRemove, total }) => (
  <div style={styles.overlay} onClick={onClose}>
    {/* StopPropagation prevents the sidebar from closing when clicking inside it */}
    <div style={styles.sidebar} onClick={(e) => e.stopPropagation()}>
      <div style={styles.header}>
        <h2 style={{ margin: 0, fontWeight: '300' }}>YOUR SHOPPING BAG</h2>
        <button onClick={onClose} style={styles.closeBtn}>&times;</button>
      </div>

      <div style={styles.content}>
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <p style={{ color: '#999' }}>Your bag is currently empty.</p>
          </div>
        ) : (
          cart.map(item => (
            <div key={item.cartId} style={styles.item}>
              <img src={item.image} alt={item.name} style={styles.itemImg} />
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0, fontSize: '1rem' }}>{item.name}</h4>
                <p style={{ color: '#d4af37' }}>${item.price}.00</p>
                <button 
                  onClick={() => onRemove(item.cartId)} 
                  style={styles.removeBtn}
                >
                  REMOVE
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div style={styles.footer}>
          <div style={styles.totalRow}>
            <span>SUBTOTAL</span>
            <span>${total}.00</span>
          </div>
          <button 
            style={styles.finalizeBtn} 
            onClick={() => alert("Thank you! Your order has been placed.")}
          >
            CHECKOUT & FINALIZE
          </button>
        </div>
      )}
    </div>
  </div>
);

const styles = {
  overlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', justifyContent: 'flex-end' },
  sidebar: { width: '450px', background: '#fff', height: '100%', display: 'flex', flexDirection: 'column' },
  header: { padding: '30px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  closeBtn: { fontSize: '35px', background: 'none', border: 'none', cursor: 'pointer' },
  content: { flex: 1, overflowY: 'auto', padding: '30px' },
  item: { display: 'flex', gap: '20px', marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid #f9f9f9' },
  itemImg: { width: '80px', height: '100px', objectFit: 'cover' },
  removeBtn: { background: 'none', border: 'none', color: '#ff4757', padding: 0, cursor: 'pointer', fontSize: '0.8rem', marginTop: '5px' },
  footer: { padding: '30px', background: '#fcfcfc', borderTop: '1px solid #eee' },
  totalRow: { display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '20px' },
  finalizeBtn: { width: '100%', padding: '20px', background: '#d4af37', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 'bold', letterSpacing: '2px' }
};

export default CartSidebar;
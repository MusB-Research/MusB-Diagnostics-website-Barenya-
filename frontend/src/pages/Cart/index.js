import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, setQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  if (cartItems.length === 0) {
    return (
      <div className="cart-page fade-in">
        <div className="cart-empty">
          <ShoppingBag size={80} className="cart-empty-icon" />
          <h2>Your Cart is Empty</h2>
          <p>Browse our test catalog and add items to get started.</p>
          <Link to="/tests" className="btn btn-primary btn-lg">
            Browse Catalog <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page fade-in">
      <div className="cart-header-banner">
        <h1 className="cart-title"><ShoppingCart size={32} /> Your Cart</h1>
        <p className="cart-subtitle">{cartItems.length} test{cartItems.length > 1 ? 's' : ''} in your cart</p>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item glass">
              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-category">{item.category}</p>
                <p className="cart-item-meta">
                  Sample: {item.sampleType} &bull; Turnaround: {item.turnaround}
                </p>
              </div>

              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => decreaseQuantity(item.id)}
                    title="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    className="qty-input"
                    value={editingId === item.id ? editValue : item.quantity}
                    min="1"
                    onFocus={() => { setEditingId(item.id); setEditValue(String(item.quantity)); }}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => {
                      const val = parseInt(editValue);
                      setQuantity(item.id, val > 0 ? val : 1);
                      setEditingId(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') { e.target.blur(); }
                    }}
                  />
                  <button
                    className="qty-btn"
                    onClick={() => increaseQuantity(item.id)}
                    title="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="cart-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove from cart"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary glass">
          <h3>Order Summary</h3>
          <div className="summary-rows">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-row">
                <span>{item.title} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <Link to="/book" className="btn btn-primary cart-checkout-btn">
            Proceed to Book <ArrowRight size={18} />
          </Link>
          <button className="btn btn-outline cart-clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

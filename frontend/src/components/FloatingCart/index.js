import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './FloatingCart.css';

const FloatingCart = () => {
  const { cartCount } = useCart();

  return (
    <Link to="/cart" className="floating-cart-btn fade-in" aria-label="View Cart">
      <ShoppingCart className="floating-cart-icon" />
      {cartCount > 0 && <span className="floating-cart-badge">{cartCount}</span>}
    </Link>
  );
};

export default FloatingCart;

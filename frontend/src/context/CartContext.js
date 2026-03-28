import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (test) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === test.id);
      if (existing) {
        return prev.map((item) =>
          item.id === test.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...test, quantity: 1 }];
    });
  };

  const removeFromCart = (testId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== testId));
  };

  const increaseQuantity = (testId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === testId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (testId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === testId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const setQuantity = (testId, quantity) => {
    const qty = Math.max(1, parseInt(quantity) || 1);
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === testId ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        setQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

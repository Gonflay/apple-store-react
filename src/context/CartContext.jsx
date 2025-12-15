import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 
  const [orders, setOrders] = useState([]); 

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const createOrder = () => {
    if (cart.length === 0) return;
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const newOrder = { 
      id: Date.now(), 
      items: [...cart], 
      total 
    };
    setOrders([...orders, newOrder]);
    setCart([]); 
  };

  const updateOrder = (id, updatedItems) => {
    setOrders(orders.map(order => 
      order.id === id 
        ? { 
            ...order, 
            items: updatedItems, 
            total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0) 
          } 
        : order
    ));
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      orders, 
      addToCart, 
      removeFromCart, 
      createOrder, 
      updateOrder, 
      deleteOrder 
    }}>
      {children}
    </CartContext.Provider>
  );
};
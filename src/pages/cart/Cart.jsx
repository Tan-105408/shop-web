import React from 'react';
import './Cart.css';

const Cart = ({ cartItems = [], setCartItems }) => {
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price || 0), 0);
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h2>Total: ${calculateTotal().toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;







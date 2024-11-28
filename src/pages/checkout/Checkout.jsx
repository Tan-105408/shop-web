import React from 'react';
import './checkout.css';

const Checkout = ({ cartItems = [] }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price || 0), 0);
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          <div className="checkout-total">
            <h3>Total Price: ${calculateTotal().toFixed(2)}</h3>
            <button onClick={() => alert('Thank you for your purchase!')}>Complete Purchase</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;






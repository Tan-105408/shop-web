import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css'; // Import file CSS cho Product

const Product = ({ product, addToCart }) => {
  const navigate = useNavigate();

  if (!product) {
    return <div>Product data is not available</div>;
  }

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${parseFloat(product.price).toFixed(2)}</p>
      <button onClick={() => navigate(`/product/${product.id}`)}>View</button>
      {addToCart && (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;





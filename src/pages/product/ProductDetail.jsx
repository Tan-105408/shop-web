import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; // Giả sử bạn có file CSS cho ProductDetail

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;


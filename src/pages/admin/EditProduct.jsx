// src/pages/admin/EditProduct.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = ({ products, setProducts }) => {
  const { id } = useParams();
  const productToEdit = products.find(product => product.id === id);
  const [name, setName] = useState(productToEdit ? productToEdit.name : '');
  const [price, setPrice] = useState(productToEdit ? productToEdit.price : '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts(products.map(product => 
      product.id === id ? { ...product, name, price: parseFloat(price) } : product
    ));
    navigate('/admin');
  };

  return (
    <div className="edit-product">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;

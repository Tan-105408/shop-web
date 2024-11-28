import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

const AddProduct = ({ setProducts }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = { 
      id: Date.now(), 
      name, 
      description: description || 'No description available', 
      price: parseFloat(price) || 0 
    };
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, newProduct];
      localStorage.setItem('products', JSON.stringify(updatedProducts)); // Lưu vào Local Storage
      return updatedProducts;
    });
    navigate('/admin');  // Điều hướng về trang admin sau khi thêm sản phẩm
  };

  return (
    <div className="add-product-container">
      <h2>Thêm sản phẩm</h2>
      <form onSubmit={handleAddProduct}>
        <div className="input-group">
          <label>Tên sản phẩm:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Mô tả:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Giá bán:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit">Thêm sản phẩm</button>
      </form>
    </div>
  );
};

export default AddProduct;

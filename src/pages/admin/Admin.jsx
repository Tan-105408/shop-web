import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './AddProduct';
import './Admin.css';
import EditProduct from './EditProduct';
import ProductList from './ProductList';
import Sidebar from './Slidebar';
import UserList from './UserList';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const loadFromLocalStorage = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(`Error parsing JSON from localStorage: ${key}`, error);
      return [];
    }
  };

  useEffect(() => {
    setProducts(loadFromLocalStorage('products'));
    setUsers(loadFromLocalStorage('users'));
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('users', JSON.stringify(users));
  }, [products, users]);

  return (
    <div className="admin">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<ProductList products={products} setProducts={setProducts} />} />
          <Route path="/add" element={<AddProduct setProducts={setProducts} />} />
          <Route path="/edit/:id" element={<EditProduct products={products} setProducts={setProducts} />} />
          <Route path="/users" element={<UserList users={users} setUsers={setUsers} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;


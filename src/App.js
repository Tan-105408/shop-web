import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Admin from './pages/admin/Admin';
import Checkout from './pages/checkout/Checkout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Sorry from './pages/login/sorry/Sorry';
import Register from './pages/register/Register';
import Search from './pages/search/Search';

function App() {
  const [products, setProducts] = useState([]);  // Khai báo và khởi tạo biến products
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products} cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/home" element={<Home products={products} cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sorry" element={<Sorry />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/admin/*" element={<Admin products={products} setProducts={setProducts} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



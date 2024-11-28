import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Home.css';

function Home({ cartItems = [], setCartItems }) {
  const [products, setProducts] = useState([]);

  // Lấy dữ liệu từ Local Storage khi khởi động
  useEffect(() => {
    const loadProducts = () => {
      try {
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
          setProducts(JSON.parse(savedProducts));
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error('Error parsing JSON from localStorage: products', error);
        setProducts([]);
      }
    };

    loadProducts();
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <div className="home">
      <h1>Home Page</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      <Cart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} />
      {cartItems.length > 0 && (
        <Link to="/checkout">
          <button>Go to Checkout</button>
        </Link>
      )}
    </div>
  );
}

export default Home;

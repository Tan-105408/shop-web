import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Chuyển hướng đến trang tìm kiếm với query
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <header className='header'>
      <h1>My Website</h1>
      <nav>
        <span>
          <ul>
            <li className='homeli'><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </span>
      </nav>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default Header;


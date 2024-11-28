import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Search.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Search = ({ products = [] }) => {
  const query = useQuery();
  const searchQuery = query.get("query")?.toLowerCase() || '';

  console.log('Search query:', searchQuery); // Debugging purpose
  console.log('Products:', products); // Debugging purpose

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery) || 
    product.description.toLowerCase().includes(searchQuery)
  );

  console.log('Filtered products:', filteredProducts); // Debugging purpose

  return (
    <div className="search">
      <h1>Search Results</h1>
      <p>Showing results for: {searchQuery}</p>
      <div className="search-results">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="search-item">
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>Price: ${parseFloat(product.price).toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      <Link to="/home">
        <button>Return to Home</button>
      </Link>
    </div>
  );
};

export default Search;





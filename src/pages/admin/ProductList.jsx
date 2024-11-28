import React from 'react';
import './ProductList.css';

const ProductList = ({ products, setProducts }) => {
  return (
    <div className="product-list">
      <h2>Danh sách sản phẩm</h2>
      <table>
        <thead>
          <tr>
            <th>Tên Sản Phẩm</th>
            <th>Hãng</th>
            <th>Giá Bán</th>
            <th>Mô Tả</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.price}₫</td>
                <td>{product.description}</td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button className="delete-btn">🗑️</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Không có sản phẩm nào.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

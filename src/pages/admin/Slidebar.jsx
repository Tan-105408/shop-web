import React from 'react';
import { Link } from 'react-router-dom';
import './Slidebar.css';

const Sidebar = () => {
  return (
    <div className="slidebar">
      <h2>Nhóm 5</h2>
      <ul>
        <li><Link to="/admin">Quản lý sản phẩm</Link></li>
        <li><Link to="/admin/add">Thêm sản phẩm</Link></li>
        <li><Link to="/admin/users">Quản lý người dùng</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

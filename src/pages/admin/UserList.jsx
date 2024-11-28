import React, { useEffect } from 'react';
import './UserList.css';

const UserList = ({ users, setUsers }) => {
  useEffect(() => {
    const loadFromLocalStorage = (key) => {
      try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
      } catch (error) {
        console.error(`Error parsing JSON from localStorage: ${key}`, error);
        return [];
      }
    };

    setUsers(loadFromLocalStorage('users'));
  }, [setUsers]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <div className="user-list">
      <h2>Quản lý người dùng</h2>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ Tên</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button className="delete-btn">🗑️</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

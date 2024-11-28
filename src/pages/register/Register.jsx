import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './Register.css';

const Register = ({ users, setUsers }) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username là bắt buộc'),
    email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
    phone: Yup.string().required('Số điện thoại là bắt buộc'),
    password: Yup.string()
      .required('Password là bắt buộc')
      .min(8, 'Password phải có ít nhất 8 ký tự'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords không khớp')
      .required('Xác nhận Password là bắt buộc'),
    dob: Yup.date().required('Ngày tháng năm sinh là bắt buộc'),
    gender: Yup.string().required('Giới tính là bắt buộc')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const updatedUsers = [...users, data];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Lưu vào Local Storage
    navigate('/admin');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label>Username:</label>
          <input type="text" {...register('username')} />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" {...register('email')} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className="input-group">
          <label>Phone:</label>
          <input type="text" {...register('phone')} />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>
        <div className="input-group">
          <label>Date of Birth:</label>
          <input type="date" {...register('dob')} />
          {errors.dob && <p className="error">{errors.dob.message}</p>}
        </div>
        <div className="input-group">
          <label>Gender:</label>
          <select {...register('gender')}>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="error">{errors.gender.message}</p>}
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" {...register('password')} />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <div className="input-group">
          <label>Confirm Password:</label>
          <input type="password" {...register('confirmPassword')} />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;



import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './Login.css';

const Login = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });
  
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { username, password } = data;
    if (username === 'tan' && password === '12345') {
      navigate('/home');
    } else {
      navigate('/sorry');
    }
    if (username === 'admin' && password === '250805') {
      navigate('/admin');
    } else {
      navigate('/sorry');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label>Username:</label>
          <input 
            type="text" 
            {...register('username')} 
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input 
            type="password" 
            {...register('password')} 
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="signup">Or Register!</p>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Login;



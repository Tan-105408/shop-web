import React from 'react';
import './Sorry.css';
const Sorry = () => (
  <div className='sorry'>
    <h2>Sorry, incorrect login credentials!</h2>
    <p>Please check your username and password and try again.</p>
    <a href="/fogetpassword">Fogot password. Press here!</a><br />
    <a href="/login">Return to Login</a>
  </div>
);

export default Sorry;

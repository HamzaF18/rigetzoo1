import "./AuthForm.css";

import React, { useState } from 'react';
import axios from 'axios';

function AuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/signin/', { username, password });
      console.log(response.data);
      window.location.href = '/ticket';
    } catch (error) {
      console.error('Error:', error.response.data.detail);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-h1">
        <h1>Login</h1>
      </div>
      <div className="user-input">
        <input className="user-container" type="text" placeholder="username is Hamza" value={username} onChange={(e) => setUsername(e.target.value)}  />
      </div>
      <div className="passwrd-input">
        <input className="passwrd-container" type="password" placeholder="password is Farah" value={password} onChange={(e) => setPassword(e.target.value)}  />
      </div>
      <div className="auth-btn">
        <button onClick={handleSubmit}>done</button>
      </div>
      <a href="/register">Don't have an account? Register</a>
    </div>
  );
}

export default AuthForm;
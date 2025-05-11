import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const loginwithgoogle= ()=>{
    window.open("http://localhost:6005/auth/google/callback","_self")
  }

  return (
    <div className="login-form">
      <h2>Login to Auto SEO Tool</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="google-login">
        <button onClick={loginwithgoogle}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Admin email (specifically check karein)
  const adminEmail = "admin@gmail.com";  // <-- Tum yahan apni admin email change kar sakte ho

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      onLogin(); // App.jsx ko batayenge user login hua

      if (email === adminEmail) {
        navigate('/admin-dashboard'); // If admin, redirect to Admin Dashboard
      } else {
        navigate('/home'); // Normal user goes to home
      }
    } else {
      alert('Please fill all fields');
    }
  };

  const handleGoogleLogin = () => {
    alert('Google login (dummy)');
    onLogin();
    navigate('/home'); // Google login hamesha home bhej raha (simple logic ke liye)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">Log in to your Auto SEO Tool</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="my-4 text-center text-gray-400">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Login with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ContactUs from './pages/Contactus';
import Home from './pages/Home';
import Profile from './pages/Profile'; // ✅ Import Profile

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 min-h-screen bg-gray-100">
        <Navbar toggleSidebar={toggleSidebar} />
      
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={ <Home /> }/>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected Routes */}
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} /> {/* ✅ Profile protected */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

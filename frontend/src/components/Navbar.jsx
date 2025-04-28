import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // <-- import useLocation
import logo from "../../asserts/logo.png";

const Navbar = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // <-- get current route

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (location.pathname === "/") {
      // only add scroll listener on home page
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // re-run when path changes

  // Set classes based on scroll only if on Home page
  const navbarClasses = `fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 shadow-md z-50 transition-all duration-300 ${
    location.pathname === "/"
      ? (isScrolled ? 'backdrop-blur text-white' : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white')
      : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' // No scroll effect on other pages
  }`;

  return (
    <nav className={navbarClasses}>
      {/* Left - Sidebar Toggle & Logo */}
      <div className="flex items-center gap-3">
        <a href="/">
          <img className="h-[70px] w-[150px]" src={logo} alt="logo" />
        </a>
      </div>

      {/* Right - Navigation Links */}
      <div className="flex gap-8 text-xl">
        <Link to="/" className="hover:text-yellow-300 transition duration-200">
          Home
        </Link>

        <Link to="/contact" className="hover:text-yellow-300 transition duration-200">
          Contact Us
        </Link>

        <Link to="/profile" className="hover:text-yellow-300 transition duration-200">
          Profile
        </Link>

        <span
          onClick={() => alert('Logout logic will go here')}
          className="hover:text-yellow-300 cursor-pointer transition duration-200"
        >
          Login
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

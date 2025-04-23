import React from 'react';
import { Link } from 'react-router-dom'; // <-- import Link

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="flex items-center justify-between bg-blue-700 text-white px-6 py-4 shadow-md">
      {/* Left - Sidebar Toggle & Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="text-2xl font-bold focus:outline-none hover:text-gray-200"
        >
          ☰
        </button>
        <h1 className="text-xl font-semibold tracking-wide">Auto Seo Tool</h1>
      </div>

      {/* Right - Navigation Links */}
      <div className="flex gap-6 text-sm sm:text-base">
        <Link
          to="/"
          className="hover:text-yellow-300 transition duration-200"
        >
          Home
        </Link>

        <Link
          to="/contact"
          className="hover:text-yellow-300 transition duration-200"
        >
          Contact Us
        </Link>

        <Link
          to="/profile" // make sure this route exists later
          className="hover:text-yellow-300 transition duration-200"
        >
          Profile
        </Link>

        <span
          onClick={() => alert('Logout logic will go here')}
          className="hover:text-yellow-300 cursor-pointer transition duration-200"
        >
          Logout
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

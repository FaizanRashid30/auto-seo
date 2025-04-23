import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-60 bg-gray-800 text-white p-4 transition-transform duration-300 z-20 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Products</h2>
        <button
          onClick={toggleSidebar}
          className="text-white text-xl font-bold hover:text-red-400"
        >
          ✖
        </button>
      </div>

      {/* Sidebar Content */}
      <ul className="space-y-2">
        <li className="hover:bg-gray-700 p-2 rounded">Product 1</li>
        <li className="hover:bg-gray-700 p-2 rounded">Product 2</li>
        <li className="hover:bg-gray-700 p-2 rounded">Product 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;

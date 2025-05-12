import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../asserts/logo.png";
import axios from "axios";

const Navbar = () => {
  const [userdata, setUserdata] = useState({});
  console.log("response", userdata);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:6005/login/sucess", {
        withCredentials: true,
      });
      setUserdata(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  const logout = () => {
    window.open("http://localhost:6005/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md py-4 px-6 fixed w-full z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold">
          <NavLink to="/">
          <img className="h-[70px] w-[150px]" src={logo} alt="logo" />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 items-center text-lg">
          <li>
            <NavLink
              to="/"
              className="hover:text-yellow-300 transition duration-200"
            >
              Home
            </NavLink>
          </li>

          {Object.keys(userdata).length > 0 ? (
            <>
              
              <li>
                <NavLink
                  to="/profile"
                  className="hover:text-yellow-300 transition duration-200"
                >
                  Profile
                </NavLink>
              </li>
             
              <li className="font-semibold text-black bg-white px-3 py-1 rounded">
                {userdata?.displayName}
              </li>
              <li>
                <img
                  src={userdata?.image}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              </li>
               <li>
                <button
                  onClick={logout}
                  className="hover:text-yellow-300 transition duration-200 focus:outline-none"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                className="hover:text-yellow-300 transition duration-200"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

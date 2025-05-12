import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:6005/login/sucess", {
        withCredentials: true,
      });
      setUser(response.data.user);
    } catch (error) {
      console.log("Failed to fetch user:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <img
          src={user?.image || user?.photo}
          alt="User"
          className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-indigo-500 object-cover"
        />
        <h2 className="text-2xl font-bold mb-2 text-indigo-700">
          {user?.displayName || user?.name}
        </h2>
        <p className="text-gray-600 mb-4">{user?.email || "Email not available"}</p>
        <button
          onClick={() => window.open("http://localhost:6005/logout", "_self")}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;

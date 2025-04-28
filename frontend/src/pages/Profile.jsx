import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    name: "Azan Saleem",
    email: "azansaleem7@gmail.com",
    profilePic: "https://i.pravatar.cc/150?img=12",
    joinedDate: "2024-04-10",
    seoGenerations: 42
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-950 to-black flex items-center justify-center p-5">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full shadow-md mb-4 object-cover"
        />
        <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
        <p className="text-gray-500">{user.email}</p>

        <div className="mt-4">
          <p className="text-sm text-gray-600">Joined: {user.joinedDate}</p>
          <p className="text-sm text-gray-600">SEO Generated: {user.seoGenerations} times</p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
          >
            Edit Profile
          </button>
          <button
            className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

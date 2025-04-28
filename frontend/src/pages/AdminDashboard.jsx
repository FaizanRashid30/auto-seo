import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Total Users */}
        <div className="bg-blue-600 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-4xl font-bold">128</p> {/* Dummy data */}
        </div>

        {/* Total SEO Requests */}
        <div className="bg-green-600 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Total SEO Requests</h2>
          <p className="text-4xl font-bold">542</p> {/* Dummy data */}
        </div>

        {/* Recent Activities */}
        <div className="bg-purple-600 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
          <p className="text-sm text-center">User John uploaded a file 2 min ago<br />User Sara updated profile</p> {/* Dummy data */}
        </div>
      </div>

      <div className="mt-10">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-all">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React, { useState } from 'react';

const Home = () => {
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState('');

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleGenerateSEO = () => {
    alert('🚀 SEO Generated!\n\nDescription: ' + desc);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png"), linear-gradient(135deg, rgba(255, 192, 203, 0.6), rgba(135, 206, 235, 0.6))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Main Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 drop-shadow-lg">Auto SEO Tool</h1>
        <p className="text-gray-600 text-lg mt-2 font-medium">Boost your product visibility with AI-powered SEO</p>
      </div>

      {/* Upload Section */}
      <div className="bg-white/40 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-md text-center border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Upload Product Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4 w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-white file:bg-blue-600 hover:file:bg-blue-700"
        />
        {image && (
          <img
            src={image}
            alt="Preview"
            className="mb-4 h-40 mx-auto rounded-md shadow-md object-cover border border-gray-300"
          />
        )}
        <textarea
          placeholder="Optional: Add your own description..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded mb-4 resize-none"
          rows="3"
        />
        <button
          onClick={handleGenerateSEO}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:scale-105 transform transition duration-300"
        >
          Generate SEO
        </button>
      </div>
    </div>
  );
};

export default Home;

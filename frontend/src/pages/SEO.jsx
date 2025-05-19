import React, { useState } from 'react';

const SEO = () => {
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
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/cubes.png"), linear-gradient(135deg, rgba(0, 0, 50, 0.8), rgba(0, 50, 100, 1))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Main Heading */}
      <div className="text-center mb-10 relative z-10">
        <img src={image} alt=''/>
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Auto SEO Tool
        </h1>
        <p className="text-white text-lg mt-2 font-medium drop-shadow-md">
          Boost your product visibility with AI-powered SEO
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-12 w-full max-w-lg text-center border border-gray-200 z-10 relative">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Upload Product Image</h2>

        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4 w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-white file:bg-blue-600 hover:file:bg-blue-700 transition duration-300"
        />

        {/* Image Preview */}
        {image && (
          <img
            src={image}
            alt="Preview"
            className="mb-6 h-40 mx-auto rounded-xl shadow-lg object-cover border border-gray-300 transition-transform duration-300 transform hover:scale-105"
          />
        )}

        {/* Description Textarea */}
        <textarea
          placeholder="Optional: Add your own description..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 resize-none shadow-md focus:ring-2 focus:ring-blue-500 transition duration-300"
          rows="4"
        />

        {/* Generate SEO Button */}
        <button
          onClick={handleGenerateSEO}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:scale-105 transform transition-all duration-300"
        >
          Generate SEO
        </button>
      </div>
    </div>
  );
};

export default SEO;

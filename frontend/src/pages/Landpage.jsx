import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landpage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login'); // Redirects to the login page
  };

  const cardData = [
    {
      title: 'Fast Results',
      description: 'Get your SEO content generated in seconds — quick and efficient.',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      title: 'User-Friendly',
      description: 'Our tool is designed with a simple, intuitive interface that anyone can use.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Effective SEO',
      description: 'Boost your online presence and rank higher with optimized SEO content.',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'Affordable Pricing',
      description: 'Our tool offers competitive pricing plans, making it affordable for everyone.',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      title: 'Customizable Output',
      description: 'Tailor the SEO content according to your specific needs and preferences.',
      gradient: 'from-red-500 to-pink-700',
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 via-indigo-900 to-blue-700">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center text-white p-6">
        <h1 className="text-5xl font-bold mb-6">Welcome to Auto SEO Tool</h1>
        <p className="text-xl mb-8">
          Instantly generate SEO content from your product images — fast, easy, and effective.
        </p>
        <button
          onClick={handleStart}
          className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-200 transition duration-300"
        >
          Let's Try
        </button>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10 px-6 w-full max-w-7xl">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${card.gradient} p-10 rounded-2xl shadow-lg hover:shadow-2xl transform hover:translate-y-4 transition-all duration-500`}
          >
            <h3 className="text-3xl font-semibold mb-4 text-white">{card.title}</h3>
            <p className="text-gray-100">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landpage;

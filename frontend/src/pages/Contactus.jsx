import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  // 🧠 State Management for Form Inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🚀 Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');
    setStatusType('');

    if (!name || !email || !message) {
      setStatusMessage('⚠️ Please fill in all required fields.');
      setStatusType('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // ✅ Backend POST Request (expected payload)
      // {
      //   name: string (required),
      //   email: string (required),
      //   subject: string (optional),
      //   message: string (required)
      // }

      // 🧩 Recommended Backend Schema (Mongoose):
      /*
        const ContactSchema = new mongoose.Schema({
          name: { type: String, required: true },
          email: { type: String, required: true },
          subject: { type: String },
          message: { type: String, required: true },
          createdAt: { type: Date, default: Date.now }
        });
      */

      const response = await axios.post('https://your-backend-api.com/contact', {
        name,
        email,
        subject,
        message,
      });

      if (response.status === 200) {
        setStatusMessage('✅ Message sent successfully!');
        setStatusType('success');

        // Reset form
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    } catch (error) {
      setStatusMessage('❌ Something went wrong. Please try again later.');
      setStatusType('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-4xl grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Panel */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-3">Let’s Talk!</h2>
          <p className="text-base mb-4 leading-relaxed">Have a question or suggestion? We'd love to hear from you.</p>
          <img
            src="https://www.svgrepo.com/show/331980/contact.svg"
            alt="Contact"
            className="w-full max-w-xs mx-auto mt-auto opacity-90"
          />
        </div>

        {/* Right Panel */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message *</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              ></textarea>
            </div>

            {/* 🟢 Status Feedback */}
            {statusMessage && (
              <p className={`text-sm text-center font-semibold ${statusType === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2.5 rounded-md text-white text-base font-medium transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

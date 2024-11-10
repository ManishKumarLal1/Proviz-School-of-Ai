import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ApplicationForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    statement: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/applications', formData);
      if (response.status === 200) {
        alert('Application submitted successfully!');
        setFormData({ name: '', email: '', statement: '' });
      } else {
        alert('Failed to submit application.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 fixed inset-0 z-50">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          type="button"  // Prevents form submission
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
        >
          <AiOutlineClose size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Join Our Program</h2>

        <label className="block text-gray-300 font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Full Name"
          required
          className="w-full mb-4 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        />

        <label className="block text-gray-300 font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email Address"
          required
          className="w-full mb-4 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        />

        <label className="block text-gray-300 font-medium mb-2">Why do you want to join?</label>
        <textarea
          name="statement"
          value={formData.statement}
          onChange={handleChange}
          placeholder="Write a brief statement"
          required
          className="w-full mb-6 px-4 py-2 h-32 border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;

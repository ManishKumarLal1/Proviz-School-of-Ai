// HeroSection.js
import React from 'react';
import heroImage from '../assets/hero-img.jpg';

function HeroSection({ openModal }) {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container mx-auto px-6 text-center text-white flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Proviz School of AI</h1>
        <p className="mt-4 max-w-xl text-lg">Unlock the power of artificial intelligence with world-class education and hands-on projects.</p>
        <button
        onClick={() => {
          console.log("Get Started button clicked"); // Check if this logs
          openModal();
        }}
        className="bg-blue-500 text-white mt-6 py-3 px-8 rounded-full font-semibold hover:bg-blue-600 transition duration-200"
      >
        Get Started
      </button>
      </div>
    </section>
  );
}

export default HeroSection;

// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2024 Proviz School of AI. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

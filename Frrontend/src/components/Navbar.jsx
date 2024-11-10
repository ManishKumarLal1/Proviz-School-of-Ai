// Navbar.js
import React from 'react';
import logo from '../assets/Logo.jpg'


function Navbar({openModal}) {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img src={logo} alt="Proviz Logo" className="h-8" />
        <ul className="hidden md:flex space-x-6">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#features" className="hover:text-blue-500">Features</a></li>
          <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
        <button onClick={() => {
          console.log("Get Started button clicked"); // Check if this logs
          openModal();
        }} className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;

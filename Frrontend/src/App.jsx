import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

import ApplicationForm from './components/ApplicationForm';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import Features from './components/Features';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <Router>
            <Navbar openModal={openModal}/>
            {isModalOpen && <ApplicationForm closeModal={closeModal} />}
            <Hero openModal={openModal} />
           
            <Features />
            <Testimonial />
            <Footer />
            
           

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
                        >
                            &times;
                        </button>
                        <ApplicationForm />
                    </div>
                </div>
            )}
        </Router>
    );
}

export default App;

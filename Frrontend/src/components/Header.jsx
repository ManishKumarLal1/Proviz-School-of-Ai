// Features.js
import React from 'react';
import { FaProjectDiagram, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa';

function Features() {
  const features = [
    { id: 1, icon: <FaProjectDiagram />, title: "Hands-On Projects", description: "Practical AI projects to enhance learning." },
    { id: 2, icon: <FaChalkboardTeacher />, title: "Expert Mentors", description: "Learn from industry-leading experts." },
    { id: 3, icon: <FaBriefcase />, title: "Career Support", description: "Guidance to land your dream job." },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {features.map(feature => (
            <div key={feature.id} className="max-w-xs p-6 bg-white shadow-lg rounded-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-blue-500 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

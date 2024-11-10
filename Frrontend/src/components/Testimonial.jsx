// Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    { id: 1, name: "Alice", comment: "Proviz transformed my career with practical AI knowledge." },
    { id: 2, name: "Bob", comment: "The mentors here are highly experienced and supportive!" },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What Our Students Say
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="max-w-md p-6 bg-gray-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-lg mb-4">"{testimonial.comment}"</p>
              <h3 className="text-center text-xl font-semibold">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    
    <div className="h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-gray-900 text-white flex flex-col justify-center items-center px-4">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center"
      >
        Welcome to Our <span className="text-blue-300">Hospital</span> Management System
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl md:text-2xl text-center max-w-xl mb-10 text-blue-100"
      >
        A smart and secure platform for better healthcare management.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <a href="/login">Start Appointment</a>
      </motion.div>
    </div>
  );
};

export default Home;

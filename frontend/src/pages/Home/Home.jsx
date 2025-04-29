import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../assets/asstes';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-200 flex items-center justify-center px-6 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        
        {/* Text Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6 leading-tight">
            Welcome to Our <br />
            <span className="text-blue-500">Hospital Management System</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            A smart and secure platform to streamline healthcare operations and improve patient outcomes.
          </p>
          <motion.a
            href="/login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-xl transition"
          >
            Start Appointment
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <img
            src={assets.hospitalImg}
            alt="Hospital"
            className="rounded-3xl shadow-2xl w-full object-cover max-h-[500px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

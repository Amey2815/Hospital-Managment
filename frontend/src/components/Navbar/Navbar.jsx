import React from 'react';
import { motion } from 'framer-motion';
import { FaHospitalAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 w-full h-20 px-6 md:px-12 bg-white bg-opacity-80 backdrop-blur-md border-b border-blue-100 shadow-lg flex justify-between items-center z-50"
    >
      {/* Logo and Brand */}
      <div className="flex items-center gap-3">
        <FaHospitalAlt className="text-blue-600 text-3xl" />
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-800 tracking-wide">
          <a href="/">Sky Hospital</a>
        </h1>
      </div>

      {/* Links */}
      <div className="flex gap-3 md:gap-4">
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="/login"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-blue-300 transition-all"
        >
          Login
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="/register"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:shadow-cyan-300 transition-all"
        >
          Register
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Navbar;

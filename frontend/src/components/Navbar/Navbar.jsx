import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 w-full h-20 px-10 bg-white bg-opacity-80 backdrop-blur-md shadow-md flex justify-between items-center z-50"
    >
      <div>
        <h1 className="text-3xl font-bold text-blue-900">
          <a href="/">Hospital Management</a>
        </h1>
      </div>
      <div className="flex gap-4">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/login"
          className="bg-gradient-to-br from-blue-600 to-blue-400 text-white px-4 py-2 rounded-xl shadow-lg transition duration-300"
        >
          Login
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/register"
          className="bg-gradient-to-br from-blue-600 to-blue-400 text-white px-4 py-2 rounded-xl shadow-lg transition duration-300"
        >
          Register
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Navbar;

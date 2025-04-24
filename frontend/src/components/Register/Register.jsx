import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';

const Register = () => {
  const url = "http://localhost:3000";
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${url}/api/user/register`, { name, email, password });
      if(response.data.success) {
        localStorage.setItem('token', response.data.token);
        navigate('/login');
        // Reset form
        setName('');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background elements */}
      <motion.div 
        className="absolute w-64 h-64 bg-cyan-500/20 rounded-full -top-32 -left-32 blur-2xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute w-64 h-64 bg-purple-500/20 rounded-full -bottom-32 -right-32 blur-2xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative glass-container bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-2xl shadow-2xl w-full max-w-md space-y-8"
      >
        <div className="text-center">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Create Account
          </motion.h2>
          <p className="mt-2 text-gray-400">Join our healthcare platform</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="group relative"
          >
            <div className="flex items-center gap-3 mb-2 text-cyan-400">
              <FaUser />
              <label className="text-sm font-medium text-gray-300">Full Name</label>
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
              required
            />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="group relative"
          >
            <div className="flex items-center gap-3 mb-2 text-cyan-400">
              <FaEnvelope />
              <label className="text-sm font-medium text-gray-300">Email Address</label>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
              required
            />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="group relative"
          >
            <div className="flex items-center gap-3 mb-2 text-cyan-400">
              <FaLock />
              <label className="text-sm font-medium text-gray-300">Password</label>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
              required
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-3"
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-white/50 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Create Account</span>
                <FaArrowRight className="text-sm" />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
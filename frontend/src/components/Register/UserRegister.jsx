import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { FaUserPlus, FaUserTag, FaEnvelope, FaLock, FaChevronDown } from 'react-icons/fa';

const UserRegister = () => {
    const url = "http://localhost:3000";
    const [Data, setData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'patient'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/api/user/register`, Data);
            if(response.data.success) {
                alert('User registered successfully!');
                setData({ name: '', email: '', password: '', role: 'patient' });
            }
        } catch (error) {
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <>
            <Sidebar />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className=" overflow-hidden flex justify-center items-center pl-60 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-10"
            >
                <div className="relative w-full max-w-2xl mx-auto">
                    {/* Animated background elements */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl" />
                    <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl" />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="glass-container bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl p-8"
                    >
                        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            <FaUserPlus className="inline-block mr-3" />
                            Register User
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {[
                                { icon: <FaUserTag />, name: 'name', label: 'Full Name', type: 'text' },
                                { icon: <FaEnvelope />, name: 'email', label: 'Email Address', type: 'email' },
                                { icon: <FaLock />, name: 'password', label: 'Password', type: 'password' },
                            ].map((field, index) => (
                                <motion.div
                                    key={field.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="flex items-center gap-3 mb-2 text-cyan-400">
                                        {field.icon}
                                        <label className="text-sm font-medium text-gray-300">{field.label}</label>
                                    </div>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={Data[field.name]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
                                        required
                                    />
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="group relative"
                            >
                                <div className="flex items-center gap-3 mb-2 text-cyan-400">
                                    <FaUserTag />
                                    <label className="text-sm font-medium text-gray-300">User Role</label>
                                </div>
                                <div className="relative">
                                    <select
                                        name="role"
                                        value={Data.role}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 appearance-none outline-none transition-all"
                                        required
                                    >
                                        <option value="patient">Patient</option>
                                        <option value="doctor">Doctor</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                    <FaChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" />
                                </div>
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-cyan-500/20 transition-all"
                            >
                                Register User
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default UserRegister;
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
            if (response.data.success) {
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
                className="overflow-hidden flex justify-center items-center pl-60 min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-200 p-10"
            >
                <div className="relative w-full max-w-2xl mx-auto">
                    {/* Background elements removed for cleaner light layout */}

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white border border-blue-200 rounded-2xl shadow-xl p-8"
                    >
                        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
                            <FaUserPlus className="inline-block mr-3" />
                            Register User
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6 text-gray-700">
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
                                    <div className="flex items-center gap-3 mb-2 text-blue-600">
                                        {field.icon}
                                        <label className="text-sm font-medium">{field.label}</label>
                                    </div>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={Data[field.name]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg outline-none focus:ring-1 focus:ring-blue-400 transition-all"
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
                                <div className="flex items-center gap-3 mb-2 text-blue-600">
                                    <FaUserTag />
                                    <label className="text-sm font-medium">User Role</label>
                                </div>
                                <div className="relative">
                                    <select
                                        name="role"
                                        value={Data.role}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-blue-200 rounded-lg appearance-none outline-none focus:ring-1 focus:ring-blue-400 transition-all"
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
                                className="w-full py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg font-semibold text-lg shadow-md"
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

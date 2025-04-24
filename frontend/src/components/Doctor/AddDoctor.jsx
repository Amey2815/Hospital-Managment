import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import { FaUserMd, FaStethoscope, FaPhone, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import axios from 'axios'

const AddDoctor = () => {
    const url = "http://localhost:3000"
    const [doctorData, setDoctorData] = useState({
        name: '',
        specialization: '',
        number: '',
        email: '',
        experience: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctorData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // API call logic here
        const responese = await axios.post(`${url}/api/doctor/add`,doctorData)
        if(responese.data.success){
            alert("data added successfully");
            setDoctorData({ name: '', specialization: '', contact: '', email: '', experience: '' });
        }
        else{
            alert("error")
        }
        
    };

    return (
        <div>
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
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                        >
                            <FaUserMd className="inline-block mr-3" />
                            Add New Doctor
                        </motion.h2>

                        <form onSubmit={handleSubmit} className="space-y-6 text-white">
                            {/* Name Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="group relative"
                            >
                                <div className="flex items-center gap-3 mb-2 text-cyan-400">
                                    <FaUserMd />
                                    <label className="text-sm font-medium text-gray-300">Full Name</label>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={doctorData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
                                    required
                                />
                            </motion.div>

                            {/* Specialization Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="group relative"
                            >
                                <div className="flex items-center gap-3 mb-2 text-cyan-400">
                                    <FaStethoscope />
                                    <label className="text-sm font-medium text-gray-300">Specialization</label>
                                </div>
                                <input
                                    type="text"
                                    name="specialization"
                                    value={doctorData.specialization}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
                                    required
                                />
                            </motion.div>

                            {/* Contact Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="group relative"
                            >
                                <div className="flex items-center gap-3 mb-2 text-cyan-400">
                                    <FaPhone />
                                    <label className="text-sm font-medium text-gray-300">Contact Number</label>
                                </div>
                                <input
                                    type="text"
                                    name="number"
                                    value={doctorData.number}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
                                    required
                                />
                            </motion.div>

                            {/* Email Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="group relative"
                            >
                                <div className="flex items-center gap-3 mb-2 text-cyan-400">
                                    <FaEnvelope />
                                    <label className="text-sm font-medium text-gray-300">Email Address</label>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={doctorData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
                                    required
                                />
                            </motion.div>

                            {/* Experience Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="group relative"
                            >
                                <div className="flex items-center gap-3 mb-2 text-cyan-400">
                                    <FaBriefcase />
                                    <label className="text-sm font-medium text-gray-300">Years of Experience</label>
                                </div>
                                <input
                                    type="number"
                                    name="experience"
                                    value={doctorData.experience}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 outline-none transition-all"
                                    required
                                />
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-cyan-500/20 transition-all"
                            >
                                Add Doctor
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default AddDoctor;
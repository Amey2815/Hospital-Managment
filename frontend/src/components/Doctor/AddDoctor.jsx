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
                className=" overflow-hidden flex justify-center items-center pl-60 min-h-screen  p-10"
            >
                <div className="relative w-full max-w-2xl mx-auto">
                    {/* Animated background elements */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl" />
                    <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl" />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="glass-container bg-blue-50  rounded-2xl border border-blue-100 shadow-2xl p-8"
                    >
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-3xl font-bold text-center mb-8 text-blue-600 "
                        >
                            <FaUserMd className="inline-block mr-3" />
                            Add New Doctor
                        </motion.h2>

                        <form onSubmit={handleSubmit} className="space-y-6 text-blue-700">
                            {/* Name Field */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="group relative"
                            >
                                <div className="flex items-center gap-3 mb-2 text-blue-500">
                                    <FaUserMd />
                                    <label className="text-sm font-medium ">Full Name</label>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={doctorData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white rounded-lg border border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-300 outline-none transition-all"
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
                                <div className="flex items-center gap-3 mb-2 text-blue-500">
                                    <FaStethoscope />
                                    <label className="text-sm font-medium ">Specialization</label>
                                </div>
                                <input
                                    type="text"
                                    name="specialization"
                                    value={doctorData.specialization}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white rounded-lg border border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all"
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
                                <div className="flex items-center gap-3 mb-2 text-blue-500">
                                    <FaPhone />
                                    <label className="text-sm font-medium ">Contact Number</label>
                                </div>
                                <input
                                    type="text"
                                    name="number"
                                    value={doctorData.number}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white rounded-lg border border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all"
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
                                <div className="flex items-center gap-3 mb-2 text-blue-500">
                                    <FaEnvelope />
                                    <label className="text-sm font-medium ">Email Address</label>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={doctorData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white rounded-lg border border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all"
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
                                <div className="flex items-center gap-3 mb-2 text-blue-500">
                                    <FaBriefcase />
                                    <label className="text-sm font-medium ">Years of Experience</label>
                                </div>
                                <input
                                    type="number"
                                    name="experience"
                                    value={doctorData.experience}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white rounded-lg border border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all"
                                    required
                                />
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg text-white shadow-lg hover:shadow-cyan-500/40 transition-all"
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
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaUserMd, FaStethoscope, FaPhone, FaEnvelope, FaBriefcase, FaCopy, FaEdit, FaTrash } from 'react-icons/fa';
import DoctorSidebar from '../Sidebar/DoctorSidebar';

const DocView = () => {
    const url = "http://localhost:3000";
    const [doctors, setDoctors] = useState([]);

    const fetchDoctors = async () => {
        try {
            const res = await axios.get(`${url}/api/doctor/get`);
            if (res.data.success) {
                setDoctors(res.data.data);
            }
        } catch (error) {
            alert("Error fetching doctors");
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert("Email copied to clipboard!");
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this doctor?");
        if (!confirm) return;

        try {
            const res = await axios.delete(`${url}/api/doctor/delete/${id}`);
            if (res.data.success) {
                alert("Doctor deleted successfully");
                fetchDoctors(); // Refresh list
            } else {
                alert("Failed to delete");
            }
        } catch (err) {
            alert("Error deleting doctor");
        }
    };

    const handleEdit = (id) => {
        // This could redirect to an EditDoctor page or open a modal
        alert(`Edit doctor with ID: ${id}`);
    };

    return (
        <div>
            <DoctorSidebar />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden flex justify-center items-start pl-64 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-10"
            >
                <div className="relative w-full max-w-6xl mx-auto">
                    {/* Background Glow */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl" />
                    <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl" />

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                    >
                        <FaUserMd className="inline-block mr-3" />
                        Doctor Directory
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {doctors.map((doc, index) => (
                            <motion.div
                                key={doc._id}
                                whileHover={{ scale: 1.02 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg text-white space-y-2"
                            >
                                <div className="flex items-center justify-between mb-2 text-cyan-400">
                                    <div className="flex items-center gap-2">
                                        <FaUserMd className="text-2xl" />
                                        <h3 className="text-xl font-bold">{doc.name}</h3>
                                    </div>
                                    <div className="flex gap-3">
                                        <button  className="hover:text-yellow-400">
                                            <a href={`/doctoredit/${doc._id}`}><FaEdit /></a>
                                        </button>
                                        <button onClick={() => handleDelete(doc._id)} className="hover:text-red-500">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                                <p className="flex items-center gap-2 text-gray-300">
                                    <FaStethoscope className="text-cyan-400" /> {doc.specialization}
                                </p>
                                <p className="flex items-center gap-2 text-gray-300">
                                    <FaPhone className="text-cyan-400" /> {doc.number}
                                </p>
                                <p className="flex items-center gap-2 text-gray-300 justify-between">
                                    <span className="flex items-center gap-2">
                                        <FaEnvelope className="text-cyan-400" /> {doc.email}
                                    </span>
                                    <button
                                        onClick={() => copyToClipboard(doc.email)}
                                        className="hover:text-cyan-400"
                                    >
                                        <FaCopy />
                                    </button>
                                </p>
                                <p className="flex items-center gap-2 text-gray-300">
                                    <FaBriefcase className="text-cyan-400" /> {doc.experience} years experience
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default DocView;

import React from 'react';
import { FaHospitalSymbol, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-900 py-10 px-6  shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <FaHospitalSymbol className="text-2xl text-blue-600" />
            <h1 className="text-2xl font-bold">Sky-Hospital</h1>
          </div>
          <p className="text-sm text-gray-700">
            Empowering healthcare with smart, secure, and efficient solutions for better outcomes.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p className="flex items-center justify-center md:justify-start gap-2 text-gray-800">
            <FaPhoneAlt /> ***********
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-gray-800">
            <FaEnvelope /> support@Sky.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-gray-800">
            <FaMapMarkerAlt /> 123 Health St,Sky-Hospital,India
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-800">
            <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/login" className="hover:text-blue-600 transition">Login</a></li>
            <li><a href="/register" className="hover:text-blue-600 transition">Register</a></li>
            <li><a href="/about" className="hover:text-blue-600 transition">About Us</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-600">
        © {new Date().getFullYear()}Sky-Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

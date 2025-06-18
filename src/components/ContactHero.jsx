'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full pt-14 pb-8 text-white" // changed from pure black to dark gray
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 text-center">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-2">
          <Link href="/" className="hover:text-[#FF014F] transition">Home</Link>
          <span className="mx-1">/</span>
          <span>Contact</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Me
        </h1>
      </div>
    </motion.div>
  );
};

export default ContactHero;

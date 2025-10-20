'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutHero = () => {
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
          <span>About</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About Me
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-300 mx-auto">
          My journey into development began with a passion for building things, but I quickly discovered a crucial truth: a technically perfect application is ineffective if it's poorly designed, and a beautifully designed app is useless if no one can find it. This principle is the foundation of my work today. <br /> <br />

          As a MERN Stack Developer, I specialize in building fast, scalable, and secure backends with Node.js and Express, connected to dynamic and responsive React frontends. But I don't stop there. As a Graphic Designer, I ensure every project is not only functional but also visually stunning and intuitive. And as an SEO Specialist, I build everything with a data-driven strategy to ensure it ranks high on search engines and attracts organic traffic from day one.<br /> <br />

          This philosophy extends to every detail. For instance, I use animation as a third dimension to simplify experiences and guide users through each interaction. I’m not adding motion just to spruce things up, but doing it in meaningful ways that enhance usability.<br /> <br />

          Ultimately, my goal is to be more than just a developer; it's to be a true digital partner. I'm committed to bringing your innovative ideas to life by delivering a complete, high-performing, and visible product from concept to launch. <br /> <br />

          For most projects, I follow a standard 50/50 structure. A 50% deposit is required to begin the work, and the remaining 50% is due upon project completion, before the final assets and deployment are delivered. For larger, long-term projects, we can discuss a milestone-based payment plan.   <br /> <br />
        </p>
      </div>
    </motion.div>
  );
};

export default AboutHero;
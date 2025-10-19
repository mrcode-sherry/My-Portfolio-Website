'use client';

import React from 'react';
import TypingEffect from './Retype';
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

// Slow fade-up for text
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 1.2,
      ease: 'easeOut',
    },
  }),
};

// Faster fade-up for icons
const fastFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 mt-4">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-center">

        {/* Left Content */}
        <div className="w-full md:w-1/2 max-w-xl space-y-5 mt-6 md:mt-14 text-center md:text-left">

          <motion.p
            className='tracking-widest uppercase text-[#C4CFDE] text-sm sm:text-base'
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Welcome to my world
          </motion.p>

          <motion.h1
            className='font-bold text-3xl sm:text-4xl md:text-[43px] leading-snug sm:leading-snug md:leading-tight'
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Hi, I’m <span className='text-[#FF014F]'>Hassam Shahryar</span> a <span><TypingEffect /></span>
          </motion.h1>

          <motion.p
            className='text-[#C4CFDE] leading-relaxed text-sm sm:text-base'
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
           I design captivating user experiences, build high-performance web applications, and implement SEO strategies that drive organic traffic. Let's create a digital product that not only works flawlessly but also gets found.
          </motion.p>

          {/* Social & Skills Section */}
          <div className='flex flex-col sm:flex-row sm:justify-between gap-10 mt-12'>

            {/* Social Links */}
            <motion.div
              className="text-center sm:text-left"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <p className='text-[#C4CFDE] uppercase text-[14px] tracking-widest'>find with me</p>
              <div className='flex flex-row justify-center sm:justify-start gap-4 mt-4'>
                {[Linkedin, Instagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='bg-gradient-to-r shadow-2xl shadow-black from-[#181A1E] to-[#1D2024] text-[#C4CFDE] px-4 py-4 rounded-md cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l'
                    variants={fastFadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          className="md:self-center mb-10 md:mb-0 md:-mt-14 md:ml-6 w-full md:w-1/2 max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
        >
          <img
            src="heroimage/myprofilephoto01.png"
            alt="Profile"
            className="w-[85%] sm:w-[95%] object-cover rounded-xl shadow-lg bg-transparent"
          />
        </motion.div>
      </div>

      {/* Horizontal Divider */}
      <motion.div
        className='h-[0.5px] w-full bg-black mt-24'
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 3 }}
      />
    </div>
  );
};

export default Hero;

'use client';

import React from 'react';
import { ArrowUpRight, Code2, Package, Paintbrush, Rocket, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
  icon: <Code2 size={24} />,
  title: 'MERN Stack Development',
  desc: 'I build fast, scalable, and secure web applications using the MERN stack, delivering modern UIs and high-performance backends.',
},
{
  icon: <Paintbrush size={24} />,
  title: 'Graphic Design',
  desc: 'From wireframes and prototypes to pixel-perfect logos and branding, I create visually stunning designs that enhance user experience.',
},
{
  icon: <Rocket size={24} />,
  title: 'SEO Strategy & Optimization',
  desc: 'I drive organic growth by improving search rankings through technical audits, keyword research, and data-driven on-page SEO.',
},
{
  icon: <Zap size={24} />,
  title: 'Performance & Security Audits',
  desc: 'I analyze existing websites to identify performance bottlenecks, improve Core Web Vitals, and implement essential security best practices.',
},
{
  icon: <Package size={24} />,
  title: 'Complete Digital Solution',
  desc: 'From initial concept and design to a fully developed, SEO-optimized website, I manage the entire project lifecycle to guarantee a successful launch.',
},
];

export default function Features() {
  return (
    <div className='px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-24 overflow-hidden'>
      {/* Heading */}
      <motion.div
        className='mb-12 text-center'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className='uppercase text-[#FF014F] text-sm sm:text-base tracking-widest font-semibold'>
          Features
        </p>
        <h1 className='text-[32px] sm:text-[40px] md:text-[60px] font-bold text-[#C4CFDE]'>
          What I Do
        </h1>
      </motion.div>

      {/* Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ 
              y: 50, 
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{ 
              y: 0, 
              opacity: 1,
              scale: 1
            }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className='group bg-[#1F2226] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] px-8 sm:px-10 md:px-12 py-10 sm:py-12 md:py-14 rounded-2xl transition-all duration-300 relative overflow-hidden hover:bg-[#16181C]'
          >
            <div className='flex items-center justify-center w-12 h-12 bg-[#FF014F] text-white rounded-full mb-6'>
              {feature.icon}
            </div>
            <h3 className='cursor-pointer font-semibold group-hover:text-[#FFFFFF] text-[20px] sm:text-[22px] text-[#C4CFDE] mb-4'>
              {feature.title}
            </h3>
            <p className='text-[#C4CFDE] text-sm sm:text-[16px] group-hover:text-[#FFFFFF] leading-relaxed cursor-pointer'>
              {feature.desc}
            </p>

            {/* Arrow */}
            <div className='absolute top-[65px] right-6 cursor-pointer opacity-0 group-hover:bottom-6 group-hover:opacity-100 transition-all duration-300 text-[#FF014F]'>
              <ArrowUpRight size={30} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className='h-[0.5px] w-full bg-black mt-24'></div>
    </div>
  );
}

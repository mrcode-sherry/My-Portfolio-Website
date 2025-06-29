'use client';

import { ArrowUpRight, Heart } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    title: 'Scalable E-Commerce Website Using Next.js | React | MERN',
    image: '/portfolio/portfolio1.png',
    category: 'gallery',
    like: '1324',
  },
  {
    title: 'Figma to React – MERN & Next.js Web Development Solution',
    image: '/portfolio/portfolio2.png',
    category: 'gallery',
    like: '1324',
  },
  {
    title: 'SOP Pharma Webstore Development | Next.js',
    image: '/portfolio/portfolio3.png',
    category: 'gallery',
    like: '1324',
  },
  {
    title: 'Figma to React – Full-Stack Web Development Solution',
    image: '/portfolio/portfolio4.png',
    category: 'gallery',
    like: '1324',
  },
  {
    title: 'MistBuddy™ Shopify E-Commerce Website | Design & Development',
    image: '/portfolio/portfolio5.png',
    category: 'gallery',
    like: '1324',
  },
  {
    title: 'Travall Global Regional Website Design & Development – WordPress',
    image: '/portfolio/portfolio6.png',
    category: 'gallery',
    like: '1324',
  },
];

const Portfolio = () => {
  return (
    <div className='px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-16 overflow-hidden'>
      {/* Heading */}
      <motion.div
        className='text-center mb-12 sm:mb-14 md:mb-16'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className='uppercase text-[#FF014F] text-[12px] sm:text-[14px] tracking-widest font-semibold mb-2'>
          Visit my portfolio and keep your feedback
        </p>
        <h1 className='text-[28px] sm:text-[38px] md:text-[60px] font-bold text-[#C4CFDE] leading-tight'>
          My Portfolio
        </h1>
      </motion.div>

      {/* Portfolio Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-x-7 md:gap-y-12'>
        {portfolioItems.map((item, index) => {
          // Set animation direction per column
          let initial, animate;
          if (index % 3 === 0) {
            initial = { opacity: 0, x: -60 };
            animate = { opacity: 1, x: 0 };
          } else if (index % 3 === 1) {
            initial = { opacity: 0, y: 20, scale: 0.95 };
            animate = { opacity: 1, y: 0, scale: 1 };
          } else {
            initial = { opacity: 0, x: 60 };
            animate = { opacity: 1, x: 0 };
          }

          return (
            <motion.div
              key={index}
              className='bg-[#1F2226] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] p-6 sm:p-7 rounded-2xl transition-all duration-300 relative overflow-hidden hover:bg-[#16181C]'
              initial={initial}
              whileInView={animate}
              transition={{
                delay: Math.min(index * 0.1, 0.4),
                duration: index % 3 === 1 ? 0.9 : 0.6,
                ease: index % 3 === 1 ? [0.25, 0.8, 0.25, 1] : 'easeOut',
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image */}
              <div className='overflow-hidden rounded-md'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-52 rounded-md transform hover:scale-105 transition-transform duration-500 cursor-pointer'
                />
              </div>

              {/* Category + Like */}
              <div className='flex justify-between items-center mt-4 sm:mt-5'>
                <p className='text-[14px] sm:text-[15px] capitalize text-[#FF014F] font-semibold tracking-wider'>
                  {item.category}
                </p>
                <p className='text-[14px] sm:text-[15px] flex items-center tracking-wider'>
                  <Heart width={14} className='mr-1' />{item.like}
                </p>
              </div>

              {/* Title */}
              <h3 className='text-[#C4CFDE] cursor-pointer hover:text-[#FF014F] text-[15px] sm:text-[17px] md:text-[20px] duration-500 leading-relaxed relative font-semibold mt-4 group'>
                {item.title.length > 60 ? item.title.slice(0, 50) + '...' : item.title}
                <span className='absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#FF014F]'>
                  <ArrowUpRight size={26} className='ml-1 inline' />
                </span>
              </h3>
            </motion.div>
          );
        })}
      </div>

      {/* Divider */}
      <div className='h-[1px] w-full bg-[#191B1E] mt-20 sm:mt-24'></div>
    </div>
  );
};

export default Portfolio;

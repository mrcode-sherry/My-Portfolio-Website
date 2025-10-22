'use client';

import { ArrowUpRight, Heart } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    title: 'Aptitude Counsel Website',
    image: '/portfolio/portfolio9.png',
    category: 'gallery',
    like: '1324',
    link: 'https://www.aptitudecounsel.com/'
  },
  {
    title: 'Kintechy Website',
    image: '/portfolio/portfolio10.png',
    category: 'gallery',
    like: '1324',
    link: 'https://www.kintechy.com/'
  },
  {
    title: 'Edify Softech Website',
    image: '/portfolio/portfolio11.png',
    category: 'gallery',
    like: '1324',
    link: 'https://edify-softech.vercel.app/'
  },
  {
    title: 'Singh Transports Website',
    image: '/portfolio/portfolio12.png',
    category: 'gallery',
    like: '1324',
    link: 'https://singh-transports.vercel.app/'
  },
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
    title: 'Figma to React – Full-Stack Web Development Solution',
    image: '/portfolio/portfolio4.png',
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
      <motion.div 
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-x-7 md:gap-y-12'
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {portfolioItems.map((item, index) => {
          // Set animation direction per column
          const cardVariants = {
            hidden: { 
              opacity: 0,
              y: 50,
              scale: 0.9
            },
            visible: { 
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.6,
                delay: index * 0.1
              }
            }
          };

          return (
            <motion.div
              key={index}
              className='bg-[#1F2226] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] p-6 sm:p-7 rounded-2xl transition-all duration-300 relative overflow-hidden hover:bg-[#16181C]'
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Image */}
              <div className='overflow-hidden rounded-md'>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-52 rounded-md cursor-pointer'
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                ) : (
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-52 rounded-md cursor-pointer'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
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
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className='hover:text-[#FF014F]'>
                    {item.title.length > 60 ? item.title.slice(0, 50) + '...' : item.title}
                    <span className='absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#FF014F]'>
                      <ArrowUpRight size={26} className='ml-1 inline' />
                    </span>
                  </a>
                ) : (
                  <>
                    {item.title.length > 60 ? item.title.slice(0, 50) + '...' : item.title}
                    <span className='absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#FF014F]'>
                      <ArrowUpRight size={26} className='ml-1 inline' />
                    </span>
                  </>
                )}
              </h3>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Divider */}
      <div className='h-[1px] w-full bg-[#191B1E] mt-20 sm:mt-24'></div>
    </div>
  );
};

export default Portfolio;
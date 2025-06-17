'use client';
import { ArrowUpRight, Heart } from 'lucide-react';
import React from 'react';

const portfolioItems = [
  {
    title: 'ZestMart – A Modern eCommerce Store Built Using Next.js and TailwindCSS',
    image: '/mobile.jpg',
    category: 'gallery',
    like: '1324'
  },
  {
    title: 'BookStore Website – Full MERN Stack with User Auth and Cart System',
    image: '/mobile.jpg',
    category: 'gallery',
    like: '1324'
  },
  {
    title: 'TechSparks – IT Training Institute Website Using React and Node.js',
    image: '/mobile.jpg',
    category: 'gallery',
    like: '1324'
  },
  {
    title: 'TechSparks – IT Training Institute Website Using React and Node.js',
    image: '/mobile.jpg',
    category: 'gallery',
    like: '1324'
  },
  {
    title: 'TechSparks – IT Training Institute Website Using React and Node.js',
    image: '/mobile.jpg',
    category: 'gallery',
    like: '1324'
  },
  {
    title: 'TechSparks – IT Training Institute Website Using React and Node.js',
    image: '/mobile.jpg',
    category: 'gallery',
    like: '1324'
  },
];

const Portfolio = () => {
  return (
    <div className='px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-16'>
      {/* Heading */}
      <div className='text-center mb-12 sm:mb-14 md:mb-16'>
        <p className='uppercase text-[#FF014F] text-[12px] sm:text-[14px] tracking-widest font-semibold mb-2'>
          Visit my portfolio and keep your feedback
        </p>
        <h1 className='text-[28px] sm:text-[38px] md:text-[60px] font-bold text-[#C4CFDE] leading-tight'>
          My Portfolio
        </h1>
      </div>

      {/* Portfolio Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-x-7 md:gap-y-12'>
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className='bg-[#1F2226] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] p-6 sm:p-7 rounded-2xl transition-all duration-300 relative overflow-hidden hover:bg-[#16181C]'
          >
            {/* Image */}
            <div className='overflow-hidden rounded-md'>
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-44 sm:h-52 object-cover rounded-md transform hover:scale-105 transition-transform duration-500 cursor-pointer'
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
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className='h-[1px] w-full bg-[#191B1E] mt-20 sm:mt-24'></div>
    </div>
  );
};

export default Portfolio;

'use client';

import React from 'react';
import {
  Code2,
  Paintbrush,
  Layers,
  Rocket,
  Smartphone,
  Brush,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Code2 size={24} />,
    title: 'MERN Stack Dev',
    desc: 'Build scalable web apps using MongoDB, Express.js, React.js & Node.js with modern UI and fast performance.',
  },
  {
    icon: <Rocket size={24} />,
    title: 'SEO Optimization',
    desc: 'Improve search engine rankings through keyword research, on-page/off-page SEO, and technical optimization.',
  },
  {
    icon: <Layers size={24} />,
    title: 'Organic Growth',
    desc: 'Drive long-term traffic with sustainable SEO strategies aligned with the latest search engine algorithms.',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Social Media Mgmt',
    desc: 'Manage and grow your brand’s presence on Facebook, Instagram, and YouTube with result-driven strategies.',
  },
  {
    icon: <Brush size={24} />,
    title: 'Creative Campaigns',
    desc: 'Design engaging content and run impactful campaigns to build strong communities and boost engagement.',
  },
  {
    icon: <Paintbrush size={24} />,
    title: 'Brand Identity',
    desc: 'Craft unique social branding and maintain a consistent voice across all digital platforms for your brand.',
  },
  {
    icon: <Paintbrush size={24} />,
    title: 'Photoshop Design',
    desc: 'Create stunning visual content for web and social media using Photoshop — banners, posters, and more.',
  },
  {
    icon: <Brush size={24} />,
    title: 'Visual Storytelling',
    desc: 'Bring ideas to life through compelling graphics that communicate brand messages effectively.',
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
        {features.map((feature, index) => {
          let initial = {};
          let animate = {};
          let transition = {
            delay: index * 0.15,
            duration: 0.8,
            ease: 'easeOut',
          };

          // Entry direction
          if (index % 3 === 0) {
            initial = { x: -60, opacity: 0 };
            animate = { x: 0, opacity: 1 };
          } else if (index % 3 === 1) {
            initial = { y: 60, opacity: 0 };
            animate = { y: 0, opacity: 1 };
          } else {
            initial = { x: 60, opacity: 0 };
            animate = { x: 0, opacity: 1 };
          }

          return (
            <motion.div
              key={index}
              initial={initial}
              whileInView={animate}
              transition={transition}
              viewport={{ once: true, amount: 0.3 }}
              className='group bg-[#1F2226] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] px-8 sm:px-10 md:px-12 py-10 sm:py-12 md:py-14 rounded-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden hover:bg-[#16181C]'
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
          );
        })}
      </div>

      {/* Divider */}
      <div className='h-[0.5px] w-full bg-black mt-24'></div>
    </div>
  );
}

"use client";
import React, { useState } from 'react';

const Price = () => {
  const [activeTab, setActiveTab] = useState('Premium');

  const tabs = ['Static', 'Standard', 'Premium'];

  const pricingData = {
    Static: {
      title: 'Starter Web Package',
      subtitle: 'React / Next.js (2 Pages)',
      price: '$150.00',
      description: 'Perfect for personal use or portfolio projects. I will build up to 2 fast-loading pages using React or Next.js with full responsiveness.',
      features: [
        'Delivery Time: 2 days',
        'Number of Revisions: Unlimited',
        'Number of Pages: 2',
        'Design Customization',
        'Content Upload',
        'Responsive Design',
        'Source Code',
      ],
    },
    Standard: {
      title: 'Business Website Package',
      subtitle: 'React / Next.js (5 Pages)',
      price: '$300.00',
      description: 'Ideal for small businesses and startups. I will develop a professional 5-page website with responsive design and full content integration.',
      features: [
        'Delivery Time: 8 days',
        'Number of Revisions: Unlimited',
        'Number of Pages: 5',
        'Design Customization',
        'Content Upload',
        'Responsive Design',
        'Source Code',
      ],
    },
    Premium: {
      title: 'Advanced Web Solution',
      subtitle: 'React / Next.js (10 Pages)',
      price: '$500.00',
      description: 'Complete solution for growing brands. I’ll develop up to 10 feature-rich and highly responsive pages tailored to your needs using React or Next.js.',
      features: [
        'Delivery Time: 15 days',
        'Number of Revisions: Unlimited',
        'Number of Pages: 10',
        'Design Customization',
        'Content Upload',
        'Responsive Design',
        'Source Code',
      ],
    },
  };

  return (
    <div className='px-4 sm:px-6 md:px-12 sm:py-12 md:my-20'>
      <div className='flex flex-col md:flex-row gap-10'>
        {/* Left Section */}
        <div className='w-full md:w-2/5 text-left'>
          <p className='uppercase text-[#FF014F] text-[14px] sm:text-[15px] tracking-widest font-semibold'>
            Pricing
          </p>
          <h1 className='text-[32px] sm:text-[42px] md:text-[60px] font-bold text-[#C4CFDE] leading-tight'>
            My Pricing
          </h1>
        </div>

        {/* Right Section - Pricing Card */}
        <div className='w-full md:w-3/5 bg-[#212428] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] p-5 sm:p-6 rounded-xl'>
          {/* Tabs */}
          <div className='flex justify-between bg-[#212428] rounded-md overflow-hidden mb-6'>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full py-3 text-xs sm:text-sm font-semibold text-white transition-all ${
                  activeTab === tab ? 'bg-[#FF014F]' : 'hover:bg-[#2A2A3B]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className='text-white'>
            <div className='flex flex-col sm:flex-row justify-between gap-4 my-8'>
              <div className='space-y-1 sm:space-y-2'>
                <h2 className='text-[22px] sm:text-[27px] font-bold text-[#C4CFDE]'>
                  {pricingData[activeTab].title}
                </h2>
                <p className='text-[15px] sm:text-[16px] text-gray-400'>
                  {pricingData[activeTab].subtitle}
                </p>
              </div>

              <div className='text-left sm:text-right'>
                <span className='bg-[#212428] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] text-[#FF014F] text-[20px] sm:text-[23px] font-bold px-4 sm:px-5 py-2 sm:py-3 rounded-md inline-block'>
                  {pricingData[activeTab].price}
                </span>
              </div>
            </div>

            <div className='mb-6'>
              <p className='text-[#878e99] text-[16px] sm:text-[18px] leading-relaxed'>
                {pricingData[activeTab].description}
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm'>
              {pricingData[activeTab].features.map((feature, index) => (
                <p
                  key={index}
                  className='flex items-start gap-2 text-[#c4cfde] text-[16px] sm:text-[18px]'
                >
                  <span className='text-green-500'>✓</span> {feature}
                </p>
              ))}
            </div>

            {/* Button and Footer Info */}
            <div className='mt-6'>
              <button className='bg-gradient-to-r from-[#181A1E] to-[#1D2024] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] text-[#FF014F] px-6 py-3 w-full rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-gradient-to-l uppercase'>
                Order Now →
              </button>
              <div className='flex flex-wrap justify-center gap-3 text-xs text-gray-500 mt-4'>
                <span>⚡ 2 Days Delivery</span>
                <span>🔁 Unlimited Revision</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className='h-[0.5px] w-full bg-black mt-20 sm:mt-24'></div>
    </div>
  );
};

export default Price;

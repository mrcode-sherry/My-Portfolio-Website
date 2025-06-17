import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <div className='mx-12 my-24'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 text-white'>
          {/* Logo + Social */}
          <div className='space-y-6'>
            <div className='flex items-center gap-2'>
              <img
                src='portfolio-image.png' // replace this with your actual logo
                alt='logo'
                className='w-12 h-12 rounded-full object-cover'
              />
              <span className='text-lg font-semibold'>HASSAM</span>
            </div>
            <div className='flex gap-4'>
              <a className='p-5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden rounded-md bg-[#212428] text-white hover:text-[#FF014F] bg-gradient-to-r from-[#181A1E] to-[#1D2024] hover:bg-gradient-to-l cursor-pointer'>
                <Facebook size={20} />
              </a>
              <a className='p-5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden rounded-md bg-[#212428] text-white hover:text-[#FF014F] bg-gradient-to-r from-[#181A1E] to-[#1D2024] hover:bg-gradient-to-l cursor-pointer'>
                <Twitter size={20} />
              </a>
              <a className='p-5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden rounded-md bg-[#212428] text-white hover:text-[#FF014F] bg-gradient-to-r from-[#181A1E] to-[#1D2024] hover:bg-gradient-to-l cursor-pointer'>
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-[#FF014F] font-semibold text-[18px] mb-5'>QUICK LINK</h4>
            <ul className='space-y-3 text-[#C4CFDE] text-[17px]'>
              {['About', 'Portfolio', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item} className="relative group cursor-pointer w-fit duration-500 hover:text-[#FF014F]">
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#FF014F] transition-all duration-500 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className='text-[#FF014F] font-semibold mb-5 text-[18px]'>RESOURCES</h4>
            <ul className='space-y-3 text-[#C4CFDE] text-[17px]'>
              {['Authentication', 'System Status', 'Terms of Service', 'Pricing', 'Over Right'].map((item) => (
                <li key={item} className="relative group cursor-pointer w-fit duration-500 hover:text-[#FF014F]">
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#FF014F] transition-all duration-500 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className='text-[#FF014F] font-semibold mb-5 text-[18px]'>DEVELOPERS</h4>
            <ul className='space-y-3 text-[#C4CFDE] text-[17px]'>
              {['Documentation', 'Authentication', 'API Reference', 'Support', 'Open Source'].map((item) => (
                <li key={item} className="relative group cursor-pointer w-fit duration-500 hover:text-[#FF014F]">
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#FF014F] transition-all duration-500 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className='h-[0.5px] w-[90%] mx-auto bg-black'></div>
    </>
  );
};

export default Footer;

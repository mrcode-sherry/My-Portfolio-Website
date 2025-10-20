import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <div className='mx-12 my-24'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-white'>
          {/* Logo + Social */}
          <div className='space-y-6'>
            <div className='flex items-center gap-2'>
              <img
                src='heroimage/myprofilephoto01.png' // replace this with your actual logo
                alt='logo'
                className='rounded-full border-[#2E3237] border-4 shadow bg-transparent object-cover w-12 h-12 md:w-16 md:h-16'
              />
              <span className='text-lg font-semibold'>HASSAM</span>
            </div>
            <div className='flex gap-4'>
              <a 
                href='https://www.instagram.com/hassam_shery?igsh=bjZvN3N1N3FzbGJ2' 
                target='_blank' 
                rel='noopener noreferrer'
                className='p-5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden rounded-md bg-[#212428] text-white hover:text-[#FF014F] bg-gradient-to-r from-[#181A1E] to-[#1D2024] hover:bg-gradient-to-l cursor-pointer'
              >
                <Instagram size={20} />
              </a>
              <a 
                href='https://www.linkedin.com/in/hassam-shahryar-176894291' 
                target='_blank' 
                rel='noopener noreferrer'
                className='p-5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden rounded-md bg-[#212428] text-white hover:text-[#FF014F] bg-gradient-to-r from-[#181A1E] to-[#1D2024] hover:bg-gradient-to-l cursor-pointer'
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-[#FF014F] font-semibold text-[18px] mb-5'>QUICK LINK</h4>
            <ul className='space-y-3 text-[#C4CFDE] text-[17px]'>
              {['Home', 'About', 'Contact'].map((item) => (
                <li key={item} className="relative group cursor-pointer w-fit duration-500 hover:text-[#FF014F]">
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#FF014F] transition-all duration-500 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h4 className='text-[#FF014F] font-semibold mb-5 text-[18px]'>ABOUT ME</h4>
            <p className='text-[#C4CFDE] text-[17px]'>
              I'm a passionate developer dedicated to creating beautiful and functional websites. With expertise in modern web technologies, I bring ideas to life through clean code and creative solutions.
            </p>
          </div>
        </div>
      </div>

      <div className='h-[0.5px] w-[90%] mx-auto bg-black'></div>
    </>
  );
};

export default Footer;
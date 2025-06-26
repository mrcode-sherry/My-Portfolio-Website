import React from 'react';
import TypingEffect from './Retype';
import { Facebook, Figma, Gem, Handshake, Instagram, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 mt-4">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-center">

        {/* Left Content */}
        <div className="w-full md:w-1/2 max-w-xl space-y-5 mt-6 md:mt-14 text-center md:text-left">
          <p className='tracking-widest uppercase text-[#C4CFDE] text-sm sm:text-base'>Welcome to my world</p>

          <h1 className='font-bold text-3xl sm:text-4xl md:text-[43px] leading-snug sm:leading-snug md:leading-tight'>
            Hi, I’m <span className='text-[#FF014F]'>Hassam Shahryar</span> a <span><TypingEffect /></span>
          </h1>

          <p className='text-[#C4CFDE] leading-relaxed text-sm sm:text-base'>
            I use animation as a third dimension by which to simplify experiences and guide through each and every interaction. I’m not adding motion just to spruce things up, but doing it in meaningful ways.
          </p>

          {/* Social & Skills Section */}
          <div className='flex flex-col sm:flex-row sm:justify-between gap-10 mt-12'>

            {/* Social Links */}
            <div className="text-center sm:text-left">
              <p className='text-[#C4CFDE] uppercase text-[14px] tracking-widest'>find with me</p>
              <div className='flex flex-row justify-center sm:justify-start gap-4 mt-4'>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='bg-gradient-to-r shadow-2xl shadow-black from-[#181A1E] to-[#1D2024] text-[#C4CFDE] px-4 py-4 rounded-md cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l'
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/hassam-shahryar-176894291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='bg-gradient-to-r shadow-2xl shadow-black from-[#181A1E] to-[#1D2024] text-[#C4CFDE] px-4 py-4 rounded-md cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l'
                >
                  <Linkedin />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='bg-gradient-to-r shadow-2xl shadow-black from-[#181A1E] to-[#1D2024] text-[#C4CFDE] px-4 py-4 rounded-md cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l'
                >
                  <Instagram />
                </a>
              </div>
            </div>

            {/* Skill Icons */}
            <div className="text-center sm:text-left">
              <p className='text-[#C4CFDE] uppercase text-[14px] tracking-widest'>best skill on</p>
              <div className='flex flex-row justify-center sm:justify-start gap-4 mt-4'>
                <div className='bg-gradient-to-r shadow-2xl shadow-black from-[#181A1E] to-[#1D2024] text-[#C4CFDE] px-4 py-4 rounded-md cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l'>
                  <Figma />
                </div>
                <div className='bg-gradient-to-r shadow-2xl shadow-black from-[#181A1E] to-[#1D2024] text-[#C4CFDE] px-4 py-4 rounded-md cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l'>
                  <Gem />
                </div>
                <div className='bg-gradient-to-r shadow-2xl shadow-black from-[#181A1E] to-[#1D2024] text-[#C4CFDE] px-4 py-4 rounded-md cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l'>
                  <Handshake />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:self-center mb-10 md:mb-0 md:-mt-14 md:ml-6 w-full md:w-1/2 max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg flex justify-center md:justify-end">
          <img
            src="heroimage/myprofilephoto01.png"
            alt="Profile"
            className="w-[85%] sm:w-[95%] object-cover rounded-xl shadow-lg bg-transparent"
          />
        </div>

      </div>

      {/* Horizontal Divider */}
      <div className='h-[0.5px] w-full bg-black mt-24'></div>
    </div>
  );
};

export default Hero;

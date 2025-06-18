'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Twitter, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm('mrbklzwn');

  return (
    <div className='px-4 md:px-12 sm:py-12 py-10 md:py-16 mx-auto'>
      {/* Heading */}
      <div className='mb-12 text-center'>
        <p className='uppercase text-[#FF014F] text-sm tracking-widest md:mb-5 mb-2 font-semibold'>Contact</p>
        <h1 className='text-3xl md:text-5xl font-bold text-[#C4CFDE]'>Contact With Me</h1>
      </div>

      {/* Two-column layout */}
      <div className='grid md:grid-cols-2 gap-10 mt-12'>
        {/* Left Profile Card */}
        <div className='bg-[#1F2226] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] rounded-xl p-6 md:p-8'>
          <img
            src='/handshake.png'
            alt='Profile'
            className='rounded-lg mb-6 w-full h-48 md:h-60 object-cover'
          />
          <h2 className='text-2xl font-bold text-[#E4E6EA] mb-2'>Hassam Shahryar</h2>
          <p className='text-[#878E99] mb-4'>Chief Operating Officer</p>
          <p className='text-[#878E99] mb-5 text-base'>
            I am available for freelance work. Connect with me via and call in to my account.
          </p>

          <p className='text-[#878E99] mb-2 text-sm md:text-base'>
            Phone:
            <span className='relative group font-semibold ml-2 cursor-pointer hover:text-[#FF014F]'>
              +012 345 678 90
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#FF014F] transition-all duration-500 group-hover:w-full"></span>
            </span>
          </p>

          <p className='text-[#878E99] text-sm md:text-base'>
            Email:
            <span className='relative group font-semibold ml-2 cursor-pointer hover:text-[#FF014F]'>
              admin@example.com
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#FF014F] transition-all duration-500 group-hover:w-full"></span>
            </span>
          </p>

          <p className='text-[#878E99] mt-6 mb-4 text-sm md:text-base'>FIND WITH ME</p>
          <div className='flex gap-4 flex-wrap'>
            {[Twitter, Facebook, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className='p-4 md:p-5 rounded-md bg-[#212428] text-white hover:text-[#FF014F] bg-gradient-to-r from-[#181A1E] to-[#1D2024] hover:bg-gradient-to-l transition-all duration-300'>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Contact Form */}
        <div className='bg-[#1F2226] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] rounded-xl p-6 md:p-8'>
          {state.succeeded ? (
            <p className="text-green-500 font-semibold text-center text-xl">Thanks for your message!</p>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='w-full'>
                  <label className='text-[#C4CFDE] mb-2 block'>Your Name</label>
                  <input type="text" name="name" required className="w-full bg-[#1C1E22] text-white px-4 py-3 rounded-md border border-[#2a2c2f] shadow-inner outline-none" />
                </div>
                <div className='w-full'>
                  <label className='text-[#C4CFDE] mb-2 block'>Phone Number</label>
                  <input type="text" name="phone" className="w-full bg-[#1C1E22] text-white px-4 py-3 rounded-md border border-[#2a2c2f] shadow-inner outline-none" />
                </div>
              </div>
              <div>
                <label className='text-[#C4CFDE] mb-2 block'>Email</label>
                <input type="email" name="email" required className="w-full bg-[#1C1E22] text-white px-4 py-3 rounded-md border border-[#2a2c2f] shadow-inner outline-none" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label className='text-[#C4CFDE] mb-2 block'>Subject</label>
                <input type="text" name="subject" required className="w-full bg-[#1C1E22] text-white px-4 py-3 rounded-md border border-[#2a2c2f] shadow-inner outline-none" />
              </div>
              <div>
                <label className='text-[#C4CFDE] mb-2 block'>Your Message</label>
                <textarea name="message" rows={5} required className="w-full bg-[#1C1E22] text-white px-4 py-3 rounded-md border border-[#2a2c2f] shadow-inner outline-none"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className='w-full py-3 rounded-md cursor-pointer bg-[#212428] text-[#C4CFDE] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4)] text-sm tracking-widest'
              >
                {state.submitting ? 'Sending...' : 'SEND MESSAGE'}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className='h-px w-full bg-black mt-24'></div>
    </div>
  );
};

export default Contact;

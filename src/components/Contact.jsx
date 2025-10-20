'use client';
import React, { useState } from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError(result.message || 'Error sending message');
      }
    } catch (error) {
      setSubmitError('Error sending message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='px-4 md:px-12 sm:py-12 py-10 md:py-16 mx-auto'>
      {/* Two-column layout */}
      <div className='grid md:grid-cols-2 gap-10'>
        {/* Left Profile Card */}
        <div className='bg-[#1F2226] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] rounded-xl p-6 md:p-8'>
          <img
            src='/handshake.png'
            alt='Profile'
            className='rounded-lg mb-6 w-full h-48 md:h-60 object-cover'
          />
          <h2 className='text-2xl font-bold text-[#E4E6EA] mb-2'>Hassam Shahryar</h2>
          <p className='text-[#878E99] mb-4'>MERN Stack Developer</p>
          <p className='text-[#878E99] mb-5 text-base'>
            I am available for freelance & local work. Connect with me via and call in to my account.
          </p>

          <p className='text-[#878E99] text-sm md:text-base'>
            Email:
            <span className='relative group font-semibold ml-2 cursor-pointer hover:text-[#FF014F]'>
              hassamshahryar777@gmail.com
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#FF014F] transition-all duration-500 group-hover:w-full"></span>
            </span>
          </p>

          <p className='text-[#878E99] mt-6 mb-4 text-sm md:text-base'>FIND WITH ME</p>
          <div className='flex gap-4 flex-wrap'>
            {[Instagram, Linkedin].map((Icon, idx) => (
              <a 
                key={idx} 
                href={idx === 0 ? 'https://www.instagram.com/hassam_shery?igsh=bjZvN3N1N3FzbGJ2' : 'https://www.linkedin.com/in/hassam-shahryar-176894291'}
                target="_blank"
                rel="noopener noreferrer"
                className='p-4 md:p-5 rounded-md bg-[#212428] text-white hover:text-[#FF014F] bg-gradient-to-r from-[#181A1E] to-[#1D2024] hover:bg-gradient-to-l transition-all duration-300'
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Contact Form */}
        <div className='bg-[#1F2226] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] rounded-xl p-6 md:p-8'>
          {submitSuccess ? (
            <p className="text-green-500 font-semibold text-center text-xl">Thanks for your message!</p>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='w-full'>
                  <label className='text-[#C4CFDE] mb-2 block'>Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full bg-[#1C1E22] text-white px-4 py-3 rounded-md border border-[#2a2c2f] shadow-inner outline-none" 
                  />
                </div>
                <div className='w-full'>
                  <label className='text-[#C4CFDE] mb-2 block'>Phone Number</label>
                  <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#1C1E22] text-white px-4 py-3 rounded-md border border-[#2a2c2f] shadow-inner outline-none" 
                  />
                </div>
              </div>
              <div>
                <label className='text-[#C4CFDE] mb-2 block'>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full bg-[#1C1E22] text-white px-4 py-3 rounded-md border border-[#2a2c2f] shadow-inner outline-none" 
                />
              </div>
              <div>
                <label className='text-[#C4CFDE] mb-2 block'>Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  className="w-full bg-[#1C1E22] text-white px-4 py-3 rounded-md border border-[#2a2c2f] shadow-inner outline-none" 
                />
              </div>
              <div>
                <label className='text-[#C4CFDE] mb-2 block'>Your Message</label>
                <textarea 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full bg-[#1C1E22] text-white px-4 py-3 rounded-md border border-[#2a2c2f] shadow-inner outline-none"
                ></textarea>
              </div>
              {submitError && (
                <div className="text-red-500 text-center">{submitError}</div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className='w-full py-3 rounded-md cursor-pointer bg-[#212428] text-[#C4CFDE] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4)] text-sm tracking-widest'
              >
                {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
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
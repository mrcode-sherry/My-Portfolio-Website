'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleClose();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar (Hide when sidebar is open) */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-[#212428]/80 backdrop-blur px-6 md:px-12 py-4 transition-shadow duration-300 ${scrolled ? 'shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]' : ''
          } ${menuOpen ? 'hidden' : 'block'}`}
      >
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center gap-2'>
            <img
              className="rounded-full border-[#2E3237] border-4 shadow bg-transparent object-cover w-12 h-12 md:w-14 md:h-14"
              src="portfolio-image.png"
              alt="Profile"
            />
            <p className='uppercase text-[#C4CFDE] text-lg md:text-xl font-semibold'>Hassam</p>
          </div>

          {/* Desktop Links */}
          <div className='hidden md:flex items-center justify-center flex-1 text-[13px] text-[#C4CFDE] space-x-7'>
            <Link className='hover:text-[#FF014F] duration-500' href="/">Home</Link>
            <Link className='hover:text-[#FF014F] duration-500' href="/about">About</Link>
            <Link className='hover:text-[#FF014F] duration-500' href="/contact">Contact</Link>
          </div>

          {/* Contact Button */}
          <div className='hidden md:block'>
            <Link href="/contact">
              <button className="bg-gradient-to-r cursor-pointer shadow-2xl shadow-black from-[#181A1E] to-[#1D2024] text-[#FF014F] px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-l uppercase">
                Contact
              </button>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} className="text-[#FF014F]">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <div className="h-[100px]"></div>

      {/* Sidebar and Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-500 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black duration-500  ${menuOpen ? 'opacity-40' : 'opacity-0'
            }`}
        ></div>

        {/* Sidebar */}
        <div
          ref={menuRef}
          className={`absolute top-0 left-0 h-full w-[75%] max-w-xs bg-[#191B1E] shadow-lg px-6 py-5 transform transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >

          {/* Close Icon and Profile Side-by-Side */}
          <div className="flex items-center justify-between mb-7">
            {/* Profile Image */}
            <img
              className="rounded-full w-14 h-14 border-2 border-[#2E3237]"
              src="portfolio-image.png"
              alt="Profile"
            />

            {/* Close Icon with black background and rounded */}
            <button
              onClick={handleClose}
              className="bg-[#191B1E] rounded-full p-2 text-[#FF014F] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)]"
            >
              <X size={20} />
            </button>
          </div>


          {/* Profile & Text */}
          <div className="flex flex-col items-start gap-4">
            <p className="text-[#878E99] text-[16px] tracking-wide leading-relaxed  text-sm">
              Welcome to my portfolio. You can explore and connect with me here.
            </p>
            <hr className="border-[#2E3237] w-full" />
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col gap-4 mt-6 text-[#C4CFDE] text-base">
            <Link onClick={handleClose} className="hover:text-[#FF014F]" href="/">Home</Link>
            <Link onClick={handleClose} className="hover:text-[#FF014F]" href="/about">About</Link>
            <Link onClick={handleClose} className="hover:text-[#FF014F]" href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

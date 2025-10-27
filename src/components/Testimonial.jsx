"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, User } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
  name: "Akash Albert",
  title: "Aptitude Counsel CEO",
  image: "", // fallback avatar will appear
  project: "Aptitude & Personality Testing Platform",
  platform: "via Direct Client",
  date: "Aug 8, 2025 - Sep 10, 2025",
  review:
    "Hassam Shahryar did a great job on our Aptitude Counsel website. He is skilled, responsive, and delivers exactly what you ask for. Highly recommended!",
  rating: 5,
},
  {
  name: "Amandeep Singh", // will add later
  title: "Singh Transport Manager",
  image: "", // fallback avatar will appear
  project: "Logistics & Transport Website Development",
  platform: "via Upwork", // will add later
  date: "Sep 22, 2025 - Oct 15, 2025", // will add later
  review:
    "Hassam did an excellent job on our Singh Transport website. The design is clean, fast, and exactly what we needed for our business.",
  rating: 5,
},
{
  name: "Jincy John", // will add later
  title: "via Upwork", // will add later
  image: "", // fallback avatar will appear
  project: "Professional Blog Website Development (Next.js)",
  platform: "via Upwork", // will add later
  date: "Jul 8, 2025 - Aug 15, 2025", // will add later
  review:
    "Hassam created a modern and engaging blog website for us. The layout, performance, and attention to detail are simply outstanding.",
  rating: 5,
}
,{
  name: "Gagandeep Singh", // will add later
  title: "Shilajit Business", // will add later
  image: "", // fallback avatar will appear
  project: "Branding & Graphic Design (Logos, Stickers, Vehicle Wraps)",
  platform: "via Direct Client (France)",
  date: "Oct 17, 2025 - Oct 27, 2025", // will add later
  review:
    "Hassam delivered creative and professional designs for our Shilajit brand. The logos and card graphics were exactly what we envisioned.",
  rating: 5,
},
{
  name: "Edify Training Center", // will add later
  title: "via Edify", // will add later
  image: "", // fallback avatar will appear
  project: "IT Services & Training Website Development (MERN Stack)",
  platform: "via Edify",
  date: "Jun 25, 2025 - Aug 20, 2025", // will add later
  review:
    "Hassam built our Softec website with great precision and creativity. The site runs smoothly and perfectly showcases our IT services.",
  rating: 5,
},
{
  name: "Rachel Moore",
  title: "Content Strategist, WriteSphere",
  image: "", // fallback icon
  project: "On-Page SEO for Blog Optimization",
  platform: "via Upwork",
  date: "Oct 20, 2025 - Oct 25, 2025",
  review:
    "Hassam was incredibly helpful in improving our blog’s visibility. He restructured our on-page SEO, optimized headings, and fixed all the metadata issues. We started ranking for multiple keywords within just a few weeks. Super reliable and detailed!",
  rating: 5,
},

];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

  return (
    <div className="py-12 px-4 md:px-10 lg:px-24 overflow-hidden">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="uppercase text-[#FF014F] text-[15px] tracking-widest font-semibold">
          What Clients Say
        </p>
        <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-bold text-[#C4CFDE]">
          Testimonial
        </h1>
      </motion.div>

      <motion.div 
        className="relative mt-11 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-14 max-w-6xl mx-auto transition-all duration-700 ease-in-out"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        key={index}
      >
        {/* Left card */}
        <motion.div 
          className="bg-[#1F2226] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] px-8 py-7 rounded-xl w-[280px] sm:w-[300px] text-center relative z-10"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {testimonials[index].image ? (
            <motion.img
              src={testimonials[index].image}
              alt={`Image of ${testimonials[index].name}`}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto mb-4 object-cover border-4 border-[#2c2f3f]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            />
          ) : (
            <motion.div 
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#2c2f3f] text-white border-4 border-[#2c2f3f]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <User className="w-16 h-16" />
            </motion.div>
          )}
          <motion.p 
            className="text-[#FF014F] text-[12px] mb-1 tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{ once: true }}
          >
  {testimonials[index].platform.toUpperCase()}
</motion.p>

          <motion.h3 
            className="text-[#C4CFDE] text-[20px] md:text-[24px] font-semibold truncate"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {testimonials[index].name}
          </motion.h3>
          <motion.p 
            className="text-[#878e99] text-[14px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {testimonials[index].title}
          </motion.p>
        </motion.div>

        {/* Right card */}
        <motion.div 
          className="bg-[#1F2226] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] px-6 md:px-10 py-10 md:py-12 rounded-xl w-full md:w-[60%] relative overflow-hidden"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Top-right arrows */}
          <div className="absolute top-6 right-6 md:flex gap-2 z-20 hidden">
            <motion.button
              onClick={prev}
              className="bg-[#FF014F] hover:bg-[#e60045] text-white px-2 py-2 transition rounded-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={16} />
            </motion.button>
            <motion.button
              onClick={next}
              className="bg-[#FF014F] hover:bg-[#e60045] text-white px-2 py-2 transition rounded-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={16} />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Quote
              className="absolute text-[#2c2f3f] opacity-10 right-6 top-6"
              size={100}
              strokeWidth={1}
            />
          </motion.div>
          <motion.h3 
            className="text-[#c4cfde] text-[22px] md:text-[26px] mb-2 mt-3 font-semibold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {testimonials[index].project}
          </motion.h3>
          <motion.p 
            className="text-[#878e99] text-[14px] md:text-[16px] mb-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {testimonials[index].platform} - {testimonials[index].date}
          </motion.p>

          {/* Rating */}
          <motion.div 
            className="flex mt-2 mb-6 gap-1 text-yellow-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {Array.from({ length: testimonials[index].rating }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <Star className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="h-[2px] w-full bg-[#1A1D23] my-5"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
          ></motion.div>

          <motion.p 
            className="text-[#C4CFDE] text-[16px] md:text-[18px] leading-relaxed tracking-wider z-10 relative transition-all duration-500 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            {testimonials[index].review.length > 150
              ? testimonials[index].review.substring(0, 150) + "..."
              : testimonials[index].review}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Bottom center arrows */}
      <motion.div 
        className="flex justify-center mt-10 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.button
          onClick={prev}
          className="bg-[#FF014F] hover:bg-[#e60045] text-white px-3 py-3 transition rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={20} />
        </motion.button>
        <motion.button
          onClick={next}
          className="bg-[#FF014F] hover:bg-[#e60045] text-white px-3 py-3 transition rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={20} />
        </motion.button>
      </motion.div>

      <motion.div 
        className="h-[0.5px] w-full bg-black mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      ></motion.div>
    </div>
  );
};

export default Testimonial;

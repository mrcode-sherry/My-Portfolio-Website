"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, User } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
  name: "Tariq",
  title: "Upwork Client",
  image: "", // fallback avatar will appear
  project: "React/Next.js & Node.js Web Development",
  platform: "via Upwork",
  date: "Apr 8, 2025 - Apr 9, 2025",
  review:
    "Hassam did an amazing job with our React/Next.js & Node.js project. He delivered high-quality work on time and communicated clearly throughout. Highly recommend him for any web development tasks!",
  rating: 5,
},
  {
  name: "Christopher Healy",
  title: "Vice President, Parmeatek",
  image: "", // fallback avatar shown
  project: "Motion Graphics for E-Book Marketing",
  platform: "via Direct Client",
  date: "Feb 17 2024 - Feb 25, 2024",
  review:
    "Working with Hassam was an excellent experience. We needed engaging motion graphics for our e-book promotions, and he delivered exactly what we had in mind—on time, and with great creativity. I appreciated his clear communication and revisions without hesitation. Would absolutely work with him again.",
  rating: 5,
}
,
  {
  name: "Jincy John",
  title: "LinkedIn Client",
  image: "", // fallback avatar
  project: "SEO Optimization for Traffic Growth",
  platform: "via LinkedIn",
  date: "Feb 12, 2025",
  review:
    "Hey, Hassam Shahryar, thank you for your exceptional work. Your service has been outstanding, and I’ve already started seeing growth in my traffic.",
  rating: 5,
},{
  name: "Daniel Brooks",
  title: "Founder, PixelDraft",
  image: "", // fallback icon
  project: "Logo Design & Brand Identity Kit",
  platform: "via Direct Client",
  date: "Jan 10 2025 - Jan 15, 2025",
  review:
    "I approached Hassam with just a name and a vision — he turned it into a beautiful brand identity. The logo, color scheme, and fonts were exactly what I had imagined. His creative sense and professionalism really stood out.",
  rating: 5,
},
{
  name: "Emily Parker",
  title: "Marketing Lead, Trendify Apparel",
  image: "", // fallback icon
  project: "Social Media Banner & Ad Designs",
  platform: "via LinkedIn",
  date: "Oct 2024 - Nov 2024",
  review:
    "Hassam did a fantastic job with our promotional graphics. His designs were clean, modern, and exactly on-brand. He was very cooperative with changes and delivered everything before the deadline. Will definitely work with him again!",
  rating: 5,
},{
  name: "Rachel Moore",
  title: "Content Strategist, WriteSphere",
  image: "", // fallback icon
  project: "On-Page SEO for Blog Optimization",
  platform: "via Direct Client",
  date: "Sep 2024 - Oct 2024",
  review:
    "Hassam was incredibly helpful in improving our blog’s visibility. He restructured our on-page SEO, optimized headings, and fixed all the metadata issues. We started ranking for multiple keywords within just a few weeks. Super reliable and detailed!",
  rating: 5,
},{
  name: "Michael Adams",
  title: "Founder, SmartLegalDocs",
  image: "", // fallback icon
  project: "SEO Audit & Organic Traffic Strategy",
  platform: "via Upwork",
  date: "Feb 2025 - Mar 2025",
  review:
    "I hired Hassam for an SEO audit, and he went above and beyond. He not only identified technical gaps but also built a roadmap to improve organic traffic. His report was thorough and easy to understand. Great communication and quick turnaround.",
  rating: 5,
},{
  name: "Samantha Green",
  title: "Founder, Bloom & Brand",
  image: "", // fallback icon
  project: "Instagram Growth & Content Strategy",
  platform: "via LinkedIn",
  date: "Jan 2025 - Mar 2025",
  review:
    "Hassam helped me organize my Instagram feed and created a clear content plan tailored to my brand. I saw real engagement within just a few weeks. He's creative, punctual, and really understands audience behavior. Highly recommended!",
  rating: 5,
},{
  name: "David Miller",
  title: "Operations Manager, FitFuel Co.",
  image: "", // fallback icon
  project: "Facebook Page Optimization & Post Scheduling",
  platform: "via Upwork",
  date: "Aug 2024 - Sep 2024",
  review:
    "We hired Hassam to handle our Facebook page, and the results were great. Post reach went up, scheduling became seamless, and customer responses were handled professionally. He’s responsive and always ready to improve the strategy.",
  rating: 5,
}
,{
  name: "Olivia Bennett",
  title: "Marketing Director, EcoPure Essentials",
  image: "", // fallback icon
  project: "Multi-Platform Social Campaign",
  platform: "via Direct Client",
  date: "Nov 2024 - Jan 2025",
  review:
    "Working with Hassam was a smooth and productive experience. He managed our entire campaign across Facebook, Instagram, and LinkedIn — including content, design, and scheduling. Everything ran like clockwork, and we saw steady growth throughout.",
  rating: 5,
}






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
            {testimonials[index].review.length > 100
              ? testimonials[index].review.substring(0, 100) + "..."
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

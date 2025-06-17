"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Nevine Acotanza",
    title: "Chief Operating Officer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    project: "Android App Development",
    platform: "via Upwork",
    date: "Mar 4, 2015 - Aug 30, 2021",
    review:
      "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit elit.",
    rating: 5,
  },
  {
    name: "Sarah Blake",
    title: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    project: "Landing Page Design",
    platform: "via Fiverr",
    date: "Feb 12, 2020 - Jul 15, 2021",
    review:
      "Excellent design and delivery! Always delivers on time with high quality and great communication.",
    rating: 4,
  },
  {
    name: "James Carter",
    title: "CTO",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    project: "Full Stack Web App",
    platform: "via Freelancer",
    date: "Jan 10, 2022 - Apr 5, 2023",
    review:
      "Absolutely professional and skilled developer. Took care of everything from design to deployment.",
    rating: 5,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  const setCurrent = (i) => setIndex(i);

  return (
    <div className="py-12 px-4 md:px-10 lg:px-24">
      <div className="text-center">
        <p className="uppercase text-[#FF014F] text-[15px] tracking-widest font-semibold">
          What Clients Say
        </p>
        <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-bold text-[#C4CFDE]">
          Testimonial
        </h1>
      </div>

      <div className="relative mt-11 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-14 max-w-6xl mx-auto transition-all duration-700 ease-in-out">
        {/* Left card */}
        <div className="bg-[#1F2226] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] px-8 py-7 rounded-xl w-[280px] sm:w-[300px] text-center relative z-10">
          <img
            src={testimonials[index].image}
            alt={`Image of ${testimonials[index].name}`}
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto mb-4 object-cover border-4 border-[#2c2f3f]"
          />
          <p className="text-[#FF014F] text-[12px] mb-1 tracking-widest">RAINBOW-THEMES</p>
          <h3 className="text-[#C4CFDE] text-[20px] md:text-[24px] font-semibold truncate">
            {testimonials[index].name}
          </h3>
          <p className="text-[#878e99] text-[14px]">{testimonials[index].title}</p>
        </div>

        {/* Right card */}
        <div className="bg-[#1F2226] shadow-[8px_8px_15px_-3px_rgba(0,0,0,0.4),_-8px_-8px_15px_-3px_rgba(255,255,255,0.05)] px-6 md:px-10 py-10 md:py-12 rounded-xl w-full md:w-[60%] relative overflow-hidden">
          <Quote
            className="absolute text-[#2c2f3f] opacity-10 right-6 top-6"
            size={100}
            strokeWidth={1}
          />
          <h3 className="text-[#c4cfde] text-[22px] md:text-[26px] mb-2 mt-3 font-semibold">
            {testimonials[index].project}
          </h3>
          <p className="text-[#878e99] text-[14px] md:text-[16px] mb-1">
            {testimonials[index].platform} - {testimonials[index].date}
          </p>

          {/* Rating */}
          <div className="flex mt-2 mb-6 gap-1 text-yellow-400">
            {Array.from({ length: testimonials[index].rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 md:w-5 md:h-5"
                fill="currentColor"
              />
            ))}
          </div>

          <div className="h-[2px] w-full bg-[#1A1D23] my-5"></div>

          <p className="text-[#C4CFDE] text-[16px] md:text-[18px] leading-relaxed tracking-wider z-10 relative transition-all duration-500 ease-in-out">
            {testimonials[index].review.length > 100
              ? testimonials[index].review.substring(0, 100) + "..."
              : testimonials[index].review}
          </p>

          {/* Arrows */}
          <div className="absolute top-6 right-6 flex gap-2 z-20">
            <button
              onClick={prev}
              className="bg-[#FF014F] hover:bg-[#e60045] text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="bg-[#FF014F] hover:bg-[#e60045] text-white p-2 rounded-full transition"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 space-x-4 md:space-x-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-[#FF014F]" : "bg-[#444]"
              } transition-all duration-300`}
          />
        ))}
      </div>

      <div className="h-[0.5px] w-full bg-black mt-24"></div>
    </div>
  );
};

export default Testimonial;

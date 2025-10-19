"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const education = [
  {
    title: "BSc in Computer Science",
    place: "GC University",
    year: "Continue",
    desc: "The training provided by universities is in order to prepare people to work in various sectors of the economy or areas of culture.",
  },
  {
  title: "Bachelor of Science in Computer Science",
  place: "Government Graduate College",
  year: "2022 - 2024",
  desc: "This program provided a strong theoretical and practical foundation in core computer science. I honed my skills in algorithms, database management, and software development principles.",
},
{
  title: "Secondary School (Computer Science Focus)",
  place: "La Salle High School",
  year: "Completed in 2022",
  desc: "My early education where I first discovered my passion for technology and software. This curriculum established the initial groundwork for my programming and problem-solving skills.",
},
];

const experience = [
  {
  title: "MERN Stack Developer",
  place: "Aryze Tech",
  year: "2024 - Present",
  desc: "Developing robust and scalable web applications for a diverse international clientele. My primary focus is on building complex SaaS platforms, custom CRM systems, and dynamic, high-performance websites.",
},
{
  title: "MERN Stack Developer",
  place: "Edify College of IT",
  year: "2023 - 2024",
  desc: "Gained comprehensive, hands-on experience building full-stack applications. This role involved client interaction, project lifecycle management, and applying freelance principles to deliver complete web solutions.",
},
{
  title: "SEO & Graphic Design Specialist",
  place: "Edify College of IT",
  year: "2023 - 2024",
  desc: "Concurrently, I focused on enhancing digital visibility and brand aesthetics. I designed marketing assets and implemented on-page SEO strategies to improve search engine rankings and user engagement.",
},
];

const designSkills = [
  { name: "Photoshop", level: 100 },
  { name: "Canva", level: 100 },
  { name: "Design", level: 100 },
];

const devSkills = [
  { name: "MERN Stack Development", level: 100 },
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "JavaScript", level: 100 },
  { name: "React.js", level: 100 },
  { name: "Next.js", level: 100 },
  { name: "TailwindCSS", level: 100 },
  { name: "TypeScript", level: 100 },
];

const ProgressBar = ({ skill }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="text-[#C4CFDE]">{skill.name}</span>
      <span className="text-[#C4CFDE]">{skill.level}%</span>
    </div>
    <div className="w-full bg-[#2A2A3B] rounded-full h-2">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-[#FF014F] to-[#D91C84]"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <div className="overflow-hidden mx-4 sm:mx-8 md:mx-12 my-20">
      {/* Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="uppercase text-[#FF014F] text-sm sm:text-base tracking-widest font-semibold">
          2+ Years of Experience
        </p>
        <h1 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-[#C4CFDE]">
          My Resume
        </h1>
      </motion.div>

      {/* Tabs */}
      <motion.div 
        className="flex justify-center flex-wrap gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {["Education", "Professional Skills"].map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tab)}
            className={`text-white text-sm sm:text-base px-6 py-2 rounded-full border border-[#2A2A3B] hover:bg-[#FF014F] hover:text-white transition-all ${
              activeTab === tab ? "bg-[#FF014F]" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Education Tab */}
      {activeTab === "Education" && (
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key="education"
        >
          {/* Education Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] font-semibold text-[#C4CFDE] mb-8">
              Education Quality
            </h2>
            {education.map((item, i) => (
              <motion.div
                key={i}
                className="relative bg-[#1F2226] p-6 rounded-xl border-l-4 border-[#FF014F] mb-6 shadow-md"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-400 italic mb-2">
                  {item.place} ({item.year})
                </p>
                <p className="text-[#C4CFDE] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Job Experience Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] font-semibold text-[#C4CFDE] mb-8">
              Job Experience
            </h2>
            {experience.map((item, i) => (
              <motion.div
                key={i}
                className="relative bg-[#1F2226] p-6 rounded-xl border-l-4 border-[#FF014F] mb-6 shadow-md"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-400 italic mb-2">
                  {item.place} ({item.year})
                </p>
                <p className="text-[#C4CFDE] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Professional Skills Tab */}
      {activeTab === "Professional Skills" && (
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key="skills"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#FF014F] text-sm font-semibold uppercase mb-2">Features</p>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#C4CFDE] mb-6">Design Skill</h2>
            {designSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <ProgressBar skill={skill} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#FF014F] text-sm font-semibold uppercase mb-2">Features</p>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#C4CFDE] mb-6">Development Skill</h2>
            {devSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <ProgressBar skill={skill} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}

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

export default Resume;

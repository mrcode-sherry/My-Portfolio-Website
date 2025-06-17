"use client";
import React, { useState } from "react";

const education = [
  {
    title: "BSc in Computer Science",
    place: "University of Lahore",
    year: "2018 - 2022",
    badge: "3.9/4.0",
    desc: "The training provided by universities is in order to prepare people to work in various sectors of the economy or areas of culture.",
  },
  {
    title: "AS – Science & Information",
    place: "Aspire College",
    year: "2016 - 2018",
    badge: "4.0/4.0",
    desc: "Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.",
  },
  {
    title: "Secondary School Education",
    place: "Govt. High School",
    year: "2014 - 2016",
    badge: "3.9/4.0",
    desc: "Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.",
  },
];

const experience = [
  {
    title: "Sr. Software Engineer",
    place: "Google Inc.",
    year: "2021 - Present",
    country: "USA",
    desc: "Coding helps process is an important part of our culture. Googlers care deeply about their teams and the people who make them up.",
  },
  {
    title: "Web Developer & Trainer",
    place: "Apple Developer Team",
    year: "2019 - 2021",
    country: "Malaysia",
    desc: "A popular destination with a growing number of highly qualified foreign graduates, it’s true that securing a work visa in Malaysia isn’t easy.",
  },
  {
    title: "Front-end Developer",
    place: "Nike – Remote",
    year: "2018 - 2019",
    country: "USA",
    desc: "The India economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy.",
  },
];

const designSkills = [
  { name: "Photoshop", level: 100 },
  { name: "Figma", level: 95 },
  { name: "Adobe XD", level: 80 },
  { name: "Adobe Illustrator", level: 70 },
  { name: "Design", level: 90 },
];

const devSkills = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "Software", level: 70 },
  { name: "Plugin", level: 90 },
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
    <div className="mx-4 sm:mx-8 md:mx-12 my-20">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="uppercase text-[#FF014F] text-sm sm:text-base tracking-widest font-semibold">
          7+ Years of Experience
        </p>
        <h1 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-[#C4CFDE]">
          My Resume
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-16">
        {["Education", "Professional Skills", "Experience", "Interview"].map((tab, idx) => (
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
      </div>

      {/* Education Tab */}
      {activeTab === "Education" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Section */}
          <div>
            <h2 className="text-[28px] font-semibold text-[#C4CFDE] mb-8">
              Education Quality
            </h2>
            {education.map((item, i) => (
              <div
                key={i}
                className="relative bg-[#1F2226] p-6 rounded-xl border-l-4 border-[#FF014F] mb-6 shadow-md"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="bg-[#FF014F] text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-400 italic mb-2">
                  {item.place} ({item.year})
                </p>
                <p className="text-[#C4CFDE] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Job Experience Section */}
          <div>
            <h2 className="text-[28px] font-semibold text-[#C4CFDE] mb-8">
              Job Experience
            </h2>
            {experience.map((item, i) => (
              <div
                key={i}
                className="relative bg-[#1F2226] p-6 rounded-xl border-l-4 border-[#FF014F] mb-6 shadow-md"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="bg-[#FF014F] text-white text-xs px-2 py-1 rounded-full">
                    {item.country}
                  </span>
                </div>
                <p className="text-sm text-gray-400 italic mb-2">
                  {item.place} ({item.year})
                </p>
                <p className="text-[#C4CFDE] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Professional Skills Tab */}
      {activeTab === "Professional Skills" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-[#FF014F] text-sm font-semibold uppercase mb-2">Features</p>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#C4CFDE] mb-6">Design Skill</h2>
            {designSkills.map((skill, i) => (
              <ProgressBar key={i} skill={skill} />
            ))}
          </div>

          <div>
            <p className="text-[#FF014F] text-sm font-semibold uppercase mb-2">Features</p>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#C4CFDE] mb-6">Development Skill</h2>
            {devSkills.map((skill, i) => (
              <ProgressBar key={i} skill={skill} />
            ))}
          </div>
        </div>
      )}

      {/* Experience Tab */}
      {activeTab === "Experience" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Add future expansions here or keep this section for other jobs */}
          <div>
            <p className="text-[#FF014F] text-sm font-semibold uppercase mb-2">2021 - Present</p>
            <h2 className="text-[28px] font-semibold text-[#C4CFDE] mb-8">Trainer Experience</h2>
            {experience.map((item, i) => (
              <div
                key={i}
                className="relative bg-[#1F2226] p-6 rounded-xl border-l-4 border-[#FF014F] mb-6 shadow-md"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="bg-[#FF014F] text-white text-xs px-2 py-1 rounded-full">
                    {item.country}
                  </span>
                </div>
                <p className="text-sm text-gray-400 italic mb-2">
                  {item.place} ({item.year})
                </p>
                <p className="text-[#C4CFDE] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-[#FF014F] text-sm font-semibold uppercase mb-2">2018 - 2021</p>
            <h2 className="text-[28px] font-semibold text-[#C4CFDE] mb-8">Web & Dev Experience</h2>
            {experience.map((item, i) => (
              <div
                key={i}
                className="relative bg-[#1F2226] p-6 rounded-xl border-l-4 border-[#FF014F] mb-6 shadow-md"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="bg-[#FF014F] text-white text-xs px-2 py-1 rounded-full">
                    {item.country}
                  </span>
                </div>
                <p className="text-sm text-gray-400 italic mb-2">
                  {item.place} ({item.year})
                </p>
                <p className="text-[#C4CFDE] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interview Tab */}
      {activeTab === "Interview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Company Experience */}
          <div>
            <p className="text-[#FF014F] text-sm font-semibold uppercase mb-2">2007 - 2010</p>
            <h2 className="text-[28px] font-semibold text-[#C4CFDE] mb-8">Company Experience</h2>
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="relative bg-[#1F2226] p-6 rounded-xl border-l-4 border-[#FF014F] mb-6 shadow-md"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-white">Personal Portfolio April Fools</h3>
                  <span className="bg-[#FF014F] text-white text-xs px-2 py-1 rounded-full">
                    USA
                  </span>
                </div>
                <p className="text-sm text-gray-400 italic mb-2">
                  University of DVI (2007 - 2010)
                </p>
                <p className="text-[#C4CFDE] text-sm">
                  The education should be very interactive. Ut tincidunt est ac dolor aliquam sodales. Phasellus malesuada hendrerit lorem, id lobortis mauris hendrerit ornare.
                </p>
              </div>
            ))}
          </div>

          {/* Job Experience */}
          <div>
            <p className="text-[#FF014F] text-sm font-semibold uppercase mb-2">2007 - 2010</p>
            <h2 className="text-[28px] font-semibold text-[#C4CFDE] mb-8">Job Experience</h2>
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="relative bg-[#1F2226] p-6 rounded-xl border-l-4 border-[#FF014F] mb-6 shadow-md"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-white">Personal Portfolio April Fools</h3>
                  <span className="bg-[#FF014F] text-white text-xs px-2 py-1 rounded-full">
                    CANADA
                  </span>
                </div>
                <p className="text-sm text-gray-400 italic mb-2">
                  University of DVI (2007 - 2010)
                </p>
                <p className="text-[#C4CFDE] text-sm">
                  The education should be very interactive. Ut tincidunt est ac dolor aliquam sodales. Phasellus malesuada hendrerit lorem, id lobortis mauris hendrerit ornare.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="h-[0.5px] w-full bg-black mt-24"></div>
    </div>
  );
};

export default Resume;

// src/components/EducationSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';

/* ----------------------------------------
   Education Data
-----------------------------------------*/
const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering - AI & Data Science",
    institute: "Sandip Institute of Technology and Research Centre",
    location: "Nashik, India",
    duration: "2022 – 2026",
    score: "CGPA: 8.93",
    type: "undergraduate",
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    id: 2,
    degree: "12th HSC",
    institute: "Nutan Vidya mandir",
    location: "Nashik, India", 
    duration: "2020 – 2022",
    score: "75.83%",
    type: "secondary",
    icon: <BookOpen className="w-6 h-6" />
  }
];

/* ----------------------------------------
   Animations
-----------------------------------------*/
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: { y: -5, transition: { duration: 0.2 } }
};

export default function EducationSection() {
  return (
    <section
      id="education"
      className="container-margins py-16 md:py-20 bg-white dark:bg-dark-bg text-gray-900 dark:text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-container mx-auto w-full px-0 sm:px-8 lg:px-20 space-y-10 speciality-margins"
      >
        {/* Header Block - Left Aligned */}
        <div className="mb-12">
          {/* Section Label */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-purple-500" />
            <span className="text-sm tracking-widest font-semibold text-purple-500 uppercase">
              EDUCATION
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white leading-tight mb-4"
          >
            Academic Background
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-2xl"
          >
            My journey of learning and growth through formal education.
          </motion.p>
        </div>

        {/* Education Cards Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-gray-50 dark:bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-purple-400 dark:hover:border-purple-500/50 hover:bg-gray-100 dark:hover:bg-[#252525]"
            >
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* Icon */}
                <div className="flex-shrink-0 p-3 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg border border-purple-500/20 dark:border-purple-500/30">
                  <div className="text-purple-500 dark:text-purple-400">
                    {edu.icon}
                  </div>
                </div>

                {/* Degree Title */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                </div>
              </div>

              {/* Institute Details */}
              <div className="space-y-3">
                {/* Institute Name */}
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-500 dark:text-purple-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {edu.institute}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-500 dark:text-purple-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {edu.location}
                  </span>
                </div>

                {/* Duration and Score Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2">
                  {/* Duration */}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-500 dark:text-purple-400 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {edu.duration}
                    </span>
                  </div>

                  {/* Score/GPA */}
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-500 dark:text-purple-400 flex-shrink-0" />
                    <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm bg-purple-500/10 dark:bg-purple-500/20 px-2 py-1 rounded">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtle Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/5 dark:from-purple-500/10 to-transparent rounded-bl-3xl" />
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 dark:via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

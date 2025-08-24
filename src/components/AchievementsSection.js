// src/components/AchievementsSection.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, CheckCircle, FileText, Bookmark, ExternalLink } from 'lucide-react';


/* ----------------------------------------
   Achievements Data
-----------------------------------------*/
const achievementsData = {
  awards: [
    {
      id: 1,
      title: "TechHorizon Hackathon Finalist",
      issuer: "TechHorizon 2025",
      date: "2025",
      summary: "Finalist among 300+ teams for building AidConnect with LLMs.",
      icon: <Medal className="w-6 h-6" />,
      emoji: "🥇"
    },
    {
      id: 2,
      title: "Smart India Hackathon",
      issuer: "SIH 2024",
      date: "2024",
      summary: "Built an AI-based solution for public welfare using Llama models.",
      icon: <Medal className="w-6 h-6" />,
      emoji: "🥇"
    },
    {
      id: 3,
      title: "Winner – PBL Competition",
      issuer: "SITRC (Academics 2022)",
      date: "2022",
      summary: "Led a Smart Home Automation project.",
      icon: <Trophy className="w-6 h-6" />,
      emoji: "🏆"
    }
  ],
  certifications: [ 
    {
          
      id: 1,
      title: "RAG-based Solution using Azure Ai",
      issuer: "Microsoft",
      date: "2025",
      summary: "Created a generative AI app that uses own data.",
      icon: <FileText className="w-6 h-6" />,
      emoji: "📜",
      certificateUrl: "https://coursera.org/certificates/ml-specialization-cert" // Add your actual certificate URL
    },
    {
      id: 2,
      title: "Generative Ai Specialization",
      issuer: "Infosys",
      date: "2024",
      summary: "Completed Python skills certification with advanced problem-solving.",
      icon: <CheckCircle className="w-6 h-6" />,
      emoji: "✅",
      certificateUrl: "https://hackerrank.com/certificates/python-certificate-1" // Add your actual certificate URL
    },
  
{
      id: 3,
      title: "Certified Python Developer",
      issuer: "Hackerrank",
      date: "2023",
      summary: "Completed Python skills certification with advanced problem-solving..",
      icon: <Bookmark className="w-6 h-6" />,
      emoji: "📘",
      certificateUrl: "https://freecodecamp.org/certificates/frontend-cert" // Add your actual certificate URL
    }
  ]
};


/* ----------------------------------------
   Animations
-----------------------------------------*/
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};


const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};


const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: { y: -5, scale: 1.02, transition: { duration: 0.2 } }
};


const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut',
      staggerChildren: 0.1 
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
};

// Right column variants that match the left column timing
const rightColumnVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const rightItemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};


export default function AchievementsSection() {
  const [activeTab, setActiveTab] = useState('awards'); // Default to awards


  return (
    <section
      id="achievements"
      className="container-margins py-16 md:py-20 bg-white dark:bg-dark-bg text-gray-900 dark:text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-container mx-auto grid md:grid-cols-12 gap-12 px-0 sm:px-8 lg:px-20 space-y-10 speciality-margins"
      >
        {/* ───────────────── Left Column ───────────────── */}
        <div className="md:col-span-5 space-y-6">
          {/* Section Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary-500" />
            <span className="text-sm tracking-widest font-semibold text-primary-500 uppercase">
              ACHIEVEMENTS
            </span>
          </motion.div>


          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white leading-tight"
          >
            Awards & Certifications
          </motion.h2>


          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-700 dark:text-gray-300 text-base leading-relaxed max-w-md"
          >
            A collection of awards and certifications that highlight my journey of innovation, learning, and recognition across various domains.
          </motion.p>


          {/* Toggle Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setActiveTab('awards')}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'awards'
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <Medal className="w-4 h-4" />
              Awards
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'certifications'
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <FileText className="w-4 h-4" />
              Certifications
            </button>
          </motion.div>
        </div>


        {/* ───────────────── Right Column ───────────────── */}
        <motion.div 
          className="md:col-span-7"
          variants={rightColumnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <AnimatePresence mode="wait">
            {activeTab === 'awards' && (
              <motion.div
                key="awards"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                <motion.div variants={rightItemVariants} className="flex items-center gap-2 mb-6">
                  <Medal className="w-5 h-5 text-primary-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Awards</h3>
                </motion.div>
                
                <div className="grid grid-cols-1 gap-4">
                  {achievementsData.awards.map((award, index) => (
                    <motion.div
                      key={award.id}
                      variants={rightItemVariants}
                      whileHover="hover"
                      custom={index}
                      className="group bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary-500/10 border border-gray-200 dark:border-gray-800 hover:border-primary-500/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/20">
                            <span className="text-2xl">{award.emoji}</span>
                          </div>
                        </div>


                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          {/* Header Row */}
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                            <h4 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                              {award.title}
                            </h4>
                            <span className="text-sm text-gray-600 dark:text-gray-400 flex-shrink-0">
                              🗓️ {award.date}
                            </span>
                          </div>


                          {/* Issuer */}
                          <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                            @ <span className="font-medium">{award.issuer}</span>
                          </div>


                          {/* Summary */}
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {award.summary}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}


            {activeTab === 'certifications' && (
              <motion.div
                key="certifications"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                <motion.div variants={rightItemVariants} className="flex items-center gap-2 mb-6">
                  <FileText className="w-5 h-5 text-primary-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                </motion.div>
                
                <div className="grid grid-cols-1 gap-4">
                  {achievementsData.certifications.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      variants={rightItemVariants}
                      whileHover="hover"
                      custom={index}
                      className="group bg-gray-100 dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary-500/10 border border-gray-200 dark:border-gray-800 hover:border-primary-500/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/20">
                            <span className="text-2xl">{cert.emoji}</span>
                          </div>
                        </div>


                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          {/* Header Row */}
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                            <h4 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                              {cert.title}
                            </h4>
                            <div className="flex items-center gap-3 flex-shrink-0">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                🗓️ {cert.date}
                              </span>
                              {/* Certificate Link Icon
                              {cert.certificateUrl && (
                                <motion.a
                                  href={cert.certificateUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/10 dark:bg-primary-500/20 hover:bg-primary-500/20 dark:hover:bg-primary-500/30 transition-colors duration-300 group"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  aria-label={`View ${cert.title} certificate`}
                                >
                                  <ExternalLink className="w-4 h-4 text-primary-500 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300" />
                                </motion.a>
                              )} */}
                            </div>
                          </div>


                          {/* Issuer */}
                          <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                            @ <span className="font-medium">{cert.issuer}</span>
                          </div>


                          {/* Summary */}
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {cert.summary}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}

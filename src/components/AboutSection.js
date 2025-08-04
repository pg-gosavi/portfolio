// src/components/AboutSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CodeIcon } from 'lucide-react';
import resumePDF from '../assets/Parth_resume.pdf'; // Adjust the path as necessary
import avatar from '../assets/avatar.avif';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};


// Check for reduced motion preference
const prefersReducedMotion = typeof window !== 'undefined' && 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;


const itemVariants = {
  hidden: { y: prefersReducedMotion ? 0 : 30, opacity: 0 },
  visible: { 
    y: 5, 
    opacity: 1, 
    transition: { 
      duration: prefersReducedMotion ? 0.1 : 0.6, 
      ease: 'easeOut' 
    } 
  },
};


const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);


  // Button handlers
  const handleResumeClick = () => {
    // Replace with your actual resume path
    window.open(resumePDF, '_blank');
  };


  


  const handleImageLoad = () => {
    setImageLoaded(true);
  };


  const handleImageError = () => {
    setImageError(true);
  };


  return (
    <motion.section
      id="about-section"
      className="container-margins pt-35 md:pt-30 pb-20 bg-white dark:bg-dark-bg text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0.1 : 0.8 }}
      viewport={{ once: true }}
      itemScope
      itemType="https://schema.org/Person"
    >
      <motion.div
        className="max-w-container mx-auto w-full px-0 sm:px-8 lg:px-20 space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Main About Section */}
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Greeting - Center aligned */}
            <motion.div
              className="flex items-center justify-center space-x-3"
              initial={{ x: prefersReducedMotion ? 0 : -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: prefersReducedMotion ? 0.1 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={prefersReducedMotion ? {} : { rotate: [0, 15, -10, 15, -10, 0] }}
                transition={prefersReducedMotion ? {} : { repeat: Infinity, duration: 2.5, ease: 'easeInOut', repeatDelay: 1.5 }}
              >
                <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-primary-400" />
              </motion.div>
              <span className="text-base md:text-lg text-primary-400 font-normal">
                Here's more <span className="font-medium">About Me</span>,
              </span>
            </motion.div>


            {/* Avatar and Text Horizontal Layout */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12">
              {/* Avatar Section - Left Side */}
              <motion.div 
                variants={itemVariants}
                className="flex-shrink-0 order-1 md:order-1"
              >
                <div className="relative">
                  {/* Main Avatar */}
                  <motion.div
                    className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border-4 border-primary-400/50 shadow-2xl shadow-gray-500/30 dark:shadow-primary-400/20"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Avatar Background */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 flex items-center justify-center border-2 border-gray-300 dark:border-gray-500 relative">
                      {/* Actual image */}
                      {!imageError && (
                        <img 
                          src={avatar}
                          alt="Parth Ghadge - Software Development Engineer"
                          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                          }`}
                          loading="lazy"
                          onLoad={handleImageLoad}
                          onError={handleImageError}
                          itemProp="image"
                        />
                      )}
                      {/* Fallback placeholder - shows while loading or on error */}
                      <div 
                        className={`text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 dark:text-gray-100 select-none transition-opacity duration-300 ${
                          imageLoaded && !imageError ? 'opacity-0' : 'opacity-100'
                        }`}
                      >
                        PG
                      </div>
                    </div>
                  </motion.div>


                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-1 -right-2 w-6 h-6 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full shadow-md shadow-primary-400/50"
                    animate={prefersReducedMotion ? {} : { rotate: [0, 360] }}
                    transition={prefersReducedMotion ? {} : { duration: 80, repeat: Infinity, ease: 'linear' }}
                  >
                    
                  </motion.div>


                  <motion.div
                    className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full shadow-md shadow-primary-400/50"
                    animate={prefersReducedMotion ? {} : { rotate: [0, 360] }}
                    transition={prefersReducedMotion ? {} : { duration: 8, repeat: Infinity, ease: 'linear' }}
                  />


                  {/* Background Glow */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-400/20 to-primary-500/10 dark:from-primary-400/30 dark:to-primary-500/15 rounded-3xl blur-2xl scale-110" />
                </div>
              </motion.div>


              {/* Text Content - Right Side */}
              <motion.div 
                variants={itemVariants}
                className="flex-1 space-y-6 text-center md:text-left order-2 md:order-2"
              >
                <motion.p
                  className="text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100 leading-relaxed font-medium"
                  variants={itemVariants}
                  itemProp="description"
                >
                 I’m an AI and Data Science student who’s endlessly curious about how technology can solve real problems. For me, coding isn’t just about syntax or logic-it’s about creating things that genuinely help people. I love learning, building, and turning ideas into something useful. At the heart of it all, I just want to make tech a little more thoughtful, a little more human.
                </motion.p>


                <motion.div variants={itemVariants} className="flex justify-center md:justify-start gap-4 flex-wrap">
                  {/* Resume Button */}
                  <motion.button
                    onClick={handleResumeClick}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-400 text-white rounded-full font-medium hover:bg-primary-500 transition-colors duration-300 shadow-lg shadow-primary-400/30 hover:shadow-primary-500/40 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    aria-label="Download my resume (PDF)"
                    type="button"
                  >
                    <span>My Resume</span>
                  </motion.button>


                
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};


export default AboutSection;

// src/components/ProjectsSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import AidConnect from '../assets/AidConnect.png';
import MediBuddy from '../assets/Medibuddy.png';
import MentorHub from '../assets/MentorsHub.png';
//import InSight from '../assets/InSight.png';
import AppleAnalyzer from '../assets/AppleAnalyzer.png';

/* ----------------------------------------
   Projects Data
-----------------------------------------*/
const projectsData = [
   {
    id: 1,
    title: "MediBuddy",
    category: "Development & AI",
    year: "2025",
    status: "Multimodal Healthcare Assistant",
    description: "A voice and vision-based AI assistant for healthcare diagnosis. Integrated speech and image processing models achieving ~95% accuracy.",
    image: MediBuddy,
    backgroundColor: "bg-purple-50 dark:bg-purple-900/20",
    accentColor: "text-purple-700 dark:text-purple-400",
    technologies: ["Python", "Gradio", "OpenAI", "Groq Api"],
    //demoUrl: "https://medibuddy-demo.com",
    githubUrl: "https://github.com/pg-gosavi/MediBuddy"
  },

  {
    id: 2,
    title: "AidConnect",
    category: "Development",
    year: "2025",
    status: "Hackathon Finalist",
    description: "Donation platform for direct goods delivery from shopkeepers to NGOs. Features an AI-based vendor matching algorithm using LLaMA 3.2.",
    image: AidConnect,
    backgroundColor: "bg-purple-50 dark:bg-purple-900/20",
    accentColor: "text-purple-700 dark:text-purple-400",
    technologies: ["React", "Node.js", "LLaMA 3.2", "MongoDB"],
    //demoUrl: "https://aidconnect-demo.com",
    githubUrl: "https://github.com/your-username/aidconnect"
  },
  {
    id: 3,
    title: "MentorHub.ai",
    category: "Full-stack AI Platform",
    year: "2025",
    status: "Domain-Specific AI Mentorship",
    description: "Built using Streamlit and FastAPI, this platform enables users to interact with specialized AI mentors trained using LangChain and vector DBs.",
    image: MentorHub,
    backgroundColor: "bg-purple-50 dark:bg-purple-900/20",
    accentColor: "text-purple-700 dark:text-purple-400",
    technologies: ["Streamlit", "FastAPI", "LangChain", "Vector DB"],
    //demoUrl: "https://mentorhub-demo.com",
    githubUrl: "https://github.com/your-username/mentorhub"
  },
  {
    id: 4,
    title: "Apple Freshess Analyzer",
    category: "AI Automation",
    year: "2025",
    status: "AI Detector",
    description: "an intelligent agentic system that detects apples in images, classifies their freshness using deep learning, and provides expert advice via LLaMA 3. It combines YOLOv8, ResNet18, and Groq-powered LLMs to deliver real-time fruit quality assessment",
    image: AppleAnalyzer,
    backgroundColor: "bg-purple-50 dark:bg-purple-900/20",
    accentColor: "text-purple-700 dark:text-purple-400",
    technologies: ["Python", "LangGraph", "Pytorch", "YOLOv8", "ResNet18", "Gradio"],
    //demoUrl: "https://insight-demo.com",
    githubUrl: "https://github.com/pg-gosavi/AppleAnalyzer.ai"
  }
];

/* ----------------------------------------
   FIXED Animations with proper timing
-----------------------------------------*/
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.6
    },
  },
};

const itemVariants = {
  hidden: { y: 0, opacity: 0 },
  visible: { 
    y: -30, // Fixed positioning
    opacity: 1, 
    transition: { 
      duration: 0.6,
      ease: 'easeOut' 
    } 
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.7,
      ease: 'easeOut' 
    } 
  },
  hover: { 
    y: -10, 
    scale: 1.02,
    transition: { 
      duration: 0.3,
      ease: 'easeOut' 
    }
  }
};

const ProjectsSection = () => {
  const [imageLoaded, setImageLoaded] = useState({});
  const [imageError, setImageError] = useState({});

  const handleImageLoad = (projectId) => {
    setImageLoaded(prev => ({ ...prev, [projectId]: true }));
  };

  const handleImageError = (projectId) => {
    setImageError(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <section
      id="projects"
      className="container-margins py-16 md:py-20 bg-white dark:bg-dark-bg text-gray-900 dark:text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: true, 
          amount: 0.1,
          margin: "-100px"
        }}
        className="max-w-container mx-auto w-full px-0 sm:px-8 lg:px-20 space-y-10 speciality-margins"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary-500" />
            <span className="text-sm tracking-widest font-semibold text-primary-500 uppercase">
              MY WORK
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white leading-tight mb-6"
          >
            Selected Projects
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Here's a curated selection showcasing my expertise and the achieved results.
          </motion.p>
        </div>

        {/* Projects Grid - Responsive Layout */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className={`group relative ${project.backgroundColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden ${
                (index === 1 || index === 3) ? 'md:mt-12 md:-mb-12' : ''
              }`}
            >
              {/* Project Image/Mockup */}
              <div className="relative mb-6 aspect-video bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                {/* Actual Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imageLoaded[project.id] && !imageError[project.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(project.id)}
                  onError={() => handleImageError(project.id)}
                />

                {/* Fallback/Loading State */}
                {(!imageLoaded[project.id] || imageError[project.id]) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <div className={`${project.accentColor} font-medium text-sm`}>
                        {project.title}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {imageError[project.id] ? 'Image not found' : 'Loading...'}
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                    {/* <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 dark:bg-black/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 text-gray-900 dark:text-white" />
                    </motion.a> */}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 dark:bg-black/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 text-gray-900 dark:text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 flex-shrink-0" />
                </div>

                <div className="inline-block">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${project.accentColor} bg-purple-100 dark:bg-purple-900/30`}>
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-800 dark:text-gray-300 font-medium">
                    {project.category}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 dark:from-purple-500/20 to-transparent rounded-bl-full" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;

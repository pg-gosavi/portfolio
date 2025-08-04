// src/components/SpecialitySection.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, Code, Bot, Rocket, Code2 } from 'lucide-react';
import backendImg from '../assets/Backend.png';
import aiAgentImg from '../assets/aiagent.webp';
import hackathonImg from '../assets/hackathon.jpg';


/* ----------------------------------------
   Tech stack (same as AboutSection)
-----------------------------------------*/
const techStack = [
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Numpy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/390px-Scikit_learn_logo_small.svg.png?20180808062052' },
  { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'LangChain', icon: 'https://images.seeklogo.com/logo-png/61/1/langchain-icon-logo-png_seeklogo-611655.png' },
  { name: 'Vector DB', icon: 'https://www.deepchecks.com/wp-content/uploads/2024/12/logo-vectordb.png' },
  
];


/* ----------------------------------------
   Speciality Data
-----------------------------------------*/
const specialties = [
  {
    id: 1,
    icon: <Code className="w-5 h-5" />,
    title: "Backend Development",
    description: "Architected scalable systems using Python, Flask, React, PostgreSQL, MySQL. Enhanced performance and backend integration.",
    image: backendImg,
    emoji: "🔧"
  },
  {
    id: 2,
    icon: <Bot className="w-5 h-5" />,
    title: "AI & LLM Applications",
    description: "Built AI agents using LLaMA 3, Whisper, LangChain, etc. Delivered domain-specific AI solutions with voice, image, and context input.",
    image: aiAgentImg,
    emoji: "🤖"
  },
  {
    id: 3,
    icon: <Rocket className="w-5 h-5" />,
    title: "Hackathons & Innovation",
    description: "Finalist in national hackathons. Built impactful projects like AidConnect and MediBuddy using real-world problem solving.",
    image: hackathonImg,
    emoji: "🚀"
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


const accordionVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { 
    height: "auto", 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};


const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};


export default function SpecialitySection() {
  const [activeItem, setActiveItem] = useState(1);
  const [imageLoaded, setImageLoaded] = useState({});


  const handleAccordionClick = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };


  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };


  const handleImageError = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: false }));
  };


  const activeSpecialty = specialties.find(item => item.id === activeItem) || specialties[0];


  return (
    <section
      id="speciality"
      className="container-margins py-16 md:py-20 bg-white dark:bg-dark-bg text-gray-900 dark:text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-container mx-auto w-full px-0 sm:px-8 lg:px-20 space-y-10 speciality-margins"
      >
        <div className="space-y-6">
          {/* Section Header - Outside grid */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary-500" />
            <span className="text-sm tracking-widest font-semibold text-primary-500 uppercase">
              SPECIALITY
            </span>
          </motion.div>

          {/* Main content grid - starts from main title level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            
            {/* ───────────────── Left Column - Title + Accordion ───────────────── */}
            <div className="space-y-6">
              {/* Main Title */}
              <motion.h2
                variants={itemVariants}
                className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white leading-tight"
              >
                Areas of Expertise
              </motion.h2>

              {/* Accordion Items */}
              <motion.div variants={itemVariants} className="space-y-4">
                {specialties.map((specialty) => (
                  <motion.div
                    key={specialty.id}
                    className={`bg-gray-100 dark:bg-[#1a1a1a] rounded-xl shadow-sm transition-all duration-300 border border-gray-200 dark:border-gray-800 ${
                      activeItem === specialty.id 
                        ? 'ring-2 ring-primary-400/30 bg-gray-50 dark:bg-[#252525]' 
                        : 'hover:bg-gray-50 dark:hover:bg-[#252525]'
                    }`}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => handleAccordionClick(specialty.id)}
                      className="w-full p-6 text-left flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{specialty.emoji}</span>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                          {specialty.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: activeItem === specialty.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </motion.div>
                    </button>

                    {/* Accordion Content */}
                    <AnimatePresence>
                      {activeItem === specialty.id && (
                        <motion.div
                          variants={accordionVariants}
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {specialty.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ───────────────── Right Column - Dynamic Image (aligned with main title) ───────────────── */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col h-full"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-100 dark:bg-gray-800"
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-primary-400/10 to-primary-500/20 dark:from-primary-400/20 dark:to-primary-500/30">
                    {/* Main Image */}
                    <img
                      src={activeSpecialty.image}
                      alt={activeSpecialty.title}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        imageLoaded[activeItem] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(activeItem)}
                      onError={() => handleImageError(activeItem)}
                    />
                    
                    {/* Loading/Fallback State */}
                    {!imageLoaded[activeItem] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-400/20 to-primary-500/30 dark:from-primary-400/30 dark:to-primary-500/40">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                            {activeSpecialty.icon}
                          </div>
                          <div className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                            Loading...
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Subtle gradient overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>

                  {/* Clean floating indicator (minimal) */}
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-primary-500 rounded-full shadow-lg animate-pulse" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Technical Expertise Section with Infinite Scroll */}
        <div className="-mt-8">
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="max-w-full overflow-hidden py-8 relative">
              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-dark-bg to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-dark-bg to-transparent z-10" />
              
              {/* Animated scrolling container */}
              <motion.div
                className="flex space-x-8"
                animate={{
                  x: [0, -50 * techStack.length],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear',
                  },
                }}
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={`first-${index}`}
                    className="flex-shrink-0 flex flex-col items-center group"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:border-gray-400 dark:group-hover:border-gray-500 group-hover:bg-gray-50 dark:group-hover:bg-black transition-all duration-300 shadow-lg">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10 object-contain"
                        onError={e => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-10 h-10 bg-primary-500 rounded-lg hidden items-center justify-center text-white text-xs font-bold">
                        {tech.name.substring(0, 2)}
                      </div>
                    </div>
                    <span className="mt-2 text-xs text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {techStack.map((tech, index) => (
                  <motion.div
                    key={`second-${index}`}
                    className="flex-shrink-0 flex flex-col items-center group"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:border-gray-400 dark:group-hover:border-gray-500 group-hover:bg-gray-50 dark:group-hover:bg-black transition-all duration-300 shadow-lg">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10 object-contain"
                        onError={e => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-10 h-10 bg-primary-500 rounded-lg hidden items-center justify-center text-white text-xs font-bold">
                        {tech.name.substring(0, 2)}
                      </div>
                    </div>
                    <span className="mt-2 text-xs text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

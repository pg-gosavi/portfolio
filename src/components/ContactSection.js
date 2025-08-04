// src/components/ContactSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, Linkedin, Github, Instagram, Mail, Twitter } from 'lucide-react';

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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/your-profile' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/your-profile' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/your-profile' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, url: 'mailto:your.email@gmail.com' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/your-profile' }
  ];

  return (
    <section
      id="contact"
      className="container-margins py-12 md:py-20 bg-white dark:bg-dark-bg text-gray-900 dark:text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-container mx-auto w-full px-0 sm:px-8 lg:px-20 space-y-10 speciality-margins"
      >
        {/* Header Section - Left Aligned */}
        <div className="text-left mb-16">
          {/* Section Label */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary-500" />
            <span className="text-sm tracking-widest font-semibold text-primary-500 uppercase">
              CONNECT WITH ME
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white leading-tight"
          >
            Let's start a project<br />together
          </motion.h2>
        </div>

        {/* Two Column Layout with Height Matching */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:items-start">
          
          {/* Left Column - Profile Card */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl p-6 md:p-8 h-fit border border-gray-200 dark:border-gray-800">
              
              {/* Availability Tag */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full border border-green-500/20">
                  Available for work
                </span>
              </div>

              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full border-4 border-white dark:border-white flex items-center justify-center text-2xl font-bold text-gray-700 dark:text-gray-200">
                    PG
                  </div>
                  {/* Replace with actual image when available */}
                  {/* <img
                    src="/path-to-your-avatar.jpg"
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-white object-cover"
                  /> */}
                </div>
              </div>

              {/* Message Text */}
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed text-left mb-8">
                My inbox is always open. Whether you have a project or just want to say Hi. I would love to hear from you. Feel free to contact me and I'll get back to you.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants} className="flex flex-col h-full">
            <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-6">
              {/* Form Fields Container */}
              <div className="flex-1 space-y-6">
                {/* Full Name Field */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div className="flex-1 flex flex-col">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="flex-1 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none min-h-[120px]"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              {/* Submit Button - Always at Bottom */}
              <div className="mt-6">
                <motion.button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20 dark:hover:shadow-white/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

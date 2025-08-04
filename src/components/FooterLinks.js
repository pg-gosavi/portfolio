import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FooterLinks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const socialLinks = [
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/parth-gosavi', label: 'LinkedIn Profile' },
    { name: 'GITHUB', url: 'https://github.com/pg-gosavi', label: 'GitHub Profile' },
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/parthgosavi_11?igsh=MXMxODZwcnA4anNqbA==', label: 'Instagram Profile' },
    { name: 'GMAIL', url: 'mailto:parth93.751@gmail.com', label: 'Email Contact' }
  ];

  return (
    <div className="max-w-container mx-auto px-0 sm:px-0 lg:px-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap items-center gap-6 md:gap-8"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            variants={itemVariants}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="group relative flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs md:text-sm font-medium tracking-wider uppercase">
              {link.name}
            </span>
            <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-primary-400 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ width: '100%' }}
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default FooterLinks;

// src/components/FooterSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

/* ----------------------------------------
   Animations
-----------------------------------------*/
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const FooterSection = () => {
  return (
    <footer className="bg-white dark:bg-[#0d0d0d] pt-6 pb-24 md:pb-safe">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="container-margins"
      >
        <div className="max-w-container mx-auto">
          {/* Footer Content */}
          <div className="text-center space-y-2">
            <motion.p
              variants={itemVariants}
              className="text-sm font-medium text-gray-800 dark:text-gray-400 gap-1"
            >
              ©2025 Parth Gosavi. All Rights Reserved.
            </motion.p>
            
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;

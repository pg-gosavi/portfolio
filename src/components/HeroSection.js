import React from 'react';
import { motion } from 'framer-motion';
import { Hand, ArrowRight } from 'lucide-react';
import FooterLinks from './FooterLinks';
import ClickSpark from './ClickSpark';


const sharedMotionProps = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, ease: 'easeOut' }
};

const HeroSection = () => {
  // Improved scroll to About section function with responsive offset
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      // Responsive offset calculation
      const isMobile = window.innerWidth < 768; // md breakpoint in Tailwind
      const yOffset = isMobile ? -86 : -110; // -8 for mobile, -110 for desktop
      
      const element = aboutSection;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ClickSpark
      sparkColor="#A855F7"
      sparkSize={15}
      sparkRadius={30}
      sparkCount={10}
      duration={700}
      easing="ease-out"
      extraScale={1.4}
    >
      <section
        className="py-20 md:py-24 lg:py-28 relative bg-white dark:bg-dark-bg text-gray-900 dark:text-white"
      >
        <div className="max-w-container mx-auto w-full px-4 sm:px-8 lg:px-20 space-y-10">

          {/* Greeting */}
          <motion.div {...sharedMotionProps} className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: [0, 20, -15, 20, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', repeatDelay: 1 }}
            >
              <Hand className="w-6 h-6 md:w-7 md:h-7 text-primary-400" />
            </motion.div>
            <span className="text-base md:text-lg text-primary-400 font-normal">
              Hey! It's me <span className="font-medium">Parth</span>,
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div {...sharedMotionProps}>
            <h1 className="font-bold text-[clamp(2.5rem,6vw,6rem)] leading-[1.15] tracking-tight text-left">
              Solving <span className="text-primary-400">real world</span><br />
              <span className="text-primary-400">problems </span>that matter{' '}
              <span className="inline md:inline lg:block">&amp; impact.</span>
            </h1>
          </motion.div>

          {/* Divider + Paragraph */}
          <motion.div
            {...sharedMotionProps}
            className="w-full flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8"
          >
            {/* Divider */}
            <motion.div
              className="hidden md:block flex-1 h-px bg-gray-300 dark:bg-[#2C2C2C]"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
            <motion.div
              className="block md:hidden w-20 h-px bg-gray-300 dark:bg-[#2C2C2C]"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '5rem', opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />

            {/* Paragraph */}
            <p className="text-gray-600 dark:text-[#CCCCCC] text-base md:text-lg xl:text-xl font-light tracking-normal text-left w-full md:w-auto md:max-w-md lg:max-w-lg xl:max-w-xl flex-shrink-0">
              I fuse data, code, and creativity to build meaningful technology that solves practical challenges.
            </p>
          </motion.div>

          {/* FooterLinks and CTA */}
          <motion.div {...sharedMotionProps} className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-8 md:gap-6">
            <div className="hidden md:block">
              <FooterLinks />
            </div>
            <div className="md:w-auto">
              <motion.button
                onClick={scrollToAbout}
                className="
                  w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20 dark:hover:shadow-white/20 cursor-pointer
                "
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(9, 9, 9, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Know me better</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </ClickSpark>
  );
};

export default HeroSection;

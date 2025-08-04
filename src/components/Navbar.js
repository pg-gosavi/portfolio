// src/components/Navbar.js
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Moon, Sun, Home, User, FolderOpen, MessageCircle } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  
  const navItems = [
    'Home', 'About Me', 'Projects', 'Contact'
  ];

  const mobileNavItems = [
    { name: 'Home', title: 'Home', icon: <Home className="w-5 h-5" />, id: 'hero' },
    { name: 'About', title: 'About', icon: <User className="w-5 h-5" />, id: 'about-section' },
    { name: 'Projects', title: 'Projects', icon: <FolderOpen className="w-5 h-5" />, id: 'projects' },
    { name: 'Contact', title: 'Contact', icon: <MessageCircle className="w-5 h-5" />, id: 'contact' }
  ];

  const sectionMapping = {
    'Home': 'hero',
    'About Me': 'about-section',
    'Projects': 'projects', 
    'Contact': 'contact'
  };

  // **UPDATED: All sections that should be considered as "About Me"**
  const aboutSections = [
    'about-section', 
    'speciality', 
    'experience', 
    'education', 
    'achievements'
  ];

  // **UPDATED: All sections including the about subsections**
  const sections = ['hero', ...aboutSections, 'projects', 'contact'];

  useEffect(() => {
    const initialScrollY = window.scrollY;
    setIsScrolled(initialScrollY > 5);
    setIsLoaded(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
      
      // **UPDATED: Enhanced section detection logic**
      const scrollPosition = window.scrollY + 200;
      
      let currentSection = 'hero';
      
      // Check each section to find which one is currently in view
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // **UPDATED: If it's any of the about sections, set it as 'about-section'**
            if (aboutSections.includes(sectionId)) {
              currentSection = 'about-section';
            } else {
              currentSection = sectionId;
            }
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    // **UPDATED: Enhanced IntersectionObserver callback**
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0, 0.1, 0.25, 0.5, 0.75]
    };

    const observerCallback = (entries) => {
      let maxRatio = 0;
      let activeEntry = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeEntry = entry;
        }
      });

      if (activeEntry && maxRatio > 0.1) {
        // **UPDATED: Map about subsections to 'about-section'**
        const sectionId = activeEntry.target.id;
        if (aboutSections.includes(sectionId)) {
          setActiveSection('about-section');
        } else {
          setActiveSection(sectionId);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Shared transition configuration for perfect sync
  const sharedTransition = {
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94],
    type: "tween"
  };

  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getNavbarHeight = () => {
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 768) {
      return 70;
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      return 80;
    } else {
      return 90;
    }
  };

  const scrollToSection = (item) => {
    const sectionId = sectionMapping[item];
    
    if (item === 'Home') {
      scrollToHero();
      return;
    }

    const element = document.getElementById(sectionId);
    
    if (element) {
      let navbarOffset;
      
      if (sectionId === 'about-section') {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
          navbarOffset = 80;
        } else if (screenWidth >= 768 && screenWidth < 1024) {
          navbarOffset = 60;
        } else {
          navbarOffset = 110;
        }
      } else if (sectionId === 'projects') {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
          navbarOffset = 70;
        } else if (screenWidth >= 768 && screenWidth < 1024) {
          navbarOffset = 75;
        } else {
          navbarOffset = 80;
        }
      } else if (sectionId === 'contact') {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) {
          navbarOffset = 70;
        } else if (screenWidth >= 768 && screenWidth < 1024) {
          navbarOffset = 75;
        } else {
          navbarOffset = 30;
        }
      } else {
        navbarOffset = getNavbarHeight();
      }
      
      const elementPosition = element.offsetTop - navbarOffset;
      const scrollPosition = Math.max(0, elementPosition);
      
      // Set active section immediately for visual feedback
      setActiveSection(sectionId);
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMobileNavClick = (item) => {
    if (item.name === 'Home') {
      scrollToHero();
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        let mobileOffset;
        
        if (item.id === 'about-section') {
          mobileOffset = 75;
        } else if (item.id === 'projects') {
          mobileOffset = 40; 
        } else if (item.id === 'contact') {
          mobileOffset = 45;
        } else {
          const mobileTopBar = document.querySelector('.fixed.top-4');
          const mobileTopBarHeight = mobileTopBar ? mobileTopBar.offsetHeight + 16 : 60;
          const buffer = 10;
          mobileOffset = mobileTopBarHeight + buffer;
        }
        
        const elementPosition = element.offsetTop - mobileOffset;
        const scrollPosition = Math.max(0, elementPosition);
        
        // Set active section immediately for better visual feedback
        setActiveSection(item.id);
        
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const getNavHref = (item) => {
    if (item === 'Home') {
      return '#';
    }
    return `#${sectionMapping[item]}`;
  };

  const handleNavClick = (item, e) => {
    e.preventDefault();
    scrollToSection(item);
  };

  const isActiveItem = (item) => {
    const sectionId = sectionMapping[item];
    return activeSection === sectionId;
  };

  const isActiveMobileItem = (item) => {
    return activeSection === item.id;
  };

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav className="fixed top-4 sm:top-6 lg:top-8 left-0 right-0 z-50 flex justify-center navbar-margins hidden md:flex">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center w-full max-w-container mx-auto relative h-14">
          {/* Glass Effect Container - Synchronized animation */}
          <motion.div 
            className={`absolute rounded-full ${
              isScrolled && isLoaded
                ? isDarkMode
                  ? 'bg-neutral-900/60 backdrop-blur-xl border border-neutral-700/40 shadow-lg shadow-black/20'
                  : 'bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-lg shadow-gray-500/10'
                : 'bg-transparent backdrop-blur-none border border-transparent shadow-none'
            }`}
            animate={{
              left: isScrolled && isLoaded ? '240px' : '-32px',
              right: isScrolled && isLoaded ? '240px' : '-32px',
              top: '0px',
              bottom: '0px',
              opacity: isScrolled && isLoaded ? 1 : 0
            }}
            transition={sharedTransition}
            style={{
              boxShadow: (isScrolled && isLoaded)
                ? isDarkMode
                  ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.03)' 
                  : '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                : 'none'
            }}
          />

          {/* PG Logo - Perfectly synchronized movement */}
          <motion.div
            className="absolute left-0 flex items-center"
            animate={{
              x: isScrolled && isLoaded ? 256 : -32
            }}
            transition={sharedTransition}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              onClick={scrollToHero}
              className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer transition-colors duration-300 relative z-10 px-2"
              style={{ transformOrigin: 'center center' }}
              aria-label="Go to home"
            >
              PG
            </motion.button>
          </motion.div>

          {/* Center Navigation Items */}
          <div className="flex-1 flex justify-center">
            <motion.div 
              className="px-4 py-3"
              animate={{
                opacity: isScrolled && isLoaded ? 1 : 0,
                scale: isScrolled && isLoaded ? 1 : 0.9
              }}
              transition={sharedTransition}
            >
              <ul className="flex items-center space-x-4 relative z-10">
                {navItems.map((item, index) => (
                  <li key={item} className="flex items-center">
                    <a
                      href={getNavHref(item)}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`
                        text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer px-2
                        ${isActiveItem(item)
                          ? 'text-primary-400' 
                          : isDarkMode 
                            ? 'text-gray-300 hover:text-primary-400'
                            : 'text-gray-700 hover:text-primary-400'
                        }
                      `}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Theme Toggle - Perfectly synchronized movement */}
          <motion.div
            className="absolute right-0 flex items-center"
            animate={{
              x: isScrolled && isLoaded ? -256 : 32
            }}
            transition={sharedTransition}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              onClick={toggleTheme}
              className="flex items-center justify-center transition-colors duration-300 relative z-10 px-2"
              style={{ transformOrigin: 'center center' }}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Moon className="w-5 h-5 text-neutral-400 hover:text-primary-400 transition-colors duration-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-600 hover:text-primary-400 transition-colors duration-300" />
              )}
            </motion.button>
          </motion.div>
        </div>

        {/* Tablet Layout */}
        <div className="md:flex lg:hidden items-center w-full max-w-4xl mx-auto relative h-12">
          {/* Glass Effect Container for Tablet - Synchronized */}
          <motion.div 
            className={`absolute rounded-full ${
              isScrolled && isLoaded
                ? isDarkMode
                  ? 'bg-neutral-900/60 backdrop-blur-xl border border-neutral-700/40 shadow-lg shadow-black/20'
                  : 'bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-lg shadow-gray-500/10'
                : 'bg-transparent backdrop-blur-none border border-transparent shadow-none'
            }`}
            animate={{
              left: isScrolled && isLoaded ? '160px' : '-16px',
              right: isScrolled && isLoaded ? '160px' : '-16px',
              top: '0px',
              bottom: '0px',
              opacity: isScrolled && isLoaded ? 1 : 0
            }}
            transition={sharedTransition}
            style={{
              boxShadow: (isScrolled && isLoaded)
                ? isDarkMode
                  ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.03)' 
                  : '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                : 'none'
            }}
          />

          {/* PG Logo - Tablet - Synchronized */}
          <motion.div
            className="absolute left-0 flex items-center"
            animate={{
              x: isScrolled && isLoaded ? 172 : -16
            }}
            transition={sharedTransition}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              onClick={scrollToHero}
              className="text-lg font-bold text-gray-900 dark:text-white cursor-pointer transition-colors duration-300 relative z-10 px-2"
              style={{ transformOrigin: 'center center' }}
              aria-label="Go to home"
            >
              PG
            </motion.button>
          </motion.div>

          {/* Center Navigation - Tablet - Synchronized */}
          <div className="flex-1 flex justify-center">
            <motion.div 
              className="px-3 py-2"
              animate={{
                opacity: isScrolled && isLoaded ? 1 : 0,
                scale: isScrolled && isLoaded ? 1 : 0.9
              }}
              transition={sharedTransition}
            >
              <ul className="flex items-center space-x-3 relative z-10">
                {navItems.map((item, index) => (
                  <li key={item} className="flex items-center">
                    <a
                      href={getNavHref(item)}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`
                        text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer px-1
                        ${isActiveItem(item)
                          ? 'text-primary-400' 
                          : isDarkMode 
                            ? 'text-gray-300 hover:text-primary-400'
                            : 'text-gray-700 hover:text-primary-400'
                        }
                      `}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Theme Toggle - Tablet - Synchronized */}
          <motion.div
            className="absolute right-0 flex items-center"
            animate={{
              x: isScrolled && isLoaded ? -172 : 16
            }}
            transition={sharedTransition}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              onClick={toggleTheme}
              className="flex items-center justify-center transition-colors duration-300 relative z-10 px-2"
              style={{ transformOrigin: 'center center' }}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Moon className="w-4 h-4 text-neutral-400 hover:text-primary-400 transition-colors duration-300" />
              ) : (
                <Sun className="w-4 h-4 text-gray-600 hover:text-primary-400 transition-colors duration-300" />
              )}
            </motion.button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-between items-center navbar-margins md:hidden">
        {/* PG Logo - Left Side */}
        <motion.button
          onClick={scrollToHero}
          className="text-lg font-bold text-gray-900 dark:text-white cursor-pointer transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ transformOrigin: 'center center' }}
          aria-label="Go to home"
        >
          PG
        </motion.button>

        {/* Theme Toggle - Right Side */}
        <motion.button
          onClick={toggleTheme}
          className="flex items-center justify-center transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ transformOrigin: 'center center' }}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <Moon className="w-4 h-4 text-neutral-400 hover:text-primary-400 transition-colors duration-300" />
          ) : (
            <Sun className="w-4 h-4 text-gray-600 hover:text-primary-400 transition-colors duration-300" />
          )}
        </motion.button>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className={`backdrop-blur-xl border-t shadow-2xl rounded-t-3xl ${
          isDarkMode 
            ? 'bg-neutral-900/95 border-neutral-700/40' 
            : 'bg-white/95 border-gray-200/50'
        }`}>
          <div className="px-2 py-2 pb-0">
            <div className="flex justify-around items-center max-w-md mx-auto">
              {mobileNavItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleMobileNavClick(item)}
                  className={`flex flex-col items-center justify-center space-y-1 p-3 rounded-2xl transition-all duration-300 min-w-0 flex-1 ${
                    isDarkMode 
                      ? 'hover:bg-neutral-800/50' 
                      : 'hover:bg-gray-100/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transformOrigin: 'center center' }}
                  aria-label={item.name}
                >
                  <div className={`transition-colors duration-300 ${
                    isActiveMobileItem(item) 
                      ? 'text-primary-400' 
                      : isDarkMode 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    {item.icon}
                  </div>
                  <span className={`text-xs font-medium transition-colors duration-300 text-center ${
                    isActiveMobileItem(item) 
                      ? 'text-primary-400' 
                      : isDarkMode 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    {item.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

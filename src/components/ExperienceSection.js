// src/components/ExperienceSection.js
import { motion } from "framer-motion";
import { Briefcase, Star } from "lucide-react";
import resoluteAi from '../assets/resolute.jpg';
import chumsAi from '../assets/chums_ai_logo.jpeg';
import edunetFoundation from '../assets/image.png';

/* ----------------------------------------
   Dummy data – swap logos/roles as needed
-----------------------------------------*/
const jobs = [
  {
    id: 1,
    company: "Resolute AI",
    title: "Ai Intern",
    logo: resoluteAi,         // 48×48 px transparent SVG/PNG
    period: "Mar 2025 – Jun 2025",
  },
  {
    id: 2,
    company: "Chums AI",
    title: "Software Engineering Intern",
    logo: chumsAi, // 48×48 px transparent SVG/PNG
    period: "Jan 2025 – Mar 2024",
  },
  {
    id: 3,
    company: "Edunet Foundation",
    title: "Ai Intern",
    logo: edunetFoundation,
    period: "Nov 2024 – Jan 2025",
  },
];

/* ----------------------------------------
   Animations
-----------------------------------------*/
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="container-margins py-8 md:py-12 bg-white dark:bg-dark-bg text-gray-900 dark:text-white"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-container mx-auto grid md:grid-cols-12 gap-12 px-0 sm:px-8 lg:px-20 space-y-10 speciality-margins"
      >
        {/* ───────────────── Left column ───────────────── */}
        <div className="md:col-span-5 space-y-6">
          {/* section header */}
          <motion.div variants={item} className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary-500" />
            <span className="text-sm tracking-widest font-semibold text-primary-500">
              WORK HISTORY
            </span>
          </motion.div>

          {/* main title */}
          <motion.h2
            variants={item}
            className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white"
          >
            Experience
          </motion.h2>

          {/* description */}
          <motion.p
            variants={item}
            className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md"
          >
            I have worked with some of the most innovative industry leaders to
            help build their top-notch products.
          </motion.p>
        </div>

        {/* ───────────────── Right column ───────────────── */}
        <div className="md:col-span-7 space-y-6">
          {jobs.map((job, idx) => (
            <motion.div
              key={job.id}
              variants={item}
              className="flex items-start gap-4"
            >
              {/* company logo */}
              <div className="flex-shrink-0">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="w-12 h-12 rounded-full object-cover border border-gray-300 dark:border-neutral-700"
                />
              </div>

              {/* role + company */}
              <div className="flex-1 pb-6 last:pb-0">
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white">
                  {job.title}
                </h3>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  <span>
                    @ <span className="text-gray-700 dark:text-gray-300">{job.company}</span>
                  </span>
                  <span>{job.period}</span>
                </div>
                
                {/* Divider line under each job entry */}
                <div className="hidden md:block flex-1 h-px bg-gray-300 dark:bg-[#2C2C2C] mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

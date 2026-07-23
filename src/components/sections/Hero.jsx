import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { personalData } from '../../data/personalData';
import { Button } from '../ui/Button';
import { staggerContainer, fadeInUp, scaleIn } from '../../animations/variants';

/**
 * Premium Hero landing section.
 * Massive bold names, multi-colored neon backdrop orbs, animated transitions, CTA triggers, profile frame.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-pattern"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary-500/10 dark:bg-primary-500/5 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl animate-float-delayed pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Content & CTAs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center"
        >
          {/* Greeting */}
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold glass border-white/20 dark:border-white/10 text-primary-600 dark:text-primary-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Opportunities
            </span>
          </motion.div>

          {/* Name Header */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight mb-4 text-balance"
          >
            Hi, I'm <br className="sm:hidden" />
            <span className="gradient-text">{personalData.name}</span>
          </motion.h1>

          {/* Professional Role Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark-800 dark:text-dark-200 mb-4"
          >
            {personalData.role}
          </motion.h2>

          {/* Tagline / Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-dark-600 dark:text-dark-400 max-w-xl mx-auto lg:mx-0 mb-8 text-balance"
          >
            {personalData.tagline}
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Button variant="primary" href="#contact" className="gap-2 w-full sm:w-auto">
              Get In Touch <FiArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 w-full sm:w-auto"
            >
              Download Resume <FiDownload className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Profile Layout */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Spinning background gradients */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 via-blue-500 to-cyan-400 opacity-30 blur-2xl animate-spin-slow" />
            
            {/* Double outer ring */}
            <div className="absolute -inset-4 rounded-full border border-dashed border-primary-500/20 dark:border-primary-500/10 animate-spin-slow" />
            <div className="absolute -inset-8 rounded-full border border-dashed border-blue-500/10 animate-spin-slow duration-[16s]" />

            {/* Profile Avatar Container */}
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20 dark:border-white/10 glass shadow-2xl relative z-10 flex items-center justify-center">
              {/* Display photo if exists, otherwise display styling monogram initials */}
              <img
                src={personalData.profileImage}
                alt={personalData.name}
                className="w-full h-full object-cover select-none pointer-events-none opacity-80 hover:opacity-100 transition-opacity duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Monogram Fallback */}
              <div
                style={{ display: 'none' }}
                className="w-full h-full flex items-center justify-center font-heading font-bold text-7xl md:text-8xl bg-gradient-to-br from-primary-600/10 to-blue-600/10 text-primary-400 select-none"
              >
                KB
              </div>
            </div>

            {/* Floating absolute badge widgets */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 z-20 glass border-white/20 dark:border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
            >
              <span className="text-xl">💻</span>
              <span className="text-xs font-semibold font-mono text-dark-800 dark:text-dark-100">Dev</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute -bottom-4 -left-4 z-20 glass border-white/20 dark:border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
            >
              <span className="text-xl">⚡</span>
              <span className="text-xs font-semibold font-mono text-dark-800 dark:text-dark-100">Build</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest text-dark-400 dark:text-dark-500 uppercase">
          Scroll Down
        </span>
        <div className="w-[18px] h-[30px] rounded-full border-2 border-dark-300 dark:border-dark-700 flex justify-center p-[4px]">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 rounded-full bg-primary-500"
          />
        </div>
      </div>
    </section>
  );
}

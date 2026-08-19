import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiBookOpen, FiEye, FiDownload } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';
import { achievements } from '../../data/personalData';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { staggerContainer, fadeInUp } from '../../animations/variants';

/**
 * Premium Achievements section.
 * Renders award highlight cards with floating ornaments.
 */
export function Achievements() {
  const getIcon = (name) => {
    switch (name) {
      case 'trophy':
        return <FaTrophy className="w-6 h-6 text-yellow-500" />;
      case 'certificate':
        return <FiAward className="w-6 h-6 text-blue-500" />;
      case 'star':
        return <FiStar className="w-6 h-6 text-primary-500" />;
      case 'academic':
        return <FiBookOpen className="w-6 h-6 text-cyan-500" />;
      default:
        return <FiAward className="w-6 h-6 text-primary-500" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden grid-pattern">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading title="Achievements" subtitle="Milestones & Recognition" centered={true} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <GlassCard
                hover={true}
                glow={true}
                className="p-6 h-full flex flex-col justify-between items-start min-h-[220px] relative group"
              >
                {/* Glowing border ring */}
                <div className="absolute inset-0 border border-primary-500/0 group-hover:border-primary-500/10 rounded-2xl transition-colors duration-300 pointer-events-none" />

                {/* Top Section: Icon & Content */}
                <div className="w-full relative z-10">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-dark-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(item.icon)}
                  </div>

                  {/* Main Content */}
                  <div>
                    <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-dark-600 dark:text-dark-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Optional Certificate actions */}
                {item.certificate && (
                  <div className="w-full mt-4 pt-3 border-t border-dark-200/60 dark:border-white/10 flex items-center gap-2 relative z-20">
                    <a
                      href={encodeURI(item.certificate)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary-500/10 hover:bg-primary-500/25 text-primary-600 dark:text-primary-400 border border-primary-500/25 transition-all duration-200 hover:scale-105 cursor-pointer shadow-sm"
                    >
                      <FiEye className="w-3.5 h-3.5" />
                      View
                    </a>
                    <a
                      href={encodeURI(item.certificate)}
                      download
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-dark-100 dark:bg-white/5 hover:bg-dark-200 dark:hover:bg-white/15 text-dark-700 dark:text-dark-300 border border-dark-200 dark:border-white/10 transition-all duration-200 hover:scale-105 cursor-pointer shadow-sm"
                    >
                      <FiDownload className="w-3.5 h-3.5" />
                      Download
                    </a>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

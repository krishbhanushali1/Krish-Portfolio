import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi';
import { education } from '../../data/personalData';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { staggerContainer, fadeInUp } from '../../animations/variants';

/**
 * Premium Education Timeline section.
 */
export function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden grid-pattern">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading title="Education" subtitle="Academic Pathway" centered={true} />

        {/* Timeline container */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative pl-6 sm:pl-0"
        >
          {/* Central spine line */}
          <div className="absolute left-[9px] sm:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-primary-500/50 via-blue-500/50 to-transparent transform sm:-translate-x-1/2" />

          {education.map((edu, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative mb-12 sm:mb-16 flex flex-col sm:flex-row items-stretch sm:justify-between"
              >
                {/* Visual marker dot */}
                <div className="absolute left-[-22px] sm:left-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 border-4 border-white dark:border-dark-950 shadow-md transform sm:-translate-x-1/2 top-2 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </div>

                {/* Left card spacing */}
                <div className={`w-full sm:w-[45%] ${isEven ? 'sm:order-1' : 'sm:order-3 sm:text-right'}`}>
                  {isEven && (
                    <GlassCard hover={true} glow={true} className="p-6 h-full">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="primary" icon={FiCalendar}>
                          {edu.period}
                        </Badge>
                        {edu.score && (
                          <Badge variant="secondary" icon={FiAward}>
                            {edu.score}
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm font-semibold text-primary-500 dark:text-primary-400 mb-4">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-dark-600 dark:text-dark-400 leading-relaxed">
                        {edu.description}
                      </p>
                    </GlassCard>
                  )}
                  {/* Empty placeholder to balance timeline */}
                  {!isEven && <div className="hidden sm:block" />}
                </div>

                {/* Gap spacer for alignment */}
                <div className="hidden sm:block sm:w-[10%] sm:order-2" />

                {/* Right card spacing */}
                <div className={`w-full sm:w-[45%] ${isEven ? 'sm:order-3' : 'sm:order-1'}`}>
                  {!isEven && (
                    <GlassCard hover={true} glow={true} className="p-6 h-full">
                      <div className="flex flex-wrap items-center gap-2 mb-3 sm:justify-start">
                        <Badge variant="primary" icon={FiCalendar}>
                          {edu.period}
                        </Badge>
                        {edu.score && (
                          <Badge variant="secondary" icon={FiAward}>
                            {edu.score}
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm font-semibold text-primary-500 dark:text-primary-400 mb-4">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-dark-600 dark:text-dark-400 leading-relaxed">
                        {edu.description}
                      </p>
                    </GlassCard>
                  )}
                  {/* Empty placeholder to balance timeline */}
                  {isEven && <div className="hidden sm:block" />}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

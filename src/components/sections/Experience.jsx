import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheck, FiEye, FiDownload } from 'react-icons/fi';
import { experience } from '../../data/personalData';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { staggerContainer, fadeInUp } from '../../animations/variants';

/**
 * Premium Experience Timeline section.
 * Uses a left-aligned vertical line on all screens with multi-layer responsibility lists.
 */
export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden section-alt">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeading title="Work Experience" subtitle="Professional History" />

        {/* Timeline wrapper */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative pl-8 sm:pl-10"
        >
          {/* Vertical spine line */}
          <div className="absolute left-[13px] top-0 h-full w-[2px] bg-gradient-to-b from-primary-500/50 via-blue-500/50 to-transparent" />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline icon indicator */}
              <div className="absolute -left-[35px] w-7 h-7 rounded-xl bg-gradient-to-r from-primary-500 to-blue-500 flex items-center justify-center text-white shadow-md z-10">
                <FiBriefcase className="w-3.5 h-3.5" />
              </div>

              {/* Experience Card */}
              <GlassCard hover={true} glow={true} className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-dark-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-base font-semibold text-primary-500 dark:text-primary-400 mt-1">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="primary" icon={FiCalendar}>
                      {exp.period}
                    </Badge>
                    <Badge variant="glass">{exp.type}</Badge>
                  </div>
                </div>

                {/* Subtext description */}
                <p className="text-dark-600 dark:text-dark-400 mb-6 text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Core Responsibilities Bullet list */}
                <div className="space-y-3">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-dark-500 dark:text-dark-400">
                    Key Responsibilities:
                  </h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-dark-700 dark:text-dark-300"
                      >
                        <div className="w-5 h-5 rounded-md bg-primary-500/10 dark:bg-primary-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FiCheck className="text-primary-500 w-3 h-3" />
                        </div>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional Certificate Section */}
                {exp.certificate && (
                  <div className="mt-6 pt-5 border-t border-dark-200/60 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-20">
                    <div className="text-xs font-semibold text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                      Internship Certificate
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={encodeURI(exp.certificate)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary-500/10 hover:bg-primary-500/25 text-primary-600 dark:text-primary-400 border border-primary-500/25 transition-all duration-200 hover:scale-105 cursor-pointer shadow-sm"
                      >
                        <FiEye className="w-3.5 h-3.5" />
                        View Certificate
                      </a>
                      <a
                        href={encodeURI(exp.certificate)}
                        download
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-dark-100 dark:bg-white/5 hover:bg-dark-200 dark:hover:bg-white/15 text-dark-700 dark:text-dark-300 border border-dark-200 dark:border-white/10 transition-all duration-200 hover:scale-105 cursor-pointer shadow-sm"
                      >
                        <FiDownload className="w-3.5 h-3.5" />
                        Download
                      </a>
                    </div>
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

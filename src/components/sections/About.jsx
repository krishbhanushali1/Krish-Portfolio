import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import { personalData } from '../../data/personalData';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { fadeInUp, slideInLeft, slideInRight } from '../../animations/variants';

/**
 * Premium About Me section.
 * Professional text left, interactive grid cards right detailing core engineering properties.
 */
export function About() {
  const highlights = [
    { title: 'Software Dev', value: 'Passionate coding' },
    { title: 'Real-world projects', value: 'Focus on impact' },
    { title: 'Web / Mobile', value: 'React & Flutter' },
    { title: 'Hackathons', value: 'Ignite 7.0 Winner' },
    { title: 'Cybersecurity', value: 'Keen interest' },
    { title: 'Always Learning', value: 'Tackling complex issues' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden section-alt">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="About Me" subtitle="My Story" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Professional Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideInLeft}
            className="lg:col-span-7 space-y-6 text-dark-700 dark:text-dark-300 text-lg leading-relaxed text-balance"
          >
            {/* Split paragraph highlights */}
            <p>{personalData.bio.split('\n\n')[0]}</p>
            <p>{personalData.bio.split('\n\n')[1]}</p>
            <p>{personalData.bio.split('\n\n')[2]}</p>

            {/* Quick bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                'Practical Problem Solving',
                'Continuous Technical Growth',
                'Effective Team Collaborator',
                'Strong Foundation in Core CS',
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-medium">
                  <FiChevronRight className="text-primary-500 w-4 h-4 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Grid Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideInRight}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <GlassCard
                  key={index}
                  hover={true}
                  glow={true}
                  className="p-5 flex flex-col justify-between h-32"
                >
                  <span className="text-xs font-semibold tracking-wider uppercase text-primary-500 dark:text-primary-400">
                    {item.title}
                  </span>
                  <span className="text-base font-semibold text-dark-900 dark:text-white mt-2">
                    {item.value}
                  </span>
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full pointer-events-none" />
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

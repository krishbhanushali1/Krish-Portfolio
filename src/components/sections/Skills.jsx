import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../../data/personalData';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { staggerContainer, scaleIn } from '../../animations/variants';
import { cn } from '../../utils/cn';

/**
 * Premium Skills section.
 * Renders category selection tabs and a dynamic animated skills grid.
 */
export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  const activeSkillsList =
    skillCategories.find((cat) => cat.name === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 relative overflow-hidden grid-pattern">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading title="Skills & Technologies" subtitle="Technical Arsenal" centered={true} />

        {/* Tab Controls (Category Selectors) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                'px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 relative border overflow-hidden cursor-pointer',
                activeCategory === category.name
                  ? 'text-white border-transparent bg-gradient-to-r from-primary-600 to-blue-600 shadow-md shadow-primary-500/20'
                  : 'glass border-white/20 dark:border-white/10 text-dark-700 dark:text-dark-300 hover:bg-white/10 dark:hover:bg-white/[0.06]'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Dynamic Skills Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {activeSkillsList.map((skill) => (
              <motion.div
                key={skill}
                layout
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard
                  hover={true}
                  glow={true}
                  className="p-5 flex flex-col items-center justify-center text-center h-28 relative group"
                >
                  {/* Decorative internal glow ring */}
                  <div className="absolute inset-0 border border-primary-500/0 group-hover:border-primary-500/20 rounded-2xl transition-colors duration-300" />
                  
                  {/* Visual bullet ornament */}
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 mb-3 group-hover:scale-125 transition-transform duration-300" />
                  
                  <span className="font-heading font-medium text-sm text-dark-800 dark:text-white">
                    {skill}
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

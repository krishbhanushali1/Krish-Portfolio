import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiAward, FiCheck } from 'react-icons/fi';
import { projects } from '../../data/personalData';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { staggerContainer, fadeInUp } from '../../animations/variants';

/**
 * Premium Projects section.
 * Renders large-scale cards, tech badges, and clickable demo links.
 */
export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden section-alt">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="Featured Projects" subtitle="My Creations" />

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {projects.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <GlassCard
                key={project.title}
                hover={true}
                glow={true}
                className={`flex flex-col overflow-hidden p-0 border border-white/10 dark:border-white/5 ${
                  isFeatured
                    ? 'lg:col-span-12 xl:col-span-8'
                    : 'lg:col-span-6 xl:col-span-4'
                }`}
              >
                <div className="grid grid-cols-1 h-full">
                  {/* Decorative Banner/Image Area */}
                  <div className="relative aspect-video w-full bg-gradient-to-br from-primary-600/20 to-blue-600/20 border-b border-white/10 dark:border-white/5 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover select-none pointer-events-none opacity-40 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback image style structure */}
                    <div
                      style={{ display: 'none' }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                    >
                      <span className="text-4xl md:text-5xl mb-2">🚀</span>
                      <span className="font-heading font-bold text-lg text-primary-500">
                        {project.title}
                      </span>
                    </div>

                    {/* Left overlay tag */}
                    {project.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <Badge variant="primary" icon={FiAward}>
                          {project.badge}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Title */}
                      <h3 className="text-2xl font-bold font-heading text-dark-900 dark:text-white mb-3">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-dark-600 dark:text-dark-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Feature Bullet Checklist (If provided) */}
                      {project.features && project.features.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-dark-500 dark:text-dark-400 mb-3">
                            Key Features:
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-xs font-medium text-dark-700 dark:text-dark-300"
                              >
                                <FiCheck className="text-primary-500 w-3.5 h-3.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Footer Actions */}
                    <div>
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="glass">
                            {t}
                          </Badge>
                        ))}
                      </div>

                      {/* Primary links */}
                      <div className="flex items-center gap-3">
                        <Button
                          variant="secondary"
                          size="sm"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <FiGithub className="w-4 h-4" /> Code
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <FiExternalLink className="w-4 h-4" /> Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

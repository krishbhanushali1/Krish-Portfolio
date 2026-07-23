import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';
import { cn } from '../../utils/cn';

/**
 * Animated Section Heading.
 * Consistent layout, gradient subtitle, and reveal animations.
 */
export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      className={cn(
        'mb-12 md:mb-16',
        centered ? 'text-center flex flex-col items-center' : 'text-left',
        className
      )}
    >
      {subtitle && (
        <span className="text-xs md:text-sm font-semibold tracking-widest text-primary-500 dark:text-primary-400 uppercase mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tight mb-4">
        {title}
      </h2>
      <div
        className={cn(
          'h-1 w-20 rounded bg-gradient-to-r from-primary-500 to-blue-500',
          centered ? 'mx-auto' : ''
        )}
      />
    </motion.div>
  );
}

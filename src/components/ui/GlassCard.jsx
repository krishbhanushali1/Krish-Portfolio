import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { cardHover } from '../../animations/variants';

/**
 * Premium Glassmorphic Card.
 * Uses Framer Motion for optional interactive hover scaling and glow.
 */
export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  onClick,
  ...props
}) {
  const Component = hover ? motion.div : 'div';
  const hoverProps = hover
    ? {
        variants: cardHover,
        initial: 'rest',
        whileHover: 'hover',
      }
    : {};

  return (
    <Component
      className={cn(
        'glass rounded-2xl p-6 relative overflow-hidden transition-shadow duration-300',
        glow && 'glow-sm hover:glow',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      {...hoverProps}
      {...props}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      {children}
    </Component>
  );
}

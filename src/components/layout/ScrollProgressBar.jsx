import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

/**
 * Animated top viewport Scroll Progress Bar.
 */
export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 via-blue-500 to-cyan-400 origin-left"
        style={{ width: `${progress}%` }}
        layout
      />
    </div>
  );
}

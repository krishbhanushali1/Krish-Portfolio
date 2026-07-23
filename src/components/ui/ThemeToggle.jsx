import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../utils/cn';

/**
 * Premium Theme Toggle Button with custom icon animations.
 */
export function ThemeToggle({ className }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'w-10 h-10 rounded-xl glass hover:bg-white/10 dark:hover:bg-white/[0.06] flex items-center justify-center border-white/20 dark:border-white/10 transition-colors duration-300 relative overflow-hidden',
        className
      )}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{
          y: isDark ? 40 : 0,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute text-yellow-500"
      >
        <FiSun className="w-5 h-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          y: isDark ? 0 : -40,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute text-primary-400"
      >
        <FiMoon className="w-5 h-5" />
      </motion.div>
    </motion.button>
  );
}

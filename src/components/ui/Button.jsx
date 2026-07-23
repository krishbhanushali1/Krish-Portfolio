import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

/**
 * Premium interactive Button.
 * Integrates Framer Motion animations for hover and tap feedback.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  target,
  rel,
  download,
  ...props
}) {
  const baseStyle =
    'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 overflow-hidden';

  const variants = {
    primary:
      'bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-500 hover:to-blue-500 text-white shadow-lg shadow-primary-500/25 dark:shadow-primary-500/10 hover:shadow-primary-500/40 border border-transparent',
    secondary:
      'glass hover:bg-white/10 dark:hover:bg-white/[0.06] text-dark-900 dark:text-white border-white/20 dark:border-white/10 shadow-sm',
    ghost:
      'hover:bg-dark-100 dark:hover:bg-white/5 text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white',
    outline:
      'border-2 border-primary-500/50 hover:border-primary-500 bg-transparent text-primary-600 dark:text-primary-400 hover:bg-primary-500/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Setup motion variants
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.97 },
  };

  const renderContent = () => (
    <>
      {/* Glow overlay for primary */}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-white/10 hover:opacity-100 opacity-0 transition-opacity duration-300" />
      )}
      {children}
    </>
  );

  if (href) {
    if (href.startsWith('#')) {
      return (
        <motion.a
          href={href}
          onClick={onClick}
          className={cn(baseStyle, variants[variant], sizes[size], className)}
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          {...props}
        >
          {renderContent()}
        </motion.a>
      );
    }

    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
        className={cn(baseStyle, variants[variant], sizes[size], className)}
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {renderContent()}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={cn(baseStyle, variants[variant], sizes[size], className)}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {renderContent()}
    </motion.button>
  );
}

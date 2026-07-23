import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Reusable premium Badge component for tech skills, status labels.
 */
export function Badge({
  children,
  icon: Icon,
  variant = 'primary',
  className,
}) {
  const baseStyle =
    'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-300';

  const variants = {
    primary:
      'bg-primary-500/10 border-primary-500/20 text-primary-600 dark:text-primary-400 dark:border-primary-500/15 shadow-sm',
    secondary:
      'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400 dark:border-blue-500/15',
    glass:
      'bg-white/5 border-white/10 dark:bg-white/[0.03] dark:border-white/[0.06] text-dark-800 dark:text-dark-200',
    outline:
      'border-dark-300 dark:border-dark-700 bg-transparent text-dark-600 dark:text-dark-400',
  };

  return (
    <span className={cn(baseStyle, variants[variant], className)}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}

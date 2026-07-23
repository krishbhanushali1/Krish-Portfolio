import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks, sectionIds } from '../../data/personalData';
import { useActiveSection } from '../../hooks/useActiveSection';
import { ThemeToggle } from '../ui/ThemeToggle';
import { cn } from '../../utils/cn';

/**
 * Premium sticky navigation header.
 * Displays desktop nav, mobile slide-out menu, active highlights, and ThemeToggle.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
        scrolled
          ? 'bg-white/75 dark:bg-dark-950/75 backdrop-blur-md border-b border-dark-100 dark:border-white/5 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary-500 to-blue-500 flex items-center justify-center font-heading font-bold text-white text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
            KB
          </div>
          <span className="font-heading font-semibold text-lg hidden sm:block tracking-tight text-dark-900 dark:text-white">
            Krish<span className="text-primary-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={cn(
                      'text-sm font-medium tracking-wide transition-colors duration-300 relative py-1 block',
                      isActive
                        ? 'text-primary-500 dark:text-primary-400'
                        : 'text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400'
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-500 to-blue-500 rounded"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-5 w-[1px] bg-dark-200 dark:bg-white/10" />

          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center border-white/20 dark:border-white/10 text-dark-900 dark:text-white"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu slide-out */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden w-full bg-white/95 dark:bg-dark-950/95 backdrop-blur-lg border-b border-dark-100 dark:border-white/5 absolute top-full left-0 overflow-hidden"
          >
            <nav className="flex flex-col py-6 px-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className={cn(
                          'text-lg font-medium tracking-wide py-2 block transition-colors duration-300',
                          isActive
                            ? 'text-primary-500 dark:text-primary-400'
                            : 'text-dark-700 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400'
                        )}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

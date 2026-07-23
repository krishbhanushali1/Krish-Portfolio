import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalData, navLinks } from '../../data/personalData';

/**
 * Minimal premium footer section.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-100 dark:border-white/5 py-12 bg-dark-50/20 dark:bg-dark-950/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name and Tagline */}
        <div className="text-center md:text-left">
          <a href="#hero" className="font-heading font-bold text-lg text-dark-900 dark:text-white tracking-tight">
            Krish<span className="text-primary-500">.</span>
          </a>
          <p className="text-xs text-dark-500 dark:text-dark-400 mt-1">
            {personalData.tagline}
          </p>
        </div>

        {/* Footer Navigation */}
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-dark-600 dark:text-dark-400">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 border-white/20 dark:border-white/10 hover:scale-105 transition-all duration-300"
              aria-label="Send Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>
          <span className="text-xs text-dark-400 dark:text-dark-500">
            &copy; {currentYear} Krish Bhanushali. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

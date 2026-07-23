import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Premium full-screen animated entrance loader.
 */
export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 500); // Wait for fade-out transition
          }, 300);
          return 100;
        }
        // Increments with random speed step
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-dark-950 text-white"
        >
          {/* Logo Reveal */}
          <div className="relative mb-8 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-blue-500 flex items-center justify-center font-heading font-bold text-white text-3xl shadow-lg shadow-primary-500/20"
            >
              KB
            </motion.div>
            <motion.div
              className="absolute -inset-4 rounded-3xl bg-primary-500/10 blur-xl -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Progress Percent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-sm tracking-widest text-primary-400 mb-2"
          >
            {Math.min(100, progress)}%
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-blue-500"
              style={{ width: `${Math.min(100, progress)}%` }}
            />
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs text-dark-400 mt-6 tracking-wide"
          >
            Building premium digital experiences...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

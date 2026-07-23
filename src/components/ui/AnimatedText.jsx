import React from 'react';
import { motion } from 'framer-motion';
import { textReveal, staggerContainerFast } from '../../animations/variants';
import { cn } from '../../utils/cn';

/**
 * Word-by-word or character-by-character animated text reveal.
 */
export function AnimatedText({
  text,
  el: Element = 'p',
  className,
  once = true,
}) {
  const words = text.split(' ');

  return (
    <Element className={cn('flex flex-wrap overflow-hidden', className)}>
      <motion.span
        variants={staggerContainerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-20px' }}
        className="flex flex-wrap"
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            <motion.span
              variants={textReveal}
              custom={wordIndex}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Element>
  );
}

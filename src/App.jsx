import React, { useState, lazy, Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Footer } from './components/layout/Footer';
import { ScrollProgressBar } from './components/layout/ScrollProgressBar';
import { BackToTop } from './components/layout/BackToTop';
import { CustomCursor } from './components/layout/CustomCursor';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { ParticlesBackground } from './components/layout/ParticlesBackground';

// Lazy load minor/heavy modules for performance split optimization
const Achievements = lazy(() =>
  import('./components/sections/Achievements').then((module) => ({ default: module.Achievements }))
);
const Contact = lazy(() =>
  import('./components/sections/Contact').then((module) => ({ default: module.Contact }))
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Visual Loader screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative min-h-screen text-dark-900 dark:text-dark-50 select-none">
          {/* Scroll progress indicators */}
          <ScrollProgressBar />

          {/* Interactive particles backdrop */}
          <ParticlesBackground />

          {/* Precision custom pointer cursor */}
          <CustomCursor />

          {/* Header Bar */}
          <Navbar />

          {/* Main Sections flow */}
          <main>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />

            {/* Suspensed lazy sections */}
            <Suspense
              fallback={
                <div className="py-24 flex items-center justify-center text-sm font-mono text-dark-400">
                  Loading section...
                </div>
              }
            >
              <Achievements />
              <Contact />
            </Suspense>
          </main>

          {/* Footer & BackToTop controls */}
          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}

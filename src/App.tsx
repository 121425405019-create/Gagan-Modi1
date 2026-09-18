import React, { useState, useEffect } from 'react';
import portfolio from './data/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('gm_portfolio_theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<string>('top');

  // Toggle theme & persist in document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('gm_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('gm_portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = ['top', 'about', 'work', 'skills', 'experience', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 selection:bg-[#c95d3b] selection:text-white transition-colors duration-300">
      
      {/* Sticky Top Navigation */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        <Hero personal={portfolio.personal} />
        <About personal={portfolio.personal} strengths={portfolio.strengths} />
        <Projects projects={portfolio.projects} />
        <Skills skills={portfolio.skills} />
        <Experience experience={portfolio.experience} />
        <Contact contact={portfolio.contact} />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer personal={portfolio.personal} contact={portfolio.contact} />

    </div>
  );
}

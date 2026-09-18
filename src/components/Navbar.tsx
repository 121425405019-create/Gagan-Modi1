import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll position & calculate scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#c95d3b] z-50 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 py-3.5 shadow-xs'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={(e) => handleLinkClick(e, '#top')}
            className="group flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#c95d3b] rounded-xs"
            aria-label="Gagan Modi — Home"
          >
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100 group-hover:text-[#c95d3b] transition-colors">
              GAGAN MODI
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c95d3b]" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#c95d3b] rounded-xs ${
                    isActive
                      ? 'text-stone-950 dark:text-stone-50 font-semibold'
                      : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#c95d3b] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster: Theme Toggle & "Let's Talk" CTA */}
          <div className="hidden md:flex items-center gap-3.5">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/60 transition-colors focus-visible:outline-2 focus-visible:outline-[#c95d3b]"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full bg-stone-900 text-stone-100 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-[#c95d3b]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-[#c95d3b]"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-900 dark:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-[#c95d3b]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-stone-50/98 dark:bg-stone-950/98 backdrop-blur-xl transition-all duration-300">
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200 dark:border-stone-800">
            <span className="font-display text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100">
              GAGAN MODI
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-stone-900 dark:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-between px-6 py-10">
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-2xl font-display font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-[#c95d3b]'
                        : 'text-stone-800 dark:text-stone-200 hover:text-[#c95d3b]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-stone-400">0{idx + 1}</span>
                  </a>
                );
              })}
            </nav>

            <div className="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full py-3.5 rounded-md bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 font-semibold text-center flex items-center justify-center gap-2"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-mono">
                <span>CREATIVE • PROFESSIONAL</span>
                <span>HYDERABAD, IN</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

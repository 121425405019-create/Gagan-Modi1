import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { ContactInfo, PersonalInfo } from '../types';

interface FooterProps {
  personal: PersonalInfo;
  contact: ContactInfo;
}

export const Footer: React.FC<FooterProps> = ({ personal, contact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-100/60 dark:bg-stone-950 border-t border-stone-200/80 dark:border-stone-800/80 py-16 sm:py-20 text-stone-600 dark:text-stone-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          
          {/* Left: Brand & Positioning */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold tracking-tight text-stone-950 dark:text-stone-50">
                {personal.name.toUpperCase()}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#c95d3b]" />
            </div>
            
            <p className="text-sm font-medium text-[#c95d3b]">
              {personal.tagline}
            </p>

            <p className="text-xs text-stone-500 leading-relaxed font-light">
              Crafted as an editorial brand portfolio communicating structured problem-solving, creative execution, and reliable delivery.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-200">
              Navigation
            </div>
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact Links */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-200">
              Channels
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-[#c95d3b] transition-colors flex items-center gap-1.5"
                >
                  <span>[EMAIL]: {contact.email}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c95d3b] transition-colors flex items-center gap-1.5"
                >
                  <span>[LINKEDIN]: {contact.linkedIn}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 border-t border-stone-200 dark:border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © 2026 Gagan Modi. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-stone-950 dark:hover:text-stone-100 transition-colors py-1 cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <div className="p-1 rounded-full bg-stone-200/80 dark:bg-stone-800 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

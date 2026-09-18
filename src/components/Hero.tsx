import React from 'react';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { PersonalInfo } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';

interface HeroProps {
  personal: PersonalInfo;
}

export const Hero: React.FC<HeroProps> = ({ personal }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:py-32 overflow-hidden border-b border-stone-200/80 dark:border-stone-800/80"
      aria-label="Hero Introduction"
    >
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-stone-200/50 dark:bg-stone-800/50 -z-10 hidden lg:block" />
      <div className="absolute top-1/3 left-0 w-full h-px bg-stone-200/40 dark:bg-stone-800/40 -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-3 self-start px-3.5 py-1.5 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs font-mono text-stone-600 dark:text-stone-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c95d3b] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c95d3b]" />
              </span>
              <span className="tracking-wide">{personal.status}</span>
              <span className="text-stone-300 dark:text-stone-700">•</span>
              <span className="flex items-center gap-1 text-stone-500 dark:text-stone-400">
                <MapPin className="w-3 h-3 text-[#c95d3b]" />
                {personal.location}
              </span>
            </div>

            {/* Main Name & Positioning */}
            <div className="space-y-4">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-stone-950 dark:text-stone-50 leading-[0.95]">
                {personal.name.toUpperCase()}
              </h1>
              
              <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-medium tracking-wide text-[#c95d3b]">
                <Sparkles className="w-4 h-4 text-[#c95d3b]" />
                <span>{personal.tagline}</span>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed font-light">
              "{personal.headline || personal.summary}"
            </p>

            <p className="text-sm sm:text-base text-stone-500 dark:text-stone-400 max-w-xl leading-relaxed">
              Turning ideas into practical, polished, and high-quality outcomes through clear communication, structured problem-solving, and creative execution.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, '#work')}
                className="group px-7 py-3.5 rounded-md bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200 font-medium text-sm tracking-wider uppercase flex items-center gap-3 transition-all shadow-xs hover:shadow-md"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="group px-7 py-3.5 rounded-md border border-stone-300 dark:border-stone-700 bg-transparent text-stone-900 dark:text-stone-100 hover:border-stone-900 dark:hover:border-stone-100 font-medium text-sm tracking-wider uppercase flex items-center gap-2.5 transition-colors"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Key Value Anchors */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-stone-200 dark:border-stone-800 max-w-lg font-mono text-xs text-stone-500 dark:text-stone-400">
              <div>
                <div className="font-semibold text-stone-900 dark:text-stone-100 font-display text-base">CREATIVE</div>
                <div>Original Ideas</div>
              </div>
              <div>
                <div className="font-semibold text-stone-900 dark:text-stone-100 font-display text-base">PROFESSIONAL</div>
                <div>Structured Flow</div>
              </div>
              <div>
                <div className="font-semibold text-stone-900 dark:text-stone-100 font-display text-base">RESULTS</div>
                <div>Practical Polish</div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md lg:max-w-none">
              <div className="relative p-3 bg-white dark:bg-stone-900 rounded-sm border border-stone-200 dark:border-stone-800 shadow-sm">
                
                {/* Visual Placeholder / Profile Asset Component */}
                <ImagePlaceholder
                  src={personal.photoUrl}
                  alt="Gagan Modi - Portfolio Portrait Visual"
                  label="[ADD YOUR PHOTO]"
                  type="portrait"
                  aspectRatio="aspect-[4/5]"
                  className="rounded-xs"
                />

                {/* Editorial Caption Tag */}
                <div className="mt-3.5 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-500 dark:text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c95d3b]" />
                    <span>GAGAN MODI • BRAND IDENTITY</span>
                  </span>
                  <span>HYDERABAD, IN</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

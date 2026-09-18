import React from 'react';
import { PersonalInfo, Strength } from '../types';
import { Strengths } from './Strengths';

interface AboutProps {
  personal: PersonalInfo;
  strengths: Strength[];
}

export const About: React.FC<AboutProps> = ({ personal, strengths }) => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-50/50 dark:bg-stone-950/50 relative"
      aria-label="About Section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-bold tracking-widest text-[#c95d3b] uppercase">
            01 — ABOUT
          </span>
          <div className="h-px flex-1 max-w-xs bg-stone-200 dark:bg-stone-800" />
        </div>

        {/* Editorial Layout: Large Number, Headline, and Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 border-b border-stone-200/80 dark:border-stone-800/80">
          
          {/* Left: Large Section Number Accent */}
          <div className="lg:col-span-2 hidden lg:block">
            <span className="font-display text-8xl font-bold text-stone-200/60 dark:text-stone-800/40 select-none leading-none">
              01
            </span>
          </div>

          {/* Middle: Large Headline */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 dark:text-stone-50 tracking-tight leading-tight">
              {personal.headline}
            </h2>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-stone-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c95d3b]" />
              <span>PHILOSOPHY & PROFILE</span>
            </div>
          </div>

          {/* Right: Supplied Professional Summary */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed font-light">
              "{personal.summary}"
            </p>
            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
              Every initiative is guided by clear synthesis, pragmatic workflows, and meticulous presentation standards, ensuring stakeholders and audiences receive meaningful clarity.
            </p>
          </div>

        </div>

        {/* Core Strengths Grid */}
        <Strengths strengths={strengths} />

      </div>
    </section>
  );
};

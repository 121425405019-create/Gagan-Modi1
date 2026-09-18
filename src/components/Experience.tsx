import React from 'react';
import { Calendar, Briefcase, ChevronRight, Sparkles } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 border-b border-stone-200/80 dark:border-stone-800/80 relative"
      aria-label="Experience and Journey"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-16 border-b border-stone-200/80 dark:border-stone-800/80">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-widest text-[#c95d3b] uppercase">
                04 — EXPERIENCE
              </span>
              <div className="h-px w-12 bg-[#c95d3b]" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 dark:text-stone-50 tracking-tight">
              Experience & journey
            </h2>
          </div>

          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-md font-light">
            A progression of practical execution across research, content systems, digital flows, and structured delivery.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Continuous Center Vertical Line (desktop) / Left Line (mobile) */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 w-px bg-stone-200 dark:bg-stone-800 -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-8 group"
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-stone-50 dark:bg-stone-950 border-2 border-stone-300 dark:border-stone-700 group-hover:border-[#c95d3b] flex items-center justify-center transition-colors z-10 shadow-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-stone-400 dark:bg-stone-600 group-hover:bg-[#c95d3b] transition-colors" />
                  </div>

                  {/* Left Column (Desktop) */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 md:text-left'
                    }`}
                  >
                    <div className="p-6 sm:p-7 rounded-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-[#c95d3b]/70 dark:hover:border-[#c95d3b]/70 transition-all duration-300 shadow-xs hover:shadow-md">
                      
                      {/* Period Badge */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-xs font-mono font-semibold text-[#c95d3b] mb-4`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>

                      {/* Title & Role Placeholder */}
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-950 dark:text-stone-50">
                        {item.title}
                      </h3>

                      {/* Editable Role Placeholder */}
                      <div className="mt-2 flex items-center gap-2 text-xs font-mono text-stone-500">
                        <Briefcase className="w-3.5 h-3.5 text-stone-400" />
                        <span className="px-2 py-0.5 rounded-xs bg-stone-100 dark:bg-stone-800/80 border border-dashed border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-medium">
                          {item.rolePlaceholder}
                        </span>
                        <span>•</span>
                        <span className="px-2 py-0.5 rounded-xs bg-stone-100 dark:bg-stone-800/80 border border-dashed border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-medium">
                          {item.companyPlaceholder}
                        </span>
                      </div>

                      {/* Supplied Summary */}
                      <p className="mt-4 text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed">
                        "{item.description}"
                      </p>

                      {/* Editable Details Placeholder */}
                      <div className="mt-5 pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-mono">
                        <span className="text-stone-400">
                          {item.detailsPlaceholder}
                        </span>
                        <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-[#c95d3b] transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for layout rhythm on desktop */}
                  <div
                    className={`hidden md:block w-1/2 ${
                      isEven ? 'order-2 pl-12' : 'order-1 pr-12 text-right'
                    }`}
                  >
                    <div className="text-xs font-mono text-stone-400 dark:text-stone-600 tracking-wider uppercase">
                      <span>MILESTONE 0{3 - index}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Transparency callout */}
        <div className="mt-16 p-4 rounded-sm border border-dashed border-stone-300 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/40 text-center max-w-2xl mx-auto text-xs font-mono text-stone-500 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#c95d3b]" />
          <span>All placeholder company & role brackets [ADD ...] can be directly customized in <code>/src/data/portfolio.ts</code>.</span>
        </div>

      </div>
    </section>
  );
};

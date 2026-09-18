import React, { useState } from 'react';
import { Skill } from '../types';
import { Sparkles, ArrowUpRight, Check } from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Strategy & Thinking', 'Execution & Delivery', 'Communication & People'];

  const filteredSkills = selectedCategory === 'ALL'
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-50/50 dark:bg-stone-950/50 relative"
      aria-label="Skills & Capabilities"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-12 border-b border-stone-200/80 dark:border-stone-800/80">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-widest text-[#c95d3b] uppercase">
                03 — SKILLS
              </span>
              <div className="h-px w-12 bg-[#c95d3b]" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 dark:text-stone-50 tracking-tight">
              Skills & capabilities
            </h2>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 font-semibold'
                    : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Typography Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredSkills.map((skill, idx) => {
            const isHovered = hoveredSkillId === skill.id;
            return (
              <div
                key={skill.id}
                onMouseEnter={() => setHoveredSkillId(skill.id)}
                onMouseLeave={() => setHoveredSkillId(null)}
                className={`group relative p-6 sm:p-7 rounded-sm border transition-all duration-300 bg-white dark:bg-stone-900 flex flex-col justify-between ${
                  isHovered
                    ? 'border-[#c95d3b] -translate-y-1 shadow-md dark:shadow-stone-950/40'
                    : 'border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                }`}
              >
                {/* Number & Domain tag */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-100 dark:border-stone-800/80 text-xs font-mono">
                  <span className="text-stone-400 dark:text-stone-500 font-semibold">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] text-[#c95d3b] tracking-wide">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name in Display Typography */}
                <div className="py-6">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100 group-hover:text-[#c95d3b] transition-colors">
                    {skill.name.toUpperCase()}
                  </h3>
                </div>

                {/* Footer Micro-interaction */}
                <div className="pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs font-mono text-stone-500 dark:text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#c95d3b]" />
                    <span>Applied Practice</span>
                  </span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                    isHovered ? 'text-[#c95d3b] translate-x-0.5 -translate-y-0.5' : 'text-stone-400 dark:text-stone-600'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on genuine capabilities */}
        <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#c95d3b]" />
            <span>Demonstrated through real project deliverables, clear stakeholder communications, and structured delivery.</span>
          </div>
          <span className="text-stone-400">NO ARTIFICIAL PROFICIENCY GAUGES</span>
        </div>

      </div>
    </section>
  );
};

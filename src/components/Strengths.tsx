import React from 'react';
import { MessageSquare, Target, FolderKanban, Sparkles } from 'lucide-react';
import { Strength } from '../types';

interface StrengthsProps {
  strengths: Strength[];
}

export const Strengths: React.FC<StrengthsProps> = ({ strengths }) => {
  const getIcon = (iconName: Strength['iconName']) => {
    switch (iconName) {
      case 'message-square':
        return <MessageSquare className="w-5 h-5 text-[#c95d3b]" />;
      case 'target':
        return <Target className="w-5 h-5 text-[#c95d3b]" />;
      case 'folder-kanban':
        return <FolderKanban className="w-5 h-5 text-[#c95d3b]" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#c95d3b]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#c95d3b]" />;
    }
  };

  return (
    <div className="pt-10">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-stone-500 dark:text-stone-400">
          Core Pillars of Execution
        </h3>
        <span className="font-mono text-xs text-stone-400">04 CORE STRENGTHS</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {strengths.map((item) => (
          <div
            key={item.id}
            className="group relative p-6 sm:p-7 rounded-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-[#c95d3b]/60 dark:hover:border-[#c95d3b]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
          >
            {/* Top row: Number and Icon */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-100 dark:border-stone-800">
                <span className="font-mono text-xs font-semibold text-stone-400 dark:text-stone-500 group-hover:text-[#c95d3b] transition-colors">
                  {item.number}
                </span>
                <div className="p-2.5 rounded-xs bg-stone-50 dark:bg-stone-800/80 group-hover:bg-[#c95d3b]/10 dark:group-hover:bg-[#c95d3b]/20 group-hover:scale-110 transition-all duration-300">
                  {getIcon(item.iconName)}
                </div>
              </div>

              {/* Title & Description */}
              <div className="mt-6">
                <h4 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#c95d3b] transition-colors">
                  {item.title}
                </h4>
                <p className="mt-2.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Subtle bottom indicator */}
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/60 flex items-center gap-1.5 text-[11px] font-mono text-stone-400 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
              <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700 group-hover:bg-[#c95d3b] transition-colors" />
              <span>PRACTICAL DELIVERABLE</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

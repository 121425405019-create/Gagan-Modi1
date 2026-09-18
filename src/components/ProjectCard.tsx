import React from 'react';
import { ArrowUpRight, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';

interface ProjectCardProps {
  project: Project;
  layoutVariant: 'horizontal' | 'offset' | 'editorial';
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  layoutVariant,
  onSelect,
}) => {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-sm overflow-hidden hover:border-[#c95d3b]/80 dark:hover:border-[#c95d3b]/80 transition-all duration-300 hover:shadow-lg focus-within:ring-2 focus-within:ring-[#c95d3b]"
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      aria-label={`View Case Study for ${project.title}: ${project.subtitle}`}
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 dark:border-stone-800 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#c95d3b]">{project.number}</span>
          <span className="text-stone-300 dark:text-stone-700">/</span>
          <span className="text-stone-500 uppercase">{project.category}</span>
        </div>
        <span className="text-stone-400 dark:text-stone-500">{project.year}</span>
      </div>

      {/* Dynamic Editorial Layouts */}
      {layoutVariant === 'horizontal' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Visual Column */}
          <div className="lg:col-span-7 overflow-hidden rounded-xs border border-stone-200 dark:border-stone-800 group-hover:border-stone-400 dark:group-hover:border-stone-600 transition-colors">
            <ImagePlaceholder
              src={project.imageUrl}
              label={project.placeholderLabel}
              type={project.placeholderType}
              aspectRatio="aspect-[16/10]"
              className="transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-950 dark:text-stone-50 group-hover:text-[#c95d3b] transition-colors">
                {project.title}
              </h3>
              <p className="text-base text-stone-600 dark:text-stone-400 font-medium mt-1">
                {project.subtitle}
              </p>

              {/* Challenge / Approach / Outcome Brief */}
              <div className="mt-6 space-y-3.5 text-sm">
                <div>
                  <div className="font-mono text-[11px] font-semibold text-stone-400 dark:text-stone-500 uppercase flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#c95d3b]" />
                    Challenge
                  </div>
                  <p className="text-stone-700 dark:text-stone-300 mt-1 font-light line-clamp-2">
                    "{project.challenge}"
                  </p>
                </div>

                <div>
                  <div className="font-mono text-[11px] font-semibold text-stone-400 dark:text-stone-500 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
                    Outcome
                  </div>
                  <p className="text-stone-700 dark:text-stone-300 mt-1 font-light line-clamp-2">
                    "{project.outcome}"
                  </p>
                </div>
              </div>
            </div>

            {/* Tags & Action Button */}
            <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-stone-900 dark:text-stone-100 group-hover:text-[#c95d3b] transition-colors">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      )}

      {layoutVariant === 'offset' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Narrative Column (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 order-2 lg:order-1">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-950 dark:text-stone-50 group-hover:text-[#c95d3b] transition-colors">
                {project.title}
              </h3>
              <p className="text-base text-stone-600 dark:text-stone-400 font-medium mt-1">
                {project.subtitle}
              </p>

              <div className="mt-6 space-y-3.5 text-sm">
                <div>
                  <div className="font-mono text-[11px] font-semibold text-stone-400 dark:text-stone-500 uppercase flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#c95d3b]" />
                    Challenge
                  </div>
                  <p className="text-stone-700 dark:text-stone-300 mt-1 font-light line-clamp-2">
                    "{project.challenge}"
                  </p>
                </div>

                <div>
                  <div className="font-mono text-[11px] font-semibold text-stone-400 dark:text-stone-500 uppercase flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#c95d3b]" />
                    Approach
                  </div>
                  <p className="text-stone-700 dark:text-stone-300 mt-1 font-light line-clamp-2">
                    "{project.approach}"
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-stone-900 dark:text-stone-100 group-hover:text-[#c95d3b] transition-colors">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Visual Column (Right) */}
          <div className="lg:col-span-7 overflow-hidden rounded-xs border border-stone-200 dark:border-stone-800 group-hover:border-stone-400 dark:group-hover:border-stone-600 transition-colors order-1 lg:order-2">
            <ImagePlaceholder
              src={project.imageUrl}
              label={project.placeholderLabel}
              type={project.placeholderType}
              aspectRatio="aspect-[16/10]"
              className="transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      )}

      {layoutVariant === 'editorial' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-950 dark:text-stone-50 group-hover:text-[#c95d3b] transition-colors">
                {project.title}
              </h3>
              <p className="text-base text-stone-600 dark:text-stone-400 font-medium">
                {project.subtitle}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-stone-900 dark:text-stone-100 group-hover:text-[#c95d3b] transition-colors">
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Visual Container */}
          <div className="overflow-hidden rounded-xs border border-stone-200 dark:border-stone-800 group-hover:border-stone-400 dark:group-hover:border-stone-600 transition-colors">
            <ImagePlaceholder
              src={project.imageUrl}
              label={project.placeholderLabel}
              type={project.placeholderType}
              aspectRatio="aspect-[21/9]"
              className="transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Challenge, Approach & Outcome Trio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-xs bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
              <span className="font-mono text-stone-400 uppercase font-semibold block mb-1">Challenge</span>
              <span className="text-stone-700 dark:text-stone-300 font-light">"{project.challenge}"</span>
            </div>
            <div className="p-4 rounded-xs bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
              <span className="font-mono text-stone-400 uppercase font-semibold block mb-1">Approach</span>
              <span className="text-stone-700 dark:text-stone-300 font-light">"{project.approach}"</span>
            </div>
            <div className="p-4 rounded-xs bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
              <span className="font-mono text-emerald-600 dark:text-emerald-500 uppercase font-semibold block mb-1">Outcome</span>
              <span className="text-stone-700 dark:text-stone-300 font-light">"{project.outcome}"</span>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

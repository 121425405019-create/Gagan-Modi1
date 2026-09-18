import React, { useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, ExternalLink, CheckCircle2, Compass, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        navigateNext();
      } else if (e.key === 'ArrowLeft') {
        navigatePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (project) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  const navigateNext = () => onSelectProject(nextProject);
  const navigatePrev = () => onSelectProject(prevProject);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Click outside to dismiss backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-sm shadow-2xl z-10 flex flex-col">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-stone-50/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#c95d3b]">
              CASE STUDY {project.number}
            </span>
            <span className="text-stone-300 dark:text-stone-700">•</span>
            <span className="text-xs font-mono text-stone-500 uppercase">{project.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={navigatePrev}
              className="p-2 rounded-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
              title="Previous project (Left arrow)"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={navigateNext}
              className="p-2 rounded-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
              title="Next project (Right arrow)"
              aria-label="Next project"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-stone-200 dark:bg-stone-800 mx-1" />
            <button
              onClick={onClose}
              className="p-2 rounded-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-10">
          
          {/* Title Header */}
          <div className="space-y-3">
            <h2 id="modal-title" className="font-display text-3xl sm:text-4xl font-bold text-stone-950 dark:text-stone-50 tracking-tight">
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl text-[#c95d3b] font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Large Hero Visual Placeholder */}
          <div className="rounded-xs overflow-hidden border border-stone-200 dark:border-stone-800">
            <ImagePlaceholder
              src={project.imageUrl}
              alt={`${project.title} Visual Presentation`}
              label={project.placeholderLabel}
              type={project.placeholderType}
              aspectRatio="aspect-[16/9]"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-700/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Challenge, Approach & Outcome Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-200 dark:border-stone-800">
            
            {/* Challenge */}
            <div className="p-5 rounded-xs bg-white dark:bg-stone-950/60 border border-stone-200 dark:border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-stone-500 uppercase">
                <Compass className="w-4 h-4 text-[#c95d3b]" />
                <span>The Challenge</span>
              </div>
              <p className="text-stone-800 dark:text-stone-200 text-sm leading-relaxed">
                "{project.challenge}"
              </p>
            </div>

            {/* Approach */}
            <div className="p-5 rounded-xs bg-white dark:bg-stone-950/60 border border-stone-200 dark:border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-stone-500 uppercase">
                <Layers className="w-4 h-4 text-[#c95d3b]" />
                <span>The Approach</span>
              </div>
              <p className="text-stone-800 dark:text-stone-200 text-sm leading-relaxed">
                "{project.approach}"
              </p>
            </div>

            {/* Outcome */}
            <div className="p-5 rounded-xs bg-white dark:bg-stone-950/60 border border-stone-200 dark:border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-stone-500 uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                <span>The Outcome</span>
              </div>
              <p className="text-stone-800 dark:text-stone-200 text-sm leading-relaxed">
                "{project.outcome}"
              </p>
            </div>

          </div>

          {/* Gallery Placeholders Section */}
          <div className="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-base font-bold text-stone-900 dark:text-stone-100">
                Asset & Artifact Gallery
              </h4>
              <span className="font-mono text-xs text-stone-400">EDITABLE PLACEHOLDERS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ImagePlaceholder
                label={`[${project.title.toUpperCase()} — BOARD 01]`}
                type={project.placeholderType}
                aspectRatio="aspect-[4/3]"
              />
              <ImagePlaceholder
                label={`[${project.title.toUpperCase()} — BOARD 02]`}
                type={project.placeholderType}
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>

          {/* Footer Action & Project URL Placeholder */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
              <Sparkles className="w-3.5 h-3.5 text-[#c95d3b]" />
              <span>Project URL / Live Link:</span>
              <span className="px-2.5 py-1 bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-xs font-semibold">
                {project.projectUrlPlaceholder}
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xs border border-stone-300 dark:border-stone-700 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                Back to Work
              </button>
              <button
                onClick={navigateNext}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xs bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-950 text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 dark:hover:bg-stone-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Next Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

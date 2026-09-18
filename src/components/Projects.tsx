import React, { useState } from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getLayoutVariant = (index: number): 'horizontal' | 'offset' | 'editorial' => {
    if (index === 0) return 'horizontal';
    if (index === 1) return 'offset';
    return 'editorial';
  };

  return (
    <section
      id="work"
      className="py-24 sm:py-32 border-b border-stone-200/80 dark:border-stone-800/80 relative"
      aria-label="Selected Projects and Work"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-stone-200/80 dark:border-stone-800/80">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-widest text-[#c95d3b] uppercase">
                02 — SELECTED WORK
              </span>
              <div className="h-px w-12 bg-[#c95d3b]" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 dark:text-stone-50 tracking-tight">
              Selected projects & work
            </h2>
          </div>

          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-md font-light">
            A selection of work focused on creative thinking, practical execution, and clear communication.
          </p>
        </div>

        {/* Projects Editorial Stack */}
        <div className="space-y-10 sm:space-y-12">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              layoutVariant={getLayoutVariant(idx)}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Project Modal Dialog */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
          allProjects={projects}
        />

      </div>
    </section>
  );
};

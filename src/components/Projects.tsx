import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import { projects, sectionIndices, type Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';
import ProjectVisual from './ProjectVisuals';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-xs text-emerald-400">{sectionIndices.projects}</span>
          <span className="h-px flex-1 bg-hairline" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Featured Projects
          </h2>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-12"
        >
          Selected work, built end-to-end.
        </motion.h3>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              onClick={() => setSelected(project)}
              className="group text-left rounded-2xl border border-hairline bg-charcoal p-5 hover:border-hairline-light transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40"
            >
              <ProjectVisual project={project} />

              {/* Category tag */}
              <div className="mt-5 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">{project.category}</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>

              {/* Title */}
              <h4 className="mt-2.5 text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h4>

              {/* Impact */}
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-2">
                {project.impact}
              </p>

              {/* Tech pills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-hairline bg-obsidian px-2 py-0.5 font-mono text-[11px] text-zinc-500"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="rounded-md border border-hairline bg-obsidian px-2 py-0.5 font-mono text-[11px] text-zinc-600">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>

              {/* Card footer */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 group-hover:text-emerald-400 transition-colors">
                  Read Case Study
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>

                {(project.isPrivateRepo || !project.githubUrl) && (
                  <span
                    aria-disabled="true"
                    className="inline-flex items-center gap-1.5 rounded-md border border-hairline bg-obsidian/70 px-2.5 py-1 font-mono text-[11px] text-zinc-500 cursor-not-allowed select-none"
                  >
                    <Lock className="h-3 w-3" />
                    Private Repo
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

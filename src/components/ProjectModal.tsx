import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X, ExternalLink, Github, Lock, AlertTriangle, Cpu, CheckCircle2 } from 'lucide-react';
import type { Project } from '@/data/portfolioData';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  const accentColor =
    project?.accent === 'emerald' ? 'text-emerald-400' : 'text-sky-400';
  const accentBorder =
    project?.accent === 'emerald' ? 'border-emerald-500/40' : 'border-sky-500/40';
  const accentBg =
    project?.accent === 'emerald'
      ? 'bg-emerald-500/10 text-emerald-300'
      : 'bg-sky-500/10 text-sky-300';

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm" />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-hairline bg-charcoal-light shadow-2xl"
          >
            {/* Header strip */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-hairline bg-charcoal-light/95 backdrop-blur px-6 py-4">
              <div className="flex items-center gap-3">
                <span className={`font-mono text-xs ${accentColor}`}>
                  {project.index} //
                </span>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-mono ${accentBg}`}>
                  {project.category}
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-charcoal transition-all"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-6 py-6 space-y-7">
              {/* Title + impact */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">{project.impact}</p>
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-hairline bg-charcoal px-2.5 py-1 font-mono text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="h-px bg-hairline" />

              {/* Problem */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                  <AlertTriangle className={`h-4 w-4 ${accentColor}`} />
                  The Problem
                </h4>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Architecture */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Cpu className={`h-4 w-4 ${accentColor}`} />
                  System Architecture
                </h4>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {project.architecture}
                </p>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                  <CheckCircle2 className={`h-4 w-4 ${accentColor}`} />
                  Key Outcomes
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {project.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-current ${accentColor} flex-shrink-0`} />
                      <span className="leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="h-px bg-hairline" />
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 ${accentBorder} text-white hover:bg-charcoal`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && !project.isPrivateRepo ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-hairline px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:border-hairline-light transition-all duration-200"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-charcoal/50 px-4 py-2 text-sm font-medium text-zinc-500 cursor-not-allowed select-none"
                  >
                    <Lock className="h-4 w-4" />
                    Private Repo
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

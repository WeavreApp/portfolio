import { motion } from 'framer-motion';
import { experiences, sectionIndices } from '@/data/portfolioData';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-xs text-emerald-400">{sectionIndices.experience}</span>
          <span className="h-px flex-1 bg-hairline" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Experience & Leadership
          </h2>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-14"
        >
          Where I've built, led, and shipped.
        </motion.h3>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-hairline" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                className="relative pl-8 sm:pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 flex items-center justify-center">
                  <span
                    className={`h-3.5 w-3.5 rounded-full border-2 ${
                      exp.current
                        ? 'border-emerald-400 bg-emerald-400/20'
                        : 'border-hairline-light bg-obsidian'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="group rounded-xl border border-hairline bg-charcoal p-5 hover:border-hairline-light transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                    <h4 className="text-base font-semibold text-white">
                      {exp.role}
                    </h4>
                    <span className="font-mono text-xs text-zinc-500 sm:text-right whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-emerald-400/90">
                    {exp.organization}
                  </p>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

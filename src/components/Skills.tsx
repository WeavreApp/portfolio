import { motion } from 'framer-motion';
import { skillGroups, sectionIndices } from '@/data/portfolioData';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-xs text-emerald-400">{sectionIndices.skills}</span>
          <span className="h-px flex-1 bg-hairline" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Technical Stack
          </h2>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-12"
        >
          Tools I reach for, by domain.
        </motion.h3>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                className="rounded-2xl border border-hairline bg-charcoal p-6 hover:border-hairline-light transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-obsidian">
                      <Icon className="h-4 w-4 text-emerald-400" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">{group.title}</h4>
                  </div>
                  <span className="font-mono text-xs text-zinc-600">{group.index}</span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-hairline bg-obsidian px-2.5 py-1 font-mono text-xs text-zinc-400 hover:border-emerald-500/40 hover:text-zinc-200 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

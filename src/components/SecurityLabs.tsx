import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Terminal,
  Target,
  Microscope,
  FileSearch,
  ShieldCheck,
  Network,
  Swords,
  Copy,
  Check,
} from 'lucide-react';
import {
  securityLabs,
  sectionIndices,
  type SecurityLab,
  type SecurityLabCategory,
} from '@/data/portfolioData';

const ease = [0.22, 1, 0.36, 1] as const;

const categoryConfig: Record<
  SecurityLabCategory,
  { color: string; border: string; badge: string; icon: typeof ShieldCheck }
> = {
  'Blue Team & Forensics': {
    color: 'text-sky-400',
    border: 'border-sky-500/40',
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    icon: ShieldCheck,
  },
  'Network Defense': {
    color: 'text-emerald-400',
    border: 'border-emerald-500/40',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    icon: Network,
  },
  'Red Team': {
    color: 'text-rose-400',
    border: 'border-rose-500/40',
    badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
    icon: Swords,
  },
};

const filters: (SecurityLabCategory | 'All')[] = [
  'All',
  'Blue Team & Forensics',
  'Network Defense',
  'Red Team',
];

export default function SecurityLabs() {
  const [activeFilter, setActiveFilter] = useState<SecurityLabCategory | 'All'>('All');
  const [expandedId, setExpandedId] = useState<string | null>(securityLabs[0]?.id ?? null);

  const filtered =
    activeFilter === 'All'
      ? securityLabs
      : securityLabs.filter((lab) => lab.category === activeFilter);

  const toggle = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section id="labs" className="py-20 sm:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-xs text-emerald-400">{sectionIndices.labs}</span>
          <span className="h-px flex-1 bg-hairline" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Security Labs &amp; Practical Write-Ups
          </h2>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3"
        >
          Hands-on security, logged and documented.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease, delay: 0.16 }}
          className="max-w-2xl text-zinc-400 leading-relaxed mb-8"
        >
          Practical lab work across blue team forensics, network defense, and red
          team simulation. Each write-up covers objective, methodology, command logs, and findings.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease, delay: 0.22 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveFilter(filter);
                  const nextList =
                    filter === 'All'
                      ? securityLabs
                      : securityLabs.filter((lab) => lab.category === filter);
                  setExpandedId(nextList[0]?.id ?? null);
                }}
                className={`rounded-lg border px-3.5 py-1.5 font-mono text-xs transition-all duration-200 ${
                  isActive
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                    : 'border-hairline bg-charcoal text-zinc-500 hover:text-zinc-300 hover:border-hairline-light'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* Lab list (terminal log style) */}
        <div className="rounded-xl border border-hairline bg-charcoal/50 overflow-hidden">
          {/* Terminal header bar */}
          <div className="flex items-center gap-2 border-b border-hairline bg-charcoal px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
            <span className="ml-3 font-mono text-[11px] text-zinc-500">
              ~/security-labs/write-ups
            </span>
            <span className="ml-auto font-mono text-[11px] text-zinc-600">
              {filtered.length} {filtered.length === 1 ? 'entry' : 'entries'}
            </span>
            <Terminal className="h-3.5 w-3.5 text-zinc-600" />
          </div>

          {/* Accordion rows */}
          <div className="divide-y divide-hairline">
            {filtered.map((lab, i) => (
              <LabRow
                key={lab.id}
                lab={lab}
                expanded={expandedId === lab.id}
                onToggle={() => toggle(lab.id)}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LabRow({
  lab,
  expanded,
  onToggle,
  delay,
}: {
  lab: SecurityLab;
  expanded: boolean;
  onToggle: () => void;
  delay: number;
}) {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const config = categoryConfig[lab.category];
  const CategoryIcon = config.icon;

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(lab.terminalSnippet.command);
      setCopiedCmd(true);
      setTimeout(() => setCopiedCmd(false), 1800);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease, delay }}
      className={`group transition-colors duration-200 ${
        expanded ? 'bg-obsidian/60' : 'hover:bg-obsidian/40'
      }`}
    >
      {/* Collapsed row */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-4 sm:px-5 py-4 text-left"
        aria-expanded={expanded}
      >
        {/* Index */}
        <span className="font-mono text-xs text-zinc-600 w-14 flex-shrink-0 hidden sm:block">
          {lab.labIndex}
        </span>

        {/* Category icon */}
        <div className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-hairline bg-charcoal">
          <CategoryIcon className={`h-3.5 w-3.5 ${config.color}`} />
        </div>

        {/* Title */}
        <span className="flex-1 text-sm font-medium text-zinc-200 group-hover:text-white transition-colors truncate">
          {lab.title}
        </span>

        {/* Category badge */}
        <span
          className={`hidden md:inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${config.badge}`}
        >
          {lab.category}
        </span>

        {/* Chevron */}
        <ChevronRight
          className={`h-4 w-4 flex-shrink-0 text-zinc-600 transition-transform duration-300 ${
            expanded ? 'rotate-90 text-zinc-400' : ''
          }`}
        />
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-5 pl-4 sm:pl-[5.5rem] space-y-4">
              {/* Mobile category badge */}
              <span
                className={`md:hidden inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${config.badge}`}
              >
                {lab.category}
              </span>

              {/* Tool pills */}
              <div className="flex flex-wrap gap-1.5">
                {lab.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-hairline bg-charcoal px-2 py-0.5 font-mono text-[11px] text-zinc-500"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Objective + Methodology 2-col on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="rounded-lg border border-hairline bg-charcoal/60 p-3.5">
                  <h4 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-2">
                    <Target className={`h-3.5 w-3.5 ${config.color}`} />
                    Objective
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">{lab.objective}</p>
                </div>

                <div className="rounded-lg border border-hairline bg-charcoal/60 p-3.5">
                  <h4 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-2">
                    <Microscope className={`h-3.5 w-3.5 ${config.color}`} />
                    Methodology
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">{lab.methodology}</p>
                </div>
              </div>

              {/* Terminal Artifact / Command Log */}
              <div className="rounded-lg border border-hairline bg-obsidian overflow-hidden">
                <div className="flex items-center justify-between border-b border-hairline bg-charcoal/80 px-3.5 py-2">
                  <span className="font-mono text-[11px] text-zinc-500">
                    {lab.terminalSnippet.env}
                  </span>
                  <button
                    type="button"
                    onClick={copyCommand}
                    aria-label="Copy command"
                    className="inline-flex items-center gap-1 font-mono text-[10px] text-zinc-500 hover:text-zinc-200 transition-colors"
                  >
                    {copiedCmd ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy cmd</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3.5 font-mono text-xs space-y-1.5 overflow-x-auto">
                  <div className="flex items-start gap-2 text-zinc-200">
                    <span className={`${config.color} select-none`}>$</span>
                    <span className="whitespace-pre-wrap break-all">
                      {lab.terminalSnippet.command}
                    </span>
                  </div>
                  <div className="pt-1 space-y-1 text-zinc-400">
                    {lab.terminalSnippet.output.map((line, idx) => (
                      <div key={idx} className="whitespace-pre-wrap break-words leading-relaxed">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Findings */}
              <div className={`rounded-lg border ${config.border} bg-charcoal/60 p-3.5`}>
                <h4 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-2">
                  <FileSearch className={`h-3.5 w-3.5 ${config.color}`} />
                  Key Findings
                </h4>
                <p className="text-sm text-zinc-200 leading-relaxed">{lab.findings}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

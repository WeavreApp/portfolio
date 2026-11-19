import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Check,
  Terminal,
} from 'lucide-react';
import { profile, socials, heroHighlights } from '@/data/portfolioData';

const ease = [0.22, 1, 0.36, 1] as const;

type TerminalTab = 'whoami' | 'stack' | 'focus' | 'status';

const terminalTabs: { id: TerminalTab; label: string; command: string; lines: { key: string; val: string; accent?: boolean }[] }[] = [
  {
    id: 'whoami',
    label: 'whoami',
    command: 'whoami --verbose',
    lines: [
      { key: 'name', val: 'Babasanya Abdulsalam' },
      { key: 'role', val: 'Cybersecurity Engineer & Full-Stack Dev' },
      { key: 'certs', val: 'ISC2 CC, Google Cybersecurity, Cisco, AITech' },
      { key: 'building', val: 'Weavre Ltd (Founder & CEO)', accent: true },
      { key: 'campus', val: 'Cybersecurity Club President & Mr. Nile (Nile Univ.)' },
      { key: 'location', val: 'Abuja, Nigeria (WAT / UTC+1)' },
    ],
  },
  {
    id: 'stack',
    label: 'stack',
    command: 'cat ~/stack.conf',
    lines: [
      { key: 'frontend', val: 'Next.js, React, TypeScript, Tailwind CSS' },
      { key: 'backend', val: 'Python, Flask, PostgreSQL, Supabase RLS', accent: true },
      { key: 'security', val: 'OPNsense, Autopsy, Nmap, Wireshark, STRIDE' },
      { key: 'payments', val: 'Paystack Split Payments, TOTP QR Auth' },
      { key: 'infra', val: 'Linux, Docker, Vercel, Git, CI/CD' },
    ],
  },
  {
    id: 'focus',
    label: 'focus',
    command: 'ls -1 ~/current-focus',
    lines: [
      { key: '01', val: 'Database-layer access control (Postgres RLS)', accent: true },
      { key: '02', val: 'Shipping institutional & business software at Weavre Ltd' },
      { key: '03', val: 'Network defense, forensics & red-team labs' },
      { key: '04', val: 'Human-in-the-loop AI automation workflows' },
    ],
  },
  {
    id: 'status',
    label: 'status',
    command: 'status --availability',
    lines: [
      { key: 'state', val: 'OPEN FOR ROLES & COLLABORATIONS', accent: true },
      { key: 'roles', val: 'Cybersecurity Engineering / Full-Stack' },
      { key: 'recent', val: 'SIWES Technical Intern @ NCAIR (2025)' },
      { key: 'email', val: profile.email },
    ],
  },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<TerminalTab>('whoami');

  const currentTab = terminalTabs.find((t) => t.id === activeTab) ?? terminalTabs[0];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 sm:pb-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 h-[420px] w-[620px] rounded-full bg-emerald-500/[0.06] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[320px] w-[420px] rounded-full bg-sky-500/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left column: Intro + CTAs */}
          <div className="lg:col-span-7">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-charcoal/60 px-3.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulse-dot" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xs text-zinc-400 tracking-tight">
                {profile.statusText}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]"
            >
              {profile.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              className="mt-5 max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed"
            >
              {profile.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-obsidian hover:bg-zinc-200 transition-colors duration-200"
              >
                View Selected Work
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href={profile.cvUrl}
                download={profile.cvFilename}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-hairline px-5 py-2.5 text-sm font-medium text-zinc-300 hover:border-hairline-light hover:text-white transition-all duration-200"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>

              {/* Icon links */}
              <div className="flex items-center gap-1.5 sm:ml-1">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hairline text-zinc-400 hover:text-white hover:border-hairline-light transition-all duration-200"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hairline text-zinc-400 hover:text-white hover:border-hairline-light transition-all duration-200"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hairline text-zinc-400 hover:text-white hover:border-hairline-light transition-all duration-200"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Mail className="h-4 w-4" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Copy hint */}
            <div className="mt-3 h-4">
              {copied && (
                <p className="font-mono text-xs text-emerald-400">
                  Copied {profile.email}
                </p>
              )}
            </div>
          </div>

          {/* Right column: Interactive Security Profile Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-hairline bg-charcoal/90 shadow-2xl overflow-hidden">
              {/* Terminal chrome */}
              <div className="flex items-center justify-between border-b border-hairline bg-charcoal px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                  <span className="ml-2 font-mono text-[11px] text-zinc-500">
                    babasanya@abuja:~
                  </span>
                </div>
                <Terminal className="h-3.5 w-3.5 text-zinc-600" />
              </div>

              {/* Interactive command tabs */}
              <div className="flex items-center gap-1 border-b border-hairline bg-obsidian/60 px-3 py-2 overflow-x-auto">
                {terminalTabs.map((tab) => {
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors ${
                        isActive
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Terminal body */}
              <div className="p-4 sm:p-5 font-mono text-xs space-y-3 min-h-[220px]">
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="text-emerald-400">$</span>
                  <span>{currentTab.command}</span>
                </div>

                <div className="space-y-2 pt-1">
                  {currentTab.lines.map((line) => (
                    <div key={line.key} className="grid grid-cols-[84px_1fr] gap-2 leading-relaxed">
                      <span className="text-zinc-500">{line.key}:</span>
                      <span className={line.accent ? 'text-emerald-300' : 'text-zinc-200'}>
                        {line.val}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-zinc-600">
                  <span className="text-emerald-400">$</span>
                  <span className="inline-block h-3.5 w-1.5 bg-emerald-400/80 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="mt-14 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"
        >
          {heroHighlights.map((item) => (
            <div
              key={item.value}
              className="rounded-xl border border-hairline bg-charcoal/70 px-4 py-3.5 hover:border-hairline-light transition-colors"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-mono text-sm font-semibold text-white">
                  {item.value}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400/90">
                  {item.label}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { aboutData, sectionIndices } from '@/data/portfolioData';

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-xs text-emerald-400">{sectionIndices.about}</span>
          <span className="h-px flex-1 bg-hairline" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
            About &amp; Background
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Bio + engineering principles */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
              {aboutData.heading}
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              {aboutData.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Principles */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {aboutData.principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-hairline bg-charcoal p-4 hover:border-hairline-light transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Education + Practical Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Education card */}
            <div className="rounded-2xl border border-hairline bg-charcoal p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-obsidian">
                  <GraduationCap className="h-4 w-4 text-emerald-400" />
                </div>
                <h4 className="text-sm font-semibold text-white">Education &amp; Training</h4>
              </div>

              <div className="space-y-4">
                {aboutData.education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="border-l-2 border-hairline pl-3.5 hover:border-emerald-500/50 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium text-white">{edu.degree}</p>
                      <span className="font-mono text-[11px] text-zinc-500 whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-emerald-400/90">{edu.institution}</p>
                    <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">{edu.notes}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-2xl border border-hairline bg-charcoal p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-obsidian">
                  <Award className="h-4 w-4 text-sky-400" />
                </div>
                <h4 className="text-sm font-semibold text-white">Certifications</h4>
              </div>

              <div className="space-y-2.5">
                {aboutData.credentials.map((cred) => {
                  const content = (
                    <>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-zinc-200 flex items-center gap-1.5">
                          <span className="truncate">{cred.name}</span>
                          {cred.credentialUrl && (
                            <ExternalLink className="h-3 w-3 text-zinc-500 flex-shrink-0" />
                          )}
                        </p>
                        <p className="mt-0.5 text-[11px] text-zinc-500">{cred.issuer}</p>
                      </div>
                      <span className="flex-shrink-0 rounded-md border border-hairline bg-charcoal px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                        {cred.tag}
                      </span>
                    </>
                  );

                  return cred.credentialUrl ? (
                    <a
                      key={`${cred.issuer}-${cred.name}`}
                      href={cred.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between gap-3 rounded-lg border border-hairline bg-obsidian/70 px-3.5 py-2.5 hover:border-sky-500/40 transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={`${cred.issuer}-${cred.name}`}
                      className="flex items-start justify-between gap-3 rounded-lg border border-hairline bg-obsidian/70 px-3.5 py-2.5"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

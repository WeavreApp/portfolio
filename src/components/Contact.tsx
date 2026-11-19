import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { profile, contactPitch, sectionIndices } from '@/data/portfolioData';
import type { ToastVariant } from '@/hooks/useToast';

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  onToast: (message: string, variant?: ToastVariant) => void;
};

type SubmitStatus =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success'; message: string }
  | { state: 'error'; message: string };

export default function Contact({ onToast }: Props) {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>({ state: 'idle' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || !email || !message) return;

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim();
    if (!endpoint) {
      const msg = `Form endpoint is not configured. Email me directly at ${profile.email}.`;
      setStatus({ state: 'error', message: msg });
      onToast('Form is not configured yet. Please email me directly.', 'error');
      return;
    }

    setStatus({ state: 'submitting' });

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || (data && data.success === false)) {
        const formspreeErrors = Array.isArray(data?.errors)
          ? data.errors
              .map((err: { message?: string }) => err.message)
              .filter(Boolean)
              .join(', ')
          : '';
        const errorText =
          formspreeErrors ||
          data?.error ||
          data?.message ||
          `Could not send your message. Please email ${profile.email} directly.`;
        setStatus({ state: 'error', message: errorText });
        onToast('Failed to send message. Please try again.', 'error');
        return;
      }

      setForm({ name: '', email: '', message: '' });
      setStatus({
        state: 'success',
        message: 'Message received. I will get back to you shortly.',
      });
      onToast('Message sent. I will get back to you shortly.', 'success');
    } catch {
      const msg = `Network error while sending. Please try again or email ${profile.email}.`;
      setStatus({ state: 'error', message: msg });
      onToast('Network error. Please try again.', 'error');
    }
  };

  const submitting = status.state === 'submitting';

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-xs text-emerald-400">{sectionIndices.contact}</span>
          <span className="h-px flex-1 bg-hairline" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Pitch + copy email */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.1]">
              Let's build something
              <br />
              <span className="text-emerald-400">solid and secure.</span>
            </h3>
            <p className="mt-5 max-w-md text-zinc-400 leading-relaxed">
              {contactPitch}
            </p>

            {/* Copy email */}
            <div className="mt-8">
              <button
                type="button"
                onClick={copyEmail}
                className="group inline-flex items-center gap-3 rounded-lg border border-hairline bg-charcoal px-4 py-3 hover:border-emerald-500/40 transition-all duration-200"
              >
                <span className="font-mono text-sm text-zinc-300">{profile.email}</span>
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                )}
              </button>
              {copied && (
                <p className="mt-2 font-mono text-xs text-emerald-400">Copied to clipboard</p>
              )}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-hairline bg-charcoal p-6 sm:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-zinc-500 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={submitting}
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (status.state !== 'idle') setStatus({ state: 'idle' });
                }}
                className="w-full rounded-lg border border-hairline bg-obsidian px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 disabled:opacity-60 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-zinc-500 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={submitting}
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  if (status.state !== 'idle') setStatus({ state: 'idle' });
                }}
                className="w-full rounded-lg border border-hairline bg-obsidian px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 disabled:opacity-60 transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-zinc-500 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                disabled={submitting}
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  if (status.state !== 'idle') setStatus({ state: 'idle' });
                }}
                className="w-full rounded-lg border border-hairline bg-obsidian px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 disabled:opacity-60 transition-all resize-none"
                placeholder="Tell me about the project or role..."
              />
            </div>

            {status.state === 'success' && (
              <div
                role="status"
                className="flex items-start gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2.5 text-xs text-emerald-300"
              >
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-emerald-400" />
                <span>{status.message}</span>
              </div>
            )}

            {status.state === 'error' && (
              <div
                role="alert"
                className="flex items-start gap-2.5 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3.5 py-2.5 text-xs text-rose-300"
              >
                <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-rose-400" />
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-obsidian hover:bg-zinc-200 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

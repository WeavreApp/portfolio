import {
  ShieldCheck,
  Lock,
  Check,
  X,
  Activity,
  QrCode,
  AlertTriangle,
  CreditCard,
} from 'lucide-react';
import type { Project } from '@/data/portfolioData';

function WeavreVisual({ index }: { index: string }) {
  return (
    <div className="relative h-full w-full p-3.5 flex flex-col justify-between">
      {/* Top status strip */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono text-[10px] text-emerald-300">WEAVRE // TICKET PASS</span>
        </div>
        <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] text-emerald-300">
          TOTP • 24s
        </span>
      </div>

      {/* Main mini ticket card */}
      <div className="my-2 flex items-center gap-3 rounded-lg border border-hairline bg-obsidian/90 p-2.5">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
          <QrCode className="h-7 w-7" />
        </div>
        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex items-center justify-between gap-2">
            <span className="truncate font-mono text-[11px] font-medium text-white">
              CAMPUS_TECH_FEST_25
            </span>
            <span className="font-mono text-[10px] text-emerald-400">VALID</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500">
            <span>Paystack Split: 92% / 8%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1 flex-1 rounded-full bg-emerald-500/20 overflow-hidden">
              <span className="block h-full w-3/4 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[9px] text-zinc-500">RLS OK</span>
          </div>
        </div>
      </div>

      {/* Bottom chips */}
      <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500">
        <span>auth.uid() = club_member</span>
        <span className="text-emerald-400/80">{index}</span>
      </div>
    </div>
  );
}

function OtaPortalVisual({ index }: { index: string }) {
  return (
    <div className="relative h-full w-full p-3.5 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <CreditCard className="h-3.5 w-3.5 text-sky-400" />
          <span className="font-mono text-[10px] text-sky-300">OTA PORTAL // FEE CHECKOUT</span>
        </div>
        <span className="rounded border border-sky-500/30 bg-sky-500/10 px-1.5 py-0.5 font-mono text-[9px] text-sky-300">
          WEAVRE LTD
        </span>
      </div>

      <div className="my-2 rounded-lg border border-hairline bg-obsidian/90 p-2.5 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate font-mono text-[11px] font-medium text-white">
            TERM_TUITION_INVOICE
          </span>
          <span className="inline-flex items-center gap-1 rounded bg-emerald-500/15 px-1.5 py-0.5 font-mono text-[9px] text-emerald-300">
            <Check className="h-2.5 w-2.5" />
            VERIFIED
          </span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 font-mono text-[9px]">
          <div className="rounded border border-hairline bg-charcoal px-2 py-1 text-zinc-400">
            Receipt: #OTA-4821
          </div>
          <div className="rounded border border-hairline bg-charcoal px-2 py-1 text-sky-300">
            Bursary Sync: OK
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500">
        <span>otatotalacademyportal.org</span>
        <span className="text-sky-400/80">{index}</span>
      </div>
    </div>
  );
}

function AttendanceVisual({ index }: { index: string }) {
  const roles = [
    { role: 'Faculty', scope: 'ALL CLUBS', color: 'text-sky-300 border-sky-500/30 bg-sky-500/10' },
    { role: 'Executive', scope: 'OWN CLUB', color: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10' },
    { role: 'Student', scope: 'SELF ONLY', color: 'text-zinc-300 border-hairline bg-charcoal' },
  ];

  return (
    <div className="relative h-full w-full p-3.5 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span className="font-mono text-[10px] text-emerald-300">POSTGRES RLS // POLICIES</span>
        </div>
        <span className="font-mono text-[9px] text-zinc-500">NILE UNIV.</span>
      </div>

      <div className="my-2 space-y-1.5">
        {roles.map((item) => (
          <div
            key={item.role}
            className="flex items-center justify-between rounded-md border border-hairline bg-obsidian/90 px-2.5 py-1.5"
          >
            <div className="flex items-center gap-2">
              <Lock className="h-3 w-3 text-zinc-500" />
              <span className="font-mono text-[10px] text-zinc-200">{item.role}</span>
            </div>
            <span className={`rounded border px-1.5 py-0.5 font-mono text-[9px] ${item.color}`}>
              {item.scope}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500">
        <span>ROW LEVEL SECURITY ENABLED</span>
        <span className="text-emerald-400/80">{index}</span>
      </div>
    </div>
  );
}

function TradingCopilotVisual({ index }: { index: string }) {
  return (
    <div className="relative h-full w-full p-3.5 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Activity className="h-3.5 w-3.5 text-sky-400" />
          <span className="font-mono text-[10px] text-sky-300">TELEGRAM // TRADE BRIEF</span>
        </div>
        <span className="font-mono text-[9px] text-zinc-500">MT5 • 24/7</span>
      </div>

      <div className="my-2 rounded-lg border border-hairline bg-obsidian/90 p-2.5 space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] font-semibold text-white">XAUUSD • M15 LONG</span>
          <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 font-mono text-[9px] text-emerald-300">
            ADX 31.4
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] text-zinc-400">
          <span>ATR: Normal</span>
          <span>•</span>
          <span>RAG: 3 similar setups</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 pt-0.5">
          <span className="inline-flex items-center justify-center gap-1 rounded border border-emerald-500/40 bg-emerald-500/15 py-1 font-mono text-[9px] text-emerald-300">
            <Check className="h-2.5 w-2.5" />
            Approve
          </span>
          <span className="inline-flex items-center justify-center gap-1 rounded border border-hairline bg-charcoal py-1 font-mono text-[9px] text-zinc-400">
            <X className="h-2.5 w-2.5" />
            Reject
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500">
        <span>Human approval required</span>
        <span className="text-sky-400/80">{index}</span>
      </div>
    </div>
  );
}

function CryptoSuiteVisual({ index }: { index: string }) {
  const sboxBytes = ['63', '7C', '77', '7B', 'F2', '6B', '6F', 'C5', '30', '01', '67', '2B'];

  return (
    <div className="relative h-full w-full p-3.5 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] text-sky-300">GF(2^8) S-BOX + URL ML</span>
        <span className="font-mono text-[9px] text-zinc-500">FLASK API</span>
      </div>

      <div className="my-2 grid grid-cols-2 gap-2">
        {/* S-Box hex mini matrix */}
        <div className="rounded-lg border border-hairline bg-obsidian/90 p-2">
          <p className="font-mono text-[9px] text-zinc-500 mb-1.5">AES S-BOX [0x00..0x0B]</p>
          <div className="grid grid-cols-4 gap-1 font-mono text-[9px] text-sky-300">
            {sboxBytes.map((byte) => (
              <span
                key={byte}
                className="rounded bg-charcoal py-0.5 text-center border border-hairline/70"
              >
                {byte}
              </span>
            ))}
          </div>
        </div>

        {/* Phishing classifier mini readout */}
        <div className="rounded-lg border border-hairline bg-obsidian/90 p-2 flex flex-col justify-between">
          <div className="flex items-center gap-1 text-rose-400">
            <AlertTriangle className="h-3 w-3 flex-shrink-0" />
            <span className="font-mono text-[9px] font-medium">PHISH DETECTED</span>
          </div>
          <p className="truncate font-mono text-[9px] text-zinc-400">
            paypa1-verify.xyz/login
          </p>
          <div className="flex items-center justify-between font-mono text-[9px]">
            <span className="text-zinc-500">Score</span>
            <span className="text-rose-300 font-semibold">94.2%</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500">
        <span>Scikit-learn • Finite Field</span>
        <span className="text-sky-400/80">{index}</span>
      </div>
    </div>
  );
}

export default function ProjectVisual({ project }: { project: Project }) {
  const isEmerald = project.accent === 'emerald';
  const accent = isEmerald ? '#10B981' : '#0EA5E9';

  return (
    <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-xl border border-hairline bg-charcoal">
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(${accent} 1px, transparent 1px), linear-gradient(90deg, ${accent} 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      {/* Ambient top glow */}
      <div
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-24 w-56 rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: accent }}
      />

      {project.id === 'weavre' && <WeavreVisual index={project.index} />}
      {project.id === 'ota-portal' && <OtaPortalVisual index={project.index} />}
      {project.id === 'attendance' && <AttendanceVisual index={project.index} />}
      {project.id === 'trading-copilot' && <TradingCopilotVisual index={project.index} />}
      {project.id === 'crypto-suite' && <CryptoSuiteVisual index={project.index} />}
    </div>
  );
}

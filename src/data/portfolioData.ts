import {
  Github,
  Linkedin,
  Mail,
  Shield,
  Layers,
  Cpu,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Babasanya Abdulsalam',
  monogram: 'B. Abdulsalam',
  statusText: 'Building Weavre • Abuja, NG',
  headline: 'Babasanya Abdulsalam',
  subheadline:
    'Cybersecurity engineer, full-stack developer, and founder. I design, build, and secure web systems from Postgres policies to production UI.',
  location: 'Abuja, Nigeria',
  email: 'Babasanya.valphaxx@gmail.com',
  cvUrl: '/cv.pdf',
  cvFilename: 'Babasanya_Abdulsalam_CV.pdf',
};

export const socials = {
  github: 'https://github.com/WeavreApp',
  linkedin: 'https://www.linkedin.com/in/abdulsalam-babasanya-4440562a1',
  email: 'mailto:Babasanya.valphaxx@gmail.com',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Labs', href: '#labs' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const heroHighlights = [
  {
    value: 'Weavre Ltd',
    label: 'Founder & CEO',
    detail: 'Software company for institutions & businesses',
  },
  {
    value: 'NCAIR',
    label: 'SIWES Technical Intern',
    detail: 'Python tooling, UI & security research (2025)',
  },
  {
    value: 'Nile Univ.',
    label: 'Cybersecurity Club President',
    detail: 'Workshops, awareness & partnerships',
  },
  {
    value: '7 Labs',
    label: 'Documented Write-Ups',
    detail: 'Forensics, network defense & red team',
  },
];

export const aboutData = {
  heading: 'Security-minded builder, from schema to UI.',
  paragraphs: [
    'I work at the intersection of cybersecurity and full-stack engineering. I run Weavre Ltd, a software company building custom systems for institutions and businesses alongside our flagship Weavre campus platform. We have shipped production software ranging from institutional fee payment portals to event ticketing and verification tools.',
    'Outside company builds, I lead the Cybersecurity Club at Nile University of Nigeria and run hands-on security labs covering disk forensics, OPNsense intrusion detection, threat modeling, and adversary simulation. I prefer enforcing security at the database and architecture layer rather than patching it in at the end.',
  ],
  principles: [
    {
      title: 'Database-layer security',
      detail: 'Enforce permissions in Postgres RLS and server boundaries instead of trusting client state.',
    },
    {
      title: 'End-to-end ownership',
      detail: 'Comfortable shipping schema design, payment webhooks, APIs, and responsive frontend UI.',
    },
    {
      title: 'Evidence-driven labs',
      detail: 'Every security exercise is logged with commands, telemetry, and concrete mitigations.',
    },
  ],
  education: [
    {
      degree: 'B.Sc. Cybersecurity',
      institution: 'Nile University of Nigeria, Abuja',
      period: 'Expected 2027',
      notes: 'President, Cybersecurity Club (formerly General Secretary) • Mr. Nile.',
    },
    {
      degree: 'SIWES Industrial Training',
      institution: 'National Centre for AI and Robotics (NCAIR)',
      period: '2025',
      notes: 'Python software workflows, frontend engineering, and cybersecurity research.',
    },
  ],
  // TODO: Add Credly/Coursera verification URLs via `credentialUrl` when ready
  credentials: [
    {
      name: 'Certified in Cybersecurity (CC)',
      issuer: 'ISC2',
      tag: 'Certified',
      credentialUrl: '',
    },
    {
      name: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google (Coursera)',
      tag: 'Cybersecurity',
      credentialUrl: '',
    },
    {
      // TODO: Update exact Cisco course title once you locate the certificate
      name: 'Cybersecurity & Networking Certificate',
      issuer: 'Cisco Networking Academy',
      tag: 'Networking',
      credentialUrl: '',
    },
    {
      // TODO: Update exact AITech program title once you locate the certificate
      name: 'Technical Certification',
      issuer: 'AITech',
      tag: 'Tech',
      credentialUrl: '',
    },
  ],
};

export type Project = {
  id: string;
  index: string;
  category: string;
  title: string;
  impact: string;
  stack: string[];
  problem: string;
  architecture: string;
  outcomes: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPrivateRepo?: boolean;
  accent: 'emerald' | 'blue';
};

export const projects: Project[] = [
  {
    id: 'weavre',
    index: '01',
    category: 'Startup / Full-Stack',
    title: 'Weavre',
    impact:
      'Campus social network and event ticketing platform with Paystack split payments and rotating TOTP QR check-in.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Paystack API', 'Tailwind CSS'],
    problem:
      'Campus clubs ran events across scattered group chats, manual bank transfers, and paper guest lists. Ticket screenshots got reused at the door, and organizers had no clean way to track payouts.',
    architecture:
      'Next.js and TypeScript frontend backed by Supabase for auth, realtime updates, and Postgres storage. Paystack split payments route ticket revenue directly between organizers and the platform. Rotating TOTP QR codes verify door entry, while Postgres Row-Level Security isolates each club\'s data at the database layer.',
    outcomes: [
      'Combined campus community feeds and event ticketing in one web app',
      'Automated organizer and platform payouts through Paystack split payments',
      'Blocked screenshot ticket reuse with rotating TOTP QR verification',
      'Isolated per-club records at the database layer using Postgres RLS',
    ],
    liveUrl: 'https://weavre.com',
    isPrivateRepo: true,
    accent: 'emerald',
  },
  {
    id: 'ota-portal',
    index: '02',
    category: 'Weavre Ltd / FinTech',
    title: 'OTA Total Academy Payment Portal',
    impact:
      'Institutional fee payment and administration portal built under Weavre Ltd for streamlined student billing, online checkout, and receipt tracking.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Paystack API', 'Tailwind CSS'],
    problem:
      'School fee collection relied on manual bank tellers, paper receipts, and slow spreadsheet reconciliation, creating delays for parents and heavy administrative overhead for staff.',
    architecture:
      'Built and deployed under Weavre Ltd as a production web portal with online payment checkout, automated transaction verification, and role-scoped administrative reporting for bursary reconciliation.',
    outcomes: [
      'Digitized school fee collection and receipt verification for parents and staff',
      'Automated payment confirmation and reconciliation workflows',
      'Shipped to production at otatotalacademyportal.org under Weavre Ltd',
      'Established a reusable institutional portal foundation for future client systems',
    ],
    liveUrl: 'https://otatotalacademyportal.org',
    isPrivateRepo: true,
    accent: 'blue',
  },
  {
    id: 'attendance',
    index: '03',
    category: 'Web App / Security',
    title: 'Nile University Club Attendance System',
    impact:
      'Role-based attendance portal for faculty supervisors and student club executives, enforced with Postgres Row-Level Security.',
    stack: ['React', 'TypeScript', 'Supabase RLS', 'PostgreSQL'],
    problem:
      'Club attendance at Nile University ran on paper sheets with no audit trail. Faculty supervisors could not inspect executive records, and broad database credentials left student data exposed.',
    architecture:
      'React and TypeScript frontend talking directly to Supabase Postgres. Row-Level Security enforces access at the query level: faculty supervisors see all clubs, club executives manage only their own, and students view only their personal attendance.',
    outcomes: [
      'Moved club attendance from paper sheets to a live web portal',
      'Enforced three-tier access (faculty, executive, student) directly in Postgres RLS',
      'Gave faculty supervisors direct audit visibility into club activity',
      'Cut attendance reconciliation from days to minutes',
    ],
    liveUrl: 'https://nileuniversityclubs.com',
    isPrivateRepo: true,
    accent: 'emerald',
  },
  {
    id: 'trading-copilot',
    index: '04',
    category: 'Systems / AI',
    title: 'Human-in-the-Loop Trading Copilot',
    impact:
      '24/7 market scanner and trade assistant combining ADX/ATR regime filters, Claude API analysis, and Telegram approval flows.',
    stack: ['Python', 'MetaTrader 5', 'Supabase', 'Claude API', 'Telegram Bot API'],
    problem:
      'Manual chart watching takes hours and invites impulsive entries. Fully automated bots have the opposite flaw: they keep executing through volatile regime shifts with no human check.',
    architecture:
      'A Python service polls MetaTrader 5 and screens setups with ADX and ATR regime filters. Qualifying setups go to the Claude API along with historical trade context retrieved from Supabase. A Telegram bot sends structured trade briefs so every order requires explicit human approval before execution.',
    outcomes: [
      'Automated 24/7 market scanning without constant screen time',
      'Kept final order execution behind a manual Telegram approval step',
      'Stored past trades in Supabase so new setups get historical context',
      'Replaced impulsive entries with structured, reviewable trade briefs',
    ],
    isPrivateRepo: true,
    accent: 'blue',
  },
  {
    id: 'crypto-suite',
    index: '05',
    category: 'Cybersecurity',
    title: 'AES S-Box Engine & Phishing Detection Suite',
    impact:
      'From-scratch AES S-Box generator using GF(2^8) finite-field math paired with a Scikit-learn phishing URL classifier.',
    stack: ['Python', 'Cryptography', 'Scikit-learn', 'Flask'],
    problem:
      'Most coursework treats the AES S-Box as a static lookup table instead of showing how it is derived. Separately, phishing URL classifiers often stay trapped in notebooks instead of running behind a usable API.',
    architecture:
      'A Python engine computes AES S-Boxes from first principles using GF(2^8) Galois Field arithmetic and serves them through a Flask API. Alongside it, a Scikit-learn pipeline scores URLs on lexical and host features via a lightweight Flask interface.',
    outcomes: [
      'Computed AES S-Boxes directly from GF(2^8) finite-field arithmetic',
      'Trained and served a phishing URL classifier on lexical and host features',
      'Exposed both tools through clean Flask endpoints for testing and demos',
      'Turned cryptography and ML coursework into runnable security utilities',
    ],
    // TODO: add repo URL
    githubUrl: '',
    accent: 'blue',
  },
];

export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  current?: boolean;
};

export const experiences: ExperienceItem[] = [
  {
    id: 'weavre-founder',
    role: 'Founder & CEO',
    organization: 'Weavre Ltd',
    period: '2025 - Present',
    description:
      'Lead a software company building custom web systems for institutions and businesses alongside our flagship Weavre campus platform. Shipped production software including the OTA Total Academy payment portal and Paystack-backed ticketing infrastructure.',
    current: true,
  },
  {
    id: 'ncair-intern',
    role: 'Technical Intern (SIWES)',
    organization: 'National Centre for Artificial Intelligence and Robotics (NCAIR)',
    period: '2025',
    description:
      'Built Python tooling, worked on frontend UI implementation, and supported internal cybersecurity research.',
  },
  {
    id: 'cybersec-president',
    role: 'President',
    organization: 'Cybersecurity Club, Nile University of Nigeria',
    period: '2025 - Present',
    description:
      'Run hands-on security workshops, campus awareness sessions, and industry partnerships (previously General Secretary).',
    current: true,
  },
  {
    id: 'mr-nile',
    role: 'Mr. Nile',
    organization: 'Nile University of Nigeria',
    period: 'Campus Ambassador',
    description:
      'Represent the student body across university events, student-led initiatives, and campus community outreach.',
  },
];

export type SkillGroup = {
  id: string;
  index: string;
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'security',
    index: '01',
    title: 'Security & Systems',
    icon: Shield,
    skills: [
      'Network Security',
      'Threat Modeling',
      'Digital Forensics',
      'Cryptography',
      'Linux',
      'Docker',
      'Supabase RLS',
    ],
  },
  {
    id: 'fullstack',
    index: '02',
    title: 'Full-Stack Engineering',
    icon: Layers,
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Python',
      'Flask',
      'PostgreSQL',
      'Paystack API',
    ],
  },
  {
    id: 'tooling',
    index: '03',
    title: 'Tooling & Infrastructure',
    icon: Cpu,
    skills: ['Git', 'Vercel', 'VirtualBox', 'REST APIs', 'CI/CD', 'UI/UX Systems'],
  },
];

export const contactPitch =
  'Open to cybersecurity engineering roles, full-stack builds, and technical collaborations.';

export const footerLinks = [
  { label: 'GitHub', href: socials.github, icon: Github },
  { label: 'LinkedIn', href: socials.linkedin, icon: Linkedin },
  { label: 'Email', href: socials.email, icon: Mail },
];

export const sectionIndices = {
  about: '01 //',
  projects: '02 //',
  labs: '03 //',
  experience: '04 //',
  skills: '05 //',
  contact: '06 //',
};

export type SecurityLabCategory =
  | 'Blue Team & Forensics'
  | 'Network Defense'
  | 'Red Team';

export type SecurityLab = {
  id: string;
  labIndex: string;
  title: string;
  category: SecurityLabCategory;
  tools: string[];
  objective: string;
  methodology: string;
  findings: string;
  terminalSnippet: {
    env: string;
    command: string;
    output: string[];
  };
};

export const securityLabs: SecurityLab[] = [
  {
    id: 'disk-forensics',
    labIndex: 'LAB-01',
    title: 'Disk Forensics & Artifact Investigation',
    category: 'Blue Team & Forensics',
    tools: ['Autopsy', 'Hack The Box', 'Digital Forensics'],
    objective:
      'Inspect a compromised disk image, recover deleted artifacts, and reconstruct user activity.',
    methodology:
      'Loaded a Hack The Box forensic image into Autopsy, carved deleted files, and built an activity timeline.',
    findings:
      'Recovered key system artifacts, mapped file access timestamps, and documented the evidence chain.',
    terminalSnippet: {
      env: 'forensics@lab:~/htb-image',
      command: 'fls -r -d -o 2048 evidence.dd | head -n 4',
      output: [
        'r/r * 4182-128-1: Users/analyst/Downloads/dropper.ps1',
        'r/r * 4195-128-4: Users/analyst/AppData/Roaming/stage2.bin',
        '[+] Timeline matched: 2025-03-14 09:42:18 UTC (Execution)',
        '[+] SHA-256 verified and logged to case report',
      ],
    },
  },
  {
    id: 'malware-persistence',
    labIndex: 'LAB-02',
    title: 'Malware Persistence & Kill Chain Analysis',
    category: 'Blue Team & Forensics',
    tools: ['Windows Task Scheduler', 'Cyber Kill Chain', 'Malware Analysis'],
    objective:
      'Trace how malware maintains persistence on Windows hosts and map each stage to the Cyber Kill Chain.',
    methodology:
      'Audited Windows Task Scheduler abuse patterns and tracked simulated payload execution across kill chain stages.',
    findings:
      'Isolated persistence indicators in scheduled tasks and wrote detection and cleanup steps for defenders.',
    terminalSnippet: {
      env: 'PS C:\\Audit>',
      command: 'schtasks /query /fo LIST /v | findstr /I "TaskName Task To Run"',
      output: [
        'TaskName:    \\Microsoft\\Windows\\UpdateCheckSvc',
        'Task To Run: powershell.exe -w hidden -enc SQBFAFgA...',
        '[!] Kill Chain Stage: Installation -> Persistence (T1053.005)',
        '[+] Mitigation: Disable task + monitor Event ID 4698',
      ],
    },
  },
  {
    id: 'opnsense-ids',
    labIndex: 'LAB-03',
    title: 'OPNsense IDS/IPS Deployment',
    category: 'Network Defense',
    tools: ['OPNsense', 'IDS/IPS', 'VirtualBox', 'Firewall Rules'],
    objective:
      'Deploy and tune an intrusion detection and prevention gateway to inspect live lab traffic.',
    methodology:
      'Built a segmented VirtualBox network, configured OPNsense firewall rules, and tested IDS/IPS rulesets against simulated attacks.',
    findings:
      'Detected, logged, and dropped simulated malicious traffic in real time without breaking legitimate flows.',
    terminalSnippet: {
      env: 'root@opnsense-gw:~',
      command: 'tail -n 3 /var/log/suricata/eve.json | jq -r ".alert.signature"',
      output: [
        '[DROP] ET SCAN Nmap Scripting Engine User-Agent Detected',
        '[DROP] ET EXPLOIT Possible SQL Injection Attempt in URI',
        '[OK]   Inline IPS mode active on em1 (LAN: 10.10.20.0/24)',
      ],
    },
  },
  {
    id: 'recon-packet',
    labIndex: 'LAB-04',
    title: 'Network Reconnaissance & Packet Analysis',
    category: 'Network Defense',
    tools: ['Nmap', 'Wireshark', 'TCP/IP'],
    objective:
      'Map active lab hosts and inspect packet captures for anomalous traffic.',
    methodology:
      'Ran port and service scans with Nmap, then inspected live and saved packet captures in Wireshark.',
    findings:
      'Cataloged exposed services, verified TCP handshakes, and flagged suspicious traffic patterns.',
    terminalSnippet: {
      env: 'sec@lab:~/captures',
      command: 'nmap -sV -T4 10.10.20.15 && tshark -r capture.pcap -Y "tcp.flags.syn==1"',
      output: [
        '22/tcp   open  ssh     OpenSSH 8.9p1 Ubuntu',
        '80/tcp   open  http    nginx 1.24.0',
        '443/tcp  open  https   TLSv1.3 verified',
        '[!] Anomalous SYN burst from 10.10.20.42 isolated in Wireshark',
      ],
    },
  },
  {
    id: 'threat-modeling',
    labIndex: 'LAB-05',
    title: 'System Threat Modeling',
    category: 'Network Defense',
    tools: ['Microsoft Threat Modeling Tool', 'STRIDE', 'Architecture Review'],
    objective:
      'Spot attack surfaces and architectural weaknesses before shipping to production.',
    methodology:
      'Built data flow diagrams and trust boundaries in the Microsoft Threat Modeling Tool using STRIDE.',
    findings:
      'Produced a prioritized threat list with concrete engineering mitigations for each trust boundary.',
    terminalSnippet: {
      env: 'stride@review:~/model',
      command: 'stride-report --boundary "Client -> API -> Postgres"',
      output: [
        '[HIGH] Elevation of Privilege: Unscoped club_id query -> Enforce Postgres RLS',
        '[HIGH] Spoofing: Static QR ticket replay -> Rotating TOTP token',
        '[MED]  Repudiation: Missing executive audit log -> Immutable trigger table',
      ],
    },
  },
  {
    id: 'pentest-c2',
    labIndex: 'LAB-06',
    title: 'Penetration Testing & C2 Simulation',
    category: 'Red Team',
    tools: ['Kali Linux', 'C2 Simulation', 'Vulnerability Assessment'],
    objective:
      'Simulate adversary workflows in an isolated lab to evaluate defensive visibility.',
    methodology:
      'Ran reconnaissance, exploitation, and Command & Control (C2) simulation exercises from Kali Linux.',
    findings:
      'Confirmed viable exploit paths and recorded how C2 beaconing shows up in network telemetry.',
    terminalSnippet: {
      env: 'kali@redteam:~/lab-06',
      command: 'tshark -r c2-sim.pcap -Y "http.request" -T fields -e frame.time_delta -e ip.dst',
      output: [
        '30.012s   10.10.99.5   (periodic beacon detected)',
        '30.008s   10.10.99.5   (low jitter: <0.05%)',
        '[+] Telemetry note: Fixed-interval HTTP GET stands out in flow logs',
      ],
    },
  },
  {
    id: 'credential-theft',
    labIndex: 'LAB-07',
    title: 'Credential Theft & Privilege Escalation Analysis',
    category: 'Red Team',
    tools: ['Mimikatz', 'LaZagne', 'Zerologon', 'Active Directory'],
    objective:
      'Study post-exploitation credential dumping and domain privilege escalation paths.',
    methodology:
      'Tested credential extraction with Mimikatz and LaZagne alongside Zerologon mechanics in a controlled lab.',
    findings:
      'Documented attack prerequisites, host detection artifacts, and hardening steps to block lateral movement.',
    terminalSnippet: {
      env: 'defender@ad-lab:~/hardening',
      command: 'check-controls --target DC01.lab.local',
      output: [
        '[CHECK] Credential Guard & RunAsPPL (LSASS protection) -> ENABLED',
        '[CHECK] CVE-2020-1472 (Zerologon) Netlogon RPC patch  -> PATCHED',
        '[ALERT] Monitor Sysmon Event ID 10 (ProcessAccess -> lsass.exe)',
      ],
    },
  },
];

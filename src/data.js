export const profile = {
  name: 'Prem Chandu Medepalli',
  short: 'Prem Chandu',
  role: 'Forward Deployed AI Engineer',
  tagline: 'GenAI & Agentic Systems · Voice AI · AI-Driven Development',
  email: 'premchandumedepalli@gmail.com',
  phone: '+91 7222813555',
  location: 'Hyderabad, India',
  resume: 'resume.pdf',
  intro:
    'I embed with business stakeholders and clients to turn ambiguous operational problems into production GenAI systems — from discovery and rapid prototype to deployed, adopted product.',
  summary: [
    'Forward Deployed AI Engineer at SAGE IT (since Aug 2024). I work directly with recruiters, sales and client teams to map workflows, find high-value AI use cases, and own delivery from requirements through deployment, adoption and iteration.',
    'I build AI-natively — agentic coding tools (Claude Code, Cursor, Kiro) with spec-driven, test-backed workflows — to ship full-stack platforms in days to weeks instead of months. I bring deep domain understanding of staffing and recruitment operations.',
  ],
}

export const stats = [
  { value: '6', label: 'Enterprise AI platforms shipped end-to-end' },
  { value: '~37%', label: 'LLM spend cut via AI governance platform' },
  { value: '80%', label: 'Tester effort saved by test-case generator' },
  { value: '7 mo', label: 'Trainee → Associate Software Engineer' },
]

export const competencies = [
  'Forward Deployed Engineering',
  'Customer Discovery & Solutioning',
  'Rapid Prototyping → Production',
  'Agentic / AI-Driven Development',
  'LLM Applications & AI Agents',
  'RAG & MCP',
  'Voice AI',
  'Real-Time Systems',
  'Full-Stack Delivery',
  'LLM Evaluation & Cost Governance',
]

export const experience = {
  company: 'SAGE IT India Private Limited',
  location: 'Hyderabad, India',
  period: 'Aug 2024 – Present',
  roles: [
    { title: 'Associate Software Engineer', period: 'Apr 2025 – Present' },
    { title: 'Trainee Java Full Stack Developer', period: 'Aug 2024 – Mar 2025' },
  ],
  points: [
    'Operate as a forward deployed engineer: embed with recruiters, sales and client teams to map workflows, identify high-value AI use cases, and own delivery end-to-end.',
    'Shipped six enterprise AI platforms and multiple client POCs using an AI-driven development workflow (Claude Code, Cursor, spec-driven plans).',
    'Promoted from Trainee to Associate Software Engineer within 7 months of joining.',
    'Evaluated 8+ LLM variants for client use cases and presented Boomi AI Standards (grounding, prompt engineering, RAG architecture) to engineering teams.',
    'Best Employee of the Year and 3 Spot Awards within the first year.',
  ],
}

export const projects = [
  {
    name: 'LeadLine AI',
    subtitle: 'Email-to-Call AI Voice Agent Platform',
    category: 'Voice AI',
    highlight: 'Real-time voice agent with barge-in',
    description:
      'An end-to-end lead-to-call pipeline: lead emails are parsed by an LLM, turned into leads, and auto-dialed by a human-sounding voice agent that handles interruptions naturally.',
    points: [
      'IMAP poller + LLM parser (regex fallback) feeding a concurrency-capped Twilio call queue',
      'Streamed LLM responses over ConversationRelay WebSockets with barge-in handling',
      'Inbound calls auto-converted into leads with collected details written back post-call',
      'Post-call AI analysis, dual-channel recordings, live transcript dashboard, JWT/RBAC, audit trail',
    ],
    tech: ['FastAPI', 'Twilio', 'Deepgram', 'ElevenLabs', 'GPT-4.1', 'Groq', 'PostgreSQL', 'React', 'WebSockets'],
  },
  {
    name: 'AI Recruit',
    subtitle: 'AI Recruitment & Interview Platform',
    category: 'Recruitment AI',
    highlight: '3 interview modes: proctored, assisted, autonomous',
    description:
      'A full recruitment suite with in-browser AI proctoring, human + AI-assisted live interviews, and a fully autonomous voice AI interviewer.',
    points: [
      'In-browser proctoring with MediaPipe face checks and TensorFlow.js object detection; 3-strike lockdown',
      'WebRTC live interviews with adaptive questioning (2PL IRT, Bayesian ability estimation)',
      'Autonomous voice interviewer: LLM state machine, Azure real-time STT and Neural HD TTS',
      'Claude-based candidate matching with pgvector skill similarity; deployed on Azure Container Apps',
    ],
    tech: ['FastAPI', 'React 19', 'pgvector', 'Celery', 'Azure OpenAI', 'AI Foundry', 'MediaPipe', 'WebRTC'],
  },
  {
    name: 'MPCH Agent Platform',
    subtitle: 'Enterprise AI Access & Governance Platform',
    category: 'AI Platforms',
    highlight: '~37% monthly LLM spend reduction',
    description:
      'A centralized AI governance platform that replaced individual AI subscriptions with quota-controlled, audited access — plus an agentic VS Code coding assistant.',
    points: [
      'Per-user model assignment, quotas and token-level audit trails',
      'Multi-provider AI proxy (Claude + Azure OpenAI) with JWT, RBAC and rate limiting',
      'VS Code extension with supervisor loop, task classification, live agent timeline and one-click revert',
      'Cost-analytics dashboards with per-user and per-organization breakdowns',
    ],
    tech: ['FastAPI', 'React', 'TypeScript', 'VS Code API', 'Claude API', 'Azure OpenAI'],
  },
  {
    name: 'MPCH Agent Builder',
    subtitle: 'Multi-Tenant SaaS for AI Agents, RAG & MCP',
    category: 'AI Platforms',
    highlight: '11 modules · 51 endpoints · 27-page frontend',
    description:
      'A multi-tenant SaaS platform for building AI agents, with end-to-end RAG, automatic MCP tool generation from OpenAPI specs, and usage-based billing.',
    points: [
      'Strict tenant isolation with a layered router–service–repository architecture',
      'Hybrid RAG: Qdrant vector search + BM25, ingestion for PDF, DOCX, PPTX, XLSX',
      'MCP server management converting arbitrary REST APIs into callable agent tools',
      'Stripe usage-based billing, full RBAC and a super-admin cross-tenant portal',
    ],
    tech: ['FastAPI', 'SQLAlchemy', 'Qdrant', 'MCP', 'Stripe', 'React', 'TypeScript'],
  },
  {
    name: 'Sentilytics',
    subtitle: 'Sentiment & Conversation Intelligence',
    category: 'Client Delivery',
    highlight: 'Delivered for an Australian university client',
    description:
      'Cross-modal sentiment analysis of audio and text feedback, with custom signal processing, speaker diarisation, and sarcasm/conflict detection.',
    points: [
      'GPT-4 + Whisper pipeline producing sentiment reports, intent classification and recommendations',
      'librosa signal processing with k-means diarisation detecting 2–5 speakers',
      'Multi-channel ingestion incl. Reddit, Bluesky and Facebook across 16 institutions',
      'RBAC with 25+ permissions, sensitive-data masking and per-request AI cost attribution',
    ],
    tech: ['Azure OpenAI', 'GPT-4', 'Whisper', 'librosa', 'Python', 'React'],
  },
  {
    name: 'VMP — Vendor Management Portal',
    subtitle: 'AI-Enabled Staffing & Vendor Submissions',
    category: 'Recruitment AI',
    highlight: 'C# 2PL IRT adaptive interview engine',
    description:
      'Vendor and requirement workflows with Ceipal ATS integration, an AI video interviewer, browser proctoring and a FastAPI AI microservice.',
    points: [
      'Vendor submissions, tier rules, status rounds and real-time SignalR notifications',
      'AI video interviewer on .NET 7 + WebRTC with Azure Speech and recruiter override',
      '2PL Item Response Theory engine in C# (Newton-Raphson MAP updates)',
      'Weighted JD–resume matching and DOCX resume formatting via AI microservice',
    ],
    tech: ['.NET 7', 'Angular 15', 'SignalR', 'Hangfire', 'GPT-4.1', 'Azure Speech', 'PostgreSQL'],
  },
  {
    name: 'AI Code Compiler',
    subtitle: 'Secure Coding Assessment Engine',
    category: 'Recruitment AI',
    highlight: 'Sandboxed execution + hybrid LLM judging',
    description:
      'A sandboxed code execution and evaluation service for candidate coding rounds, with process-aware LLM scoring and plagiarism detection.',
    points: [
      'Isolated subprocess with CPU/memory/process limits, unprivileged user, 6s timeout, fail-closed',
      'Real test-case judging for Python; strict LLM judge for JS, Java, C++ and Go',
      'Every run attempt recorded so the LLM scores the problem-solving process',
      'MOSS-style plagiarism detection (k-shingles, Jaccard), ported to C#',
    ],
    tech: ['Python', 'FastAPI', 'Azure OpenAI', 'C#', 'React', 'Angular'],
  },
  {
    name: 'Resume-to-Template Converter',
    subtitle: 'AI Resume Formatting & Playground Editor',
    category: 'Recruitment AI',
    highlight: '~90% auto-formatting accuracy',
    description:
      'Parses uploaded resumes and generates formatted templates automatically, with a Word-like in-browser editor for the final corrections.',
    points: [
      'AI pipeline auto-generating formatted templates with ~90% accuracy',
      'Word-like playground editor to finalize reusable templates',
      'One-click conversion of any new resume into a finalized template',
    ],
    tech: ['Python', 'Azure OpenAI', 'React', 'DOCX'],
  },
  {
    name: 'AI Voice Screening Agent',
    subtitle: 'Outbound Recruiter Calling Agent',
    category: 'Voice AI',
    highlight: 'JD + phone number → autonomous screening call',
    description:
      'An AI calling agent that takes a job description and a candidate number, places the call, and runs a JD-tailored screening conversation.',
    points: [
      'Autonomous outbound calls with natural neural TTS',
      'Outcome-driven conversation flows tailored to JD requirements and evaluation criteria',
      'Reduced manual recruiter screening calls',
    ],
    tech: ['Twilio', 'Neural TTS', 'LLM', 'Python'],
  },
]

export const moreSolutions = [
  { name: 'AI Interview & Call Agent System', impact: 'Replaced third-party TechScreen, saving ~$1.2K/year' },
  { name: 'Test Case Generator', impact: 'User stories → test cases with Excel export, 80% less tester effort' },
  { name: 'Resume–JD Recommendation Engine', impact: 'Bidirectional matching with AI compatibility scoring' },
  { name: 'Mule-to-Boomi Code Transformer', impact: 'AI-driven integration migration preserving structure' },
  { name: 'Recruitment Process Automation', impact: 'n8n + LLM tools for intake, shortlisting and matching' },
]

export const skills = [
  { group: 'GenAI / AI-ML', items: ['LangChain', 'LangGraph', 'LangSmith', 'RAG', 'MCP', 'AI Agents', 'Azure AI Foundry Agents', 'Prompt Engineering', 'Embeddings', 'pgvector', 'Qdrant', 'Sentence Transformers', 'n8n'] },
  { group: 'LLM Platforms', items: ['Azure OpenAI (GPT-4.1, GPT-4, Whisper)', 'OpenAI API', 'Anthropic Claude API', 'Groq'] },
  { group: 'Voice AI & Telephony', items: ['Twilio Programmable Voice', 'ConversationRelay', 'Deepgram STT', 'ElevenLabs TTS', 'Barge-in handling', 'Answering-machine detection'] },
  { group: 'Computer Vision & Real-Time', items: ['MediaPipe', 'TensorFlow.js', 'WebRTC', 'SignalR', 'WebSockets', 'Azure AI Speech', 'Whisper', 'IRT adaptive testing'] },
  { group: 'Backend', items: ['FastAPI', '.NET 7', 'Spring Boot', 'SQLAlchemy (async)', 'Alembic', 'Celery', 'Hangfire', 'Redis', 'JWT / RBAC'] },
  { group: 'Frontend', items: ['React 18/19', 'Angular 15', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Recharts', 'VS Code Extension API'] },
  { group: 'Languages & Data', items: ['Python', 'Java', 'C#', 'TypeScript', 'JavaScript', 'SQL', 'PostgreSQL', 'MySQL', 'MongoDB'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Azure Container Apps', 'Blob Storage', 'Service Bus', 'App Insights', 'Azure DevOps CI/CD', 'Docker', 'Vercel'] },
  { group: 'AI-Driven Development', items: ['Claude Code', 'Cursor', 'Kiro', 'Trae', 'GitHub Copilot', 'Spec-driven development', 'Agentic workflows'] },
]

export const awards = [
  { title: 'Best Employee of the Year', org: 'SAGE IT', note: 'Awarded in the first year for delivery and impact across AI/ML initiatives' },
  { title: 'Spot Award ×3', org: 'SAGE IT', note: 'For outstanding contributions across AI and development initiatives' },
]

export const certifications = [
  'AWS Certified Developer – Associate',
  'AWS Certified Cloud Practitioner',
  'Microsoft Azure Fundamentals',
  'Red Hat Certified Enterprise Application Developer',
  'Oracle Certified Foundation Associate',
]

export const education = [
  { degree: 'B.Tech in Computer Science', school: 'KL University, Vijayawada', period: '2020 – 2024', score: 'CGPA 9.01' },
  { degree: 'Intermediate (12th Grade)', school: 'Narayana Junior College, Gudivada', period: '2018 – 2020', score: 'CGPA 9.25' },
]

export const publications = [
  { title: 'Crop Disease Identification using Convolutional Neural Networks', venue: 'IEEE ICICT', date: 'June 2023' },
  { title: 'Assessing Crop Disease and Recommending Pesticide Application', venue: 'IJMRSET', date: 'April 2024' },
]

export const extras = [
  { title: 'Director of Technology', org: 'Mayavi Technology Club, KL University', period: '2022 – 2023', note: 'Led AR/VR, UI/UX and gaming initiatives; organized hands-on student workshops.' },
  { title: 'AWS Cloud Virtual Internship', org: 'AICTE', period: 'Oct – Dec 2021', note: 'Core AWS services, tools and cloud best practices.' },
  { title: 'AI-ML Virtual Internship', org: 'AICTE', period: 'Mar – May 2022', note: 'AI/ML foundations through guided real-world exercises.' },
]

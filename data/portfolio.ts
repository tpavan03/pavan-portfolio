export const siteConfig = {
  name: "T M V S G Pavan",
  shortName: "Pavan",
  role: "AI & ML Engineer",
  headline: "AI & ML Engineer | Agentic Systems, Voice AI & Secure Platforms",
  heroTagline:
    "I build AI agents and the systems that make them dependable: tool-calling workflows, real-time voice, secure multi-tenant runtimes, and applied machine learning.",
  bio: "My work spans the full agent lifecycle: orchestration, tool execution, human approvals, streaming, voice, and recovery. At XFactr, I build distributed AI platforms and AgentHRMS, bringing Python, Go, C++ and React together to turn agent capabilities into usable products.",
  github: "https://github.com/tpavan03",
  linkedin: "https://www.linkedin.com/in/t-pavan03/",
  email: "thokalapavan.pp@gmail.com",
  phone: "7730886127",
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
  tech: string[];
};

export type Project = {
  category: "AI & security" | "Systems & research";
  art: "agents" | "security" | "social" | "chip";
  featured: boolean;
  context: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  release?: string;
  download?: string;
  github?: string;
  publication?: string;
};

export type Publication = {
  title: string;
  venue: string;
  published: string;
  doi: string;
};

export type Education = {
  degree: string;
  institution: string;
  score: string;
  duration: string;
};

export const experiences: Experience[] = [
  {
    company: "XFactr Softwares Private Limited",
    role: "AI & ML Engineer — Distributed Systems & AI Platforms",
    duration: "Jul 2026 – Present",
    location: "Bangalore · Xfactr.ai",
    points: [
      "Built tenant-scoped agent-package import, deployment lifecycle and route pre-warming across distributed services in C++17, using gRPC/Protobuf, durable desired state, idempotency, leases and fencing epochs.",
      "Developed a Go invocation gateway with sticky sessions, reverse channels, bounded streaming and acknowledged-sequence recovery, supporting replay without re-execution and isolated cancellation.",
      "Integrated OAuth 2.0/OIDC, PKCE, JWT/JWKS validation, RBAC and human approvals with tenant isolation and agent-owned tool permissions; secured runtime admission with mTLS, signed workloads and checkpoint/restore.",
      "Delivered AgentHRMS: a DeepSeek Harness-based agent runtime for employee, leave, attendance, payroll and administrative workflows, with durable conversations, WebSocket streaming, write confirmations, secure artifacts and interruptible LiveKit/Deepgram voice interaction.",
      "Built React/TypeScript workspaces for tenant admins, managers, employees and platform operators, with typed API contracts and server-enforced authorization. Validated releases with Go race tests, C++ Meson/Ninja tests, Playwright journeys and Docker Compose gates.",
    ],
    tech: [
      "Agentic AI",
      "Python",
      "Go",
      "C++17",
      "gRPC",
      "React",
      "OIDC",
      "LiveKit",
      "Deepgram",
      "Docker",
    ],
  },
  {
    company: "Netskope",
    role: "AI Intern — Intrusion Prevention System (IPS) Team",
    duration: "Jan 2026 – June 2026",
    location: "Bangalore",
    points: [
      "Architected a LangChain multi-agent triage system for VirusTotal lookups, domain WHOIS analysis, User-Agent anomalies and process behavior. Reduced manual analysis by 80% against a 50% target across tens of thousands of weekly alerts.",
      "Built an ML pipeline from 4.25M IPS events, resolving label conflicts and class imbalance, engineering 72 features with TF-IDF + SVD embeddings, and training LightGBM/LSTM models with Optuna tuning.",
      "Deployed a Docker-containerized REST microservice into the IPS workflow, with drift monitoring and automated retraining triggers for new threat patterns.",
    ],
    tech: [
      "Python",
      "LangChain",
      "LightGBM",
      "LSTM",
      "Optuna",
      "Docker",
      "REST APIs",
      "ML pipelines",
    ],
  },
  {
    company: "BITS Pilani Digital",
    role: "Content Developer & Teaching Assistant — Data & Machine Learning",
    duration: "Jun 2025 – Jul 2026",
    location: "BITS Pilani Digital",
    points: [
      "Developed learning content for Data Pre-processing, Machine Learning, Unsupervised Learning, and selected Data Mining topics, including presentation decks, written learning assets, quizzes, discussion prompts, and practice-lab exercises.",
      "Served as Teaching Assistant for Data Pre-processing across multiple trimesters, supporting 500+ students per trimester through technical query resolution, assessment administration, answer-script correction, feedback, and consistent evaluation.",
    ],
    tech: [
      "Machine Learning",
      "Data Pre-processing",
      "Curriculum Design",
      "Experiential Learning",
      "Assessment & Feedback",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "AgentHRMS",
    subtitle: "Tool-calling agents & real-time voice",
    description:
      "An AI agent integrated with HR workflows: durable conversations, governed actions, and voice that can be interrupted and steered.",
    highlights: [
      "Developed a DeepSeek Harness-based multi-step runtime for employee, leave, attendance, payroll and administrative tasks through a FastAPI AI service.",
      "Connected durable conversation state, WebSocket streaming, steering and write confirmations with secure generated artifacts.",
      "Integrated LiveKit and Deepgram for real-time voice interaction and interruption handling; kept manager and employee capabilities separated by server-enforced permissions.",
    ],
    tech: [
      "Python",
      "Go",
      "FastAPI",
      "LiveKit",
      "Deepgram",
      "React",
      "Tool Calling",
    ],
    category: "AI & security",
    art: "agents",
    featured: true,
    context: "Professional work · XFactr",
  },
  {
    title: "Secure Agent Platform",
    subtitle: "Multi-tenant orchestration & AI infrastructure",
    description:
      "The infrastructure behind governed agents: tenant-safe deployment, secure identity, streaming execution, and recovery.",
    highlights: [
      "Implemented C++17 control-plane orchestration with gRPC/Protobuf, durable desired state, leases, idempotency and fencing epochs.",
      "Developed Go gateway continuation and acknowledged-sequence handling for sticky sessions, bounded streaming, restart recovery and replay without re-execution.",
      "Integrated OAuth/OIDC, PKCE, JWT/JWKS, RBAC, human approvals and mTLS runtime identity. Built typed React workspaces and negative tests for tenant isolation, stale epochs and replay.",
    ],
    tech: ["C++17", "Go", "gRPC", "OIDC", "mTLS", "React", "Docker"],
    category: "AI & security",
    art: "security",
    featured: true,
    context: "Professional work · XFactr",
  },
  {
    title: "PhishBuster / PhishScope",
    subtitle: "Explainable research → inspectable workflows",
    description:
      "Phishing research extended into an interactive URL-analysis desk with conditional tool execution, evidence traces, and human review.",
    highlights: [
      "PhishScope orchestrates five local analysis stages and, when a user opts in, requests existing URL/domain reputation from fixed VirusTotal and Google Safe Browsing endpoints. It never opens the submitted website.",
      "A transparent policy combines local evidence, available provider observations, and a clearly separated human review into one explained decision. Provider failures preserve the offline result.",
      "Combined BERT-CLS, SBERT, USE, RoBERTa and ALBERT URL embeddings with dataset features, comparing standalone and concatenated representations.",
      "Trained FFNN, RNN and LSTM models; the supplied research results report 99.9% accuracy for the RoBERTa-based LSTM.",
      "Applied Captum Integrated Gradients and faithfulness checks to assess explanations. Public repository contains the research notebooks; the paper is published in EAI Broadnets 2024.",
      "API keys exist only in the current page and request; the server never persists or logs them. The live scorer uses deterministic orchestration rather than an LLM or research classifier, so the 99.9% research result is not a demo performance claim.",
    ],
    tech: ["Python", "RoBERTa", "LSTM", "Captum", "Transformers"],
    category: "AI & security",
    art: "security",
    featured: true,
    context: "Research · Interactive workflow",
    github:
      "https://github.com/tpavan03/Phishing-Detection/tree/feat/phishbuster-agent-workflow-20260906",
    publication: "PhishBuster @ EAI Broadnets 2024",
    release:
      "https://github.com/tpavan03/Phishing-Detection/releases/tag/phishbuster-v2.1.0-demo",
  },
  {
    title: "BITS Social",
    subtitle: "Full-stack social platform",
    description:
      "A campus social platform with event-driven feeds, authenticated APIs, media storage, and a React frontend.",
    highlights: [
      "The Campus Desk release adds a sandbox identity, seeded fictional feed, persisted moderation cases, explainable policy signals, and a single-decision human-review audit trail backed by the original Prisma data model.",
      "Built with Express.js 5, Prisma, PostgreSQL/CockroachDB, Redis and Kafka/Redpanda; containerized the backend with Docker Compose and deployed the frontend on Vercel.",
      "Engineered fan-out-on-write timelines with Kafka consumers and Redis sorted sets, with feed trimming at 2,000 entries per user.",
      "Implemented JWT and Google OAuth 2.0, Redis sliding-window rate limits, Zod validation, Pino logs and S3-compatible MinIO media storage across feeds, posts, follows, polls and notifications.",
      "The Docker release uses PostgreSQL and Redis with a compact event-bus fallback; production Kafka/Redpanda and Google OAuth remain part of the broader architecture. Moderation is rule-based and does not claim an LLM.",
    ],
    tech: [
      "TypeScript",
      "React",
      "Express.js",
      "Redis",
      "Kafka",
      "Prisma",
      "Docker",
    ],
    category: "Systems & research",
    art: "social",
    featured: true,
    context: "Personal project · Full-stack platform",
    github:
      "https://github.com/tpavan03/bits-campus-social-network-main/tree/feat/bits-social-campus-desk-20260906",
    release:
      "https://github.com/tpavan03/bits-campus-social-network-main/releases/tag/bits-social-v2.0.0-demo",
  },
  {
    title: "AI Alert Triage",
    subtitle: "Agentic security operations",
    description:
      "Tool-using agents automate security evidence gathering, backed by a machine-learning pipeline for IPS alert classification.",
    highlights: [
      "Agents evaluate VirusTotal reputation, domain WHOIS data, User-Agent anomalies and process behavior across tens of thousands of weekly events.",
      "Engineered 72 features from 4.25M IPS events, with LightGBM/LSTM classification and Optuna hyperparameter search.",
      "Reported 80% reduction in manual analysis against a 50% target; deployed the containerized service with model drift monitoring and retraining triggers.",
    ],
    tech: ["LangChain", "Python", "LightGBM", "LSTM", "Optuna", "Docker"],
    category: "AI & security",
    art: "agents",
    featured: false,
    context: "Professional work · Netskope",
  },
  {
    title: "3D NoC Mapping & TSV Optimization",
    subtitle: "M.E. thesis · Learning & optimization",
    description:
      "A unified framework for IP-core mapping and TSV placement, balancing communication cost and thermal load in 3D chip networks.",
    highlights: [
      "Used a multi-objective cost function to minimize communication cost and balance vertical load variance across multi-layer architectures.",
      "Compared Tabu Search, Gurobi integer linear programming, and learning-based Active Search using MPNN and Pointer Networks.",
      "Tabu Search achieved 95–98% of ILP-optimal quality with a 10× runtime reduction in the supplied thesis results; validated using Noxim traffic traces.",
    ],
    tech: [
      "Python",
      "Gurobi",
      "MPNN",
      "Pointer Networks",
      "Tabu Search",
      "Noxim",
    ],
    category: "Systems & research",
    art: "chip",
    featured: false,
    context: "Research · Feb–Nov 2025",
  },
  {
    title: "Digital Wellbeing — Local Insights",
    subtitle: "Private, on-device behavior analytics",
    description:
      "A native Android dashboard that turns real usage-event intervals into transparent screen-time patterns, personal goals, and reflective prompts.",
    highlights: [
      "Rebuilt usage accounting around foreground/background event intervals, including ongoing sessions, midnight boundaries, unlock de-duplication, after-hours overlap, and daylight-saving transitions.",
      "Added a seven-day interactive trend, selectable daily app breakdown, personal time goal, and an explicitly labeled fictional sample mode for trying the app before granting usage access.",
      "Runs the bundled experimental model on-device and explains its boundary; removed fabricated confidence overrides and clinical or diagnostic wording. No account, analytics SDK, or cloud backend is required.",
      "Sixteen pure-Kotlin tests, two Android device flows, lint, and a debug APK build passed on an API 35 emulator. The downloadable APK is debug-signed for evaluation rather than store distribution.",
    ],
    tech: ["Kotlin", "Android", "LiteRT", "On-device ML", "Privacy"],
    category: "AI & security",
    art: "agents",
    featured: true,
    context: "Android · Tested debug release",
    github:
      "https://github.com/tpavan03/digital-wellbeing-analyzer/tree/feat/wellbeing-local-insights-20260906",
    release:
      "https://github.com/tpavan03/digital-wellbeing-analyzer/releases/tag/wellbeing-v2.0.0-demo",
    download:
      "https://github.com/tpavan03/digital-wellbeing-analyzer/releases/download/wellbeing-v2.0.0-demo/wellbeing-2.0.0-demo-debug.apk",
  },
  {
    title: "Image Trust Desk",
    subtitle: "Signed attestations & admission decisions",
    description:
      "An interactive supply-chain policy lab that checks every workload container and explains why an image is allowed or denied.",
    highlights: [
      "Replaced a hardcoded-image prototype with policy checks for regular, init and ephemeral containers. A single failed container rejects the workload.",
      "Verifies Ed25519 signatures over exact digest-bound subjects, trusted signers, registry allowlists and attestation validity windows.",
      "Supports AdmissionReview v1 envelopes and dry-run behavior, with Docker-persisted decision history. Twelve unit/API tests and desktop/mobile browser scenarios passed.",
      "Fictional test fixtures demonstrate signature policy. This is not a live cluster deployment, image-byte scanner, Cosign/Rekor integration or AI model.",
    ],
    tech: ["Node.js", "Ed25519", "AdmissionReview", "Docker", "Security"],
    category: "AI & security",
    art: "security",
    featured: true,
    context: "Security infrastructure · Policy lab",
    github:
      "https://github.com/tpavan03/kubernetes-secure-image-verifier-main/tree/feat/image-trust-desk-20260906",
    release:
      "https://github.com/tpavan03/kubernetes-secure-image-verifier-main/releases/tag/image-trust-v2.0.0-demo",
  },
];

export const publications: Publication[] = [
  {
    title: "PhishBuster",
    venue: "EAI Broadnets 2024",
    published: "Jan 22, 2026",
    doi: "https://doi.org/10.1007/978-3-032-14350-1_4",
  },
];

export const education: Education[] = [
  {
    degree: "M.E. Computer Science",
    institution: "BITS Pilani, Goa Campus",
    score: "CGPA: 9.67",
    duration: "2024 – 2026",
  },
  {
    degree: "B.Tech Computer Science & Engineering",
    institution: "Sri Venkateswara University College of Engineering",
    score: "CGPA: 8.6",
    duration: "2020 – 2024",
  },
];

export const techStack = [
  {
    category: "Agentic AI",
    items: [
      "Tool Calling",
      "LLM Orchestration",
      "Human Approvals",
      "Durable Conversations",
      "Streaming & Steering",
      "Voice Agents",
      "LangChain",
      "LiveKit",
      "Deepgram",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "PyTorch",
      "Transformers",
      "LightGBM",
      "XGBoost",
      "LSTM",
      "Captum",
      "Optuna",
      "MPNN",
    ],
  },
  {
    category: "Distributed Systems",
    items: [
      "Go",
      "C++17",
      "gRPC / Protobuf",
      "Kafka",
      "Redis",
      "Idempotency",
      "Checkpoint / Restore",
    ],
  },
  {
    category: "Product & Security",
    items: [
      "Python",
      "FastAPI",
      "TypeScript",
      "React",
      "Express.js",
      "OIDC / OAuth 2.0",
      "RBAC",
      "mTLS",
    ],
  },
  {
    category: "Data & Delivery",
    items: [
      "PostgreSQL",
      "CockroachDB",
      "MySQL",
      "Docker",
      "MinIO / S3",
      "Git",
      "Linux",
      "Playwright",
      "Meson / Ninja",
    ],
  },
];

export const siteConfig = {
  name: "T M V S G Pavan",
  shortName: "Pavan",
  role: "AI Engineer",
  headline: "AI Engineer | Agentic Systems, Voice AI & Secure Platforms",
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
  demoPort?: number;
  image?: string;
  release?: string;
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
    role: "Software Engineer — Distributed Systems & AI Platforms",
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
    role: "Teaching Assistant — Machine Learning & Data Pre-processing",
    duration: "Jun 2025 – Dec 2025",
    location: "BITS Pilani Digital",
    points: [
      "Designed curricula and evaluations for MSc Data Pre-processing and Machine Learning, and managed assessments for 300+ students with automated grading pipelines.",
    ],
    tech: [
      "Machine Learning",
      "Data Pre-processing",
      "Curriculum Design",
      "Assessment Automation",
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
    title: "Phishing Detection & Explainable AI",
    subtitle: "PhishBuster · Published research",
    description:
      "URL embeddings and deep learning for phishing classification, with explanations checked for faithfulness.",
    highlights: [
      "Combined BERT-CLS, SBERT, USE, RoBERTa and ALBERT URL embeddings with dataset features, comparing standalone and concatenated representations.",
      "Trained FFNN, RNN and LSTM models; the supplied research results report 99.9% accuracy for the RoBERTa-based LSTM.",
      "Applied Captum Integrated Gradients and faithfulness checks to assess explanations. Public repository contains the research notebooks; the paper is published in EAI Broadnets 2024.",
    ],
    tech: ["Python", "RoBERTa", "LSTM", "Captum", "Transformers"],
    category: "AI & security",
    art: "security",
    featured: true,
    context: "Research · Aug–Dec 2024",
    github: "https://github.com/tpavan03/Phishing-Detection",
    publication: "PhishBuster @ EAI Broadnets 2024",
  },
  {
    title: "BITS Social",
    subtitle: "Full-stack social platform",
    description:
      "A campus social platform with event-driven feeds, authenticated APIs, media storage, and a React frontend.",
    highlights: [
      "Built with Express.js 5, Prisma, PostgreSQL/CockroachDB, Redis and Kafka/Redpanda; containerized the backend with Docker Compose and deployed the frontend on Vercel.",
      "Engineered fan-out-on-write timelines with Kafka consumers and Redis sorted sets, with feed trimming at 2,000 entries per user.",
      "Implemented JWT and Google OAuth 2.0, Redis sliding-window rate limits, Zod validation, Pino logs and S3-compatible MinIO media storage across feeds, posts, follows, polls and notifications.",
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
    context: "Personal project",
    github: "https://github.com/tpavan03/bits-campus-social-network-main",
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
    featured: true,
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
    featured: true,
    context: "Research · Feb–Nov 2025",
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

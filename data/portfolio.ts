export const siteConfig = {
  name: "T M V S G Pavan",
  shortName: "Pavan",
  role: "AI/ML Engineer",
  headline: "AI/ML Engineer | Building Intelligent Systems at Scale",
  heroTagline:
    "I build AI-driven systems that automate complex decisions at scale — from agentic ML pipelines processing millions of security events to production backends serving real-time feeds.",
  bio: "Focused on applied AI, ML infrastructure, and backend engineering — with experience spanning security intelligence, deep learning, distributed systems, and production-grade developer tooling.",
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
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
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
    company: "Netskope",
    role: "AI Intern — IPS Team",
    duration: "Jan 2026 - Present",
    location: "Bangalore",
    points: [
      "Built an AI-driven agentic triage system using LangChain agents to classify tens of thousands of weekly IPS alerts.",
      "Engineered an ML pipeline processing 4.25M events with 72 features using TF-IDF + SVD embeddings.",
      "Trained LightGBM, XGBoost, LSTM, Bi-LSTM, and GRU models with Optuna optimization; deployed via FastAPI + Docker.",
    ],
    tech: [
      "Python",
      "LangChain",
      "LightGBM",
      "LSTM",
      "PyTorch",
      "FastAPI",
      "Docker",
      "PostgreSQL",
      "MLflow",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "BITS Social",
    subtitle: "Production Social Media Backend",
    description:
      "A Twitter-style backend with event-driven timelines, distributed persistence, and authenticated APIs.",
    highlights: [
      "Built with Express.js 5, Prisma, PostgreSQL/CockroachDB, Redis timelines, and Kafka fan-out-on-write.",
      "Orchestrated Docker Compose across six services; deployed on Vercel.",
      "Integrated an AI content moderation agent for automated post screening.",
    ],
    tech: [
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Docker",
      "Prisma",
      "Vercel",
    ],
    github: "https://github.com/tpavan03",
  },
  {
    title: "Phishing Detection with AI Agents & Deep Learning",
    subtitle: "LangChain + Transformer Security Intelligence",
    description:
      "An agentic phishing detection stack combining transformer embeddings, deep sequence models, and explainability for high-confidence security automation.",
    highlights: [
      "Used LangChain with BERT, RoBERTa, and SBERT embeddings for phishing classification.",
      "Achieved 99.9% accuracy with a RoBERTa-LSTM architecture exposed as a FastAPI microservice.",
      "Added explainability through Captum Integrated Gradients and SHAP.",
    ],
    tech: [
      "Python",
      "PyTorch",
      "RoBERTa",
      "LangChain",
      "FastAPI",
      "Docker",
      "SHAP",
    ],
    github: "https://github.com/tpavan03",
    publication: "PhishBuster @ EAI Broadnets 2024",
  },
  {
    title: "3D NoC Mapping & TSV Optimization",
    subtitle: "M.E. Thesis",
    description:
      "A multi-objective optimization framework for 3D Network-on-Chip design that balances solution quality with practical runtime constraints.",
    highlights: [
      "Combined Tabu Search (with agent-guided parameter tuning) and ILP (Gurobi); validated on Noxim traffic traces.",
      "Reached 95–98% of optimal solution quality with 10x runtime reduction.",
      "Framework outputs integrated into downstream EDA toolchain for chip-design layout generation.",
    ],
    tech: ["Python", "Gurobi", "ILP", "Optimization", "Noxim"],
  },
  {
    title: "AI Alert Triage System",
    subtitle: "Netskope Security Automation",
    description:
      "A multi-agent security pipeline for autonomous alert classification, triage explainability, and model lifecycle management.",
    highlights: [
      "Built a LangChain-based pipeline with VirusTotal, domain WHOIS, and process behavior agents.",
      "Integrated MLflow experiment tracking, monitoring, and automated retraining workflows.",
      "Evaluated VirusTotal reputation, domain WHOIS age, User-Agent anomalies, and process behavior.",
    ],
    tech: [
      "Python",
      "LangChain",
      "FastAPI",
      "Docker",
      "PostgreSQL",
      "MLflow",
      "LightGBM",
    ],
  },
];

export const publications: Publication[] = [
  {
    title: "PhishBuster",
    venue: "EAI Broadnets 2024",
    published: "Jan 2026",
    doi: "https://doi.org/10.1007/978-3-032-14350-1_4",
  },
];

export const education: Education[] = [
  {
    degree: "M.E. Computer Science",
    institution: "BITS Pilani Goa",
    score: "CGPA: 9.55",
    duration: "2024 - 2026",
  },
  {
    degree: "B.Tech CSE",
    institution: "SVU College of Engineering",
    score: "CGPA: 8.6",
    duration: "2020 - 2024",
  },
];

export const techStack = [
  {
    category: "AI/ML",
    items: [
      "Python",
      "PyTorch",
      "LightGBM",
      "XGBoost",
      "LSTM",
      "Transformers",
      "LangChain",
      "AI Agents",
      "SHAP",
      "Optuna",
      "MLflow",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Prisma", "Kafka", "Redis"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "CockroachDB", "MySQL"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Vercel", "AWS S3", "CI/CD", "Git"],
  },
  {
    category: "Languages",
    items: ["Python", "TypeScript", "C++", "C", "SQL"],
  },
];

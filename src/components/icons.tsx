import {
  Award,
  Bot,
  Brain,
  Building2,
  Car,
  ChartScatter,
  Coffee,
  Code2,
  Database,
  FolderGit2,
  Globe,
  Layers,
  Mail,
  Rocket,
  Sparkles,
  Terminal,
  Tv,
  User,
  Users,
  Workflow,
  Wrench,
  Zap,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiAirtable,
  SiDart,
  SiDocker,
  SiExpress,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglegemini,
  SiHubspot,
  SiJavascript,
  SiLinux,
  SiMeta,
  SiMongodb,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiScikitlearn,
  SiClaude,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ui: Record<string, LucideIcon> = {
  award: Award,
  bot: Bot,
  brain: Brain,
  briefcase: Briefcase,
  building: Building2,
  car: Car,
  chart: ChartScatter,
  coffee: Coffee,
  code: Code2,
  database: Database,
  folder: FolderGit2,
  globe: Globe,
  layers: Layers,
  mail: Mail,
  rocket: Rocket,
  sparkles: Sparkles,
  terminal: Terminal,
  tv: Tv,
  user: User,
  users: Users,
  workflow: Workflow,
  wrench: Wrench,
  zap: Zap,
};

export function UiIcon({
  name,
  className,
  size = 18,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Icon = ui[name] ?? Sparkles;
  return <Icon size={size} className={className} aria-hidden="true" />;
}

const tech: Record<string, IconType> = {
  Python: SiPython,
  Flask: SiFlask,
  "Next.js": SiNextdotjs,
  Flutter: SiFlutter,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Dart: SiDart,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  SQLite: SiSqlite,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  Vercel: SiVercel,
  Git: SiGit,
  Linux: SiLinux,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "scikit-learn": SiScikitlearn,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  n8n: SiN8N,
  "GitHub Actions": SiGithubactions,
  "HubSpot API": SiHubspot,
  "LLM integration (Groq, Gemini, LLaMA)": SiMeta,
  Gemini: SiGooglegemini,
  "Tailwind CSS": SiTailwindcss,
  Redis: SiRedis,
  Airtable: SiAirtable,
  GitHub: SiGithub,
  "Claude Code": SiClaude,
};

export function hasTechIcon(name: string) {
  return name in tech;
}

export function TechIcon({
  name,
  className,
  size = 14,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Icon = tech[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} aria-hidden="true" />;
}

export { FaGithub, FaLinkedin };

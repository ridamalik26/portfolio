import {
  Award,
  Bot,
  Briefcase,
  Building2,
  Code2,
  Database,
  FolderGit2,
  Globe,
  GraduationCap,
  Mail,
  Server,
  Smartphone,
  Sparkles,
  User,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiAndroidstudio,
  SiContabo,
  SiDart,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiIntellijidea,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ui: Record<string, LucideIcon> = {
  award: Award,
  bot: Bot,
  briefcase: Briefcase,
  building: Building2,
  code: Code2,
  database: Database,
  folder: FolderGit2,
  globe: Globe,
  graduation: GraduationCap,
  mail: Mail,
  server: Server,
  smartphone: Smartphone,
  sparkles: Sparkles,
  user: User,
  wrench: Wrench,
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
  Java: SiOpenjdk,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Supabase: SiSupabase,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  "scikit-learn": SiScikitlearn,
  n8n: SiN8N,
  Gemini: SiGooglegemini,
  Git: SiGit,
  GitHub: SiGithub,
  Contabo: SiContabo,
  "Android Studio": SiAndroidstudio,
  "IntelliJ IDEA": SiIntellijidea,
  Figma: SiFigma,
};

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

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  // Frontend
  
  SiTypescript,
  SiTailwindcss,

  // Backend
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiMongoose,

  // Tools
  SiJest,
  SiGithub,
  SiDocker,
  SiFigma,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiGithubcopilot,
} from "react-icons/si";
import { DiVisualstudio, DiHtml5 , DiCss3, DiJavascript1, DiReact} from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";

const skills = [
  // Frontend
  { icon: [DiHtml5, DiCss3], name: "HTML/CSS", level: 95, category: "frontend" },
  { icon: DiJavascript1, name: "JavaScript", level: 90, category: "frontend" },
  { icon: DiReact , name: "React & Zustand", level: 50, category: "frontend" },
  { icon: RiNextjsFill, name: "Next.js", level: 40, category: "frontend" },
  { icon: SiJest, name : "Jest", level: 50, category: "tools"  },
  { icon: SiTypescript, name: "TypeScript", level: 60, category: "frontend" },
  { icon: SiTailwindcss, name: "Tailwind CSS", level: 80, category: "frontend" },
  

  // Backend
  { icon: SiNodedotjs, name: "Node.js", level: 80, category: "backend" },
  { icon: SiExpress, name: "Express", level: 60, category: "backend" },
  { icon: SiMongodb, name: "MongoDB", level: 40, category: "backend" },
  { icon: SiPostgresql, name: "PostgreSQL", level: 80, category: "backend" },
  { icon: SiPrisma, name: "Prisma", level: 70, category: "backend" },
  { icon: SiMongoose, name: "Mongoose", level: 40, category: "backend" },
  

  // Tools
  { icon: [FaGitAlt, SiGithub], name: "Git/GitHub", level: 80, category: "tools" },
  { icon: SiDocker, name: "Docker", level: 70, category: "tools" },
  { icon: SiFigma, name: "Figma", level: 50, category: "tools" },
  { icon: DiVisualstudio, name: "VS Code", level: 95, category: "tools" },
  { icon: SiPostman, name: "Postman", level: 80, category: "tools" },
  { icon: [SiVercel, SiNetlify], name : "Vercel/Netlify" , level: 60, category: "tools" },
    { icon: SiGithubcopilot, name: "GitHub Copilot", level: 95, category: "tools" },
  
  
];

const categories = ["all", "frontend", "backend", "tools"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1">
                  {Array.isArray(skill.icon) ? (
                    skill.icon.map((Icon, i) => (
                      <Icon key={i} className="w-6 h-6 text-primary" />
                    ))
                  ) : (
                    <skill.icon className="w-6 h-6 text-primary" />
                  )}
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
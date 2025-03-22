
import { useEffect, useRef } from "react";
import { 
  Code, Database, Server, Globe, 
  Github, Figma, FileCode, 
  Cpu, PenTool, GitBranch, Languages,
  Star
} from "lucide-react";

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      items: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React.js" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "CSS/SCSS" },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" />,
      items: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Laravel" },
        { name: "PHP" },
        { name: "REST API" },
      ],
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6" />,
      items: [
        { name: "SQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
      ],
    },
    {
      category: "Tools & DevOps",
      icon: <Code className="h-6 w-6" />,
      items: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Vercel" },
        { name: "Netlify" },
      ],
    },
  ];

  const technologiesGrid = [
    { name: "JavaScript", icon: <FileCode className="h-8 w-8" /> },
    { name: "TypeScript", icon: <Cpu className="h-8 w-8" /> },
    { name: "React", icon: <Globe className="h-8 w-8" /> },
    { name: "Node.js", icon: <Server className="h-8 w-8" /> },
    { name: "Laravel", icon: <PenTool className="h-8 w-8" /> },
    { name: "SQL", icon: <Database className="h-8 w-8" /> },
    { name: "Git", icon: <GitBranch className="h-8 w-8" /> },
    { name: "GitHub", icon: <Github className="h-8 w-8" /> },
    { name: "Next.js", icon: <Star className="h-8 w-8" /> },
    { name: "Figma", icon: <Figma className="h-8 w-8" /> },
    { name: "Express", icon: <Code className="h-8 w-8" /> },
    { name: "MongoDB", icon: <Languages className="h-8 w-8" /> },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 smooth-scroll-section"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
            My Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Technologies I Work With
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 rounded"></div>
        </div>

        {/* Featured Technologies Grid - Simplified without levels */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {technologiesGrid.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group h-full"
            >
              <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <span className="font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skill Categories - Simplified without levels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skillGroup, groupIndex) => (
            <div key={groupIndex} className="space-y-6 bg-card/50 p-6 rounded-xl border border-border hover:shadow-md transition-all h-full">
              <div className="flex items-center gap-2">
                <div className="text-primary">{skillGroup.icon}</div>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {skillGroup.items.map((skill, index) => (
                  <div key={index} className="p-3 rounded-lg bg-background/70 border border-border/50 hover:border-primary/30 transition-all flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2 opacity-80" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

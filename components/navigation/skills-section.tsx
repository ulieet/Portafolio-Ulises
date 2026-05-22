import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Wrench, Palette } from "lucide-react"

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    color: "oklch(0.65 0.15 250)", // Blue
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "ShadCn/Radix/UI",
      "Estandares internacionales WCAG"
    ],
  },
  
  {
    title: "Herramientas & DevOps",
    icon: Wrench,
    color: "oklch(0.65 0.15 160)", // Green
    technologies: [
      "Docker",
      "Git & GitHub",
      "Postman",
      "Linux/scripting",
      "Trello",
      "Vercel",
      "Arduino ,STR,PLC",
      "Metodologias agiles (Scrum, Kanban)",
      "AWS Cloud",
      "Azure"
    ],
  },
  {
    title: "Diseño & Modelado",
    icon: Palette,
    color: "oklch(0.65 0.15 300)", // Purple
    technologies: [
      "Enterprise Architect (EA)",
      "UML",
      "Figma",
      "Responsive Design UI/UX",
      "Tkinter",
      "Crystal Reports",
      "OOAD",
      "SOLID & GRASP , GoF Design Patterns"
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "oklch(0.65 0.15 40)", // Orange
    technologies: [
      "Python",
      "Node.js",
      "MySQL",
      "SQL Server",
      "REST APIs",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="w-full px-6" id="habilidades">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">Habilidades</h2>
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-gradient pb-2">Tecnologías y herramientas</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <Card
                key={skill.title}
                className="group premium-card flex flex-col h-full border-none ring-1 ring-border/50 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:ring-primary/20"
                style={{ "--skill-color": skill.color } as React.CSSProperties}
              >
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center gap-4">
                    <div 
                      className="p-3 rounded-2xl bg-secondary text-foreground/80 group-hover:scale-110 transition-all duration-500"
                      style={{ backgroundColor: "color-mix(in srgb, var(--skill-color), transparent 90%)", color: "var(--skill-color)" }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold tracking-tight">{skill.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <ul className="space-y-3">
                    {skill.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="text-sm text-muted-foreground/80 font-medium flex items-center gap-3 group/item transition-colors duration-300 hover:text-foreground"
                      >
                        <span 
                          className="w-1.5 h-1.5 rounded-full bg-foreground/10 transition-all duration-300 group-hover/item:scale-150" 
                          style={{ backgroundColor: "color-mix(in srgb, var(--skill-color), transparent 80%)" }}
                        />
                        <span className="group-hover/item:translate-x-1 transition-transform duration-300">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Wrench, Palette } from "lucide-react"

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
    color: "text-blue-500",
    dotColor: "bg-blue-500",
  },
  
  {
    title: "Herramientas & DevOps",
    icon: Wrench,
    technologies: [
      "Docker",
      "Git & GitHub",
      "Postman",
      "Linux",
      "VS Code",
      "Trello",
      "Vercel",
      "Arduino y STR",
      "Metodologias agiles (Scrum, Kanban)"
    ],
    color: "text-orange-500",
    dotColor: "bg-orange-500",
  },
  {
    title: "Diseño & Modelado",
    icon: Palette,
    technologies: [
      "Enterprise Architect (EA)",
      "UML",
      "Figma",
      "UI/UX",
      "Responsive Design",
      "Crystal Reports",
      "OOAD",
      "SOLID & GRASP Principles, GoF Design Patterns"
      
    ],
    color: "text-purple-500",
    dotColor: "bg-purple-500",
  },
  {
    title: "Backend",
    icon: Database,
    technologies: [
      "Python",
      "Node.js",
      "MySQL",
      "SQL Server",
      "REST APIs",
    ],
    color: "text-green-500",
    dotColor: "bg-green-500",
  },
];

export function SkillsSection() {
  return (
    <section className="w-full py-20 px-4" id="habilidades">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Habilidades</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tecnologías y herramientas con las que trabajo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <Card
                key={skill.title}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-secondary/50 ${skill.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{skill.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skill.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${skill.dotColor}`} />
                        {tech}
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

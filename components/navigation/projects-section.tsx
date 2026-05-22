"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import projectsData from "@/data/projects.json" // Importación limpia del JSON

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Filtramos las landings/proyectos estándar que no requieren página dedicada
  const standardProjects = projectsData.filter(project => !project.hasDetails)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="proyectos" className="px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
            Portfolio
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-gradient pb-2">
            Landing Pages & <span className="text-muted-foreground/60">Frontend.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standardProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group premium-card flex flex-col h-full border-none ring-1 ring-border/50 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-foreground text-background font-bold px-3 py-1 rounded-full shadow-lg">Destacado</Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="flex-grow space-y-4">
                  <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-secondary/50 text-foreground/70 text-[10px] px-2.5 py-1 uppercase tracking-wider font-bold border-none"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-8 mt-auto">
                  <Button variant="outline" className="w-full rounded-full h-12 border-border/50 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-500 shadow-sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Eye className="h-4 w-4" /> Ver Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import projectsData from "@/data/projects.json"

export function OtherProjectsSection() {
  // Filtramos solo los proyectos complejos/académicos con página propia
  const advancedProjects = projectsData.filter(project => project.hasDetails)

  return (
    <section className="px-6 bg-secondary/10 grid-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-muted-foreground mb-6">
            // Casos de estudio
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-gradient leading-[1.1] pb-4 mb-4">
            Ingeniería & <span className="text-muted-foreground/40">Arquitectura.</span>
          </h3>
          <p className="text-muted-foreground/80 text-lg max-w-2xl mx-auto font-medium">Explorá sistemas complejos, lógica algorítmica y soluciones de software de grado académico.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {advancedProjects.map((project) => (
            <Link key={project.id} href={`/proyectos/${project.id}`} className="block group">
              <Card 
                className="premium-card h-full border-none ring-1 ring-border/50 rounded-[3rem] overflow-hidden transition-all duration-700 hover:ring-primary/40"
                style={{ "--project-accent": project.accentColor } as React.CSSProperties}
              >
                <CardContent className="p-12 flex flex-col h-full relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                    style={{ backgroundColor: "var(--project-accent)" }}
                  />
                  
                  <div className="space-y-8 relative z-10">
                    <div className="flex flex-wrap items-center gap-4">
                      {project.academicContext && (
                        <span 
                          className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border"
                          style={{ 
                            backgroundColor: "color-mix(in srgb, var(--project-accent), transparent 90%)", 
                            borderColor: "color-mix(in srgb, var(--project-accent), transparent 50%)",
                            color: "var(--project-accent)"
                          }}
                        >
                          {project.academicContext.includes("Final") ? "★ Proyecto Final" : project.academicContext}
                        </span>
                      )}
                      <span className="text-muted-foreground/40 text-[10px] font-bold uppercase tracking-[0.2em]">{project.category}</span>
                    </div>

                    <h4 className="text-4xl font-bold text-foreground leading-tight tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                      {project.title}
                    </h4>
                    
                    <p className="text-muted-foreground/70 text-lg leading-relaxed font-medium line-clamp-2 max-w-md">
                      {project.description}
                    </p>

                    <div className="flex items-center text-foreground font-bold text-sm pt-4 group-hover:text-primary transition-colors">
                      Explorar Arquitectura <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
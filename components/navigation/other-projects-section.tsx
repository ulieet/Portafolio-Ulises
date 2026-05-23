"use client"

import Link from "next/link"
import { ArrowRight, GraduationCap } from "lucide-react"
import projectsData from "@/data/projects.json"
import { Button } from "@/components/ui/button"

export function OtherProjectsSection() {
  // Filtramos solo los proyectos complejos/académicos con página propia
  const advancedProjects = projectsData.filter(project => project.hasDetails)

  return (
    <section id="proyectos" className="py-24 px-6 bg-secondary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">
              // Casos de estudio
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-4">
              Ingeniería & <span className="text-muted-foreground/40">Arquitectura de Software.</span>
            </h3>
            <p className="text-muted-foreground text-base md:text-lg font-medium">Sistemas mas complejos con  documentacion tecnica y soluciones de grado académico.</p>
          </div>
          
          <Link href="/proyectos">
            <Button className="rounded-full bg-vibrant text-white hover:scale-110 hover:shadow-[0_0_30px_rgba(100,100,255,0.5)] transition-all duration-300 h-12 px-8 font-extrabold group animate-bounce-click border-none">
              Ver archivo completo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {advancedProjects.map((project) => (
            <Link key={project.id} href={`/proyectos/${project.id}`} className="block group">
              <div 
                className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-background p-8 md:p-12 transition-all duration-700 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      {project.academicContext && (
                        <span 
                          className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border"
                          style={{ 
                            backgroundColor: `color-mix(in srgb, ${project.accentColor || 'var(--primary)'}, transparent 92%)`, 
                            borderColor: `color-mix(in srgb, ${project.accentColor || 'var(--primary)'}, transparent 70%)`,
                            color: project.accentColor || "var(--primary)"
                          }}
                        >
                          <GraduationCap className="inline h-3 w-3 mr-1 mb-0.5" />
                          {project.academicContext.includes("Final") ? "Proyecto Final" : "Académico"}
                        </span>
                      )}
                      <span className="text-muted-foreground/40 text-[9px] font-bold uppercase tracking-[0.2em]">{project.category}</span>
                    </div>

                    <h4 className="text-3xl font-bold leading-tight tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                      {project.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-base leading-relaxed font-medium line-clamp-3 max-w-xl">
                      {project.description}
                    </p>

                    <div className="flex items-center text-foreground font-bold text-sm pt-2 group-hover:text-primary transition-colors">
                      Ver Detalles Técnicos <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>

                  <div className="relative aspect-video rounded-3xl overflow-hidden border border-border/50 bg-secondary/20 flex items-center justify-center">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      />
                    ) : (
                      <div 
                        className="w-full h-full opacity-10"
                        style={{ backgroundColor: project.accentColor || "var(--primary)" }}
                      />
                    )}
                    {!project.image && <div className="absolute text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">Imagen en preparación</div>}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
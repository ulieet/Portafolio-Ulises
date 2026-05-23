"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, ArrowRight } from "lucide-react"
import projectsData from "@/data/projects.json"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Solo mostramos 4 proyectos destacados en la home para no saturar
  const displayedProjects = projectsData.filter(project => !project.hasDetails).slice(0, 4)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="proyectos" className="py-24 px-6 bg-background">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-3">
              Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight pb-2">
              Landing Pages & <span className="text-muted-foreground/60">Frontend.</span>
            </h3>
            <p className="text-muted-foreground text-base md:text-lg font-medium">Interfaces modernas, interactivas y optimizadas para la conversión.</p>
          </div>
          
          <Link href="/proyectos">
            <Button className="rounded-full bg-vibrant text-white hover:scale-110 hover:shadow-[0_0_30px_rgba(100,100,255,0.5)] transition-all duration-300 h-12 px-8 font-extrabold group animate-bounce-click border-none">
              Ver archivo completo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative flex flex-col h-full bg-card/30 border border-border/40 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-primary/20 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-foreground text-background font-bold px-3 py-1 text-[9px] rounded-full shadow-xl uppercase tracking-tighter">Destacado</Badge>
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex-grow space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold text-foreground leading-tight">{project.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium line-clamp-2">{project.description}</p>
                </div>
                
                <div className="pt-8">
                  <Button variant="outline" className="w-full rounded-full h-11 text-xs border-border/50 hover:bg-foreground hover:text-background transition-all duration-500 font-bold" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Ver Demo <Eye className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
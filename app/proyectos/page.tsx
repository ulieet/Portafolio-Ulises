import Link from "next/link"
import { ArrowRight, Code2, Globe, GraduationCap, Layout } from "lucide-react"
import projectsData from "@/data/projects.json"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const advancedProjects = projectsData.filter(p => p.hasDetails)
  const standardProjects = projectsData.filter(p => !p.hasDetails)

  return (
    <main className="min-h-screen bg-background text-foreground pt-12 pb-16 px-6 selection:bg-primary/10">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="space-y-4 max-w-3xl mb-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gradient pb-2">
            Archivo de <span className="text-muted-foreground/40">Proyectos.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
            Una colección de trabajos que abarcan desde ingeniería de software y arquitectura backend hasta interfaces interactivas y diseño web.
          </p>
        </div>

        {/* Proyectos Container */}
        <div className="space-y-12">
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">
                Frontend & Landings
              </h2>
              <div className="h-[1px] w-full bg-border/50"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standardProjects.map((project) => (
                <div 
                  key={project.id}
                  className="group relative bg-card/50 border border-border/50 rounded-3xl overflow-hidden p-6 hover:bg-secondary/30 transition-all duration-500"
                >
                  <div className="space-y-6">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-border/50">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold tracking-tight">{project.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed font-medium line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/60 px-2 py-0.5 bg-secondary/50 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Button variant="ghost" className="w-full rounded-full border border-border/50 hover:bg-foreground hover:text-background h-10 font-bold text-xs" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Ver Demo <Globe className="ml-2 h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">
                Casos de Estudio & Ingeniería
              </h2>
              <div className="h-[1px] w-full bg-border/50"></div>
            </div>

            <div className="space-y-8">
              {advancedProjects.map((project) => (
                <Link 
                  key={project.id} 
                  href={`/proyectos/${project.id}`}
                  className="group block relative"
                >
                  <div 
                    className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-secondary/20 p-8 md:p-12 transition-all duration-700 hover:border-primary/30"
                  >
                    {/* Accent Glow */}
                    <div 
                      className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                      style={{ backgroundColor: project.accentColor || "var(--primary)" }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <Badge variant="outline" className="rounded-full px-3 py-1 text-[10px] font-bold uppercase border-primary/20 bg-primary/5 text-primary">
                            Ingeniería
                          </Badge>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{project.category}</span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex items-center gap-2 text-foreground font-bold text-sm pt-2 group-hover:text-primary transition-colors">
                          Explorar Caso de Estudio <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                        </div>
                      </div>

                      <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-muted flex items-center justify-center">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div 
                            className="w-full h-full opacity-20"
                            style={{ backgroundColor: project.accentColor || "var(--primary)" }}
                          />
                        )}
                        {!project.image && <Code2 className="absolute h-12 w-12 text-muted-foreground/40" />}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
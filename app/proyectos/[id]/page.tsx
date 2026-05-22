import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, Code2, Server, GraduationCap, LayoutGrid } from "lucide-react"
import projectsData from "@/data/projects.json"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const project = projectsData.find(p => p.id === resolvedParams.id)

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold mb-4">Proyecto no encontrado</h2>
        <Link href="/">
          <Button variant="outline" className="rounded-full">
            Volver al inicio
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <main 
      className="min-h-screen bg-background text-foreground pt-40 pb-24 px-6 selection:bg-primary/10 grid-pattern"
      style={{ "--project-accent": project.accentColor || "var(--primary)" } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Botón Volver */}
        <div className="flex justify-start">
          <Link href="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-all px-0 hover:bg-transparent group font-bold">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Volver al portafolio
            </Button>
          </Link>
        </div>

        {/* 1. CABECERA PRINCIPAL */}
        <div className="space-y-8 max-w-4xl">
          <h1 className="text-6xl sm:text-7xl font-bold tracking-tighter text-gradient leading-[1.2] pb-4">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-2xl md:text-3xl text-muted-foreground/80 font-medium tracking-tight leading-relaxed">
              {project.subtitle}
            </p>
          )}
          
          {project.academicContext && (
            <div className="inline-flex items-center gap-3 bg-secondary/50 border border-border/50 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-foreground/70">
              <GraduationCap className="h-4 w-4 flex-shrink-0" />
              <span>{project.academicContext}</span>
            </div>
          )}
        </div>

        {/* 2. EL CENTRO VISUAL: Carrusel */}
        {project.images && project.images.length > 0 && (
          <div className="w-full">
            <div className="relative group">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((img: string, idx: number) => (
                    <CarouselItem key={idx}>
                      <div className="p-1">
                        <div 
                          className="rounded-[3rem] overflow-hidden border border-border/50 bg-muted aspect-video relative shadow-2xl transition-all duration-700"
                          style={{ boxShadow: "0 25px 50px -12px var(--project-accent, rgba(0,0,0,0.1))" } as React.CSSProperties}
                        >
                          <img 
                            src={img} 
                            alt={`Captura de pantalla ${idx + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-6 bg-background/80 backdrop-blur-md border-border/50 hover:bg-background h-12 w-12" />
                <CarouselNext className="right-6 bg-background/80 backdrop-blur-md border-border/50 hover:bg-background h-12 w-12" />
              </Carousel>
            </div>
          </div>
        )}

        {/* 3. CONTENIDO DETALLADO */}
        <div className="space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold tracking-tight text-gradient">Resumen Informativo</h3>
                <p className="text-muted-foreground/90 text-xl leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              {/* Pilares */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-10">
                  <h3 className="text-3xl font-bold tracking-tight text-gradient">Pilares del Desarrollo</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.features.map((feature: any, idx: number) => (
                      <Card key={idx} className="premium-card bg-card border-none ring-1 ring-border/50 rounded-[2rem]">
                        <CardContent className="p-8">
                          <div className="flex items-start gap-5">
                            <div 
                              className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                              style={{ backgroundColor: "color-mix(in srgb, var(--project-accent), transparent 90%)" }}
                            >
                              <CheckCircle2 
                                className="h-4 w-4" 
                                style={{ color: "var(--project-accent)" }}
                              />
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-foreground text-lg tracking-tight">{feature.title}</h4>
                              <p className="text-muted-foreground/80 text-sm leading-relaxed font-medium">{feature.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Técnica */}
            <div className="space-y-8">
              <div className="p-10 rounded-[2.5rem] bg-secondary/30 border border-border/50 space-y-10 sticky top-32">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-6">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {project.technologies.map((tech: string) => (
                      <span 
                        key={tech} 
                        className="bg-background text-foreground border border-border/50 text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm transition-all duration-300 hover:border-primary/50"
                        style={{ "--hover-border": "var(--project-accent)" } as React.CSSProperties}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.architecture?.backend && (
                  <div className="flex gap-5">
                    <div className="p-3 rounded-2xl bg-background border border-border/50 h-fit">
                      <Server className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-2">Backend</h4>
                      <p className="text-foreground text-base leading-relaxed font-bold tracking-tight">{project.architecture.backend}</p>
                    </div>
                  </div>
                )}

                {project.architecture?.frontend && (
                  <div className="flex gap-5">
                    <div className="p-3 rounded-2xl bg-background border border-border/50 h-fit">
                      <Code2 className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-2">Frontend</h4>
                      <p className="text-foreground text-base leading-relaxed font-bold tracking-tight">{project.architecture.frontend}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Code2, Server, GraduationCap, Globe, Cpu } from "lucide-react"
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

  const accentColor = project.accentColor || "var(--primary)"

  return (
    <main 
      className="min-h-screen bg-background text-foreground pt-32 pb-24 selection:bg-primary/10"
      style={{ "--project-accent": accentColor } as React.CSSProperties}
    >
      {/* Botón Volver - Sticky or top fixed */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <Link href="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-all px-0 hover:bg-transparent group font-bold">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Volver al portfolio
          </Button>
        </Link>
      </div>

      {/* 1. CABECERA PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="max-w-4xl space-y-6">
          {project.academicContext && (
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border"
              style={{ 
                backgroundColor: "color-mix(in srgb, var(--project-accent), transparent 92%)", 
                borderColor: "color-mix(in srgb, var(--project-accent), transparent 70%)",
                color: "var(--project-accent)"
              }}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              <span>{project.academicContext}</span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            {project.title}
          </h1>
          
          {project.subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
              {project.subtitle}
            </p>
          )}

          <div className="flex flex-wrap gap-4 pt-4">
             {project.liveUrl && project.liveUrl !== "#" && (
                <Button className="rounded-full px-6 font-bold" style={{ backgroundColor: "var(--project-accent)" }}>
                  <Globe className="mr-2 h-4 w-4" /> Ver Proyecto en Vivo
                </Button>
             )}
             <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary/50 rounded-full text-[10px] font-bold uppercase tracking-wider border border-border/50">
                    {tech}
                  </span>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 2. EL CENTRO VISUAL: Carrusel */}
      {project.images && project.images.length > 0 && (
        <section className="w-full mb-32 bg-secondary/20 py-20 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((img: string, idx: number) => (
                    <CarouselItem key={idx}>
                      <div className="px-2">
                        <div className="rounded-3xl overflow-hidden border border-border/50 bg-muted aspect-video relative shadow-xl">
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
                <div className="flex justify-end gap-2 mt-6">
                  <CarouselPrevious className="static translate-y-0 h-10 w-10 border-border/50" />
                  <CarouselNext className="static translate-y-0 h-10 w-10 border-border/50" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
      )}

      {/* 3. CONTENIDO: DESCRIPCIÓN Y PILARES */}
      <div className="max-w-6xl mx-auto px-6 space-y-32">
        
        {/* Resumen e Impacto */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-primary/30" /> Resumen
            </h3>
            <h4 className="text-3xl font-bold tracking-tight">El Desafío</h4>
          </div>
          <div className="lg:col-span-2">
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium">
              {project.description}
            </p>
          </div>
        </section>

        {/* Pilares - Ahora sin cards masivas */}
        {project.features && project.features.length > 0 && (
          <section className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground flex justify-center items-center gap-2">
                <div className="w-8 h-[1px] bg-primary/30" /> Características clave
              </h3>
              <h4 className="text-3xl md:text-4xl font-bold tracking-tight">Arquitectura Funcional</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {project.features.map((feature: any, idx: number) => (
                <div key={idx} className="flex gap-6 group">
                  <div 
                    className="h-12 w-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110"
                    style={{ backgroundColor: "color-mix(in srgb, var(--project-accent), transparent 90%)" }}
                  >
                    <CheckCircle2 
                      className="h-6 w-6" 
                      style={{ color: "var(--project-accent)" }}
                    />
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-xl font-bold tracking-tight">{feature.title}</h5>
                    <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* 4. ESPECIFICACIONES TÉCNICAS - Sección destacada con color */}
      <section 
        className="mt-32 py-24 border-y border-border/50"
        style={{ backgroundColor: "color-mix(in srgb, var(--project-accent), transparent 95%)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="space-y-6">
               <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                <div className="w-8 h-[1px] bg-primary/30" /> Stack Técnico
              </h3>
              <h4 className="text-3xl font-bold tracking-tight">Detalle de Ingeniería</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span 
                    key={tech} 
                    className="bg-background border border-border/50 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.architecture?.backend && (
                <div className="bg-background p-8 rounded-3xl border border-border/50 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Server className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h5 className="text-lg font-bold">Arquitectura Backend</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                    {project.architecture.backend}
                  </p>
                </div>
              )}

              {project.architecture?.frontend && (
                <div className="bg-background p-8 rounded-3xl border border-border/50 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h5 className="text-lg font-bold">Desarrollo Frontend</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                    {project.architecture.frontend}
                  </p>
                </div>
              )}

              {/* Si no hay frontend/backend específicos, podríamos mostrar una sección general de infraestructura si existiera */}
              {!project.architecture?.backend && !project.architecture?.frontend && (
                 <div className="bg-background p-8 rounded-3xl border border-border/50 space-y-4 md:col-span-2">
                  <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Cpu className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h5 className="text-lg font-bold">Infraestructura del Proyecto</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                    Este proyecto utiliza un stack moderno optimizado para rendimiento y escalabilidad, enfocado en las mejores prácticas de desarrollo web.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Siguiente Proyecto */}
      <section className="max-w-6xl mx-auto px-6 mt-32 text-center">
        <Link href="/">
          <Button variant="outline" className="rounded-full px-8 h-12 font-bold group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Volver al Inicio
          </Button>
        </Link>
      </section>
    </main>
  )
}
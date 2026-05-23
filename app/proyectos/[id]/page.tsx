import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Code2, Server, GraduationCap, Globe, Cpu } from "lucide-react"
import projectsData from "@/data/projects.json"
import { cn } from "@/lib/utils"

import { ProjectCarousel } from "@/components/ui/project-carousel"

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
      className="min-h-screen bg-background text-foreground pt-20 pb-16 selection:bg-primary/10"
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
      <section className="max-w-6xl mx-auto px-6 mb-2">
        <div className="max-w-4xl space-y-6">
        
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {project.title}
          </h1>

          {/* Contexto Académico - Estilo minimalista y editorial */}
          {project.academicContext && (
            <div className="flex items-center gap-3 mt-4">
              <div className="h-[2px] w-8 rounded-full" style={{ backgroundColor: "var(--project-accent)" }} />
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-muted-foreground">
                <GraduationCap className="h-4 w-4" style={{ color: "var(--project-accent)" }} />
                <span>{project.academicContext}</span>
              </div>
            </div>
          )}
          
          {project.subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed mt-4">
              {project.subtitle}
            </p>
          )}

          <div className="flex flex-wrap gap-4 pt-4">
             
           
          </div>
        </div>
      </section>

      {/* 2. EL CENTRO VISUAL: Carrusel */}
      {project.images && project.images.length > 0 && (
        <section className="w-full mb-16 bg-secondary/10 py-8 md:py-12 overflow-hidden border-y border-border/50">
          <div className="max-w-[1400px] mx-auto px-4 md:px-10">
            <ProjectCarousel images={project.images as any} />
          </div>
        </section>
      )}

      {/* 3. CONTENIDO: DESCRIPCIÓN Y PILARES */}
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        
        {/* Resumen e Impacto */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-primary/30" /> Resumen
            </h3>
            <h4 className="text-3xl font-bold tracking-tight">El Objetivo</h4>
          </div>
          <div className="lg:col-span-2">
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium">
              {project.description}
            </p>
          </div>
        </section>

        {/* Pilares */}
        {project.features && project.features.length > 0 && (
          <section className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground flex justify-center items-center gap-2">
                <div className="w-8 h-[1px] bg-primary/30" /> Características clave
              </h3>
              <h4 className="text-3xl md:text-4xl font-bold tracking-tight">Arquitectura Funcional</h4>
            </div>

            <div className="space-y-12 md:space-y-20">
              {project.features.map((feature: any, idx: number) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={cn(
                    "flex flex-col gap-8 items-center",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}>
                    {feature.image && (
                      <div className="flex-1 w-full">
                        <img 
                          src={feature.image} 
                          alt={feature.title} 
                          className="rounded-2xl shadow-xl border border-border/50 w-full object-cover max-h-[400px]"
                        />
                      </div>
                    )}
                    <div className={cn("flex-1 space-y-6 w-full", feature.image ? "" : "md:max-w-2xl mx-auto text-center")}>
                      <div className={cn("flex gap-6", !feature.image && "justify-center")}>
                        <div 
                          className="h-12 w-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "color-mix(in srgb, var(--project-accent), transparent 90%)" }}
                        >
                          <CheckCircle2 
                            className="h-6 w-6" 
                            style={{ color: "var(--project-accent)" }}
                          />
                        </div>
                        <div className="space-y-3">
                          <h5 className="text-2xl font-bold tracking-tight">{feature.title}</h5>
                          <p className="text-muted-foreground leading-relaxed text-base font-medium">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}
      </div>

      {/* 4. ESPECIFICACIONES TÉCNICAS */}
      <section 
        className="mt-20 py-16 border-y border-border/50"
        style={{ backgroundColor: "color-mix(in srgb, var(--project-accent), transparent 95%)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
      <section className="max-w-6xl mx-auto px-6 mt-16 text-center">
        <Link href="/">
          <Button variant="outline" className="rounded-full px-8 h-12 font-bold group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Volver al Inicio
          </Button>
        </Link>
      </section>
    </main>
  )
}
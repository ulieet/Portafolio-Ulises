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
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold mb-4">Proyecto no encontrado</h2>
        <Link href="/">
          <Button variant="outline" className="text-white border-gray-700 bg-gray-900/50">
            Volver al inicio
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black text-gray-100 pt-32 pb-24 px-4 sm:px-6 lg:px-8 selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Botón Volver - Más visible y limpio */}
        <div className="flex justify-start">
          <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white text-base transition-colors hover:bg-gray-900/50 px-4 py-2 rounded-full">
              <ArrowLeft className="mr-2 h-5 w-5" /> Volver al portafolio
            </Button>
          </Link>
        </div>

        {/* 1. CABECERA PRINCIPAL: Centrada y de Gran Impacto */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-xl md:text-2xl text-blue-400 font-medium tracking-wide">
              {project.subtitle}
            </p>
          )}
          
          {project.academicContext && (
            <div className="inline-flex items-center gap-2 bg-blue-950/30 border border-blue-800/40 text-blue-300 px-5 py-2 rounded-full text-sm font-medium mt-2 backdrop-blur-sm">
              <GraduationCap className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <span>{project.academicContext}</span>
            </div>
          )}
        </div>

        {/* 2. EL CENTRO VISUAL: Carrusel de Imágenes en el medio */}
        {project.images && project.images.length > 0 && (
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-12 py-4">
            <div className="relative group">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((img: string, idx: number) => (
                    <CarouselItem key={idx}>
                      <div className="p-1">
                        <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-950 aspect-video relative shadow-2xl shadow-blue-500/5">
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
                <CarouselPrevious className="bg-gray-900/80 border-gray-800 hover:bg-gray-800 text-white left-2 md:-left-4 backdrop-blur-sm transition-all opacity-90 sm:opacity-0 group-hover:opacity-100" />
                <CarouselNext className="bg-gray-900/80 border-gray-800 hover:bg-gray-800 text-white right-2 md:-right-4 backdrop-blur-sm transition-all opacity-90 sm:opacity-0 group-hover:opacity-100" />
              </Carousel>
            </div>
          </div>
        )}

        {/* 3. RESUMEN CONCISO: Texto más grande y espaciado */}
        <div className="max-w-4xl mx-auto space-y-12 pt-4">
          <div className="text-center sm:text-justify space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">Resumen Ejecutivo</h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Grilla Técnica: Más visual, menos texto plano */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tarjeta Tecnologías */}
            <div className="bg-gray-900/20 border border-gray-800/80 p-6 rounded-2xl backdrop-blur-sm flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <LayoutGrid className="h-5 w-5 text-purple-400" />
                <h4 className="text-sm font-semibold font-mono tracking-wider text-gray-400 uppercase">Tecnologías</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="bg-gray-900/80 text-purple-300 border border-purple-900/40 text-xs font-mono px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tarjetas de Arquitectura Desglosada */}
            {project.architecture?.backend && (
              <div className="bg-gray-900/20 border border-gray-800/80 p-6 rounded-2xl backdrop-blur-sm flex gap-4 items-start">
                <Server className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold font-mono tracking-wider text-gray-400 uppercase mb-2">Backend</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.architecture.backend}</p>
                </div>
              </div>
            )}

            {project.architecture?.frontend && (
              <div className="bg-gray-900/20 border border-gray-800/80 p-6 rounded-2xl backdrop-blur-sm flex gap-4 items-start">
                <Code2 className="h-6 w-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold font-mono tracking-wider text-gray-400 uppercase mb-2">Frontend</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.architecture.frontend}</p>
                </div>
              </div>
            )}
          </div>

          {/* Funcionalidades Clave en Formato Conciso */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight text-center sm:text-left">Pilares del Desarrollo</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.features.map((feature: any, idx: number) => (
                  <Card key={idx} className="bg-gray-900/10 border-gray-800/60 backdrop-blur-sm hover:border-gray-700/80 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-blue-400 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1">
                          <h4 className="text-base font-semibold text-gray-100">{feature.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </main>
  )
}
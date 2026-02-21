"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  liveUrl: string
  featured: boolean
}

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce estilo Apple Store",
      description: "Plataforma moderna de comercio electrónico.",
      image: "/images/iphones.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn"],
      category: "fullstack",
      liveUrl: "https://celulares-landing.vercel.app/",
      featured: false,
    },
    {
      id: 2,
      title: "E-Commerce Landing Page",
      description: "Landing page para tienda de mates argentinos.",
      image: "/images/mates.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Radix"],
      category: "fullstack",
      liveUrl: "https://cuchamates.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Landing Page Empresa de Software",
      description: "Sitio corporativo moderno y profesional.",
      image: "/images/ignatech.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn"],
      category: "frontend",
      liveUrl: "https://ignatechgroup-final.vercel.app/",
      featured: true,
    },
    {
      id: 4,
      title: "Sitio Web Corporativo",
      description: "Web empresarial orientada a servicios profesionales.",
      image: "/images/empresarial.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn"],
      category: "frontend",
      liveUrl: "https://boceto-landing.vercel.app/",
      featured: true,
    },
    {
      id: 5,
      title: "Landing Page Empresa de Construcción",
      description: "Landing personalizada adaptada a identidad visual.",
      image: "/images/box.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Radix"],
      category: "frontend",
      liveUrl: "https://boxsteel.vercel.app/",
      featured: true,
    },
    {
      id: 6,
      title: "Sitio Web Estudio Contable",
      description: "Web profesional para estudio contable.",
      image: "/images/contador.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn"],
      category: "frontend",
      liveUrl: "https://contador-landing-gilt.vercel.app/",
      featured: false,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-blue-400 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes en desarrollo web moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group bg-gray-900/50 border-gray-700 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col h-full ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-600 text-white">Destacado</Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6 flex flex-col flex-1">
                
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-gray-800/50 border-gray-600 text-gray-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 w-full" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white"
                  >
                    <Eye className="h-4 w-4" />
                    Ver Demo
                  </a>
                </Button>

              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            ¿Tenés un proyecto en mente o necesitás una solución web profesional para tu negocio?
          </p>
         <a
  href="mailto:ulisesvetere07@gmail.com?subject=Solicitud de cotización&body=Hola Ulises,%0A%0AQuisiera solicitar una cotización para..."
>
  <Button
    size="lg"
    className="bg-blue-400 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
  >
    Solicitar Cotización
  </Button>
</a>
        </div>
      </div>
    </section>
  )
}
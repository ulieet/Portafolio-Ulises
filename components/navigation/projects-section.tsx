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
    <section ref={sectionRef} id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-blue-400 bg-clip-text text-transparent">Landing Page Frontend </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una selección de mis trabajos en desarrollo web moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standardProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group bg-gray-900/50 border-gray-700 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col h-full ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                {project.featured && (
                  <div className="absolute top-4 right-4"><Badge className="bg-purple-600 text-white">Destacado</Badge></div>
                )}
              </div>
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-gray-800/50 border-gray-600 text-gray-300 text-xs">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 w-full" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-white">
                    <Eye className="h-4 w-4" /> Ver Demo
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  githubUrl: string
  liveUrl: string
  featured: boolean
}

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce estilo Apple Store",
      description: "Plataforma completa de comercio electrónico con panel de administración",
      longDescription:
        "Una aplicación full-stack con autenticación, carrito de compras, procesamiento de pagos y dashboard administrativo completo.",
      image: "/images/iphones.png",
      technologies: ["Next.js", "TypeScript",  "Tailwind CSS", "shadcn"],
      category: "fullstack",
      githubUrl: "#",
      liveUrl: "https://celulares-landing.vercel.app/",
      featured: false,
    },
    {
      id: 2,
      title: "E-Commerce estilo landing page",
      description: "Landing page para una tienda de comercio de mates argentinos",
      longDescription:
        "Landing page atractiva y responsiva para una tienda de comercio de mates argentinos, con secciones de productos, informacion, y contacto.",
      image: "/images/mates.png",
      technologies: ["Next.js", "Node.js", "shadcn", "typescript", "Tailwind CSS", "Framer Motion",],
      category: "fullstack",
      githubUrl: "https://github.com/ulieet/cuchamates",
      liveUrl: "https://cuchamates.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Landing page para empresa de software",
      description: "Landing page para una empresa de software con servicios innovadores",
      longDescription:
        "Landing page moderna y atractiva para una empresa de software, destacando sus servicios y proyectos.",
      image: "/images/ignatech.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "frontend",
      githubUrl: "#",
      liveUrl: "https://ignatechgroup-final.vercel.app/",
      featured: true,
    },
    {
      id: 4,
      title: "Software para la gestion de un odontologo",
      description: "Software de gestión para consultorios odontológicos",
      longDescription:
        "Aplicación web para la gestión de turnos, pacientes, odontograma, y facturación en consultorios odontológicos.",
      image: "/images/odontologo.png",
      technologies: ["React", "JavaScript", "CSS", "Framer Motion", "Vercel"],
      category: "frontend",
      githubUrl: "#",
      liveUrl: "https://ignatechgroup-final.vercel.app/",
      featured: true,
    },
  ]

  const categories = [
    { id: "all", label: "Todos" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

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
            Una selección de mis trabajos más recientes que demuestran mis habilidades en desarrollo web
          </p>
        </div>

      
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group bg-gray-900/50 border-gray-700 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col h-full ${
                isVisible ? "animate-slide-up" : "opacity-0"
              } ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

         
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-600 text-white">Destacado</Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-2">
                  {hoveredProject === project.id ? project.longDescription : project.description}
                </p>


                <div className="flex flex-wrap gap-2 mb-4">
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

      
                <div className="flex space-x-3 mt-auto">
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                  </Button>

                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-white"
                    >
                      <Eye className="h-4 w-4" />
                      Ver Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

     
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">¿Interesado en ver más proyectos o colaborar en algo nuevo?</p>
          <Button
            size="lg"
            className="bg-blue-400 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Ver Más Proyectos
          </Button>
        </div>
      </div>

  
      <style jsx>{`
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

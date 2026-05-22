"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import projectsData from "@/data/projects.json"

export function OtherProjectsSection() {
  // Filtramos solo los proyectos complejos/académicos con página propia
  const advancedProjects = projectsData.filter(project => project.hasDetails)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Proyectos en Profundidad</h3>
          <p className="text-gray-400">Explorá casos de estudio detallados, arquitecturas de software y desarrollo de sistemas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advancedProjects.map((project) => (
            <Link key={project.id} href={`/proyectos/${project.id}`}>
              <Card className="group bg-gray-900/40 border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-blue-400 text-xs font-mono uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                    Leer caso de estudio <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
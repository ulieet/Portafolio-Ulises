import Hero from "@/components/navigation/hero"
import { ProjectsSection } from "@/components/navigation/projects-section"
import { AboutSection } from "@/components/navigation/presentacion-section"
import { SkillsSection } from "@/components/navigation/skills-section"
import { OtherProjectsSection } from "@/components/navigation/other-projects-section"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>
     <main className="min-h-screen bg-black">
      <Hero/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <OtherProjectsSection/>


         <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-lg">
            ¿Tenés un proyecto en mente o necesitás una solución web profesional
            para tu negocio?
          </p>

          <Button
            asChild
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20 mb-20"
          >
            <a
              href="mailto:ulisesvetere07@gmail.com?subject=Solicitud%20de%20cotización&body=Hola%20Ulises,%0A%0AQuisiera%20solicitar%20una%20cotización%20para..."
            >
              Contactar
            </a>
          </Button>
        </div>
     </main>
    </>
  )
}
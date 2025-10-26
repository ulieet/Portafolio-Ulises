
import Hero from "@/components/navigation/hero"
import { ProjectsSection } from "@/components/navigation/projects-section"
import {AboutSection} from "@/components/navigation/presentacion-section"
import { SkillsSection } from "@/components/navigation/skills-section"

export default function HomePage() {
  return (
    <>
     <main className="min-h-screen bg-black">

    <Hero/>

    <AboutSection/>
    <SkillsSection/>
     
    <ProjectsSection/>
   
      </main>
      
      
    </>
  )
}

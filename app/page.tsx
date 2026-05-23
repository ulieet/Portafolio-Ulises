import Hero from "@/components/navigation/hero"
import { ProjectsSection } from "@/components/navigation/projects-section"
import { AboutSection } from "@/components/navigation/presentacion-section"
import { SkillsSection } from "@/components/navigation/skills-section"
import { OtherProjectsSection } from "@/components/navigation/other-projects-section"
import { ContactSection } from "@/components/navigation/contact-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SectionDivider label="01" title="Background" />
      <AboutSection />
      <SectionDivider label="02" title="Tech Stack" />
      <SkillsSection />
      <SectionDivider label="03" title="Featured Work" />
      <ProjectsSection />
      <SectionDivider label="04" title="Experiments" />
      <OtherProjectsSection />

      <ContactSection />
    </div>
  )
}


function SectionDivider({ label, title }: { label: string, title: string }) {
  return (
    <div className="container mx-auto px-6">
      <div className="flex items-center gap-4 py-4">
        <span className="text-[10px] font-mono text-muted-foreground/40 font-bold">{label}</span>
        <div className="h-[1px] flex-1 bg-border/40"></div>
        <span className="text-[10px] font-mono text-muted-foreground/40 font-bold uppercase tracking-widest">{title}</span>
        <div className="h-[1px] w-12 bg-border/40"></div>
      </div>
    </div>
  )
}
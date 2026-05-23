"use client"

import { useState, useEffect } from "react"
import { Code2, GraduationCap, Lightbulb, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-12 px-6 overflow-hidden bg-secondary/10 grid-pattern"
    >
      <div className="absolute top-1/4 right-0 text-[15rem] math-integral text-primary/5 select-none pointer-events-none -rotate-12 translate-x-1/4 hidden lg:block">
        ∫ u dv = uv - ∫ v du
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Un poco de mi historia
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.2] text-gradient pb-2">
                Sobre <span className="text-muted-foreground/60">mi.</span>
              </h3>

            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground/90">
              <p>
                Hola! soy <span className="text-foreground font-bold">Ulises</span>, estudiante de{" "}
                <span className="text-foreground font-semibold">
                  Ingeniería en Sistemas de Información
                </span>{" "}
                de cuarto año en la{" "}
                <span className="text-foreground font-semibold">
                  UTN FRLP
                </span>.
              </p>

              <p>
                Me especializo en el desarrollo de aplicaciones y
                páginas web <span className="text-foreground font-semibold italic">minimalistas</span> y bien estructuradas, con foco en el{" "}
                <span className="text-foreground font-semibold">
                  Frontend
                </span>{" "}
                y en la creación de interfaces intuitivas para el usuario final.
              </p>

              <p>
                Busco comprender las necesidades de cada
                negocio para traducirlas en soluciones tecnológicas <span className="text-foreground font-semibold">eficientes y escalables</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <SkillCard
              icon={<Code2 className="w-5 h-5" />}
              title="Full Stack Developer / Systems Analyst"
              subtitle="Con profundo interes en Frontend"
            />
            <SkillCard
              icon={<GraduationCap className="w-5 h-5" />}
              title="Estudiante"
              subtitle="4to año Ing. en Sistemas Ingles B2"
            />
            <SkillCard
              icon={<Lightbulb className="w-5 h-5" />}
              title="Aprendizaje"
              subtitle="Me interesa explorar tecnologías de vanguardia y actualmente busco nuevas oportunidades."
            />
            <SkillCard
              icon={<MapPin className="w-5 h-5" />}
              title="Ubicación"
              subtitle="Buenos Aires, Argentina"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
}) {
  return (
    <div
      className="group p-8 rounded-[2rem] bg-card border border-border/50 shadow-sm hover:shadow-xl hover:shadow-black/[0.03] hover:-translate-y-1 transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        <div className="text-foreground/80">{icon}</div>
      </div>
      <div>
        <h4 className="text-foreground font-bold text-lg mb-2 tracking-tight">
          {title}
        </h4>
        <p className="text-muted-foreground/80 text-sm leading-snug font-medium">{subtitle}</p>
      </div>
    </div>
  )
}
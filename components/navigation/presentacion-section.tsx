"use client"

import { useState, useEffect } from "react"
import { Code2, GraduationCap, Lightbulb, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  const [triangles, setTriangles] = useState<
    { left: string; top: string; duration: number; delay: number }[]
  >([])

  useEffect(() => {
    const generated = [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
    }))
    setTriangles(generated)
  }, [])

  return (
    <section
      id="about"
      className="relative bg-black overflow-hidden"
    >
      <div className="relative py-18   px-4">
        {/* Fondo animado */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {triangles.map((t, i) => (
            <motion.div
              key={i}
              className="absolute w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-blue-500/20"
              style={{ left: t.left, top: t.top }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: t.duration,
                delay: t.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Título */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
              Sobre mí
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          {/* Texto */}
          <div className="space-y-6 text-left md:text-center">
            <p className="text-gray-300 text-lg leading-relaxed">
             Hola! soy Ulises, estudiante de{" "}
              <span className="text-white font-semibold">
                Ingeniería en Sistemas de Información
              </span>{" "}
              de cuarto año en la{" "}
              <span className="text-white font-semibold">
                Universidad Tecnológica Nacional (UTN FRLP)
              </span>.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Actualmente me especializo en el desarrollo de aplicaciones y
              páginas web minimalistas y bien estructuradas, con foco en el{" "}
              <span className="text-blue-500 font-semibold">
                Frontend
              </span>{" "}
              y en la creación de interfaces intuitivas centradas en la
              experiencia del usuario.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              También tengo un profundo interés en el análisis de
              requerimientos, buscando comprender las necesidades de cada
              negocio para traducirlas en soluciones tecnológicas eficientes.
              Me motiva seguir incorporando nuevas tecnologías y participar en
              proyectos que representen desafíos técnicos en distintas áreas.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-16">
            <SkillCard
              icon={<Code2 className="w-5 h-5 text-blue-500" />}
              title="Full Stack Developer"
              subtitle="Especializado en Frontend"
              variant="blue"
            />
            <SkillCard
              icon={<GraduationCap className="w-5 h-5 text-blue-400" />}
              title="Estudiante de Ingeniería"
              subtitle="4to año UTN FRLP"
              variant="blue"
            />
            <SkillCard
              icon={<Lightbulb className="w-5 h-5 text-purple-400" />}
              title="Aprendizaje continuo"
              subtitle="Desarrollo web y análisis"
              variant="purple"
            />
            <SkillCard
              icon={<MapPin className="w-5 h-5 text-green-400" />}
              title="Argentina"
              subtitle="Buenos Aires"
              variant="green"
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
  variant,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  variant: "blue" | "purple" | "green"
}) {
  const variants = {
    blue: "hover:border-blue-400/50 bg-blue-500/5",
    purple: "hover:border-purple-400/50 bg-purple-500/5",
    green: "hover:border-green-400/50 bg-green-500/5",
  }

  return (
    <div
      className={`border border-gray-800 rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] ${variants[variant]}`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-black/40 flex items-center justify-center">
          {icon}
        </div>
        <div className="text-left">
          <h3 className="text-white font-semibold text-sm mb-1">
            {title}
          </h3>
          <p className="text-gray-400 text-xs">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}
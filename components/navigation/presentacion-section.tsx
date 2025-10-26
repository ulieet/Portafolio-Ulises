"use client"

import { useState, useEffect } from "react"
import { Code2, GraduationCap, Lightbulb, MapPin, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  

  // Estado para posiciones y animaciones de los triángulos
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
    <section id="about" className="relative bg-black overflow-hidden">
      


      <div id="about-content" className="relative py-10 px-4">
        {/* Fondo de triángulos animados */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {triangles.map((t, i) => (
            <motion.div
              key={i}
              className="absolute w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-blue-500/20"
              style={{ left: t.left, top: t.top }}
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: t.duration,
                delay: t.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">Sobre mi</h2>
            <p className="text-gray-400 text-lg mb-4">Get to know me better</p>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Foto */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl blur-sm"></div>
                <div className="relative bg-gray-900 rounded-2xl p-1">
                  <img
                    src="/professional-developer-portrait.png"
                    alt="Ulises Vetere"
                    className="rounded-xl w-full max-w-md"
                  />
                </div>
              </div>
            </div>

            {/* Información */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Soy estudiante de{" "}
                <span className="text-white font-semibold">Ingeniería en Sistemas de Información</span> de cuarto año en
                la Universidad Tecnológica Nacional de la Plata (UTN FRLP), con gran entusiasmo por la tecnología y el desarrollo de
                software.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Actualmente me especializo en <span className="text-blue-600 font-semibold"> Frontend</span> y tengo un
                profundo interés en el diseño de interfaces y el análisis de sistemas. Siempre estoy buscando aprender
                nuevas tecnologías y adaptarme rápidamente a los cambios del sector para ofrecer mejor experiencia al usuario. 
                Estoy abierto a diferentes oportunidades y colaboraciones que me permitan crecer profesionalmente.
              </p>

              {/* Cards de habilidades */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {/* Repetir con cada skill */}
                <SkillCard icon={<Code2 className="w-5 h-5 text-blue-600" />} title="Full Stack Developer" subtitle="Specializing in Frontend" color="blue" />
                <SkillCard icon={<GraduationCap className="w-5 h-5 text-blue-400" />} title="Engineering Student" subtitle="4th year at UTN" color="blue" />
                <SkillCard icon={<Lightbulb className="w-5 h-5 text-purple-400" />} title="Continuous Learner" subtitle="Always expanding knowledge" color="purple" />
                <SkillCard icon={<MapPin className="w-5 h-5 text-green-400" />} title="Argentina" subtitle="Based in Buenos Aires" color="green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente para cada card de skill
function SkillCard({ icon, title, subtitle, color }: { icon: React.ReactNode; title: string; subtitle: string; color: string }) {
  return (
    <div className={`bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-${color}-400/50 transition-colors`}>
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-lg bg-${color}-500/10 flex items-center justify-center flex-shrink-0`}>
          {icon}
        </div>
        <div>
          <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
          <p className="text-gray-400 text-xs">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

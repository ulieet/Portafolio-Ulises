"use client"

import React from "react"
import { motion, Variants, Transition } from "framer-motion"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import IntegralAnimation from "@/components/navigation/IntegralAnimation"
import Particulas from "@/components/navigation/particulas"
import { ChevronDown } from "lucide-react"

const roles = [
  "Desarrollador Full Stack",
  "Frontend Developer",
  "Analista en sistemas",
  "Python Developer",
  "Estudiante de ingeniería en sistemas",
]

const transitionConfig: Transition = {
  duration: 1.2,
  ease: "easeInOut",
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ...transitionConfig,
      staggerChildren: 0.6,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}


const Hero: React.FC = () => {
  return (
    <section 
      id="inicio"
      className="relative flex justify-center overflow-hidden p-50 "
    >
 
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-80"></div>

  
      <Particulas />

  
      <motion.div
        className="relative z-10 text-center text-white max-w-4xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
    
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-4"
          variants={itemVariants}
        >
          Ulises Vetere
        </motion.h1>

    
        <motion.div className="mb-6" variants={itemVariants}>
          <TypingAnimation texts={roles} />
        </motion.div>

      
        <motion.div variants={itemVariants}>
          <Separator className="my-8 bg-gray-700 max-w-md mx-auto" />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          variants={itemVariants}
        >
          <Button
            asChild
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            <a href="#proyectos">Ver Proyectos</a>
          </Button>

          <Button asChild variant="secondary">
          <a href="https://www.linkedin.com/in/ulises-v%C3%A9tere-4900b4270/" target="_blank" rel="noopener noreferrer">
            Contacto
          </a>
        </Button>

        </motion.div>

    
        <motion.div variants={itemVariants}>
          <IntegralAnimation />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

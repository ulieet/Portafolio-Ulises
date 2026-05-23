"use client"

import React from "react"
import { motion, Variants, Transition } from "framer-motion"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { Button } from "@/components/ui/button"

const roles = [
  "Systems Analysis Specialist",
  "Full Stack Developer",
  "Python & Logic Enthusiast",
  "Engineering Student",
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
      className="relative flex flex-col items-center justify-center min-h-[85dvh] px-6 text-center py-12 md:py-20 grid-pattern overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto will-change-transform">
        <motion.h1
          className="inline-block text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 md:mb-8 text-gradient leading-tight md:leading-[1.1] pb-2 md:pb-4"
          initial={{ opacity: 0.1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          Ulises Vetere
        </motion.h1>

        <motion.div 
          className="mb-8 md:mb-10"
          initial={{ opacity: 0.1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-sm sm:text-2xl text-muted-foreground/80 font-medium tracking-tight min-h-[4rem] flex items-center justify-center">
            <TypingAnimation texts={roles} />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-full px-8 md:px-10 h-12 md:h-14 text-sm md:text-base font-bold shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <a href="#proyectos">Explorar proyectos</a>
          </Button>

          <Button 
            asChild 
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-full px-8 md:px-10 h-12 md:h-14 text-sm md:text-base font-bold border-border/50 bg-background/50 backdrop-blur-md hover:bg-secondary active:scale-95 transition-all duration-300"
          >
            <a href="https://www.linkedin.com/in/ulises-v%C3%A9tere-4900b4270/" target="_blank" rel="noopener noreferrer">
              Visitar LinkedIn
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

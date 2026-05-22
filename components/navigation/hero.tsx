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
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden !py-0 grid-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
      
      <motion.div
        className="relative z-10 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      

        <motion.h1
          className="text-6xl sm:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-10 text-gradient leading-[1.1] pb-4"
          variants={itemVariants}
        >
          Ulises Vetere
        </motion.h1>

        <motion.div className="mb-14" variants={itemVariants}>
          <div className="text-xl sm:text-3xl text-muted-foreground/80 font-medium tracking-tight">
            <TypingAnimation texts={roles} />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center"
          variants={itemVariants}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 h-14 text-base font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all duration-500"
          >
            <a href="#proyectos">Explorar proyectos</a>
          </Button>

          <Button 
            asChild 
            variant="outline"
            size="lg"
            className="rounded-full px-10 h-14 text-base font-bold border-border/50 bg-background/50 backdrop-blur-md hover:bg-secondary hover:border-foreground/20 transition-all duration-500"
          >
            <a href="https://www.linkedin.com/in/ulises-v%C3%A9tere-4900b4270/" target="_blank" rel="noopener noreferrer">
              Conectar en LinkedIn
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

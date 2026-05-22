"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function ContactSection() {
  const copyEmail = () => {
    navigator.clipboard.writeText("ulisesvetere07@gmail.com")
    toast.success("Email copiado al portapapeles")
  }

  return (
    <section className="container mx-auto px-6 text-center grid-pattern">
      <div className="max-w-2xl mx-auto py-32">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-8">
          // Let's connect
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gradient leading-tight pb-2">¿Tenés un proyecto en mente?</h2>
        <p className="text-muted-foreground mb-12 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
          Estoy disponible para nuevos desafíos y colaboraciones.
          Si necesitás una solución web profesional, no dudes en escribirme.
        </p>

        <div className="flex flex-col items-center gap-6">
          <Button
            asChild
            size="lg"
            className="rounded-full px-12 h-16 text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all duration-500 bg-primary"
          >
            <a href="mailto:ulisesvetere07@gmail.com?subject=Solicitud%20de%20cotización&body=Hola%20Ulises,%0A%0AQuisiera%20solicitar%20una%20cotización%20para...">
              Enviar un mail
            </a>
          </Button>
          
          <button 
            onClick={copyEmail}
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors border-b border-transparent hover:border-foreground/20 pb-0.5"
          >
            ulisesvetere07@gmail.com
          </button>
        </div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface ProjectCarouselProps {
  images: {
    url: string
    description: string
  }[]
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return

      if (e.key === "Escape") {
        setSelectedIndex(null)
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1))
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0))
      }
    }

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex, images.length])

  return (
    <>
      {/* MODAL DE PANTALLA COMPLETA */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Botón Cerrar */}
          <button 
            className="absolute top-6 right-6 md:top-8 md:right-8 text-white/70 hover:text-white transition-all hover:scale-110 bg-black/50 hover:bg-black/80 rounded-full p-2 z-50"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex(null)
            }}
            title="Cerrar (Esc)"
          >
            <X className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Flecha Izquierda */}
          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-all hover:scale-110 bg-black/50 hover:bg-black/80 rounded-full p-2 md:p-3 z-50"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : images.length - 1)
            }}
            title="Anterior (Flecha Izquierda)"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>
          
          {/* Imagen gigante */}
          <img
            src={images[selectedIndex].url}
            alt="Vista ampliada"
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Flecha Derecha */}
          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-all hover:scale-110 bg-black/50 hover:bg-black/80 rounded-full p-2 md:p-3 z-50"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex(selectedIndex < images.length - 1 ? selectedIndex + 1 : 0)
            }}
            title="Siguiente (Flecha Derecha)"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        </div>
      )}

      {/* CARRUSEL NORMAL */}
      <div className="w-full">
        <div className="relative group/carousel">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {images.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="px-2 md:px-0 flex justify-center">
                    <div className="rounded-[1rem] md:rounded-[2rem] overflow-hidden relative transition-all duration-500 w-full">
                      <div className="aspect-[16/10] md:aspect-video lg:aspect-[21/10] w-full flex items-center justify-center bg-transparent">
                        <img
                          src={img.url}
                          alt={`Captura de pantalla ${idx + 1}`}
                          className="w-full h-full object-contain cursor-zoom-in drop-shadow-xl"
                          onClick={() => setSelectedIndex(idx)} 
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 h-14 w-14 border-border/50 bg-background/80 backdrop-blur-md hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100" />
              <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 h-14 w-14 border-border/50 bg-background/80 backdrop-blur-md hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100" />
            </div>
            
            {/* Mobile Arrows */}
            <div className="flex justify-center gap-4 mt-8 md:hidden">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 border-border/50" />
              <CarouselNext className="static translate-y-0 h-12 w-12 border-border/50" />
            </div>
          </Carousel>
        </div>
        
        {/* TEXTO E INDICADORES - VISIBLE PERO SIN CAJA GIGANTE */}
        <div className="mt-10 flex flex-col items-center gap-8">
          
          {/* Descripción dinámica (con número y texto visible) */}
          <div className="px-4 animate-fade-in w-full max-w-3xl" key={current}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              {/* Círculo con el número */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20">
                {current + 1}
              </div>
              
              {/* Texto grande y legible */}
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed tracking-tight">
                {images[current]?.description}
              </p>
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => api?.scrollTo(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-500",
                  current === idx ? "w-10 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                )}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  )
}
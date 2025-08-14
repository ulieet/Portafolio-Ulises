import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contacto" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Listo para comenzar?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Contáctanos hoy mismo y descubre cómo podemos ayudarte</p>
        <Button size="lg" className="text-lg px-8 py-3">
          Contactar Ahora
        </Button>
      </div>
    </section>
  )
}

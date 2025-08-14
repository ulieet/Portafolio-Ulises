import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=32&width=120&text=Logo"
                alt="Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#inicio"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#servicios"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="#contacto"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button variant="default" size="sm">
              Comenzar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

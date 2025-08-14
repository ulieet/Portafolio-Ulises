"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Logo from "./logo"
import NavLinks from "./nav-links"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50  transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />

        {/* Links desktop centrados */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <NavLinks />
        </div>

        {/* Botón mobile */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Menú mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-black/90 backdrop-blur-md rounded-b-lg">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

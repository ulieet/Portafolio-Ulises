"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Logo from "@/components/navigation/logo"
import NavLinks, { navItems } from "@/components/navigation/nav-links"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />

        {/* Links a la derecha en desktop */}
        <div className="hidden md:flex items-center">
          <NavLinks />
        </div>

        {/* Botón de menú móvil */}
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

      {/* Menú móvil */}
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

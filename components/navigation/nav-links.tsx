import Link from "next/link"

export const navItems = [
  { href: "#inicio", label: "inicio" },
  { href: "#about-content", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" }, 
  { href: "#contacto", label: "Contacto" },
  
]

export default function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <div className="hidden md:flex space-x-8 text-white font-light text-right">
      {navItems.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className="text-lg text-white hover:text-blue-400 transition-colors font-light text-left"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

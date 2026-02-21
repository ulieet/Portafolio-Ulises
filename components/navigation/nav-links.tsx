import Link from "next/link"

export const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
]

export default function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <div className="hidden md:flex space-x-8 text-white font-light">
      {navItems.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className="text-lg hover:text-blue-400 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
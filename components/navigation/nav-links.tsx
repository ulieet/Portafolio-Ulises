import Link from "next/link"

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
]

export default function NavLinks() {
  return (
<div className="hidden md:flex items-center space-x-8 text-white font-light text-left">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
      className="text-lg text-white hover:text-blue-400 transition-colors font-light text-left"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

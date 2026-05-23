import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"

export const navItems = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#about", label: "Sobre mí" },
  { href: "/#habilidades", label: "Habilidades" },
  { href: "/#proyectos", label: "Proyectos" },
]

export default function NavLinks({ 
  onNavClick, 
  activeSection 
}: { 
  onNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void,
  activeSection?: string 
}) {
  const router = useRouter()
  const pathname = usePathname()
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavClick) {
      onNavClick(e, href);
    }

    const isHomePage = pathname === "/"
    const isHashLink = href.startsWith("/#")
    
    if (!isHomePage || !isHashLink) {
      // Si no estamos en la home, dejamos que el router maneje la navegación
      router.push(href)
    } else {
      // Si estamos en la home y es un link de anclaje, el smooth scroll ya se manejó o se maneja aquí
      e.preventDefault();
      const targetId = href.split("#")[1]
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="flex items-center relative px-1 py-1 bg-muted/20 md:bg-muted/50 rounded-full overflow-x-auto no-scrollbar scroll-smooth touch-pan-x">
      {navItems.map((link) => {
        const isActive = activeSection === link.href || (activeSection === "" && link.href === "/#inicio");
        return (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className={`relative z-10 px-3.5 md:px-5 py-2.5 md:py-2 text-[11px] md:text-sm font-bold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 touch-manipulation ${
              isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 bg-primary rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
            {link.label}
          </a>
        )
      })}
    </div>
  )
}
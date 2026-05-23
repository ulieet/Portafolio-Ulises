import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, User, Code2, Briefcase, Mail, Sparkles } from "lucide-react"

export const navItems = [
  { href: "/#inicio", label: "Inicio", shortLabel: "Home", icon: Home },
  { href: "/#about", label: "Sobre mí", shortLabel: "Sobre", icon: User },
  { href: "/#habilidades", label: "Habilidades", shortLabel: "Skills", icon: Code2 },
  { href: "/#proyectos", label: "Proyectos", shortLabel: "Proyectos", icon: Briefcase },
  { href: "/#contacto", label: "Contacto", shortLabel: "Mail", icon: Mail },
]

export default function NavLinks({ 
  onNavClick, 
  activeSection,
  className = "",
  itemClassName = ""
}: { 
  onNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void,
  activeSection?: string,
  className?: string,
  itemClassName?: string
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
      router.push(href)
    } else {
      e.preventDefault();
      const targetId = href.split("#")[1]
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className={`flex items-center relative px-0.5 py-0.5 md:px-1 md:py-1 bg-muted/20 md:bg-muted/50 rounded-full overflow-x-auto no-scrollbar scroll-smooth touch-pan-x ${className}`}>
      {navItems.map((link) => {
        const isActive = activeSection === link.href || (activeSection === "" && link.href === "/#inicio");
        const Icon = link.icon;
        return (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className={`relative z-10 px-2.5 md:px-5 py-2 md:py-2 text-[10px] md:text-sm font-bold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 touch-manipulation flex items-center gap-2 ${
              isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            } ${itemClassName}`}
          >
            {isActive && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 bg-primary rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
            {Icon && <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />}
            {link.label}
          </a>
        )
      })}
    </div>
  )
}
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"

export const navItems = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#about", label: "Sobre mí" },
  { href: "/#habilidades", label: "Habilidades" },
  { href: "/#proyectos", label: "Proyectos" },
]

export default function NavLinks({ 
  onLinkClick, 
  activeSection 
}: { 
  onLinkClick?: () => void,
  activeSection?: string 
}) {
  const router = useRouter()
  const pathname = usePathname()
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); 
    
    const isHomePage = pathname === "/"
    const targetId = href.split("#")[1]
    
    if (isHomePage) {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      router.push(href)
    }

    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div className="hidden md:flex items-center relative px-1 py-1 bg-muted/50 rounded-full">
      {navItems.map((link) => {
        const isActive = activeSection === link.href || (activeSection === "" && link.href === "/#inicio");
        return (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className={`relative z-10 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${
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
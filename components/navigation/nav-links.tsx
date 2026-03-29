"use client" 

export const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
]

export default function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); 
    
    const targetId = href.replace(/.*\#/, ""); 
    const elem = document.getElementById(targetId);
    
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div className="hidden md:flex space-x-8 text-white font-light">
      {navItems.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleScroll(e, link.href)}
          className="text-lg hover:text-blue-400 transition-colors cursor-pointer"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
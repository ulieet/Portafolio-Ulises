"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Logo from "@/components/navigation/logo"
import NavLinks, { navItems } from "@/components/navigation/nav-links"
import { usePathname, useRouter } from "next/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("/#inicio")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    
    const isHomePage = pathname === "/"

    if (!isHomePage) {
      if (pathname.startsWith("/proyectos")) {
        setActiveSection("/#proyectos")
      }
      return () => window.removeEventListener("scroll", onScroll)
    }

    // Intersection Observer to track active section
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`/#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sectionIds = ["inicio", "about", "habilidades", "proyectos"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    }
  }, [pathname])

  const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const isHomePage = pathname === "/"
    const targetId = href.split("#")[1]
    
    if (isHomePage) {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(href)
    }
    setIsMobileMenuOpen(false); 
  };

  return (
    <nav
      className={`fixed top-8 left-0 right-0 z-50 transition-all duration-700 mx-auto max-w-fit px-4 py-1.5 rounded-full border border-border/40 glass ${
        isScrolled 
          ? "shadow-2xl shadow-primary/5 -translate-y-2 scale-95" 
          : "scale-100"
      }`}
    >
      <div className="flex items-center gap-6 h-11">
        <Logo />

        {/* Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <NavLinks activeSection={activeSection} />
          <div className="h-6 w-[1px] bg-border/40 mx-2" />
          <ThemeToggle />
        </div>

        {/* Mobile Toggle & Menu */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 p-3 glass rounded-[2rem] shadow-2xl md:hidden min-w-[200px]">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleMobileNav(e, href)}
              className="block px-6 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-2xl transition-all duration-300 text-sm font-medium"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
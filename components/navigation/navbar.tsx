"use client"

import { useState, useEffect, useRef } from "react"
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
  const isManualScrolling = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      // Use a slightly larger threshold and passive listener for performance
      if (window.scrollY > 20) {
        if (!isScrolled) setIsScrolled(true)
      } else {
        if (isScrolled) setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    
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
      rootMargin: "-30% 0px -30% 0px", 
      threshold: [0, 0.1, 0.5]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isManualScrolling.current) return;

      const visibleEntries = entries.filter(e => e.isIntersecting);
      if (visibleEntries.length > 0) {
        const bestEntry = visibleEntries.reduce((prev, curr) => 
          curr.intersectionRatio > prev.intersectionRatio ? curr : prev
        );
        setActiveSection(`/#${bestEntry.target.id}`);
      }
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
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    }
  }, [pathname, isScrolled])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHomePage = pathname === "/"
    const isHashLink = href.startsWith("/#")
    
    if (isHomePage && isHashLink) {
      e.preventDefault();
      
      // Lock observer updates
      isManualScrolling.current = true;
      setActiveSection(href);
      
      const targetId = href.split("#")[1]
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Unlock after scroll finishes
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isManualScrolling.current = false;
      }, 1000);
    }
  };

  return (
    <nav
      className={`fixed top-4 md:top-8 left-0 right-0 z-50 mx-auto w-[92vw] md:w-auto max-w-fit px-3 md:px-6 py-1.5 md:py-2 rounded-full border border-border/40 glass ${
        isScrolled 
          ? "shadow-2xl shadow-primary/5 -translate-y-1" 
          : "translate-y-0"
      }`}
      style={{ transform: "translateZ(0)" }}
    >
      <div className="flex items-center gap-2 md:gap-8 h-12 md:h-14">
        <Logo />

        {/* Navigation & Theme Toggle - Always visible */}
        <div className="flex items-center gap-1 md:gap-4 min-w-0">
          <div className="min-w-0 overflow-hidden flex-1">
            <NavLinks activeSection={activeSection} onNavClick={handleNavClick} />
          </div>
          <div className="h-6 md:h-8 w-[1px] bg-border/40 mx-1 md:mx-2 shrink-0" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
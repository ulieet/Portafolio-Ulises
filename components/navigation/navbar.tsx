"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Logo from "@/components/navigation/logo"
import NavLinks, { navItems } from "@/components/navigation/nav-links"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("/#inicio")
  const isManualScrolling = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
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
      rootMargin: "-45% 0px -45% 0px", // More central focus
      threshold: [0, 0.1]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isManualScrolling.current) return;

      // Find the entry that is most visible
      const visibleEntries = entries.filter(e => e.isIntersecting);
      if (visibleEntries.length > 0) {
        // If multiple, pick the one with the highest intersection ratio
        const bestEntry = visibleEntries.reduce((prev, curr) => 
          curr.intersectionRatio > prev.intersectionRatio ? curr : prev
        );
        setActiveSection(`/#${bestEntry.target.id}`);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sectionIds = ["inicio", "about", "habilidades", "proyectos", "experimentos", "contacto"];
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
      
      isManualScrolling.current = true;
      setActiveSection(href);
      
      const targetId = href.split("#")[1]
      const elem = document.getElementById(targetId);
      if (elem) {
        // Calculate offset to account for navbar height or padding
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = elem.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isManualScrolling.current = false;
      }, 1200); // Slightly longer to ensure scroll finish
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-8 left-0 right-0 z-50 mx-auto max-w-fit px-6 py-2 rounded-full border border-border/40 glass hidden md:flex items-center gap-8 h-14 ${
          isScrolled 
            ? "shadow-2xl shadow-primary/5 -translate-y-1" 
            : "translate-y-0"
        }`}
        style={{ transform: "translateZ(0)" }}
      >
        <Logo />
        <div className="flex items-center gap-4">
          <NavLinks activeSection={activeSection} onNavClick={handleNavClick} />
          <div className="h-8 w-[1px] bg-border/40 mx-2" />
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Top Header (Logo + Theme Toggle only) */}
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-6 py-4 glass border-b border-border/40 backdrop-blur-md">
        <Logo />
        <ThemeToggle />
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-md md:hidden">
        <div className="glass rounded-[2rem] p-2 flex items-center justify-around shadow-2xl border border-border/40 backdrop-blur-xl">
          {navItems.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href || (activeSection === "" && link.href === "/#inicio");
            
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-bg"
                    className="absolute inset-0 bg-primary/10 rounded-2xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon className={`w-5 h-5 ${isActive ? "scale-110" : "scale-100"} transition-transform duration-300`} />
                <span className="text-[9px] font-bold uppercase tracking-tighter">
                  {link.shortLabel}
                </span>
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}

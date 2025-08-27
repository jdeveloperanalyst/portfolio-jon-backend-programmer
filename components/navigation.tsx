"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Sobre", href: "#sobre" },
  { name: "Skills", href: "#skills" },
  { name: "Experiência", href: "#experiencia" },
  { name: "Trilha", href: "#trilha" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("sobre")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <div className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide bg-gradient-to-r from-primary via-purple-400 to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000 bg-clip-text text-transparent hover:animate-none cursor-default">
                Portfólio Jonatas Oliveira
              </div>
              <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-muted-foreground font-light hover:text-primary transition-all duration-500 cursor-default">
                DevOps Pleno & Backend Developer
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className={`text-xs transition-all duration-200 px-3 py-1 hover:scale-105 active:scale-95 ${
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Button>
              ))}
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-xs hover:scale-105 active:scale-95 transition-all duration-200"
              >
                {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
                <span className="ml-1">Menu</span>
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(item.href)}
                    className={`text-sm justify-start transition-all duration-200 px-3 py-2 hover:scale-105 active:scale-95 ${
                      activeSection === item.href.substring(1)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="h-20"></div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
    </>
  )
}

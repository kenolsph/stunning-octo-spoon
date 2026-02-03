import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Command, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
];

interface NavbarProps {
  onCommandOpen?: () => void;
}

export const Navbar = ({ onCommandOpen }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find active section
      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          IA
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="hero"
            size="sm"
            className="ml-1"
            onClick={() => handleNavClick("#contact")}
          >
            Let's Talk
          </Button>
        </nav>

        {/* Keyboard shortcut hint */}
        <button 
          onClick={onCommandOpen}
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-muted-foreground text-sm hover:bg-secondary/50 hover:text-foreground transition-colors cursor-pointer"
        >
          <Command className="w-3.5 h-3.5" />
          <span>Ctrl K</span>
        </button>

        {/* Mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background border-border">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-3 rounded-lg text-left text-base font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="hero"
                className="mt-4"
                onClick={() => handleNavClick("#contact")}
              >
                Let's Talk
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};


import { useState, useEffect, useRef } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
          current = section.getAttribute("id") || "";
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "glass backdrop-blur-xl shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-bold font-heading tracking-tight relative"
        >
          Khoirul<span className="text-gradient font-extrabold">M.</span>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 relative group",
                activeSection === item.href.substring(1)
                  ? "text-primary font-semibold"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-x-1/2 transition-all duration-300",
                activeSection === item.href.substring(1) ? "w-1/2" : "group-hover:w-1/3"
              )}></span>
            </a>
          ))}
          
          <div className="ml-3">
            <ThemeSwitcher />
          </div>
          
          <Button asChild size="sm" className="ml-3 font-medium bg-gradient-to-r from-primary to-secondary hover:shadow-glow">
            <a href="#contact">Hire Me</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ThemeSwitcher />
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-x-0 top-[60px] glass border-b border-border/40 transition-all duration-300 ease-in-out z-50 md:hidden",
        mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <div className="container mx-auto p-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-3 text-base font-medium rounded-md transition-all relative",
                activeSection === item.href.substring(1)
                  ? "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-semibold"
                  : "text-foreground/70 hover:text-foreground hover:bg-accent/25"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button asChild className="mt-2 font-medium bg-gradient-to-r from-primary to-secondary">
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Hire Me</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

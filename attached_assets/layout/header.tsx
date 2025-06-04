import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "news", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Header height in pixels
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Startseite" },
    { id: "about", label: "Das sind wir" },
    { id: "news", label: "Neuigkeiten" },
    { id: "services", label: "Leistungsumfang" },
    { id: "contact", label: "Kontakt" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="/logo.png"
                alt="TiuS Alltagshelden Logo"
                className="h-12 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors font-medium ${
                  activeSection === item.id
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-white"
            >
              Kontakt aufnehmen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-primary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 transition-colors font-medium ${
                    activeSection === item.id
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                >
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

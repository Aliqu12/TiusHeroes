import { Heart } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
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
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo.png"
                alt="TiuS Alltagshelden Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professionelle Alltagshilfe für Senioren und Menschen mit Beeinträchtigungen in Hannover und Umgebung. 
              Mit Herz, Erfahrung und Zuverlässigkeit stehen wir Ihnen zur Seite.
            </p>
           
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Schnellzugriff</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Startseite
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Das sind wir
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("news")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Neuigkeiten
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Leistungsumfang
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>{CONTACT_INFO.address.full}</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-primary"></i>
                <div>
                  <div>{CONTACT_INFO.phone.display}</div>
                  <div className="text-sm">Mobil: {CONTACT_INFO.mobile.display}</div>
                  <div className="text-sm">Fax: {CONTACT_INFO.fax}</div>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-primary"></i>
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            <p>&copy; 2023 TiuS Alltagshelden. Alle Rechte vorbehalten.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#impressum" className="text-gray-400 hover:text-white transition-colors">
              Impressum
            </a>
            <a href="#datenschutz" className="text-gray-400 hover:text-white transition-colors">
              Datenschutz
            </a>
            <a href="#agb" className="text-gray-400 hover:text-white transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

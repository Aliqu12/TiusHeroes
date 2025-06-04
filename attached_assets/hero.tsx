import { Button } from "@/components/ui/button";
import { Shield, Clock, Heart } from "lucide-react";

export default function HeroSection() {
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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Ihre vertrauensvollen
                <span className="text-blue-400"> Alltagshelden</span>
                <br />in Hannover
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl">
                Professionelle Unterstützung für Senioren und Menschen mit Beeinträchtigungen. 
                Wir helfen Ihnen dabei, Ihren Alltag selbstbestimmt und würdevoll zu gestalten.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Unsere Leistungen
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-[#ffffff29]"
              >
                Beratung vereinbaren
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold">Versichert & zertifiziert</div>
                  <div className="text-gray-300 text-sm">Alle Qualifikationen geprüft</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold">Sicherheitsanruf-Service</div>
                  <div className="text-gray-300 text-sm">Ihr Wohlbefinden zählt</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-white font-semibold">Mit Herz & Erfahrung</div>
                  <div className="text-gray-300 text-sm">15+ Jahre Betreuung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

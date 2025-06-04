import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import NewsSection from "@/components/sections/news";
import ServicesSection from "@/components/sections/services";
import ContactSection from "@/components/sections/contact";
import { Users, HeartHandshake, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Ihr Partner für einen selbstbestimmten Alltag
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bei TiuS Alltagshelden verstehen wir, dass jeder Mensch das Recht auf ein würdevolles und selbstbestimmtes Leben hat. 
                Unsere erfahrenen Mitarbeiter unterstützen Sie dabei, Ihren Alltag nach Ihren Wünschen zu gestalten – 
                sei es bei der Haushaltsführung, persönlichen Betreuung oder bei Terminen und Besorgungen.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 primary-light rounded-full flex items-center justify-center mx-auto">
                    <Users className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Erfahrenes Team</h3>
                  <p className="text-gray-600">Qualifizierte Mitarbeiter mit Herz und langjähriger Erfahrung in der Betreuung</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 primary-light rounded-full flex items-center justify-center mx-auto">
                    <HeartHandshake className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Individuelle Betreuung</h3>
                  <p className="text-gray-600">Maßgeschneiderte Lösungen, die sich an Ihren persönlichen Bedürfnissen orientieren</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 primary-light rounded-full flex items-center justify-center mx-auto">
                    <Clock className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Zuverlässige Hilfe</h3>
                  <p className="text-gray-600">Pünktlich, verlässlich und immer mit einem offenen Ohr für Ihre Anliegen</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutSection />
        <NewsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

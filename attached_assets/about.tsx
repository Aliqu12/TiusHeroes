import { GraduationCap, Award, Star, Heart, Shield, TrendingUp, Settings, Handshake } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Das sind wir</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lernen Sie das Gründerpaar von TiuS Alltagshelden kennen. Mit Herz, Erfahrung und Leidenschaft 
            für die Betreuung stehen Sarah und Timor Qureshi für Qualität und Vertrauen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Sarah Qureshi */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-12">
              <img
                src="/sarah.png"
                alt="Sarah Qureshi - Gründerin und Geschäftsführerin"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Qureshi</h3>
              <p className="text-primary font-medium mb-4">Gründerin & Geschäftsführerin</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Als examinierte Altenpflegerin und Pflegedienstleitung bringe ich über 15 Jahre Erfahrung 
                in der Betreuung und Pflege mit. Meine Leidenschaft gilt der würdevollen Begleitung von 
                Menschen in allen Lebensphasen. Bei TiuS Alltagshelden setze ich auf persönliche Beziehungen 
                und individuelle Betreuungskonzepte.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="text-primary" size={16} />
                  <span className="text-sm text-gray-600">Examinierte Altenpflegerin</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="text-primary" size={16} />
                  <span className="text-sm text-gray-600">Pflegedienstleitung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="text-primary" size={16} />
                  <span className="text-sm text-gray-600">15+ Jahre Erfahrung</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timor Qureshi */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-12">
              <img
                src="/tim.png"
                alt="Timour Qureshi - Mitgründer und Betriebsleiter"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Timor Qureshi</h3>
              <p className="text-primary font-medium mb-4">Mitgründer & Betriebsleiter</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Mit meinem Hintergrund im Gesundheitswesen und der Betriebswirtschaft sorge ich dafür, 
                dass unsere Dienstleistungen höchsten Qualitätsstandards entsprechen. Mein Fokus liegt 
                auf der kontinuierlichen Weiterentwicklung unserer Services und der Zufriedenheit 
                unserer Kunden und Mitarbeiter.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-primary" size={16} />
                  <span className="text-sm text-gray-600">Betriebswirtschaft</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="text-primary" size={16} />
                  <span className="text-sm text-gray-600">Qualitätsmanagement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Handshake className="text-primary" size={16} />
                  <span className="text-sm text-gray-600">Kundenbetreuung</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Unsere Werte und Philosophie</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 primary-light rounded-full flex items-center justify-center mx-auto">
                <Heart className="text-primary" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Menschlichkeit</h4>
              <p className="text-gray-600">Jeder Mensch verdient Respekt, Würde und individuelle Betreuung nach seinen Bedürfnissen.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 primary-light rounded-full flex items-center justify-center mx-auto">
                <Shield className="text-primary" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Vertrauen</h4>
              <p className="text-gray-600">Durch Transparenz, Zuverlässigkeit und offene Kommunikation bauen wir langfristige Beziehungen auf.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 primary-light rounded-full flex items-center justify-center mx-auto">
                <Award className="text-primary" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Qualität</h4>
              <p className="text-gray-600">Kontinuierliche Weiterbildung und hohe Standards sichern die bestmögliche Betreuungsqualität.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

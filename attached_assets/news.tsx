import { Button } from "@/components/ui/button";

export default function NewsSection() {
  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Neuigkeiten</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bleiben Sie über aktuelle Entwicklungen, Stellenangebote und wichtige Informationen 
            rund um unsere Dienstleistungen informiert.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News Article */}
          <div className="lg:col-span-2 primary-light rounded-2xl overflow-hidden shadow-lg">
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Aktuell</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Kostenübernahme durch Krankenkassen - Ihre Vorteile
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Viele unserer Leistungen können über die Krankenkasse oder Pflegekasse abgerechnet werden. 
                Seit dem 05. Februar 2021 sind wir ein zertifizierter Anbieter für hauswirtschaftliche Versorgungs- und Betreuungsleistungen. Dadurch sind wir bei sämtlichen Krankenkassen gelistet und berechtigen zur Abrechnung der monatlichen Entlastungsleistungen in Höhe von 125 €.
              </p>
     
            </div>
          </div>

          {/* Sidebar News */}
          <div className="space-y-6">
            {/* Job Opening */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Stellenausschreibung</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Pflegefachkraft (m/w/d) gesucht
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Verstärken Sie unser Team! Wir suchen eine erfahrene Pflegefachkraft für unsere Alltagsbetreuung in Hannover.
              </p>   
              <a
                href={`mailto:${"tius-alltagshelden@web.de"}`}>
                <Button variant="link" className="text-primary p-0 h-auto text-sm">
                  Jetzt bewerben →

                </Button>
              </a>
           
            </div>


            {/* Important Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-3">
                <i className="fas fa-exclamation-triangle text-yellow-600"></i>
                <span className="font-medium text-yellow-800">Wichtiger Hinweis</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Ferienzeiten 2024
              </h4>
              <p className="text-gray-600 text-sm">
                Unsere Bürozeiten während der Feiertage. 
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from "lucide-react";
import { Link } from "wouter";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2" size={16} />
                Zurück zur Startseite
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Shield className="text-primary" size={24} />
              <h1 className="text-2xl font-bold text-gray-900">Datenschutzerklärung</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Lock className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Datenschutz bei TiuS Alltagshelden</h2>
                  <p className="text-gray-600">
                    Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie über die Erhebung und Verarbeitung Ihrer Daten bei der Nutzung unseres Kontaktformulars.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verantwortlicher */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Verantwortlicher</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gray-900">TiuS Alltagshelden</p>
                <p className="text-gray-600">Lammstraße 2</p>
                <p className="text-gray-600">30161 Hannover</p>
                <p className="text-gray-600 mt-2">E-Mail: tius-alltagshelden@web.de</p>
                <p className="text-gray-600">Telefon: 0511 - 219 59 161</p>
              </div>
            </CardContent>
          </Card>

          {/* Erhebung und Verarbeitung */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-4">
                <Eye className="text-primary flex-shrink-0 mt-1" size={20} />
                <h2 className="text-xl font-bold text-gray-900">Erhebung und Verarbeitung personenbezogener Daten</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Wenn Sie uns über das Kontaktformular auf dieser Website eine Nachricht senden, werden folgende personenbezogene Daten erhoben:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Vorname und Nachname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Betreff und Nachrichteninhalt</li>
              </ul>
              <p className="text-gray-600">
                Diese Daten benötigen wir ausschließlich, um Ihre Anfrage zu bearbeiten und mit Ihnen in Kontakt treten zu können.
              </p>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-medium text-blue-900 mb-2">Verwendung von Formspree</h3>
                <p className="text-blue-800 text-sm">
                  Unser Kontaktformular nutzt den Dienst Formspree (formspree.io) zur Übermittlung Ihrer Nachrichten. 
                  Ihre Daten werden dabei an Formspree weitergeleitet und von dort an unsere E-Mail-Adresse gesendet. 
                  Formspree unterliegt den europäischen Datenschutzbestimmungen. Weitere Informationen finden Sie in der  
                  <a href="https://formspree.io/legal/privacy-policy/" target="_blank" className="underline hover:text-blue-600">
                    Datenschutzerklärung von Formspree
                  </a>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Rechtsgrundlage */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Rechtsgrundlage der Verarbeitung</h2>
              <p className="text-gray-600">
                Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO 
                (Vertragserfüllung bzw. vorvertragliche Maßnahmen), da die Daten für die Bearbeitung 
                Ihrer Anfrage erforderlich sind.
              </p>
            </CardContent>
          </Card>

          {/* Speicherdauer */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Speicherdauer</h2>
              <p className="text-gray-600">
                Ihre Daten werden nur so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage 
                erforderlich ist oder gesetzliche Aufbewahrungspflichten dies verlangen. Nach 
                Abschluss der Bearbeitung werden die Daten gelöscht, sofern keine gesetzlichen 
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </CardContent>
          </Card>

          {/* Weitergabe an Dritte */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Weitergabe an Dritte</h2>
              <p className="text-gray-600">
                Eine Weitergabe Ihrer Daten an Dritte findet nicht statt, es sei denn, wir sind 
                gesetzlich dazu verpflichtet oder Sie haben ausdrücklich eingewilligt. Ausgenommen 
                hiervon ist die technische Übermittlung über Formspree, die zur Funktionalität des 
                Kontaktformulars erforderlich ist.
              </p>
            </CardContent>
          </Card>

          {/* Ihre Rechte */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-4">
                <UserCheck className="text-primary flex-shrink-0 mt-1" size={20} />
                <h2 className="text-xl font-bold text-gray-900">Ihre Rechte</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Sie haben das Recht, jederzeit Auskunft über die zu Ihrer Person gespeicherten Daten 
                zu erhalten sowie das Recht auf:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen die Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
              </ul>
              <p className="text-gray-600">
                Wenden Sie sich hierzu bitte an die oben genannten Kontaktdaten.
              </p>
            </CardContent>
          </Card>

          {/* Sicherheit */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Sicherheit</h2>
              <p className="text-gray-600">
                Wir verwenden technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten 
                vor unbefugtem Zugriff zu schützen (z. B. TLS/SSL-Verschlüsselung auf der Website).
              </p>
            </CardContent>
          </Card>

          {/* Widerspruch gegen Werbe-E-Mails */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Widerspruch gegen Werbe-E-Mails</h2>
              <p className="text-gray-600">
                Die Nutzung der im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur 
                Übersendung von nicht ausdrücklich angeforderter Werbung wird hiermit ausdrücklich 
                widersprochen.
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Stand dieser Datenschutzerklärung: {new Date().toLocaleDateString('de-DE')}
              </p>
              <Link href="/">
                <Button>
                  Zurück zur Startseite
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
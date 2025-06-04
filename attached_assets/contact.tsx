import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nehmen Sie unverbindlich Kontakt mit uns auf. Wir beraten Sie gerne und erstellen Ihnen ein individuelles Angebot.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Adresse</p>
                    <p className="text-gray-600">
                      {CONTACT_INFO.address.street}<br />
                      {CONTACT_INFO.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Telefon</p>
                    <div className="space-y-1">
                      <p className="text-gray-600">
                        <a href={`tel:${CONTACT_INFO.phone.link}`} className="hover:text-primary">
                          {CONTACT_INFO.phone.display}
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a href={`tel:${CONTACT_INFO.mobile.link}`} className="hover:text-primary">
                          {CONTACT_INFO.mobile.display}
                        </a>
                      </p>
                      <p className="text-gray-600">
                        Fax: {CONTACT_INFO.fax}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">E-Mail</p>
                    <p className="text-gray-600">
                      <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary">
                        {CONTACT_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Erreichbarkeit</p>
                    <div className="text-gray-600 space-y-1">
                      <p>{CONTACT_INFO.hours.weekdays}</p>
                      <p>{CONTACT_INFO.hours.saturday}</p>
                      <p>{CONTACT_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form with Formspree */}
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nachricht senden</h3>
                
                {/* WICHTIG: Ersetzen Sie YOUR_FORM_ID durch Ihre echte Formspree Form-ID */}
                <form action="https://formspree.io/f/xyzjyqyw" method="POST" className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Vorname *
                      </label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nachname *
                      </label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon (optional)
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Betreff
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Nachricht *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full"
                      placeholder="Beschreiben Sie uns Ihren Bedarf..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                      <a href="/datenschutz" target="_blank" className="text-primary hover:underline">
                        Datenschutzerklärung
                      </a>{" "}
                      zu. *
                    </label>
                  </div>

                  <Button type="submit" className="w-full">
                    Nachricht senden
                  </Button>
                </form>

                
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
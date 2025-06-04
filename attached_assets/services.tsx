import { Home, Users, UserCheck, Phone, Check } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import FAQ from "@/components/ui/faq";

const iconMap = {
  Home,
  Users,
  UserCheck,
  Phone,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Unser Leistungsumfang</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wir bieten Ihnen ein umfassendes Spektrum an Dienstleistungen, die darauf ausgerichtet sind, 
            Ihren Alltag zu erleichtern und Ihre Lebensqualität zu verbessern.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="text-green-500 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Häufig gestellte Fragen</h3>
          <FAQ />
        </div>
      </div>
    </section>
  );
}

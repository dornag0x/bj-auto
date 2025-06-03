import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ContactForm from "@/components/contact-form"
import GoogleMap from "@/components/google-map"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-12">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Besoin d'un dépannage d'urgence ou d'un enlèvement d'épave ? Contactez-nous 24h/24 pour une intervention
              rapide dans toute la Charente.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <GoogleMap />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h2 className="text-2xl font-bold text-white">Zone d'intervention</h2>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Coordonnées</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-automotive-50 p-3 rounded-full">
                            <PhoneCall className="h-6 w-6 text-automotive-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Urgence 24h/24</h4>
                            <p className="text-lg">
                              <a href="tel:0744986560" className="hover:text-automotive-600 transition-colors">
                                07 44 98 65 60
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-automotive-50 p-3 rounded-full">
                            <Mail className="h-6 w-6 text-automotive-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Email</h4>
                            <p className="text-lg">
                              <a
                                href="mailto:contact@bj-depannage.fr"
                                className="hover:text-automotive-600 transition-colors"
                              >
                                contact@bj-depannage.fr
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-automotive-50 p-3 rounded-full">
                            <MapPin className="h-6 w-6 text-automotive-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Adresse</h4>
                            <p className="text-lg">39 T RUE DU MOULIN, 16210 CHALAIS</p>
                            <h4 className="font-medium mt-2">Zone d'intervention</h4>
                            <p className="text-lg">Charente (16) et départements limitrophes</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Disponibilités</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-automotive-50 p-3 rounded-full">
                            <Clock className="h-6 w-6 text-automotive-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">Service d'urgence</h4>
                            <div className="space-y-2 mt-2">
                              <div className="flex justify-between">
                                <span className="font-medium text-automotive-600">Dépannage</span>
                                <span className="font-medium text-automotive-600">24h/24 - 7j/7</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Épaviste</span>
                                <span>Lun-Sam 8h-18h</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Diagnostic</span>
                                <span>Lun-Ven 9h-17h</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Transport</span>
                                <span>Sur rendez-vous</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
                        <div className="flex space-x-4">
                          <a
                            href="https://www.facebook.com/people/Jonathan-renovation/100082970780823"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-automotive-50 p-3 rounded-full hover:bg-automotive-100 transition-colors"
                          >
                            <svg
                              className="h-6 w-6 text-automotive-600"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Facebook</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Demande d'intervention</h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">L'enlèvement d'épave est-il vraiment gratuit ?</h3>
                  <p className="text-muted-foreground">
                    Oui, l'enlèvement d'épaves est 100% gratuit. Nous nous occupons également de toutes les démarches
                    administratives et vous fournissons le certificat de destruction.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Intervenez-vous vraiment 24h/24 ?</h3>
                  <p className="text-muted-foreground">
                    Oui, notre service de dépannage d'urgence est disponible 24h/24 et 7j/7, y compris les week-ends et
                    jours fériés pour toutes les pannes urgentes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Quels types de véhicules transportez-vous ?</h3>
                  <p className="text-muted-foreground">
                    Nous transportons tous types de véhicules : voitures, motos, engins de chantier, pelleteuses,
                    tracteurs, véhicules de collection, etc.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Le diagnostic automobile est-il payant ?</h3>
                  <p className="text-muted-foreground">
                    Le diagnostic de base est facturé, mais si vous effectuez la réparation chez nous ou un de nos
                    partenaires, le coût du diagnostic est déduit de la facture.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />

      {/* Mobile Call Button */}
      <div className="fixed bottom-6 right-6 md:hidden z-30">
        <a
          href="tel:0744986560"
          className="bg-automotive-600 hover:bg-automotive-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        >
          <PhoneCall className="h-6 w-6" />
        </a>
      </div>
    </div>
  )
}

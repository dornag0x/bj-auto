import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneCall, CheckCircle } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import BeforeAfterSimple from "@/components/before-after-simple"
import ProjectGallery from "@/components/project-gallery"
import ServiceTabs from "@/components/service-tabs"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/depannage-voit.png"
              alt="Dépannage automobile"
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
          <div className="container relative z-10 py-16 md:py-24 lg:py-32">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">BJ AUTO</h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 drop-shadow-lg">
                Spécialiste dépannage automobile & épaviste
              </p>
              <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 drop-shadow-md">
                Dépannage 24h/24 - Enlèvement d'épaves gratuit - Diagnostic automobile - Transport de véhicules
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-automotive-600 hover:bg-automotive-700 text-white">
                  <a href="/contact">Demander un devis gratuit</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white hover:bg-white/20 border-white"
                >
                  <a href="tel:0744986560">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    07 44 98 65 60
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Nos Interventions</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez nos services de dépannage et d'enlèvement d'épaves dans toute la Charente
              </p>
            </div>

            <div className="max-w-5xl mx-auto px-4">
              <BeforeAfterSimple />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-16">
          <div className="container px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Nos Services</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Des solutions complètes pour tous vos besoins de dépannage et d'enlèvement de véhicules
              </p>
            </div>

            <ServiceTabs />
          </div>
        </section>

        {/* Project Gallery */}
        <section id="realisations" className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Nos Interventions</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez nos dernières interventions en Charente
              </p>
            </div>

            <ProjectGallery />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-automotive-100 rounded-tl-lg z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-16 md:w-24 h-16 md:h-24 bg-automotive-100 rounded-br-lg z-0"></div>
                <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/poignee-main.avif"
                    alt="BJ AUTO au travail"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Pourquoi choisir BJ AUTO ?</h2>
                <div className="space-y-3 md:space-y-4">
                  <FeatureItem text="Service de dépannage 24h/24 et 7j/7 dans toute la Charente" />
                  <FeatureItem text="Enlèvement d'épaves gratuit (voiture, moto, quad, scooter, bateau)" />
                  <FeatureItem text="Diagnostic automobile professionnel pour défauts voyants moteur" />
                  <FeatureItem text="Transport de véhicules et engins (pelleteuse, tracteurs, etc.)" />
                  <FeatureItem text="Intervention rapide jusqu'au garage ou à domicile" />
                  <FeatureItem text="Devis gratuit et tarifs transparents" />
                </div>
                <div className="mt-6 md:mt-8">
                  <Button asChild className="bg-automotive-600 hover:bg-automotive-700">
                    <a href="/contact">Contactez-nous</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="temoignages" className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Ce que disent nos clients</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                La satisfaction de nos clients est notre priorité
              </p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-automotive-600 text-white">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Besoin d'un dépannage ?</h2>
              <p className="text-base md:text-lg mb-6 md:mb-8">
                Contactez-nous dès maintenant pour un dépannage rapide ou un enlèvement d'épave gratuit.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-automotive-600 hover:bg-gray-100">
                  <a href="/contact">Demander un devis</a>
                </Button>
                <Button asChild size="lg" className="bg-white text-automotive-600 hover:bg-gray-100">
                  <a href="tel:0744986560">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    <span>Appeler maintenant</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
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

// Component for feature items
function FeatureItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-automotive-600 flex-shrink-0 mt-0.5" />
      <p className="text-gray-700">{text}</p>
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    id: "epaviste",
    title: "Épaviste Agréé",
    description:
      "Enlèvement gratuit d'épaves de tous types de véhicules. Service rapide et démarches administratives incluses.",
    image: "/epaviste.jpg",
    features: [
      "Enlèvement d'épaves 100% gratuit",
      "Voitures, motos, quads, scooters",
      "Bateaux et voitures sans permis",
      "Véhicules accidentés ou en panne",
      "Certificat de destruction officiel",
      "Démarches préfecture incluses",
    ],
  },
  {
    id: "depannage",
    title: "Dépannage 24h/24",
    description:
      "Service d'urgence disponible jour et nuit pour tous types de pannes. Intervention rapide partout en Charente.",
    image: "/depannage-voit.png",
    features: [
      "Intervention 24h/24 et 7j/7",
      "Dépannage sur autoroute",
      "Remorquage jusqu'au garage",
      "Panne de batterie, crevaison",
      "Panne d'essence, clés enfermées",
      "Assistance à domicile",
    ],
  },
  {
    id: "diagnostic",
    title: "Diagnostic Moteur",
    description:
      "Diagnostic électronique professionnel pour identifier les pannes et défauts voyants moteur de votre véhicule.",
    image: "/diag.jpg",
    features: [
      "Lecture des codes défauts OBD",
      "Analyse voyants tableau de bord",
      "Diagnostic moteur complet",
      "Test systèmes électroniques",
      "Rapport détaillé fourni",
      "Conseils de réparation",
    ],
  },
  {
    id: "transport",
    title: "Transport Spécialisé",
    description: "Transport et convoyage de véhicules, engins de chantier et matériel lourd avec équipement adapté.",
    image: "/transport.webp",
    features: [
      "Transport de pelleteuses",
      "Convoyage d'engins de chantier",
      "Véhicules de collection",
      "Tracteurs et matériel agricole",
      "Transport longue distance",
      "Chargement et déchargement sécurisé",
    ],
  },
]

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(services[0].id)

  return (
    <Tabs defaultValue={services[0].id} onValueChange={setActiveTab} className="w-full">
      <div className="flex justify-center mb-6 md:mb-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-1">
          {services.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.id}
              className={`py-2 md:py-3 text-xs md:text-sm ${activeTab === service.id ? "data-[state=active]:bg-automotive-600 data-[state=active]:text-white" : ""}`}
            >
              {service.title.split(" ")[0]}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {services.map((service) => (
        <TabsContent key={service.id} value={service.id} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">{service.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-automotive-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-automotive-600 hover:bg-automotive-700">
                <a href="/contact">
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="absolute -top-4 -right-4 w-16 md:w-24 h-16 md:h-24 bg-automotive-100/50 rounded-tr-lg z-0 hidden md:block"></div>
              <div className="absolute -bottom-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-automotive-100/50 rounded-bl-lg z-0 hidden md:block"></div>
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <div className="aspect-[4/3] relative">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

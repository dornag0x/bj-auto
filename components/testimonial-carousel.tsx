"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marie D.",
    location: "Angoulême",
    text: "Service de dépannage très rapide ! Ma voiture est tombée en panne sur l'autoroute et ils sont arrivés en moins de 30 minutes. Personnel professionnel et tarifs corrects. Je recommande !",
    rating: 5,
  },
  {
    id: 2,
    name: "Pierre L.",
    location: "Cognac",
    text: "Enlèvement d'épave impeccable. Mon vieille voiture qui ne roulait plus a été enlevée gratuitement en quelques heures. Toutes les démarches administratives ont été prises en charge. Parfait !",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophie M.",
    location: "Ruffec",
    text: "Diagnostic automobile très précis. Le voyant moteur de ma voiture s'allumait sans cesse. Grâce à leur diagnostic, j'ai pu réparer le problème rapidement. Service de qualité !",
    rating: 5,
  },
  {
    id: 4,
    name: "Jean-Claude B.",
    location: "Jarnac",
    text: "Transport de ma pelleteuse effectué avec grand professionnalisme. Matériel adapté et chauffeur expérimenté. La livraison s'est parfaitement déroulée. Je referai appel à eux !",
    rating: 5,
  },
  {
    id: 5,
    name: "Isabelle T.",
    location: "Barbezieux",
    text: "Panne de batterie un dimanche matin, ils sont intervenus rapidement malgré le week-end. Service 24h/24 vraiment efficace. Prix raisonnable pour un dépannage d'urgence.",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState([])

  const updateVisibleTestimonials = () => {
    const windowWidth = window.innerWidth
    let count = 1

    if (windowWidth >= 1024) {
      count = 3
    } else if (windowWidth >= 768) {
      count = 2
    }

    const indices = []
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % testimonials.length
      indices.push(index)
    }

    setVisibleTestimonials(indices.map((index) => testimonials[index]))
  }

  useEffect(() => {
    updateVisibleTestimonials()
    window.addEventListener("resize", updateVisibleTestimonials)

    return () => {
      window.removeEventListener("resize", updateVisibleTestimonials)
    }
  }, [currentIndex])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden gap-6">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 transition-all duration-300"
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 text-automotive-600">
                  <Quote className="h-8 w-8 rotate-180" />
                </div>
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={star <= testimonial.rating ? "#2563eb" : "#e2e8f0"}
                        className="mr-1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-gray-700 mb-4">"{testimonial.text}"</p>
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" className="rounded-full" onClick={handlePrevious}>
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Précédent</span>
        </Button>

        <Button variant="outline" size="icon" className="rounded-full" onClick={handleNext}>
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Suivant</span>
        </Button>
      </div>
    </div>
  )
}

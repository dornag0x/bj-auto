"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Rénovation de toiture",
    description: "Nettoyage et traitement d'une toiture en tuiles",
    image: "/before-roof.webp",
  },
  {
    id: 2,
    title: "Rénovation intérieure",
    description: "Rénovation complète d'une chambre",
    image: "/after-room.webp",
  },
  {
    id: 3,
    title: "Façade extérieure",
    description: "Nettoyage et peinture d'une façade",
    image: "/facade-house.webp",
  },
  {
    id: 4,
    title: "Travaux de toiture",
    description: "Installation de gouttières et zinguerie",
    image: "/roof-view.webp",
  },
]

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleProjects, setVisibleProjects] = useState([])
  const [visibleCount, setVisibleCount] = useState(1)

  const updateVisibleProjects = () => {
    const windowWidth = window.innerWidth
    let count = 1

    if (windowWidth >= 1024) {
      count = 3
    } else if (windowWidth >= 768) {
      count = 2
    }

    setVisibleCount(count)

    const indices = []
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % projects.length
      indices.push(index)
    }

    setVisibleProjects(indices.map((index) => projects[index]))
  }

  useEffect(() => {
    updateVisibleProjects()
    window.addEventListener("resize", updateVisibleProjects)

    return () => {
      window.removeEventListener("resize", updateVisibleProjects)
    }
  }, [currentIndex])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden gap-4 md:gap-6">
        {visibleProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className={`w-full ${
              visibleCount === 2 ? "md:w-1/2" : "md:w-1/2 lg:w-1/3"
            } flex-shrink-0 transition-all duration-300`}
          >
            <Card className="h-full overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-bold text-lg mb-1 md:mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{project.description}</p>
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

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-[#4c3d78]" : "bg-gray-300"
            }`}
            aria-label={`Voir le projet ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

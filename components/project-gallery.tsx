"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    category: "epaviste",
    title: "Enlèvement d'épave",
    description: "Enlèvement gratuit d'une voiture accidentée",
    image: "/epaviste.jpg",
  },
  {
    id: 2,
    category: "depannage",
    title: "Dépannage d'urgence",
    description: "Intervention nocturne pour panne de batterie",
    image: "/urgence.webp",
  },
  {
    id: 3,
    category: "diagnostic",
    title: "Diagnostic moteur",
    description: "Analyse complète des codes défauts",
    image: "/diag.jpg",
  },
  {
    id: 4,
    category: "transport",
    title: "Transport d'engin",
    description: "Convoyage d'une pelleteuse sur chantier",
    image: "/engin.webp",
  },
  {
    id: 5,
    category: "epaviste",
    title: "Enlèvement moto",
    description: "Récupération d'une moto hors d'usage",
    image: "/moto.jpg",
  },
  {
    id: 6,
    category: "depannage",
    title: "Remorquage autoroute",
    description: "Dépannage sur A10 avec remorquage",
    image: "/apres-lol.jpg",
  },
]

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [open, setOpen] = useState(false)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setOpen(true)
  }

  return (
    <>
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="epaviste">Épaviste</TabsTrigger>
            <TabsTrigger value="depannage">Dépannage</TabsTrigger>
            <TabsTrigger value="diagnostic">Diagnostic</TabsTrigger>
            <TabsTrigger value="transport">Transport</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => handleProjectClick(project)} />
            ))}
          </div>
        </TabsContent>

        {["epaviste", "depannage", "diagnostic", "transport"].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} onClick={() => handleProjectClick(project)} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden">
          {selectedProject && (
            <div>
              <div className="relative aspect-video">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-white bg-black/20 hover:bg-black/40"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-muted-foreground">{selectedProject.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

function ProjectCard({ project, onClick }) {
  return (
    <div
      className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4">
        <h3 className="font-bold group-hover:text-automotive-600 transition-colors">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
    </div>
  )
}

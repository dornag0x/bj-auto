"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">Demande envoyée !</h3>
        <p className="text-muted-foreground mb-6">
          Merci pour votre demande. Nous vous contacterons dans les plus brefs délais.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Envoyer une nouvelle demande
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Prénom</Label>
          <Input id="firstName" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Nom</Label>
          <Input id="lastName" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Téléphone</Label>
        <Input id="phone" type="tel" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service souhaité</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez un service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="epaviste">Épaviste - Enlèvement d'épave</SelectItem>
            <SelectItem value="depannage">Dépannage automobile</SelectItem>
            <SelectItem value="diagnostic">Diagnostic automobile</SelectItem>
            <SelectItem value="transport">Transport de véhicule</SelectItem>
            <SelectItem value="remorquage">Remorquage</SelectItem>
            <SelectItem value="autre">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Décrivez votre besoin..." className="min-h-[120px]" required />
      </div>

      <Button type="submit" className="w-full bg-automotive-600 hover:bg-automotive-700" disabled={isSubmitting}>
        {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
      </Button>
    </form>
  )
}

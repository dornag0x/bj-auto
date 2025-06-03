"use client"

import { useEffect, useRef } from "react"

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Créer un élément iframe pour la carte Google Maps
    const iframe = document.createElement("iframe")
    iframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.3176860291187!2d0.0673371!3d45.2726889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ff0e2a8c4f0001%3A0x4d0cfa9c11eb8f86!2s39%20Rue%20du%20Moulin%2C%2016210%20Chalais!5e0!3m2!1sfr!2sfr!4v1746978481024!5m2!1sfr!2sfr"
    iframe.width = "100%"
    iframe.height = "100%"
    iframe.style.border = "0"
    iframe.allowFullscreen = true
    iframe.loading = "lazy"
    iframe.referrerPolicy = "no-referrer-when-downgrade"

    // Vider le conteneur et ajouter l'iframe
    if (mapRef.current) {
      mapRef.current.innerHTML = ""
      mapRef.current.appendChild(iframe)
    }

    return () => {
      // Nettoyer l'iframe lors du démontage du composant
      if (mapRef.current) {
        mapRef.current.innerHTML = ""
      }
    }
  }, [])

  return (
    <div ref={mapRef} className="w-full h-full">
      {/* L'iframe sera injecté ici */}
    </div>
  )
}

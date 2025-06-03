"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col overflow-y-auto">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-white p-0.5">
            <div className="w-full h-full relative scale-[1.15]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202025-05-11%20a%CC%80%2020.06.24-aPo22LGDlhe3H43mU4HTQouJ9GPtxC.png"
                alt="BJ BATIMENT Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h3 className="text-lg font-bold text-white">BJ BATIMENT</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
          <X className="h-6 w-6" />
          <span className="sr-only">Fermer le menu</span>
        </Button>
      </div>

      <nav className="flex flex-col items-center justify-center flex-1 gap-8 p-4">
        <MobileLink href="/" onClick={onClose}>
          Accueil
        </MobileLink>
        <MobileLink href="/#services" onClick={onClose}>
          Services
        </MobileLink>
        <MobileLink href="/#realisations" onClick={onClose}>
          Réalisations
        </MobileLink>
        <MobileLink href="/#temoignages" onClick={onClose}>
          Témoignages
        </MobileLink>
        <MobileLink href="/contact" onClick={onClose}>
          Contact
        </MobileLink>

        <div className="mt-8">
          <Button asChild size="lg" className="bg-white text-terracotta-600 hover:bg-gray-100 w-full">
            <a href="/contact">Demander un devis</a>
          </Button>
        </div>

        <div className="mt-4">
          <Button asChild size="lg" className="bg-white text-terracotta-600 hover:bg-gray-100 w-full">
            <a href="tel:0744986560">Appeler maintenant</a>
          </Button>
        </div>
      </nav>
    </div>
  )
}

function MobileLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-2xl font-bold text-white hover:text-terracotta-200 transition-colors py-2"
    >
      {children}
    </Link>
  )
}

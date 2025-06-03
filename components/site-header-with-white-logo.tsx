"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall, Menu } from "lucide-react"
import MobileMenu from "@/components/mobile-menu"

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <header className="sticky top-0 z-40 w-full border-b bg-terracotta-600 text-white">
        <div className="container flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <Link href="/">
              <div className="relative h-10 w-10 md:h-14 md:w-14 overflow-hidden rounded-lg shadow-lg bg-terracotta-600 p-0.5">
                <Image
                  src="/logo.jpg"
                  alt="BJ BATIMENT Logo"
                  width={56}
                  height={56}
                  className="w-[130%] h-[130%] object-contain filter invert(1) brightness(100) scale-125 -translate-y-1"
                />
              </div>
            </Link>
            <div>
              <h1 className="text-base md:text-xl font-bold text-white">BJ AUTO</h1>
              <p className="text-[10px] md:text-xs text-white/80">Artisan en Charente (16)</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-white hover:text-terracotta-200 transition-colors relative group"
            >
              Accueil
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium text-white hover:text-terracotta-200 transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#realisations"
              className="text-sm font-medium text-white hover:text-terracotta-200 transition-colors relative group"
            >
              Réalisations
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#temoignages"
              className="text-sm font-medium text-white hover:text-terracotta-200 transition-colors relative group"
            >
              Témoignages
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white hover:text-terracotta-200 transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <a
              href="tel:0744986560"
              className="hidden md:flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              07 44 98 65 60
            </a>
            <Button
              asChild
              className="bg-white text-terracotta-600 hover:bg-terracotta-50 px-3 md:px-4 py-1 md:py-2 h-auto"
            >
              <a href="/contact">Devis</a>
            </Button>
            <button
              className="md:hidden text-white p-1.5 rounded-md hover:bg-white/10"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall, Mail, MapPin } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg border-2 border-white/30 bg-gray-800 p-0.5">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture_d_e%CC%81cran_2025-05-11_a%CC%80_19.56.40-removebg-preview-v08LHRmGIo1Wz0G2FyGzE7ANoC9WNA.png"
                  alt="BJ BATIMENT Logo"
                  width={40}
                  height={40}
                  className="w-[130%] h-[130%] object-contain filter invert(1) brightness(100) scale-125 -translate-y-1"
                />
              </div>
              <h3 className="text-lg font-bold">BJ AUTO</h3>
            </div>
            <p className="text-gray-400">
              Artisan spécialiste en rénovation intérieure et extérieure dans la Charente (16)
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.facebook.com/people/Jonathan-renovation/100082970780823"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Page Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Nos services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors">
                <Link href="/#services">Couverture & Zinguerie</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/#services">Nettoyage & Traitement</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/#services">Peinture Intérieure & Extérieure</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/#services">Revêtements de Sol</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/#services">Charpente</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-terracotta-400" />
                <a href="tel:0744986560" className="hover:text-white transition-colors">
                  07 44 98 65 60
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-terracotta-400" />
                <a href="mailto:contact@bj-batiment.fr" className="hover:text-white transition-colors">
                  contact@bj-batiment.fr
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-terracotta-400" />
                <span>39 T RUE DU MOULIN, 16210 CHALAIS</span>
              </p>
            </div>
            <div className="mt-4">
              <Button
                asChild
                variant="outline"
                className="border-terracotta-400 text-terracotta-400 hover:bg-terracotta-400/10"
              >
                <Link href="/contact">Page de contact</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} BJ BATIMENT - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  )
}

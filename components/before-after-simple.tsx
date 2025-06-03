import Image from "next/image"

export default function BeforeAfterSimple() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image src="/avant-depannage.webp" alt="Avant intervention" fill className="object-cover" />
            <div className="absolute top-4 left-4 bg-automotive-600 px-3 py-1 rounded text-white text-sm font-bold">
              PANNE
            </div>
          </div>
          <h3 className="text-center text-lg font-medium">Véhicule en panne</h3>
        </div>

        <div className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image src="/apres-lol.jpg" alt="Après intervention" fill className="object-cover" />
            <div className="absolute top-4 right-4 bg-automotive-600 px-3 py-1 rounded text-white text-sm font-bold">
              DÉPANNÉ
            </div>
          </div>
          <h3 className="text-center text-lg font-medium">Véhicule pris en charge</h3>
        </div>
      </div>

      <div className="text-center">
        <p className="text-muted-foreground">
          Intervention de dépannage rapide avec remorquage sécurisé - Charente (16)
        </p>
      </div>
    </div>
  )
}

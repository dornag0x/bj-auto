import Image from "next/image"

export default function GoogleMapStatic() {
  return (
    <div className="relative w-full h-full">
      <Image src="/map-charente.png" alt="Carte de la Charente" fill className="object-cover" />
    </div>
  )
}

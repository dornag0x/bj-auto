import Image from "next/image"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { container: "h-8 w-8" },
    md: { container: "h-10 w-10 md:h-12 md:w-12" },
    lg: { container: "h-12 w-12 md:h-16 md:w-16" },
  }

  const containerClasses = `relative ${sizes[size].container} overflow-hidden rounded-lg bg-white p-0.5 ${className}`

  return (
    <div className={containerClasses}>
      <div className="w-full h-full relative scale-[1.15]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99e%CC%81cran%202025-05-11%20a%CC%80%2020.06.24-aPo22LGDlhe3H43mU4HTQouJ9GPtxC.png"
          alt="BJ BATIMENT Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}

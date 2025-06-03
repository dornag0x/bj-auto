"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100))

    setSliderPosition(newPosition)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100))

    setSliderPosition(newPosition)
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp)
    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <div className="space-y-6">
      <div
        ref={containerRef}
        className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image (Full) */}
        <div className="absolute inset-0 w-full h-full">
          <Image src="/apres.webp" alt="Après" fill className="object-cover" />
        </div>

        {/* Before Image (Partial) */}
        <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
          <Image src="/avant.webp" alt="Avant" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 px-3 py-1 rounded text-white text-sm font-bold">AVANT</div>
          </div>
        </div>

        {/* Slider Control */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex items-center justify-center">
              <ChevronLeft className="h-4 w-4 text-gray-600" />
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </div>
          </div>
        </div>

        {/* After Label */}
        <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded text-white text-sm font-bold">APRÈS</div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold">Nettoyage de façade</h3>
        <p className="text-muted-foreground">Nettoyage et traitement d'une façade extérieure</p>
      </div>
    </div>
  )
}

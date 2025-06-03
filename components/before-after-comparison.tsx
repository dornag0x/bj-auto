"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function BeforeAfterComparison() {
  const [showAfter, setShowAfter] = useState(true)

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4 mb-6">
        <Button
          variant={!showAfter ? "default" : "outline"}
          onClick={() => setShowAfter(false)}
          className={!showAfter ? "bg-[#4c3d78] text-white" : "border-[#4c3d78] text-[#4c3d78]"}
        >
          Avant
        </Button>
        <Button
          variant={showAfter ? "default" : "outline"}
          onClick={() => setShowAfter(true)}
          className={showAfter ? "bg-[#4c3d78] text-white" : "border-[#4c3d78] text-[#4c3d78]"}
        >
          Après
        </Button>
      </div>

      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          {showAfter ? (
            <motion.div
              key="after"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image src="/apres.webp" alt="Après rénovation" fill className="object-cover" />
              <div className="absolute top-4 right-4 bg-[#4c3d78] px-3 py-1 rounded text-white text-sm font-bold">
                APRÈS
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="before"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image src="/avant.webp" alt="Avant rénovation" fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-[#4c3d78] px-3 py-1 rounded text-white text-sm font-bold">
                AVANT
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold">Nettoyage de façade</h3>
        <p className="text-muted-foreground">Nettoyage et traitement d'une façade extérieure</p>
      </div>

      <div className="flex justify-center mt-4">
        <div
          className="w-full max-w-md h-2 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
          onClick={() => setShowAfter(!showAfter)}
        >
          <div
            className="h-full bg-[#4c3d78] transition-all duration-300 ease-in-out"
            style={{ width: showAfter ? "100%" : "0%" }}
          />
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-500 max-w-md mx-auto px-2">
        <span>Avant</span>
        <span>Après</span>
      </div>
    </div>
  )
}

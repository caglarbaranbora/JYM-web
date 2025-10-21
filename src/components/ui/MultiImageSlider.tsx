"use client"
import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MultiImageSliderProps {
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  autoPlayInterval?: number
  className?: string
}

export default function MultiImageSlider({
  images,
  autoPlayInterval = 4000,
  className = "",
}: MultiImageSliderProps) {
  const [focusedIndex, setFocusedIndex] = useState(0)

  // --- Tweakable constants (hassas ayar) ---
  const SPACING = 180       // yan yana temel aralık
  const OVERLAP_PULL = -50  // üst üste bindirmek için merkeze çekiş
  const SCALE_BASE = 1.0
  const SCALE_STEP = 0.15   // her uzaklıkta ne kadar küçülsün
  const OPACITY_MIN = 0.4
  const OPACITY_STEP = 0.2

  // dairesel (circular) imleç — en kısa imzalı mesafe
  const circularDistance = (i: number, j: number, n: number) => {
    let d = i - j
    if (d > n / 2) d -= n
    if (d < -n / 2) d += n
    return d
  }

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setFocusedIndex((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)
    return () => clearInterval(timer)
  }, [images.length, autoPlayInterval])

  const goToPrevious = () => {
    setFocusedIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  const goToNext = () => {
    setFocusedIndex((prev) => (prev + 1) % images.length)
  }
  const goToSlide = (index: number) => setFocusedIndex(index)

  const styles = useMemo(() => {
    const n = images.length
    return images.map((_, index) => {
      const d = circularDistance(index, focusedIndex, n)
      const absD = Math.abs(d)

      // merkez hep x=0 — diğerleri merkeze yakınlaşarak konumlanır
      const baseOffset = d * SPACING
      const overlapOffset = d * OVERLAP_PULL
      const x = baseOffset + overlapOffset

      const scale = Math.max(0.7, SCALE_BASE - absD * SCALE_STEP)
      const opacity = Math.max(OPACITY_MIN, 1 - absD * OPACITY_STEP)

      // z-index: merkeze en yakın olan üstte
      const zIndex = 1000 - absD

      // hafif 3D etki için küçük bir tilt (opsiyonel)
      const rotateY = d * -4

      return { x, scale, opacity, zIndex, rotateY }
    })
  }, [images, focusedIndex])

  return (
    <div className={`relative w-full ${className}`}>
      {/* Slider Container */}
      <div className="relative overflow-visible min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-end justify-center">
        <div
          className="relative w-full flex items-end justify-center"
          style={{ perspective: "1000px" }}
        >
          {images.map((image, index) => {
            const style = styles[index]
            const isFocused = index === focusedIndex
            return (
              <motion.div
                key={index}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  opacity: style.opacity,
                  rotateY: style.rotateY,
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                style={{ zIndex: style.zIndex }}
                className={`absolute cursor-pointer select-none ${
                  isFocused ? "pointer-events-auto" : "pointer-events-auto"
                }`}
                onClick={() => goToSlide(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className={`w-auto h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] object-contain ${
                    isFocused ? "" : "grayscale-0"
                  }`}
                  priority={isFocused}
                  draggable={false}
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 group z-[1100]"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 group z-[1100]"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === focusedIndex
                    ? "bg-white w-8 sm:w-10 h-2 sm:h-2.5"
                    : "bg-white/30 hover:bg-white/50 w-2 sm:w-2.5 h-2 sm:h-2.5"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )} */}
    </div>
  )
}

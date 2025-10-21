"use client"
import { motion } from "framer-motion"
import MultiImageSlider from "@/components/ui/MultiImageSlider"

export default function Tracking() {
  const sliderImages = [
    { src: "/images/11.png", alt: "Tracking - Screen 1", width: 310, height: 800 },
    { src: "/images/12.png", alt: "Tracking - Screen 2", width: 370, height: 800 },
    { src: "/images/13.png", alt: "Tracking - Screen 3", width: 400, height: 800 },
    { src: "/images/14.png", alt: "Tracking - Screen 4", width: 370, height: 800 },
    { src: "/images/10.png", alt: "Tracking - Screen 5", width: 310, height: 800 },
  ]

  return (
    <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-6 sm:mb-8">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-center mb-3 sm:mb-4"
      >
        Tracking & Progress
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-400 text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl mx-auto mb-6 sm:mb-8 px-4"
      >
        Monitor every milestone with precision and celebrate your growth
      </motion.p>

      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MultiImageSlider images={sliderImages} autoPlayInterval={5000} className="mb-8" />
        </motion.div>
      </div>
    </div>
  )
}

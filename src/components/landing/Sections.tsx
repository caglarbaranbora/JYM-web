"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import MultiImageSlider from "@/components/ui/MultiImageSlider"

export default function GetYourFit() {
  const router = useRouter()

  const sliderImages = [
    { src: "/images/1.png", alt: "Get Your Fit - Screen 1", width: 400, height: 800 },
    { src: "/images/2.png", alt: "Get Your Fit - Screen 2", width: 370, height: 800 },
    { src: "/images/8.png", alt: "Get Your Fit - Screen 3", width: 340, height: 800 },
    { src: "/images/6.png", alt: "Get Your Fit - Screen 4", width: 310, height: 800 },
    { src: "/images/7.png", alt: "Get Your Fit - Screen 5", width: 280, height: 800 },
  ]

  return (
    <div className="mb-4 p-4 sm:p-6 md:p-8">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-6 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-center lg:text-left"
        >
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Get Your Fit
          </h2>
          <h3 className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2">
            Plan workout days, set goals, select exercises.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/")}
            className="cursor-pointer"
          >
            <Image
              src={"/icons/googleplay.png"}
              alt="playstore"
              width={200}
              height={0}
              className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-[200px] h-auto"
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/")}
            className="cursor-pointer"
          >
            <Image
              src={"/icons/apple.png"}
              alt="appstore"
              width={200}
              height={0}
              className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-[200px] h-auto"
            />
          </motion.button>
        </motion.div>
      </div>

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

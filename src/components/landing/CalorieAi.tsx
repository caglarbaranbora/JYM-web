"use client"
import { motion } from "framer-motion"

export default function CalorieAi() {
  return (
    <div className="p-4 sm:p-6 md:p-8 relative">
      <div className="-z-10 flex flex-row justify-between p-4 sm:p-6 md:p-8 px-6 sm:px-8 md:px-16 border-2 border-gray-800 rounded-[30px] sm:rounded-[40px] md:rounded-[60px] lg:rounded-[80px] mb-4 opacity-30 items-center overflow-hidden">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          width="400"
          height="400"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <g clipPath="url(#clip0_118_224)">
            {" "}
            <path
              d="M139.997 139.994C220.001 220.002 -20.0011 220.002 60.0033 139.994C-20.0011 220.002 -20.0011 -19.9992 60.0033 59.9975C-20.0011 -19.9992 220.001 -19.9992 139.997 59.9975C220.001 -19.9992 220.001 220.002 139.997 139.994Z"
              fill="url(#paint0_linear_118_224)"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient id="paint0_linear_118_224" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
              {" "}
              <stop stopColor="#e0e0e0" /> <stop offset="1" stopColor="#303030" />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_118_224">
              {" "}
              <rect width="200" height="200" fill="white" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </motion.svg>
        <motion.svg
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          width="400"
          height="400"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[400px] xl:h-[400px]"
        >
          {" "}
          <g clipPath="url(#clip0_116_153)">
            {" "}
            <path
              d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
              fill="url(#paint0_linear_116_153)"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient id="paint0_linear_116_153" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
              {" "}
              <stop stopColor="#e0e0e0" /> <stop offset="1" stopColor="#303030" />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_116_153">
              {" "}
              <rect width="200" height="200" fill="white" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </motion.svg>
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          width="400"
          height="400"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[400px] xl:h-[400px]"
        >
          {" "}
          <g clipPath="url(#clip0_105_315)">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M135.714 0H64.2857V64.2857H3.12224e-06L0 135.714H64.2857V200H135.714V135.714H200V64.2857H135.714V0Z"
              fill="url(#paint0_linear_105_315)"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_105_315"
              x1="177"
              y1="-9.23648e-06"
              x2="39.5"
              y2="152.5"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop stopColor="#e0e0e0" /> <stop offset="1" stopColor="#303030" />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_105_315">
              {" "}
              <rect width="200" height="200" fill="white" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </motion.svg>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center z-10 absolute inset-0 overflow-hidden px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black text-center"
        >
          Calorie <span className="text-accent">AI+</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl leading-relaxed text-center mt-2 sm:mt-3 md:mt-4"
        >
          With AI-powered image analysis, simply upload a photo of your meal to instantly calculate its calories and
          macronutrients (protein, carbs, fat) — making healthy eating effortless.
        </motion.p>
      </motion.div>
    </div>
  )
}

"use client"
import { motion } from "framer-motion"
import { BrizerSection, BrizerBackground } from "@/components/ui/brizer-effect"

export function HeroSection() {
  return (
    <BrizerSection id="hero" className="py-24 px-4 bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-blue-950" aria-labelledby="hero-heading">
      <BrizerBackground>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">
          {/* Left: Headline, summary, connect */}
          <div className="flex-1 flex flex-col justify-center items-start text-left space-y-8">
            <motion.h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Building web applications,<br />
              mobile apps, and digital<br />
              <span className="inline-flex items-center gap-2">
                <span className="inline-block align-middle text-blue-600 dark:text-blue-300">solutions.</span>
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              I'm <span className="font-semibold text-blue-700 dark:text-blue-300">Srikrishnan Velayutham</span>, a <span className="font-semibold">Full Stack Developer</span> and <span className="font-semibold">Computer Science Engineering Student</span> passionate about building modern web and mobile apps. I am always eager to learn new tech.
            </motion.p>
          </div>
          {/* Right: Large Circular Photo */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative">
              <img
                src="/Srikrishnan-BFB-photo.jpg"
                alt="Srikrishnan Velayutham portrait"
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900"
                draggable="false"
              />
              {/* Subtle background accents (optional) */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Example: random blue dots/lines, can be improved with SVG or canvas for more effect */}
                <span className="absolute top-8 left-10 w-2 h-2 bg-blue-200 rounded-full opacity-60"></span>
                <span className="absolute bottom-12 right-16 w-1 h-8 bg-blue-300 rounded-full opacity-40 rotate-12"></span>
                <span className="absolute top-20 right-8 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50"></span>
                <span className="absolute bottom-8 left-16 w-1 h-6 bg-blue-100 rounded-full opacity-30 rotate-45"></span>
              </div>
            </div>
          </motion.div>
        </div>
      </BrizerBackground>
    </BrizerSection>
  )
} 
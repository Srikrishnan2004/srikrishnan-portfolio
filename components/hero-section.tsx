"use client"
import { motion } from "framer-motion"
import { BrizerSection, BrizerBackground } from "@/components/ui/brizer-effect"

export function HeroSection() {
  return (
    <BrizerSection id="hero" className="py-24 px-4 bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-blue-950" aria-labelledby="hero-heading">
      <BrizerBackground>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            id="hero-heading"
            className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-blue-200 mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Srikrishnan Velayutham
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-700 dark:text-blue-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Computer Science Engineering Student
          </motion.p>
        </div>
      </BrizerBackground>
    </BrizerSection>
  )
} 
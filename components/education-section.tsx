"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { useCardAnimation } from "@/hooks/use-card-animation"
import { useState } from "react"
import { motion } from "framer-motion";

export function EducationSection() {
  const educationData = [
    {
      institution: "Laurel Higher Secondary School, Thanjavur, India",
      degree: "Class 12",
      details: "587 / 600 (97.83%)",
      period: "2012 – 2022",
      additionalInfo: {
        class10: "Class 10",
        class10Details: "492 / 500 (98.4%)"
      }
    },
    {
      institution: "SSN College of Engineering, Chennai, India",
      degree: "Bachelor of Engineering – Computer Science",
      details: "CGPA: 8.023 / 10",
      period: "2022 – 2026"
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="education" className="py-16 px-4" aria-labelledby="education-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="education-heading" className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-100 dark:bg-blue-900 hidden md:block animate-fade-in"></div>
          <div className="space-y-12">
            {educationData.map((education, index) => (
              <EducationTimelineCard key={index} education={education} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

interface EducationTimelineCardProps {
  education: {
    institution: string
    degree: string
    details: string
    period: string
    additionalInfo?: {
      class10: string
      class10Details: string
    }
  }
  index: number
}

function EducationTimelineCard({ education, index }: EducationTimelineCardProps) {
  const { isAnimating, animationType, handleCardClick, handleCardMouseEnter, handleCardMouseLeave } = useCardAnimation()
  const [isHovered, setIsHovered] = useState(false)

  const getAnimationClass = () => {
    if (isAnimating && animationType) {
      return `animate-${animationType}`
    }
    return ''
  }

  // Alternate left/right for desktop, stack for mobile
  const isLeft = index % 2 === 0

  return (
    <div className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-blue-950 hidden md:block z-10 animate-bounce-in"></div>
      {/* Horizontal line connecting timeline to card - stops at card edge */}
      <div
        className={`absolute top-1/2 h-0.5 bg-blue-100 dark:bg-blue-900 hidden md:block animate-fade-in ${
          isLeft
            ? "right-1/2 w-[calc(50%-2rem)]"
            : "left-1/2 w-[calc(50%-2rem)]"
        }`}
      ></div>
      <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
        <Card
          className={`
            hover:shadow-xl transition-transform duration-300 cursor-pointer
            scale-100 translate-y-0 hover:scale-105 hover:-translate-y-1
            ${getAnimationClass()}
            animate-fade-in-up
            ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
          `}
          onClick={handleCardClick}
          onMouseEnter={() => {
            setIsHovered(true)
            handleCardMouseEnter()
          }}
          onMouseLeave={() => {
            setIsHovered(false)
            handleCardMouseLeave()
          }}
          style={{
            animationDelay: `${index * 200}ms`,
            animationFillMode: 'both'
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <GraduationCap className="h-9 w-9 text-blue-600 animate-float" aria-hidden="true" />
              {education.institution}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {education.additionalInfo ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="transition-all duration-300 hover:scale-105">
                  <p className="font-semibold">{education.degree}</p>
                  <p className="text-gray-600 dark:text-gray-400">{education.details}</p>
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <p className="font-semibold">{education.additionalInfo.class10}</p>
                  <p className="text-gray-600 dark:text-gray-400">{education.additionalInfo.class10Details}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="font-semibold transition-colors duration-300">{education.degree}</p>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{education.details}</p>
              </div>
            )}
            <p className="text-sm text-gray-500 mt-2 transition-colors duration-300">{education.period}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

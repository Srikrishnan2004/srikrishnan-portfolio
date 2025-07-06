"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { useCardAnimation } from "@/hooks/use-card-animation"
import { useState } from "react"

export function EducationSection() {
  const educationData = [
    {
      institution: "SSN College of Engineering, Chennai, India",
      degree: "Bachelor of Engineering – Computer Science",
      details: "CGPA: 8.023 / 10",
      period: "2022 – 2026"
    },
    {
      institution: "Laurel Higher Secondary School, Thanjavur, India",
      degree: "Class 12",
      details: "587 / 600 (97.83%)",
      period: "2012 – 2022",
      additionalInfo: {
        class10: "Class 10",
        class10Details: "492 / 500 (98.4%)"
      }
    }
  ]

  return (
    <section id="education" className="py-16 px-4 animate-fade-in" aria-labelledby="education-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="education-heading" className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Education</h2>

        <div className="space-y-6">
          {educationData.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface EducationCardProps {
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

function EducationCard({ education, index }: EducationCardProps) {
  const { isAnimating, animationType, handleCardClick, handleCardMouseEnter, handleCardMouseLeave } = useCardAnimation()
  const [isHovered, setIsHovered] = useState(false)

  const getAnimationClass = () => {
    if (isAnimating && animationType) {
      return `animate-${animationType}`
    }
    return ''
  }

  return (
    <Card 
      className={`
        hover:shadow-xl transition-all duration-300 cursor-pointer
        transform hover:scale-105 hover:-translate-y-1
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
          <GraduationCap className="h-6 w-6 text-blue-600 animate-float" aria-hidden="true" />
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
  )
}

"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { useCardAnimation } from "@/hooks/use-card-animation"
import { useState } from "react"
import { motion } from "framer-motion"

export function InternshipsSection() {
  const internships = [
    {
      title: "Software Developer Intern",
      company: "Niti AI",
      duration: "Jul 2024 – Sept 2024",
      description:
        "Worked on the LOOPX platform using React.js, Next.js, TypeScript and Golang. Built scalable back-end operations with PostgreSQL.",
      technologies: ["React.js", "Next.js", "TypeScript", "Golang", "PostgreSQL"],
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Strategyfox",
      duration: "Oct 2024 – Dec 2024",
      description:
        "Created interactive 3-D e-commerce stores with Three.js, React.js and TypeScript. Developed back-end services in Node.js & Golang; used PostgreSQL for data; deployed front-end on Netlify and back-end on GCP.",
      technologies: ["Three.js", "React.js", "TypeScript", "Node.js", "Golang", "PostgreSQL", "Netlify", "GCP"],
    },
  ]

  return (
    <motion.section
      id="internships"
      className="py-16 px-4"
      aria-labelledby="internships-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 id="internships-heading" className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Internships</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block animate-fade-in"></div>

          <div className="space-y-12">
            {internships.map((internship, index) => (
              <InternshipCard key={index} internship={internship} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

interface InternshipCardProps {
  internship: {
    title: string
    company: string
    duration: string
    description: string
    technologies: string[]
  }
  index: number
}

function InternshipCard({ internship, index }: InternshipCardProps) {
  const { isAnimating, animationType, handleCardClick, handleCardMouseEnter, handleCardMouseLeave } = useCardAnimation()
  const [isHovered, setIsHovered] = useState(false)

  const getAnimationClass = () => {
    if (isAnimating && animationType) {
      return `animate-${animationType}`
    }
    return ''
  }

  const slideAnimation = index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'

  return (
    <div
      className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block z-10 animate-bounce-in"></div>

      {/* Horizontal line connecting timeline to card - stops at card edge */}
      <div
        className={`absolute top-1/2 h-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block animate-fade-in ${
          index % 2 === 0
            ? "right-1/2 w-[calc(50%-2rem)]" // For left-side cards, line spans from center to card edge (accounting for padding)
            : "left-1/2 w-[calc(50%-2rem)]" // For right-side cards, line spans from center to card edge (accounting for padding)
        }`}
      ></div>

      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
        <Card 
          className={`
            hover:shadow-xl transition-transform duration-300 bg-white dark:bg-gray-900 relative z-20 cursor-pointer
            scale-100 translate-y-0 hover:scale-105 hover:-translate-y-1
            ${getAnimationClass()}
            ${slideAnimation}
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
              <Briefcase className="h-5 w-5 text-blue-600 animate-float" aria-hidden="true" />
              {internship.title}
            </CardTitle>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {internship.duration}
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-lg mb-2 transition-colors duration-300">{internship.company}</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">{internship.description}</p>
            <div className="flex flex-wrap gap-2">
              {internship.technologies.map((tech, techIndex) => (
                <Badge 
                  key={techIndex} 
                  variant="outline"
                  className="transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

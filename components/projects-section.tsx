"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code } from "lucide-react"
import { useCardAnimation } from "@/hooks/use-card-animation"
import { useState } from "react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Food Management System",
      description: "Full-stack web app for browsing menus, ordering, payments and order-history tracking.",
      technologies: ["React", "Spring Boot", "Oracle SQL"],
    },
    {
      title: "Faszen",
      description: "Mobile e-commerce app with real-time chatbot support; back-end APIs on Node.js.",
      technologies: ["Flutter", "Node.js", "Cloud SQL", "Firestore", "Dialogflow", "GCP"],
    },
    {
      title: "Mithran",
      description: "Smart-agriculture assistant for crop suggestions, weather advice and pest analysis.",
      technologies: ["Flutter", "Node.js", "Plantix API", "OpenWeather API", "Google Maps", "Dialogflow"],
    },
    {
      title: "XR Store",
      description: "Immersive 3-D storefront; product data pulled dynamically from Shopify.",
      technologies: ["Vite", "React", "TypeScript", "Node.js", "Golang", "Shopify", "Netlify", "GCP"],
    },
    {
      title: "XR Dashboard",
      description: "Dashboard for merchants to build and publish XR stores; supports custom 3-D layouts.",
      technologies: ["Vite", "React", "TypeScript", "Node.js", "Golang", "Google OAuth"],
    },
    {
      title: "DropSi App",
      description: "Cross-platform dropshipping manager with real-time inventory sync.",
      technologies: ["Flutter", "Node.js", "GCP", "Google OAuth"],
    },
    {
      title: "Morph Insurance App",
      description:
        "AI-driven insurance platform featuring voice bot, AR damage detection, OCR policy parsing and personalised flows.",
      technologies: ["Flutter", "Node.js", "Google Cloud", "AR", "OCR", "Gemini AI"],
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 animate-fade-in" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="projects-heading" className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    title: string
    description: string
    technologies: string[]
  }
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { isAnimating, animationType, handleCardClick, handleCardMouseEnter, handleCardMouseLeave } = useCardAnimation()
  const [isHovered, setIsHovered] = useState(false)

  const getAnimationClass = () => {
    if (isAnimating && animationType) {
      return `animate-${animationType}`
    }
    return ''
  }

  const getStaggerDelay = () => {
    return `animation-delay-${(index * 100)}ms`
  }

  return (
    <Card 
      className={`
        hover:shadow-xl transition-all duration-300 h-full cursor-pointer
        transform hover:scale-105 hover:-translate-y-2
        ${getAnimationClass()}
        animate-fade-in-up
        ${getStaggerDelay()}
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
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both'
      }}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Code className="h-5 w-5 text-blue-600 animate-float" aria-hidden="true" />
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <Badge 
              key={techIndex} 
              variant="secondary" 
              className="text-xs transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

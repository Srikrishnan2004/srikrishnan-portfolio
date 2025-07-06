"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code } from "lucide-react"
import { motion } from "framer-motion"
import { BrizerSection, BrizerCard, BrizerBackground } from "@/components/ui/brizer-effect"

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  }

  return (
    <BrizerSection 
      id="projects" 
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900" 
      aria-labelledby="projects-heading"
    >
      <BrizerBackground>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            id="projects-heading" 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </BrizerBackground>
    </BrizerSection>
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
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      transition={{ delay: index * 0.1 }}
    >
      <BrizerCard className="h-full" delay={index * 0.1}>
        <Card className="h-full cursor-pointer">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="h-5 w-5 text-blue-600" aria-hidden="true" />
              </motion.div>
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-xs transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </BrizerCard>
    </motion.div>
  )
}

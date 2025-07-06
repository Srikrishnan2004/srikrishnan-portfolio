"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Smartphone, AppWindow } from "lucide-react"
import { motion } from "framer-motion"
import { BrizerSection, BrizerCard, BrizerBackground } from "@/components/ui/brizer-effect"
import { skillLogos } from "./skills-section"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

// Map project names to their type and icon
const projectTypeIcon: Record<string, { icon: React.ReactNode, label: string }> = {
  "Food Management System": { icon: <Globe className="h-5 w-5 text-blue-600" aria-hidden="true" />, label: "Website" },
  "Faszen": { icon: <Smartphone className="h-5 w-5 text-blue-600" aria-hidden="true" />, label: "Mobile App" },
  "Morph Insurance App": { icon: <AppWindow className="h-5 w-5 text-blue-600" aria-hidden="true" />, label: "PWA App" },
  "XR Store": { icon: <Globe className="h-5 w-5 text-blue-600" aria-hidden="true" />, label: "Website" },
  "XR Dashboard": { icon: <Globe className="h-5 w-5 text-blue-600" aria-hidden="true" />, label: "Website Dashboard" },
  "Mithran": { icon: <Smartphone className="h-5 w-5 text-blue-600" aria-hidden="true" />, label: "Mobile App" },
  "DropSi App": { icon: <Smartphone className="h-5 w-5 text-blue-600" aria-hidden="true" />, label: "Mobile App" },
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Food Management System",
      description: "A full-stack web platform enabling users to browse menus, place orders, make payments, and track order history. Integrated with Oracle SQL for data storage and Spring Boot for REST APIs, ensuring smooth interaction between frontend and backend.",
      technologies: ["React.js", "Spring Boot", "Oracle SQL"],
      type: "Website",
    },
    {
      title: "Faszen",
      description: "Developed a mobile e-commerce app featuring real-time chatbot support for customer service. Backend APIs handled orders and user data through Node.js, with data persistence on Cloud SQL and Firestore. Hosted and managed via Google Cloud Platform.",
      technologies: ["Flutter", "Node.js", "Cloud SQL", "Firestore", "Dialogflow", "GCP"],
      type: "Mobile App",
    },
    {
      title: "Mithran",
      description: "Built a smart agriculture assistant providing crop suggestions, weather-based recommendations, and pest analysis using Plantix API. Integrated Google Maps for farm polygon mapping and Dialogflow for interactive support in regional languages.",
      technologies: ["Flutter", "Node.js", "Plantix API", "OpenWeather API", "Google Maps", "Dialogflow"],
      type: "Mobile App",
    },
    {
      title: "XR Store",
      description: "Created an immersive 3D storefront where customers can browse products in a virtual environment. Data fetched dynamically from Shopify stores. Frontend deployed on Netlify, backend services (product sync, session handling) built in Golang/Node.js and hosted on GCP.",
      technologies: ["Vite", "React.js", "TypeScript", "Node.js", "Golang", "Shopify", "Netlify", "GCP"],
      type: "Website",
    },
    {
      title: "XR Dashboard",
      description: "Built a powerful dashboard for store owners to create, update, and publish 3D XR stores. Included custom 3D layout configurations, Google OAuth login, and Shopify integration. Focused on scalability and ease of use with reusable UI components.",
      technologies: ["Vite", "React.js", "TypeScript", "Node.js", "Golang", "Google OAuth"],
      type: "Website Dashboard",
    },
    {
      title: "DropSi App",
      description: "Mobile application designed for end-to-end dropshipping management. Supported user authentication with Google OAuth, order processing, and real-time inventory sync. Used Node.js for backend APIs, deployed on GCP, and Flutter for cross-platform UI.",
      technologies: ["Flutter", "Node.js", "GCP", "Google OAuth", "Supabase"],
      type: "Mobile App",
    },
    {
      title: "Morph Insurance App",
      description: "An AI-driven insurance platform designed to simplify how users discover, purchase, and manage coverage. Features include a multilingual voice bot for natural form-filling, AR-powered damage detection via 360° video, OCR-based policy PDF decoding, and personalized purchase flows tailored to user profiles. Integrated an always-on assistant for reminders and real-time insights.",
      technologies: ["Flutter", "Node.js", "Google Cloud", "AR", "OCR", "Gemini AI"],
      type: "PWA App",
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
    <TooltipProvider>
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
    </TooltipProvider>
  )
}

interface ProjectCardProps {
  project: {
    title: string
    description: string
    technologies: string[]
    type: string
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
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {projectTypeIcon[project.title]?.icon}
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top" className="font-semibold text-xs bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shadow-lg">
                  {projectTypeIcon[project.title]?.label}
                </TooltipContent>
              </Tooltip>
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 items-center mt-2">
              {project.technologies.map((tech, techIndex) => (
                skillLogos[tech] ? (
                  <Tooltip key={techIndex}>
                    <TooltipTrigger asChild>
                      <img
                        src={skillLogos[tech]}
                        alt={tech + " logo"}
                        className="w-9 h-9 object-contain bg-white dark:bg-gray-800 rounded shadow p-1 cursor-pointer"
                        loading="lazy"
                        draggable="false"
                      />
                    </TooltipTrigger>
                    <TooltipContent side="top" className="font-semibold text-base bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shadow-lg">
                      {tech}
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="text-xs transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900"
                  >
                    {tech}
                  </Badge>
                )
              ))}
            </div>
          </CardContent>
        </Card>
      </BrizerCard>
    </motion.div>
  )
}

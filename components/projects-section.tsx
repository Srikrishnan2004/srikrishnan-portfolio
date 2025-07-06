import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code } from "lucide-react"

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
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-blue-600" />
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

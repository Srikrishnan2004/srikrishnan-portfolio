import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

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
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Internships</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block"></div>

          <div className="space-y-12">
            {internships.map((internship, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block z-10"></div>

                {/* Horizontal line connecting timeline to card - stops at card edge */}
                <div
                  className={`absolute top-1/2 h-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block ${
                    index % 2 === 0
                      ? "right-1/2 w-[calc(50%-2rem)]" // For left-side cards, line spans from center to card edge (accounting for padding)
                      : "left-1/2 w-[calc(50%-2rem)]" // For right-side cards, line spans from center to card edge (accounting for padding)
                  }`}
                ></div>

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 relative z-20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                        {internship.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        {internship.duration}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-lg mb-2">{internship.company}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{internship.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

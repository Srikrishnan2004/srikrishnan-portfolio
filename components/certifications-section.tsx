"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeIcon as Certificate, BookOpen } from "lucide-react"
import { useCardAnimation } from "@/hooks/use-card-animation"
import { useState } from "react"

export function CertificationsSection() {
  const certifications = [
    "Flutter and Dart for Mobile App Development – Udemy",
    "Spring Boot for Beginners – Udemy",
    "The Complete 2024 Web Development BootCamp – Udemy (HTML, CSS, JS, Node.js, React)",
  ]

  return (
    <section id="certifications" className="py-16 px-4 animate-fade-in" aria-labelledby="certifications-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="certifications-heading" className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Courses & Certifications</h2>

        <Card className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Certificate className="h-6 w-6 text-blue-600 animate-float" aria-hidden="true" />
              Professional Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <CertificationItem key={index} certification={cert} index={index} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

interface CertificationItemProps {
  certification: string
  index: number
}

function CertificationItem({ certification, index }: CertificationItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="flex items-start gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer animate-fade-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${(index + 1) * 100}ms`,
        animationFillMode: 'both'
      }}
    >
      <BookOpen className={`h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} aria-hidden="true" />
      <p className="text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">
        {certification}
      </p>
    </div>
  )
}

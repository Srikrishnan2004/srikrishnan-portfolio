import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeIcon as Certificate, BookOpen } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    "Flutter and Dart for Mobile App Development – Udemy",
    "Spring Boot for Beginners – Udemy",
    "The Complete 2024 Web Development BootCamp – Udemy (HTML, CSS, JS, Node.js, React)",
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Courses & Certifications</h2>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Certificate className="h-6 w-6 text-blue-600" />
              Professional Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{cert}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

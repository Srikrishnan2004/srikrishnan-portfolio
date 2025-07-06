import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Srikrishnan Velayutham</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Computer Science Engineering Student
        </p>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <a
                  href="mailto:srikrishnan2210608@ssn.edu.in"
                  className="text-sm hover:text-blue-600 transition-colors"
                >
                  srikrishnan2210608@ssn.edu.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-sm">+91 63692 81847</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-blue-600" />
                <a
                  href="https://www.linkedin.com/in/srikrishnan-velayutham-9727b0342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-600 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-blue-600" />
                <a
                  href="https://github.com/Srikrishnan2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-600 transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

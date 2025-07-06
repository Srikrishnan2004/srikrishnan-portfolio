import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                SSN College of Engineering, Chennai, India
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-semibold">Bachelor of Engineering – Computer Science</p>
                <p className="text-gray-600 dark:text-gray-400">CGPA: 8.023 / 10</p>
                <p className="text-sm text-gray-500">2022 – 2026</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                Laurel Higher Secondary School, Thanjavur, India
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Class 12</p>
                  <p className="text-gray-600 dark:text-gray-400">587 / 600 (97.83%)</p>
                </div>
                <div>
                  <p className="font-semibold">Class 10</p>
                  <p className="text-gray-600 dark:text-gray-400">492 / 500 (98.4%)</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">2012 – 2022</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

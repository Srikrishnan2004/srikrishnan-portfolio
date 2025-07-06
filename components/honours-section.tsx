import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Users, Target } from "lucide-react"

export function HonoursSection() {
  const achievements = [
    {
      category: "Hackathon Wins",
      icon: Trophy,
      items: [
        "Winner, ONDC Hackathon (Team Faszen) – $3,000 cash + $2,000 GCP credits",
        "Finalist (Top 5), Hack4Change Hackathon – Google-sponsored",
        "Top 5% finalist, Adobe GenSolve Hackathon",
        "Top 10, Internal Smart India Hackathon at SSN",
        "Finalist (Top 10), Finarva AI Hackathon – sponsored by AWS, Antler & Gromo",
      ],
    },
    {
      category: "Academic Excellence",
      icon: Award,
      items: [
        "JEE-Main: 90 %ile",
        "School topper: 12th (198.5 / 200 cut-off, Computer-Maths)",
        "School topper: 10th Public Exam (492 / 500)",
      ],
    },
    {
      category: "Leadership & Activities",
      icon: Users,
      items: [
        "Core committee member – SSN Coding Club (Software Development & Open Source)",
        "Technical member – Networks Student Chapter, SSN",
        "Multiple awards in SSN Invente and CIT Blind Code contests",
      ],
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Honours & Experience</h2>

        <div className="space-y-6">
          {achievements.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-blue-600" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <Target className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300">{item}</p>
                    </div>
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

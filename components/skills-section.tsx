import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Wrench, Database, Users } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C", "C++", "Python", "Java", "HTML", "CSS", "JavaScript", "TypeScript", "SQL", "Go", "Dart"],
    },
    {
      title: "Frameworks",
      icon: Wrench,
      skills: [
        "Node.js",
        "Express.js",
        "React.js",
        "Bootstrap",
        "Flutter",
        "Spring Boot",
        "Django",
        "Golang",
        "Next.js",
      ],
    },
    {
      title: "Tools/Platforms",
      icon: Database,
      skills: [
        "Git",
        "GitHub",
        "Bitbucket",
        "JIRA",
        "Power BI",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Oracle SQL",
        "Google Cloud Platform",
      ],
    },
    {
      title: "Professional Skills",
      icon: Users,
      skills: ["Leadership", "Time-management", "Communication", "Teamwork", "Googling", "Stack Overflow", "DSA"],
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills Summary</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-blue-600" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
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

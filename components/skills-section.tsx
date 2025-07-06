"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Wrench, Database, Users } from "lucide-react"
import { useCardAnimation } from "@/hooks/use-card-animation"
import { useState } from "react"

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
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 animate-fade-in" aria-labelledby="skills-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="skills-heading" className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Skills Summary</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  category: {
    title: string
    icon: any
    skills: string[]
  }
  index: number
}

function SkillCard({ category, index }: SkillCardProps) {
  const { isAnimating, animationType, handleCardClick, handleCardMouseEnter, handleCardMouseLeave } = useCardAnimation()
  const [isHovered, setIsHovered] = useState(false)

  const getAnimationClass = () => {
    if (isAnimating && animationType) {
      return `animate-${animationType}`
    }
    return ''
  }

  return (
    <Card 
      className={`
        hover:shadow-xl transition-all duration-300 cursor-pointer
        transform hover:scale-105 hover:-translate-y-1
        ${getAnimationClass()}
        animate-fade-in-up
        ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
      `}
      onClick={handleCardClick}
      onMouseEnter={() => {
        setIsHovered(true)
        handleCardMouseEnter()
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        handleCardMouseLeave()
      }}
      style={{
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'both'
      }}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <category.icon className="h-6 w-6 text-blue-600 animate-float" aria-hidden="true" />
          {category.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <Badge 
              key={skillIndex} 
              variant="secondary"
              className="transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

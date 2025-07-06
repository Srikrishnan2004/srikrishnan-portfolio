"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Wrench, Database, Users } from "lucide-react"
import { motion } from "framer-motion"
import { BrizerSection, BrizerCard, BrizerBackground } from "@/components/ui/brizer-effect"

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <BrizerSection 
      id="skills" 
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900" 
      aria-labelledby="skills-heading"
    >
      <BrizerBackground>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 
            id="skills-heading" 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills Summary
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} index={index} />
            ))}
          </motion.div>
        </div>
      </BrizerBackground>
    </BrizerSection>
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
      transition={{ delay: index * 0.15 }}
    >
      <BrizerCard className="h-full" delay={index * 0.15}>
        <Card className="h-full cursor-pointer">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <category.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </motion.div>
              {category.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge 
                    variant="secondary"
                    className="transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </BrizerCard>
    </motion.div>
  )
}

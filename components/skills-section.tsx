"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Wrench, Database, Users, Award, Users as UsersIcon, Search, Brain, MessageCircle, Timer, Handshake, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { BrizerSection, BrizerCard, BrizerBackground } from "@/components/ui/brizer-effect"

// Map skill names to logo URLs (Simple Icons CDN or similar)
const skillLogos: Record<string, string> = {
  // Languages
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Go": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  "Dart": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  // Frameworks
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "Golang": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  // Tools/Platforms
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Bitbucket": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
  "JIRA": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  "Power BI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Oracle SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  "Google Cloud Platform": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
}

// Map soft skills to Lucide icons or emoji
const softSkillIcons: Record<string, React.ReactNode> = {
  "Leadership": <Award className="w-6 h-6 text-blue-600" />,
  "Time-management": <Timer className="w-6 h-6 text-blue-600" />,
  "Communication": <MessageCircle className="w-6 h-6 text-blue-600" />,
  "Teamwork": <UsersIcon className="w-6 h-6 text-blue-600" />,
  "Googling": <Search className="w-6 h-6 text-blue-600" />,
  "Stack Overflow": <BookOpen className="w-6 h-6 text-blue-600" />,
  "DSA": <Brain className="w-6 h-6 text-blue-600" />,
}

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
            <div className="flex flex-wrap gap-3 items-center">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {category.title === "Professional Skills" && softSkillIcons[skill] ? (
                    <div className="flex flex-col items-center justify-center w-14 h-14 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-2">
                      {softSkillIcons[skill]}
                      <span className="text-xs mt-1 text-center text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ) : skillLogos[skill] ? (
                    <div className="flex flex-col items-center justify-center w-14 h-14 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-2">
                      <img
                        src={skillLogos[skill]}
                        alt={skill + " logo"}
                        className="w-8 h-8 object-contain mb-1"
                        loading="lazy"
                        draggable="false"
                      />
                      <span className="text-xs mt-1 text-center text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ) : (
                    <Badge 
                      variant="secondary"
                      className="transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900"
                    >
                      {skill}
                    </Badge>
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </BrizerCard>
    </motion.div>
  )
}

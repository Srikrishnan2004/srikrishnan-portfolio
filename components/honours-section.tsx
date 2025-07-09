"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Users, Target } from "lucide-react"
import { useCardAnimation } from "@/hooks/use-card-animation"
import { useState } from "react"
import { motion } from "framer-motion";

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
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="honours" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 animate-fade-in" aria-labelledby="honours-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="honours-heading" className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Honours & Experience</h2>

        <div className="space-y-6">
          {achievements.map((category, index) => (
            <AchievementCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

interface AchievementCardProps {
  category: {
    category: string
    icon: any
    items: string[]
  }
  index: number
}

function AchievementCard({ category, index }: AchievementCardProps) {
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
        hover:shadow-xl transition-transform duration-300 cursor-pointer
        scale-100 translate-y-0 hover:scale-105 hover:-translate-y-1
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
        animationDelay: `${index * 200}ms`,
        animationFillMode: 'both'
      }}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <category.icon className="h-6 w-6 text-blue-600 animate-float" aria-hidden="true" />
          {category.category}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {category.items.map((item, itemIndex) => (
            <AchievementItem key={itemIndex} item={item} itemIndex={itemIndex} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

interface AchievementItemProps {
  item: string
  itemIndex: number
}

function AchievementItem({ item, itemIndex }: AchievementItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="flex items-start gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer animate-fade-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${(itemIndex + 1) * 100}ms`,
        animationFillMode: 'both'
      }}
    >
      <Target className={`h-4 w-4 text-blue-600 mt-1 flex-shrink-0 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} aria-hidden="true" />
      <p className="text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">
        {item}
      </p>
    </div>
  )
}

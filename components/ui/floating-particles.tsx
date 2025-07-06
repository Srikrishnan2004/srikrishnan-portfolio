"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

interface FloatingParticlesProps {
  count?: number
  className?: string
  color?: string
  sizeRange?: [number, number]
  durationRange?: [number, number]
}

export function FloatingParticles({
  count = 20,
  className = "",
  color = "rgba(59, 130, 246, 0.1)",
  sizeRange = [2, 6],
  durationRange = [10, 20]
}: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
          duration: Math.random() * (durationRange[1] - durationRange[0]) + durationRange[0],
          delay: Math.random() * 5
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [count, sizeRange, durationRange])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Enhanced brizer background with particles
export function BrizerBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <FloatingParticles 
        count={15} 
        color="rgba(59, 130, 246, 0.05)"
        sizeRange={[3, 8]}
        durationRange={[15, 25]}
      />
      <FloatingParticles 
        count={10} 
        color="rgba(147, 51, 234, 0.05)"
        sizeRange={[2, 5]}
        durationRange={[20, 30]}
        className="delay-1000"
      />
      {children}
    </div>
  )
} 
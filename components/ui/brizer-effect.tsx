"use client"

import { motion, Variants } from "framer-motion"
import { useEffect, useState } from "react"

interface BrizerEffectProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  blurRadius?: number
  glowColor?: string
  duration?: number
}

export function BrizerEffect({
  children,
  className = "",
  intensity = 0.8,
  blurRadius = 20,
  glowColor = "rgba(59, 130, 246, 0.3)",
  duration = 0.6
}: BrizerEffectProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Background blur effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 50%)`,
          filter: `blur(${blurRadius}px)`,
          opacity: isHovered ? intensity : 0,
          transition: `opacity ${duration}s ease-in-out`
        }}
        animate={{
          opacity: isHovered ? intensity : 0,
        }}
        transition={{ duration: duration, ease: "easeInOut" }}
      />

      {/* Content with backdrop blur */}
      <motion.div
        className="relative z-10"
        style={{
          backdropFilter: isHovered ? `blur(${blurRadius / 2}px)` : "blur(0px)",
        }}
        animate={{
          backdropFilter: isHovered ? `blur(${blurRadius / 2}px)` : "blur(0px)",
        }}
        transition={{ duration: duration, ease: "easeInOut" }}
      >
        {children}
      </motion.div>

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `linear-gradient(45deg, transparent, ${glowColor}, transparent)`,
          opacity: 0,
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
        }}
        transition={{ duration: duration, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

// Brizer card component with enhanced effects
interface BrizerCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: number
}

export function BrizerCard({ children, className = "", delay = 0, stagger = 0 }: BrizerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: delay + stagger,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={className}
    >
      <BrizerEffect intensity={0.6} blurRadius={15} duration={0.4}>
        {children}
      </BrizerEffect>
    </motion.div>
  )
}

// Brizer section wrapper
interface BrizerSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  "aria-labelledby"?: string
}

export function BrizerSection({ children, className = "", id, "aria-labelledby": ariaLabelledby }: BrizerSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      aria-labelledby={ariaLabelledby}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
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

// Floating particles component
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

function FloatingParticles({
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
"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface CursorTrailProps {
  count?: number
  size?: number
  color?: string
  duration?: number
}

export function CursorTrail({ 
  count = 8, 
  size = 4, 
  color = "rgba(59, 130, 246, 0.6)", 
  duration = 0.8 
}: CursorTrailProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }]
        if (newTrail.length > count) {
          return newTrail.slice(-count)
        }
        return newTrail
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <motion.div
          key={`${point.id}-${index}`}
          className="absolute rounded-full"
          style={{
            left: point.x - size / 2,
            top: point.y - size / 2,
            width: size,
            height: size,
            backgroundColor: color,
            opacity: 1 - (index / count),
            scale: 1 - (index / count) * 0.5,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1 - (index / count), scale: 1 - (index / count) * 0.5 }}
          transition={{ duration: duration, ease: "easeOut" }}
        />
      ))}
    </div>
  )
}

// Enhanced cursor trail with glow effect
export function GlowingCursorTrail({ 
  count = 6, 
  size = 6, 
  color = "rgba(59, 130, 246, 0.8)", 
  duration = 1 
}: CursorTrailProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }]
        if (newTrail.length > count) {
          return newTrail.slice(-count)
        }
        return newTrail
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <motion.div
          key={`${point.id}-${index}`}
          className="absolute rounded-full"
          style={{
            left: point.x - size / 2,
            top: point.y - size / 2,
            width: size,
            height: size,
            backgroundColor: color,
            boxShadow: `0 0 ${size * 2}px ${color}`,
            opacity: 1 - (index / count),
            scale: 1 - (index / count) * 0.3,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1 - (index / count), 
            scale: 1 - (index / count) * 0.3 
          }}
          transition={{ duration: duration, ease: "easeOut" }}
        />
      ))}
    </div>
  )
} 
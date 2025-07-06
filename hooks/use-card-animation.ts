import { useState, useCallback } from 'react'

interface UseCardAnimationProps {
  onAnimationComplete?: () => void
}

export function useCardAnimation({ onAnimationComplete }: UseCardAnimationProps = {}) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationType, setAnimationType] = useState<'pop-in' | 'pop-out' | null>(null)

  const triggerAnimation = useCallback((type: 'pop-in' | 'pop-out') => {
    setIsAnimating(true)
    setAnimationType(type)
    
    const duration = type === 'pop-in' ? 400 : 300
    
    setTimeout(() => {
      setIsAnimating(false)
      setAnimationType(null)
      onAnimationComplete?.()
    }, duration)
  }, [onAnimationComplete])

  const handleCardClick = useCallback(() => {
    if (!isAnimating) {
      triggerAnimation('pop-in')
    }
  }, [isAnimating, triggerAnimation])

  const handleCardMouseEnter = useCallback(() => {
    if (!isAnimating) {
      triggerAnimation('pop-in')
    }
  }, [isAnimating, triggerAnimation])

  const handleCardMouseLeave = useCallback(() => {
    if (!isAnimating) {
      triggerAnimation('pop-out')
    }
  }, [isAnimating, triggerAnimation])

  return {
    isAnimating,
    animationType,
    handleCardClick,
    handleCardMouseEnter,
    handleCardMouseLeave,
    triggerAnimation
  }
} 
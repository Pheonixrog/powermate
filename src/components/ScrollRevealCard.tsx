'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollRevealCardProps {
  children: React.ReactNode
  index?: number
  className?: string
  backgroundColor?: string
}

export function ScrollRevealCard({ 
  children, 
  index = 0, 
  className = "", 
  backgroundColor = "bg-white-950" 
}: ScrollRevealCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [cardTop, setCardTop] = useState(0)

  const { scrollY } = useScroll()
  const y = useTransform(
    scrollY,
    [cardTop - 800, cardTop - 200],
    [100, 0]
  )
  const opacity = useTransform(
    scrollY,
    [cardTop - 800, cardTop - 200],
    [0, 1]
  )

  useEffect(() => {
    if (ref.current) {
      setCardTop(ref.current.offsetTop)
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
      }}
      className={`relative rounded-3xl overflow-hidden ${backgroundColor} ${className}`}
    >
      {index > 0 && (
        <div className="absolute top-8 left-8">
          <span className="text-purple-400 text-sm font-mono">
            {String(index).padStart(2, '0')}
          </span>
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}


'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface FullScreenSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function FullScreenSection({ children, className = "", id }: FullScreenSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-40%" })

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen flex items-center justify-center relative ${className}`}
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  )
}


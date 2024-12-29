'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface FullScreenSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function FullScreenSection({ children, className = "", id }: FullScreenSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-40%" })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen flex items-center justify-center relative ${className}`}
    >
      {isMobile ? (
        <div className="w-full">{children}</div>
      ) : (
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </section>
  )
}


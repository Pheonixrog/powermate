'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
}

export function ScrollReveal({ children }: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ 
        duration: 0.8, 
        ease: "easeInOut",
        opacity: { duration: 0.5 },
        y: { type: "spring", stiffness: 100 }
      }}
      className="md:min-h-screen flex items-center justify-center "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}


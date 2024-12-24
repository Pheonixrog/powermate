'use client'

import { motion } from 'framer-motion'

interface EnhancedTypographyProps {
  text: string
  className?: string
  gradient?: boolean
}

export function EnhancedTypography({ text, className = "", gradient = false }: EnhancedTypographyProps) {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em" }}
          key={index}
          className={gradient ? 'bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-300' : ''}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}


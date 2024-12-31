'use client'

import { EnhancedTypography } from './EnhancedTypography'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const reviews = [
  {
    name: "Anna Joe",
    username: "@anna-9",
    content: "Using Powermate has completely changed my screen habits! I've cut down on mindless scrolling and actually use my time more wisely. Even my friends are surprised. The app limit feature keeps me on track every day.",
    avatar: "/r1.svg"
  },
  {
    name: "James",
    username: "@james_1",
    content: "I love the Powergroup feature! My friends and I keep each other accountable, and it's been a huge help in staying focused during busy workdays. No more wasted hours!",
    avatar: "/r3.jpeg"
  },
  {
    name: "Maya",
    username: "@ashhy",
    content: "As a student, staying focused on my studies was always a challenge, but Powermate has really changed that! By helping me block distracting apps, I can concentrate better and stick to my study goals.",
    avatar: "/r2.svg"
  },
  {
    name: "David Chen",
    username: "@dchen",
    content: "The analytics feature is incredible! Being able to see my daily app usage patterns has made me much more mindful of how I spend my time online. It's like having a personal productivity coach.",
    avatar: "/r4.svg"
  },
  {
    name: "Sarah Miller",
    username: "@sarah_m",
    content: "What I love most about Powermate is how it helps me maintain a healthy work-life balance. The custom schedules feature lets me stay focused during work hours while ensuring I disconnect properly afterward.",
    avatar: "/r5.svg"
  },
  {
    name: "Alex Thompson",
    username: "@alex_t",
    content: "The integration with other productivity apps is seamless. I can track my screen time, manage my tasks, and stay focused all from one place. It's become an essential part of my daily routine.",
    avatar: "/r6.svg"
  }
]

const MotionCard = motion(Card)

export function UserReviews() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const inView = useInView(carousel)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    if (inView) {
      controls.start({
        x: -width,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      })
    } else {
      controls.stop()
    }
  }, [controls, width, inView])

  const handleMouseEnter = () => controls.stop()
  const handleMouseLeave = () => {
    if (inView) {
      controls.start({
        x: -width,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      })
    }
  }

  return (
    <div className="container mx-auto px-2 py-6 md:py-16">
      <div className="max-w-7xl mx-auto text-center px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         
          <EnhancedTypography 
            text="User Reviews" 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6"
            gradient={true}
          />
          <EnhancedTypography 
            text="See what others are saying." 
            className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 md:mb-12 text-gray-300"
          />
        </motion.div>
      </div>

      <div className="relative h-60 w-200 overflow-hidden" ref={carousel}>
        <motion.div 
          className="flex gap-3 sm:gap-4 md:gap-8"
          animate={controls}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <MotionCard
              key={index}
              className="flex-none w-[380px]  md:w-120 backdrop-blur-sm border-[#29A5D6]/20 hover:border-[#29A5D6]/40  transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 sm:gap-4">
                  <Avatar className="w-20 h-20 sm:w-14 sm:h-14 md:w-16 md:h-16 ring-2 sm:ring-4 ring-[#29A5D6]">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-base sm:text-2xl md:text-2xl font-semibold text-white">{review.name}</div>
                    <div className="text-xs sm:text-sm text-[#29A5D6]/70">{review.username}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg sm:text-base md:text-xl text-gray-300 italic line-clamp-3">&ldquo;{review.content}&rdquo;</p>
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </div>
  )
}


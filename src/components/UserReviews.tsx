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
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <EnhancedTypography 
            text="User Reviews" 
            className="text-3xl flex justify-center items-centersm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            gradient={true}
          />
          <EnhancedTypography 
            text="See what others are saying." 
            className="text-lg sm:text-xl justify-center items-center md:text-2xl text-gray-300"
          />
        </motion.div>
      </div>

      <div className="relative overflow-hidden" ref={carousel}>
        <motion.div 
          className="flex gap-6"
          animate={controls}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <MotionCard
              key={index}
              className="flex-none w-[300px] sm:w-[350px] md:w-[400px] md:h-60 backdrop-blur-sm border-[#29A5D6]/20 hover:border-[#29A5D6]/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 sm:w-14 sm:h-14 ring-2 ring-[#29A5D6]">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-lg sm:text-xl font-semibold text-white">{review.name}</div>
                    <div className="text-sm text-[#29A5D6]/70">{review.username}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl sm:text-base text-gray-300 italic">&ldquo;{review.content}&rdquo;</p>
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </div>
  )
}


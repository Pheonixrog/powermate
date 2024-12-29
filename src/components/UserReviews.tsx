'use client'
import { FullScreenSection } from './FullScreenSection'
import { EnhancedTypography } from './EnhancedTypography'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

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

export function UserReviews() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(scrollContainer)

    const scroll = () => {
      if (isVisible && scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 2 // Reduced speed for smoother scrolling
        }
      }
    }

    const intervalId = setInterval(scroll, 30) // Increased frequency for smoother motion
    return () => {
      clearInterval(intervalId)
      observer.disconnect()
    }
  }, [isVisible])

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    })
  }

  return (
    <FullScreenSection id="reviews">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-purple-400 text-sm font-mono mb-3 md:mb-4 block">04 - USER REVIEWS</span>
            <EnhancedTypography 
              text="User Reviews" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6"
              gradient={true}
            />
            <EnhancedTypography 
              text="See what others are saying." 
              className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-gray-300"
            />
          </motion.div>
        </div>

        <motion.div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-4 sm:gap-6 md:gap-8 pb-4 md:pb-8 max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-4rem)] md:max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {reviews.concat(reviews).map((review, index) => (
            <motion.div
              key={index}
              className="flex-none w-[280px] sm:w-[320px] md:w-96"
              variants={cardVariants}
              custom={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 h-auto sm:h-64">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 sm:gap-4 md:gap-6">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ring-2 sm:ring-4 ring-purple-500/30">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-lg sm:text-xl font-semibold text-white">{review.name}</div>
                      <div className="text-xs sm:text-sm text-purple-300/70">{review.username}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base sm:text-lg text-gray-300 italic line-clamp-3">&ldquo;{review.content}&rdquo;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </FullScreenSection>
  )
}
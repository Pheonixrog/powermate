'use client'
import { FullScreenSection } from './FullScreenSection'
import { EnhancedTypography } from './EnhancedTypography'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from 'framer-motion'

const reviews = [
  {
    name: "Anna Joe",
    username: "@anna-9",
    content: "Using Powermate has completely changed my screen habits! I've cut down on mindless scrolling and actually use my time more wisely. Even my friends are surprised. The app limit feature keeps me on track every day.",
    avatar: "/anna.jpg"
  },
  {
    name: "James",
    username: "@james_1",
    content: "I love the Powergroup feature! My friends and I keep each other accountable, and it's been a huge help in staying focused during busy workdays. No more wasted hours!",
    avatar: "/james.jpg"
  },
  {
    name: "Maya",
    username: "@ashhy",
    content: "As a student, staying focused on my studies was always a challenge, but Powermate has really changed that! By helping me block distracting apps, I can concentrate better and stick to my study goals.",
    avatar: "/maya.jpg"
  }
]

export function UserReviews() {
  return (
    <FullScreenSection id="reviews" >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <EnhancedTypography 
            text="User Reviews" 
            className="text-5xl md:text-7xl font-bold mb-6"
            gradient={true}
          />
          <EnhancedTypography 
            text="See what others are saying." 
            className="text-xl md:text-2xl mb-12 text-gray-300"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-6">
                    <Avatar className="w-16 h-16 ring-4 ring-purple-500/30">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-xl font-semibold text-white">{review.name}</div>
                      <div className="text-sm text-purple-300/70">{review.username}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-300 italic">&ldquo;{review.content}&rdquo;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  )
}

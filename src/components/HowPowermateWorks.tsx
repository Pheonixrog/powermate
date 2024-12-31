"use client"
import { FullScreenSection } from './FullScreenSection'
import { EnhancedTypography } from './EnhancedTypography'
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Users, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    title: "Set your limits",
    description: "You set a daily screen limit for your most used apps.",
    icon: Clock,
    image: "/image1.svg", // Add your image paths here
  },
  {
    title: "Protect your limits",
    description: "When you've hit your limit, I step in to block apps and keep you focused.",
    icon: Shield,
    image: "/image2.svg",
  },
  {
    title: "Friends Support",
    description: "Need a little more time? Ask your friends to unlock it - only if you really need it!",
    icon: Users,
    image: "/image3.svg",
  },
  {
    title: "Track Progress",
    description: "Earn streaks and watch your screen habits improve daily.",
    icon: TrendingUp,
    image: "/image4.svg",
  },
]

export function HowPowermateWorks() {
  return (
    <FullScreenSection id="how" >
      <div className="container mx-auto px-4 ">
        <div className="text-center flex justify-center items-center flex-col mb-5">
        
          <EnhancedTypography
            text="How Powermate Works?"
            className="text-5xl  md:text-7xl font-bold mb-6"
            gradient={true}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="py-8  flex items-center flex-col bg-gradient-to-t from-teal-900  to-gray-950 to-40% backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 h-full w-full">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-auto h-50 md:w-45 md:h-60 object-cover rounded-t-lg"
                />
                <CardContent className="p-6 flex flex-col items-center ">
                  <div className="p-4 flex flex-row  rounded-2xl pb-4 md:py-3 mb-4 ">
                    
                    <h3 className="text-2xl text-[#29A5D6] font-semibold mb-3 text-center">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 text-lg md:text-xl text-center">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  )
}

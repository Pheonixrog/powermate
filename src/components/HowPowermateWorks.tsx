'use client'

import { motion } from 'framer-motion'
import { FullScreenSection } from "./FullScreenSection"
import { EnhancedTypography } from "./EnhancedTypography"
import { Card, CardContent } from "@/components/ui/card"


const steps = [
  {
    title: "Set your limits",
    description: "You set a daily screen limit for your most used apps.",
 
    image: "/image1.svg",
  },
  {
    title: "Protect your limits",
    description: "When you've hit your limit, I step in to block apps and keep you focused.",
   
    image: "/image2.svg",
  },
  {
    title: "Friends Support",
    description: "Need a little more time? Ask your friends to unlock it - only if you really need it!",
   
    image: "/image3.svg",
  },
  {
    title: "Track Progress",
    description: "Earn streaks and watch your screen habits improve daily.",
    
    image: "/image4.svg",
  },
]

export function HowPowermateWorks() {
  return (
    <FullScreenSection id="how">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <EnhancedTypography
            text="How Powermate Works?"
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
            gradient={true}
          />
          <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
            Follow the journey of taking control of your screen time with Powermate
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.5, duration: 0.5 }}
              className="w-full max-w-xs"
            >
              <Card className="w-full h-full bg-gradient-to-t from-teal-900 to-gray-950 to-40% backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                  <div className="mb-4">
                    
                  </div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-auto h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl text-[#29A5D6] font-semibold mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm text-center">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  )
}


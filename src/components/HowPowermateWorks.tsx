"use client"
import { FullScreenSection } from './FullScreenSection'
import { EnhancedTypography } from './EnhancedTypography'
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Users, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  { title: "Set your limits", description: "You set a daily screen limit for your most used apps.", icon: Clock },
  { title: "Protect your limits", description: "When you've hit your limit, I step in to block apps and keep you focused.", icon: Shield },
  { title: "Friends Support", description: "Need a little more time? Ask your friends to unlock it - only if you really need it!", icon: Users },
  { title: "Track Progress", description: "Earn streaks and watch your screen habits improve daily.", icon: TrendingUp },
]

export function HowPowermateWorks() {
  return (
    <FullScreenSection id="how" className="bg-gradient-to-b from-purple-950 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-mono mb-4 block">02 - HOW IT WORKS</span>
          <EnhancedTypography 
            text="Simple Steps to Digital Balance" 
            className="text-4xl md:text-6xl font-bold mb-6"
            gradient={true}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 rounded-2xl bg-purple-500/10">
                      <step.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-300 text-lg">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  )
}


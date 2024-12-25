'use client'
import { FullScreenSection } from './FullScreenSection'
import { EnhancedTypography } from './EnhancedTypography'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Focus, Moon, Heart, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

const reasons = [
  { title: "Better Focus", description: "Spend less time scrolling and more on what really matters.", icon: Focus },
  { title: "Restful Sleep", description: "Skip the late-night browsing and wake up refreshed.", icon: Moon },
  { title: "Stronger Relationships", description: "Be fully present with the people you care about.", icon: Heart },
  { title: "Improved Mental Clarity", description: "Together, we'll help you feel more at peace and less stressed.", icon: Brain },
]

export function WhyPowermateWorks() {
  return (
    <FullScreenSection id="why" >
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto text-center">
        <span className="text-purple-400 text-sm font-mono mb-4 block">03 - WHY IT WORKS?</span>
          <EnhancedTypography 
            text="Why Powermate Works" 
            className="text-5xl md:text-7xl font-bold mb-6"
            gradient={true}
          />
          <EnhancedTypography 
            text="More than just blocking apps - Powermate helps you build a life that's calmer and more connected. Here's how:" 
            className="text-xl md:text-2xl mb-12 text-gray-300"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <div className="p-3 rounded-xl bg-purple-500/10 mr-4">
                      <reason.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-300">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  )
}

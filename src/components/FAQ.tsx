'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollRevealCard } from './ScrollRevealCard'
import { EnhancedTypography } from './EnhancedTypography'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const faqs = [
  {
    question: "What happens when I hit my time limit?",
    answer: "Powermate blocks your chosen apps. If you need more time, request it from your friends. They decide!"
  },
  {
    question: "Can I use Powermate alone?",
    answer: "Yes! You can set limits and block apps, but it's more fun with friends and helps keep you accountable!"
  },
  {
    question: "Is Powermate available on iOS and Android?",
    answer: "Yes! Powermate is available on the iOS App Store now, and the Android version is coming soon to Google Play."
  },
  {
    question: "How does Powermate block apps?",
    answer: "After your time's up, Powermate handles the blocking. Friends can approve extra time if needed."
  },
  {
    question: "Can I choose which apps to block?",
    answer: "You're in control of which apps to limit."
  },
  {
    question: "Are there any rewards?",
    answer: "Yes! Earn badges for meeting your goals and staying on track. It's a fun way to visualize your progress!"
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="w-full h-full px-4 md:px-8">
      <ScrollRevealCard className="p-6 md:p-12 lg:p-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
           
            <EnhancedTypography 
              text="Frequently Asked Questions" 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center"
              gradient={true}
            />
            <EnhancedTypography 
              text="Common questions from our users." 
              className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-12 text-center text-gray-300"
            />
            
            <div className="sm:flex sm:flex-row sm:items-start sm:space-y-0 sm:space-x-6">
              <Image 
                src="/Video mascots/Video mascots/GIF/2-pointing-animation.gif" 
                width={500} 
                height={500} 
                className="sm:w-1/2 object-contain md:mt-20" 
                alt="Mascot Animation" 
              />
              <div className="space-y-4 sm:w-1/2">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className=" backdrop-blur-sm border-[#29A5D6]/20  hover:border-[#29A5D6]/40  transition-all duration-300">
                      <CardHeader 
                        className="cursor-pointer p-4 md:p-6"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      >
                        <CardTitle className="flex justify-between items-center text-sm sm:text-base md:text-lg lg:text-xl">
                          <span>{faq.question}</span>
                          <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-2 rounded-full bg-purple-500/10"
                          >
                            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-[#29A5D6]" />
                          </motion.div>
                        </CardTitle>
                      </CardHeader>
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CardContent className="px-4 md:px-6 py-2 md:py-4">
                              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
                                {faq.answer}
                              </p>
                            </CardContent>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealCard>
    </div>
  )
}

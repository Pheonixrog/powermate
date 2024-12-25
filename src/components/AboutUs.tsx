"use client"
import { ScrollRevealCard } from './ScrollRevealCard'
import { EnhancedTypography } from './EnhancedTypography'
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Facebook, Twitter, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

export function AboutUs() {
  return (
    <ScrollRevealCard  className="p-12 md:p-20" >
      <div className="container h-screen w-screen mx-auto flex justify-center items-center">
        
        <div className="max-w-4xl mx-auto ">
        <span className="text-purple-400 text-sm font-mono mb-4 block">07 - About US</span>
          <EnhancedTypography 
            text="About Us" 
            className="text-4xl md:text-5xl font-bold mb-10 text-center"
            gradient={true}
          />
          <Card className="bg-gray-900/30 backdrop-blur-sm border-purple-500/20">
            <CardContent className="p-8">
              <motion.p 
                className="text-xl mb-12 text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                At Powermate, we&apos;re here to help you manage your screen time with support from friends. We understand how tough it can be to stop doom scrolling through your favorite apps, which is why we created Powermate - a fun, gamified app that helps you limit your screen time with the accountability of your friends and family. Together, let&apos;s reduce your time online and focus on what truly matters!
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-purple-500/5 backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400">Contact Us</h3>
                  <a 
                    href="mailto:info@powermate.app" 
                    className="flex items-center space-x-3 text-lg text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    <div className="p-3 rounded-xl bg-purple-500/10">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span>info@powermate.app</span>
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-purple-500/5 backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[Facebook, Twitter, Instagram].map((Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="p-3 rounded-xl bg-purple-500/10 text-gray-300 hover:text-purple-400 transition-colors duration-200"
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollRevealCard>
  )
}


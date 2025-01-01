"use client"
import { ScrollRevealCard } from './ScrollRevealCard'
import { EnhancedTypography } from './EnhancedTypography'
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Twitter, Instagram, Music2 , Facebook} from 'lucide-react'
import { motion } from 'framer-motion'

export function AboutUs() {
  const socialMediaLinks = [
    { icon: Linkedin, link: "https://www.linkedin.com/company/powermateapp/" },
    { icon: Twitter, link: "https://x.com/Powermate_app?t=NZVIk-lx4cIzgE7-11ZKmg&s=09" },
    { icon: Instagram, link: "https://www.instagram.com/powermate.app/profilecard/?igsh=MWdua2lpYXhrMnFjbA==" },
    { icon: Music2, link: "https://www.tiktok.com/@powermate.app?_t=8qqcduVOaRX&_r=1" },
    { icon: Facebook, link: "https://www.facebook.com/people/Powermate/61571084783333/" },
  ];
  return (
    <ScrollRevealCard className=" md:p-20">
      <div className="container h-auto min-h-screen w-full mx-auto flex flex-col justify-center items-center px-4 sm:px-8 md:px-12">
        <div className="max-w-4xl w-full">

          <EnhancedTypography 
            text="About Us" 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center"
            gradient={true}
          />
          <Card className=" backdrop-blur-sm border-[#29A5D6]/20">
            <CardContent className="p-6 sm:p-8">
              <motion.p 
                className="text-lg sm:text-xl mb-8 sm:mb-12 text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                At Powermate, we&apos;re here to help you manage your screen time with support from friends. We understand how tough it can be to stop doom scrolling through your favorite apps, which is why we created Powermate - a fun, gamified app that helps you limit your screen time with the accountability of your friends and family. Together, let&apos;s reduce your time online and focus on what truly matters!
              </motion.p>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-4 sm:p-6 rounded-xl bg-[#29A5D6]/5 backdrop-blur-sm"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#29A5D6]">Contact Us</h3>
                  <a 
                    href="mailto:info@powermate.app" 
                    className="flex items-center space-x-3 text-base sm:text-lg text-gray-300 hover:text-[#29A5D6] transition-colors duration-200"
                  >
                    <div className="p-3 rounded-xl bg-[#29A5D6]/10">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span>info@powermate.app</span>
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="p-4 sm:p-6 rounded-xl bg-[#29A5D6]/5 backdrop-blur-sm"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#29A5D6]">Follow Us</h3>
                  <div className="flex space-x-3 sm:space-x-4">
                  {socialMediaLinks.map(({ icon: Icon, link }, index) => (
    <a
      key={index}
      href={link}
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Provides security by preventing access to the original window
      className="p-3 rounded-xl bg-purple-500/10 text-gray-300 hover:text-purple-400 transition-colors duration-200"
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
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

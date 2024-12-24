'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { motion } from 'framer-motion'
import QRCode from "react-qr-code";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDownloadOpen, setIsDownloadOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [navPosition, setNavPosition] = useState(24) // Starting position in pixels

  // Define navigation sections with offset
  const navSections = [
    { id: 'features', label: 'Features', offset: 100 },
    { id: 'pricing', label: 'Pricing', offset: 100 }
  ]

  // Define scroll boundaries
  const INITIAL_POSITION = 24 // 24px from top (equivalent to top-6)
  const FLOAT_POSITION = 80 // Where navbar should float (adjust as needed)
  const STOP_POSITION = 800 // Where navbar should stop scrolling (adjust as needed)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Update navbar background
      setIsScrolled(scrollY > 20)
      
      // Calculate navbar position
      if (scrollY <= FLOAT_POSITION) {
        // Initial movement from top position
        setNavPosition(INITIAL_POSITION)
      } else if (scrollY <= STOP_POSITION) {
        // Float zone - maintain position
        setNavPosition(FLOAT_POSITION)
      } else {
        // Stop zone - push navbar up
        const pushUpAmount = Math.min(
          FLOAT_POSITION,
          FLOAT_POSITION - (scrollY - STOP_POSITION)
        )
        setNavPosition(Math.max(0, pushUpAmount))
      }
      
      // Update active section
      const scrollPosition = scrollY + 100
      navSections.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          const elementTop = element.offsetTop
          const elementBottom = elementTop + element.offsetHeight
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(id)
          }
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 200
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.div 
      className="fixed left-0 right-0 z-50 px-10 max-w-screen-xl mx-auto"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: 'fixed',
        width: '100%',
        maxWidth: '1280px',
        top: `${navPosition}px`,
        transition: 'top 0.3s ease-out'
      }}
    >
      <nav className={`
        transition-all duration-500 rounded-full
        ${isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10' 
          : 'bg-gray-900/50 backdrop-blur-sm'
        }
        border border-purple-500/20 hover:border-purple-500/30 
      `}>
        {/* Rest of the navbar content remains the same */}
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center group">
                <img 
                  src="/logo.svg" 
                  alt="Powermate Logo" 
                  width={250} 
                  height={42} 
                  className="group-hover:rotate-12 transition-transform duration-300" 
                />
              </Link>
            </motion.div>
            
            <div className="flex items-center space-x-2">
              {navSections.map(({ id, label }) => (
                <motion.button
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(id)}
                  className={`
                    px-4 py-2 text-xl rounded-full transition-all duration-300
                    ${activeSection === id 
                      ? 'text-white bg-purple-500/20' 
                      : 'text-gray-300 hover:text-white hover:bg-purple-500/10'
                    }
                  `}
                >
                  {label}
                </motion.button>
              ))}
              
              <Dialog open={isDownloadOpen} onOpenChange={setIsDownloadOpen}>
                <DialogTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="ghost" 
                      className="text-gray-300 hover:text-white hover:bg-purple-500/10 text-xl rounded-full"
                    >
                      <Download className="mr-2 h-4 w-4 " /> Download
                    </Button>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="bg-gray-900/95 backdrop-blur-md border-purple-500/20">
                  <DialogHeader>
                    <DialogTitle className="text-white">Download Powermate</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Scan the QR code with your phone
                    </DialogDescription>
                  </DialogHeader>
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex justify-center p-4 bg-white rounded-lg"
                  >
                    <QRCode
                size={500}
                style={{
                  height: "auto",
                  maxWidth: "100%",
                  width: "100%",
                  background: "white",
                }}
                value={
                  "https://play.google.com/store/apps/details?id=com.appspot.powermateapp"
                }
                viewBox={`0 0 256 256`}
              />
                  </motion.div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  )
}
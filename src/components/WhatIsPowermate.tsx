'use client'
import { FullScreenSection } from './FullScreenSection'
import { EnhancedTypography } from './EnhancedTypography'
import { motion } from 'framer-motion'
import { VideoPlayer } from '@/components/VideoPlayer'

export function WhatIsPowermate() {
  return (
    <FullScreenSection id="what " className="bg-gradient-to-b from-gray-900 to-purple-950">
      <div className="container mx-auto px-4" id='features'>
        <div className="flex items-center space-x-8">
          {/* Left Content Section */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-purple-400 text-sm font-mono mb-4 block">01 - WHAT IS POWERMATE</span>
              <EnhancedTypography 
                text="Take Control of Your Screen Time" 
                className="text-5xl md:text-7xl font-bold mb-8"
                gradient={true}
              />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 blur-xl opacity-20" />
                <p className="relative text-xl md:text-2xl text-gray-300 leading-relaxed">
                  We know it&apos;s hard to stop doomscrolling, so we made a gamified app where friends and family help keep you accountable. Let&apos;s cut back on screen time and focus on what matters!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Video Section */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] md:h-[800px] rounded-lg overflow-hidden shadow-2xl"
            >
              <VideoPlayer />
            </motion.div>
          </div>
        </div>
      </div>
    </FullScreenSection>
  )
}

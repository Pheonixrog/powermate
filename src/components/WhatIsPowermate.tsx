'use client'
import { FullScreenSection } from './FullScreenSection'
import { EnhancedTypography } from './EnhancedTypography'
import { motion } from 'framer-motion'
import { VideoPlayer } from '@/components/VideoPlayer'
import Image from 'next/image'

export function WhatIsPowermate() {
  return (
    <FullScreenSection id="what">
      <div className="container mx-auto px-4" id='features'>
        <div className="block md:flex md:space-x-8">
          {/* Left Content Section */}
          <div className="w-full md:w-auto md:flex-1 text-left md:mt-10 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-purple-400 text-sm font-mono mb-4 block">01 - WHAT IS POWERMATE</span>
              <EnhancedTypography 
                text="Take Control of Your Screen Time" 
                className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
                gradient={true}
              />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 blur-xl opacity-20" />
                <p className="relative text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  We know it&apos;s hard to stop doomscrolling, so we made a gamified app where friends and family help keep you accountable. Let&apos;s cut back on screen time and focus on what matters!
                </p>
              </div>
            </motion.div>

            {/* Image - Mobile: show after text, Desktop: show as original */}
            <div className="block md:hidden mb-8">
              <Image 
                src="/Video mascots/Video mascots/GIF/4-HighFive.gif" 
                alt="Device Frame" 
                width={720} 
                height={730}
                className="w-full h-auto"
              />
            </div>
            <div className="hidden md:block">
              <Image 
                src="/Video mascots/Video mascots/GIF/4-HighFive.gif" 
                alt="Device Frame" 
                width={720} 
                height={730}
                className="mt-8"
              />
            </div>
          </div>

          {/* Right Video Section */}
          <div className="w-full md:flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[600px] md:h-[800px] rounded-lg overflow-hidden shadow-2xl"
            >
              <VideoPlayer />
            </motion.div>
          </div>
        </div>
      </div>
    </FullScreenSection>
  )
}
"use client";
import { FullScreenSection } from "./FullScreenSection";

import { motion } from "framer-motion";
import { VideoPlayer } from "@/components/VideoPlayer";
import Image from "next/image";

export function WhatIsPowermate() {
  return (
    <FullScreenSection id="what">
      <div className="container mx-auto px-4" id="features">
        <div className="block md:flex md:space-x-8">
          {/* Left Content Section */}
          <div className="w-full md:w-auto md:flex-1 text-left md:mt-10 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* <EnhancedTypography 
                text="What is Powermate?" 
                className="text-5xl sm:text-5xl md:text-7xl font-bold mb-6"
                gradient={true}
              /> */}
              <div className="my-20  relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r " />
                <p className="relative pl-20 text-xl sm:text-2xl md:text-6xl leading-relaxed mb-8">
                  {`We know it's hard to stop doomscrolling, so we made a gamified app where friends and family help keep you accountable. Let's cut back on screen time and focus on what matters!`
                    .split(" ")
                    .map((word, index) => (
                      <span
                        key={index}
                        className="inline-block text-gray-950 transition-colors duration-500"
                        style={{
                          animation: `word-fade-in 0.4s ease forwards`,
                          animationDelay: `${index * 250}ms`,
                          color: "black",
                        }}
                      >
                        {word}&nbsp;
                      </span>
                    ))}
                </p>
              </div>
            </motion.div>

            {/* Image - Mobile: show after text, Desktop: show as original */}
            <div className="block md:hidden ">
              <Image
                src="/Video mascots/Video mascots/GIF/6-games.gif"
                alt="Device Frame"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
            {/* <div className="hidden md:block ml-20">
              <Image 
                src="/Video mascots/Video mascots/GIF/3-Timer.gif" 
                alt="Device Frame" 
                width={520} 
                height={520}
                className="mb-5"
              />
            </div> */}
          </div>

          {/* Right Video Section */}
          <div className="w-full md:flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[900px]  md:h-[800px] rounded-lg overflow-hidden shadow-2xl"
            >
              <VideoPlayer />
            </motion.div>
          </div>
        </div>
      </div>
    </FullScreenSection>
  );
}

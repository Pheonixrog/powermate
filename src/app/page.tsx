"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { EnhancedTypography } from "@/components/EnhancedTypography";
import { WhatIsPowermate } from "@/components/WhatIsPowermate";
import { HowPowermateWorks } from "@/components/HowPowermateWorks";
import { WhyPowermateWorks } from "@/components/WhyPowermateWorks";
import { UserReviews } from "@/components/UserReviews";
import { FAQ } from "@/components/FAQ";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { AboutUs } from "@/components/AboutUs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="z-10 flex flex-col min-h-screen bg-gray-950 bg-center bg-no-repeat">
        <Navbar />
        <main className="flex-grow relative">
          <ScrollReveal>
            <section className="mt-20 h-full w-full">
              <div className="container mx-auto px-4 py-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold mb-6 text-white text-center lg:text-left"
                >
                  <div>Control Your <span className="text-[#CAFFE5]">Screen Time</span></div>
                  <div>With Friends</div>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                  {/* Left Section */}
                  <div className="py-12 relative text-center lg:text-left">
                    <EnhancedTypography
                      text="Stay focused and connected because doomscrolling at 2 AM isn't the vibe."
                      className="text-2xl md:text-3xl lg:text-4xl text-white max-w-xl mx-auto lg:mx-0"
                    />
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <a className="flex justify-center items-center gap-2 hover:scale-105 transition duration-300">
                        <Image
                          width={200}
                          height={20}
                          src="/googleplaybutton.svg"
                          alt="Google Play"
                        />
                      </a>
                      <a className="flex justify-center items-center gap-2 hover:scale-105 transition duration-300">
                        <Image
                          width={205}
                          height={20}
                          src="/appstorebutton.svg"
                          alt="App Store"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex justify-center items-center">
                    <motion.div 
                      className="relative w-full max-w-[600px] h-[500px]"
                      animate={{ y: [0, -100, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 4,
                        ease: "easeInOut"
                      }}
                    >
                      <Image
                        fill
                        src="/Video mascots/Video mascots/GIF/4-Highfive.gif"
                        alt="Mascot"
                        className="object-contain pb-20"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <WhatIsPowermate />
          <HowPowermateWorks />
          <WhyPowermateWorks />
          <UserReviews />
          <FAQ />
          <NewsletterSignup />
          <AboutUs />
        </main>
      </div>
    </>
  );
}


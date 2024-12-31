"use client";
import React from "react";
import { useState, useEffect } from "react";
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
import { Download, Apple } from "lucide-react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950  via-teal-950 via-30% to-gray-950  ">
      <Navbar />
      <main className="flex-grow ">
        <ScrollReveal>
          <section className="sm:pt-0 ">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center justify-center mt-10 "></div>
              <div className="sm:pt-0 sm:px-0 px-5 pt-10 grid md:mx-40   gap-5 lg:gap-16 items-center justify-center">
                <div className=" text-center  lg:text-left ">
                  <p className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6  text-[#CAFFE5]  ">
                    Control Your Screen Time With Friends
                  </p>
                  <div className="flex flex-col md:flex-row lg:flex-row">
                    <div className="flex flex-col  justify-center">
                      <EnhancedTypography
                        text="Stay focused and connected"
                        className="text-xl md:text-3xl lg:text-4xl  md:mb-2 text-[#29A5D6] mx-3 md:mx-0"
                      />
                      <EnhancedTypography
                        text="because doom scrolling at 2 AM isn't the vibe."
                        className="text-lg md:text-2xl lg:text-3xl mb-6 md:mb-8 text-[#29A5D6] mx-3 md:mx-0"
                      />
                      <div className="sm:pt-0 pt-5 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 md:py-4  rounded-full text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                          <Download size={24} />
                          <a href="https://play.google.com/store/apps/details?id=com.appspot.powermateapp">
                            Play Store
                          </a>
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                          <Apple size={24} />
                          <a href="https://apps.apple.com/il/app/powermate-control-screen-time/id6535687314">
                            App Store
                          </a>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="sm:pt-0  sm:px-0  pt-20 mx-auto w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] md:px-10">
                        <img
                          src="/Video mascots/Video mascots/GIF/7-download-animation.gif"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
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
        {/* <Pricing /> */}
        <NewsletterSignup />
        <AboutUs />
      </main>
    </div>
  );
}

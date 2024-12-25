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
          <section className="py-12 md:py-20  ">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
                <h1 className="text-[150px] md:text-[150px] lg:text-[180px] font-bold text-center overflow-hidden relative flex flex-wrap items-center justify-center gap-2 md:gap-4">
                  <span className="relative z-10 leading-none">
                    {"P".split("").map((char, index) => (
                      <span
                        key={index}
                        className="inline-block transition-all bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-emerald-200 duration-300 ease-in-out hover:scale-125 hover:text-emerald-200"
                        style={{
                          transitionDelay: `${index * 50}ms`,
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible
                            ? "translateY(0)"
                            : "translateY(20px)",
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                  <div className="flex items-center justify-center w-[150px] h-[150px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px]">
                    <iframe
                      className="w-full h-full"
                      src="https://lottie.host/embed/86f8b081-70bc-4c9a-b73a-5ad19fa04101/58LqzG2pjg.lottie"
                    ></iframe>
                  </div>
                  <span className="relative z-10 leading-none">
                    {"wermate".split("").map((char, index) => (
                      <span
                        key={index}
                        className="inline-block transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-emerald-200 ease-in-out hover:scale-125 hover:text-emerald-200"
                        style={{
                          transitionDelay: `${(index + 1) * 50}ms`,
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible
                            ? "translateY(0)"
                            : "translateY(20px)",
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </h1>
              </div>
              <div className="grid mx-20 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                <div className="text-center lg:text-left">
                  <EnhancedTypography
                    text="Control Your Screen Time With Friends"
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6"
                    gradient={true}
                  />
                  <EnhancedTypography
                    text="Stay focused and connected — because doom scrolling at 2 AM isn't the vibe."
                    className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-300"
                  />
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                      Get Started
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
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
                <div className=" mx-auto">
                  <img src="/anime1.svg" alt="" />
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

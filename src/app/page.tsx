"use client";
import React from "react";

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
      <div className="absolute inset-0">
        {/* Base Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(#4fd1c5 1px, transparent 1px),
              linear-gradient(90deg, #4fd1c5 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Thicker lines every 2nd row and column */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(#4fd1c5 2px, transparent 2px),
              linear-gradient(90deg, #4fd1c5 2px, transparent 2px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className=" z-10 flex flex-col min-h-screen bg-black bg-center bg-no-repeat">
        <Navbar />
        <main className="flex-grow relative">
          <ScrollReveal>
            <section className="mt-20  h-full w-full">
              <div className="container mx-auto px-4 py-20">
                <p className="text-5xl md:text-7xl py-10 font-bold mb-6 text-white">
                  Control Your{" "}
                  <span className="text-[#CAFFE5]">Screen Time</span> With
                  Friends
                </p>
                <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                  {/* Left Section */}
                  <div className="py-12 relative text-center lg:text-left">
                    <EnhancedTypography
                      text="Stay focused and connected because doomscrolling at 2 AM isn't the vibe."
                      className="text-2xl  md:text-3xl lg:text-4xl text-white max-w-xl mx-auto lg:mx-0"
                    />
                    <div className="bottom-10 right-5 relative flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <a className="flex justify-center items-center gap-2 font-bold px-6 py-3 rounded-full text-lg  hover:scale-105 transition duration-300">
                        <Image
                          width={200}
                          height={20}
                          src="/googleplaybutton.svg"
                          alt="Google Play"
                        />
                      </a>
                      <a className="flex justify-center items-center gap-2 font-bold px-6 py-3 rounded-full text-lg  hover:scale-105 transition duration-300">
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
                    <div className="flex relative pb-40 justify-center items-center w-[200px] h-[100px] lg:w-[600px] lg:h-[200px]">
                      <Image
                        width={400}
                        height={400}
                        src="/Video mascots/Video mascots/GIF/4-Highfive.gif"
                        alt="Mascot"
                        className="h-auto w-full object-cover"
                      />
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
          <NewsletterSignup />
          <AboutUs />
        </main>
      </div>
    </>
  );
}

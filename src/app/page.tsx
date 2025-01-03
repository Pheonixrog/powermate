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
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsVisible(true), 500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[url('/background.svg')]  bg-cover bg-center bg-no-repeat">
      <Navbar />
      <main className="flex-grow ">
        <ScrollReveal>
          <section className="sm:pt-0 ">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center justify-center mt-5 "></div>
              <div className="sm:pt-0 sm:px-0 px-5  grid md:mx-40 md:mt-20  gap-5 lg:gap-16 items-center justify-center">
                <div className=" text-center  lg:text-left ">
                  <p className="text-5xl md:text-7xl lg:text-7xl xl:text-9xl font-bold mb-4 md:mb-6 text-white">
                    Control Your{" "}
                    <span className="text-[#CAFFE5]">Screen Time</span> With
                    Friends
                  </p>
                  <div className="flex flex-col md:flex-col lg:flex-col justify-center items-center ">
                    <div className="text-center flex flex-col items-center justify-center">
                      <EnhancedTypography
                        text="Stay focused and connected because doom scrolling at 2 AM isn't the vibe."
                        className="text-xl md:text-3xl lg:text-5xl text-white mx-3 md:mx-0"
                      />

                      <div className="h-20 mt-5 md:mt-5 w-100 overflow-hidden flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start">
                        <a className="flex overflow-hidden justify-center items-center gap-2   font-bold  px-6  rounded-full text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                          <Image width={200} height={20} src="/googleplaybutton.svg" alt="Google Play" />
                        </a>
                        <a className="flex overflow-hidden items-center justify-center gap-2  font-bold  px-6  md:px-8 rounded-full text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                          <Image 
                          width={200}
                          height={20}
                          
                          src="/appstorebutton.svg" 
                          alt="App Store" />
                        </a>
                      </div>
                    </div>
                    {/* <div>
                      <div className="sm:pt-0 sm:px-0  pt-20 mx-auto w-[300px] h-[300px] lg:w-[600px] lg:h-[400px] md:px-10">
                        <img
                          src="/Video mascots/Video mascots/GIF/4-Highfive.gif"
                          alt=""
                        />
                      </div>
                    </div> */}
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

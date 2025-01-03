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
          <section className="md:mt-0 md:mb-0 mt-20 mb-60 h-full w-full ">
            <div className="container mx-auto px-4">
              <div className="flex flex-col  "></div>
              <div className="pt-10 md:pt-0 sm:px-0 px-5  grid md:mx-40   gap-5 lg:gap-16 items-center justify-center">
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
                        className="text-2xl md:text-3xl lg:text-5xl text-white mx-3 md:mx-0"
                      />

                      <div className="h-auto absolute mt-5 w-full  flex flex-col sm:flex-col gap-4 justify-center items-center lg:justify-start">
                        <div className="mt-10 md:mt-0 relative flex flex-col md:flex-row gap-4 md:top-32 top-32">
                        <a className="md:top-0 top-20 relative overflow-hidden flex justify-center items-center gap-2 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                          <Image
                            width={200} // Adjusted for responsiveness
                            height={20}
                            src="/googleplaybutton.svg"
                            alt="Google Play"
                          />
                        </a>
                        <a className="relative overflow-hidden bottom-20 md:bottom-0  flex justify-center items-center gap-2 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                          <Image
                            width={205} // Adjusted for responsiveness
                            height={20}
                            src="/appstorebutton.svg"
                            alt="App Store"
                          />
                        </a>

                        </div>
                        
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

"use client";

import { motion } from "framer-motion";
import { FullScreenSection } from "./FullScreenSection";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Set your limits",
    description: "You set a daily screen limit for your most used apps.",
    image: "/image1.svg",
  },
  {
    title: "Protect your limits",
    description:
      "When you've hit your limit, I step in to block apps and keep you focused.",
    image: "/image2.svg",
  },
  {
    title: "Friends Support",
    description:
      "Need a little more time? Ask your friends to unlock it - only if you really need it!",
    image: "/image3.svg",
  },
  {
    title: "Track Progress",
    description: "Earn streaks and watch your screen habits improve daily.",
    image: "/image4.svg",
  },
];

export function HowPowermateWorks() {
  return (
    <FullScreenSection id="how" className="flex items-center justify-center">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="flex flex-col md:flex-row items-center gap-2 text-center">
            <span className="text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              How
            </span>
            <span className="text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#CAFFE5]">
              Powermate
            </span>
            <span className="text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              Works?
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4">
            Follow the journey of taking control of your screen time with
            Powermate
          </p>
        </div>

        <div className="relative h-auto md:h-[70vh] w-full flex flex-col md:block gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 2 + index, // Delay increases sequentially
              }}
              className={`md:absolute ${getPositionClass(index)} md:static`}
            >
              <Card className="w-full md:w-64 h-auto md:h-72    border-[#CAFFE5] hover:border-[#CAFFE5]/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-4 flex flex-col items-center justify-between h-full">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-auto h-24 object-cover rounded-lg mb-2"
                  />
                  <h3 className="text-lg text-[#29A5D6] font-semibold mb-1 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm text-center">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
}

function getPositionClass(index: number): string {
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return ""; // No specific positioning for mobile
  }
  switch (index) {
    case 0:
      return "top-0 left-0";
    case 1:
      return "top-20 left-1/4";
    case 2:
      return "top-40 left-2/4";
    case 3:
      return "top-60 left-3/4";
    default:
      return "";
  }
}

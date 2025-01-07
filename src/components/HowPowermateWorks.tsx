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
    description: "When you've hit your limit, I step in to block apps and keep you focused.",
    image: "/image2.svg",
  },
  {
    title: "Friends Support",
    description: "Need a little more time? Ask your friends to unlock it - only if you really need it!",
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
    <FullScreenSection id="how" className="flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="flex flex-col md:flex-row items-center gap-2 text-center mb-6">
            <span className="text-4xl md:text-5xl lg:text-7xl font-bold">
              How
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#CAFFE5]">
              Powermate
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl font-bold">
              Works?
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-3xl max-w-2xl mx-auto">
            Follow the journey of taking control of your screen time with Powermate in 4 simple steps...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3, // Reduced delay for smoother sequence
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="border-[#CAFFE5] backdrop-blur-sm bg-[#CAFFE5] bg-opacity-10 text-white h-[400px] transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 flex flex-col items-center h-full">
                  {/* Top section with image */}
                  <div className="flex-grow flex items-center justify-center mb-6">
                    <div className="w-28 h-28 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-auto h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Bottom section with text */}
                  <div className="flex flex-col items-center justify-end space-y-4">
                    <h3 className="text-2xl md:text-3xl text-[#29A5D6] font-semibold text-center">
                      {step.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-300 text-center">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
}
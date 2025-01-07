"use client";

import { FullScreenSection } from "./FullScreenSection";
import { EnhancedTypography } from "./EnhancedTypography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Focus, Moon, Heart, Brain } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Better Focus",
    description: "Spend less time scrolling and more on what really matters.",
    icon: Focus,
  },
  {
    title: "Restful Sleep",
    description: "Skip the late-night browsing and wake up refreshed.",
    icon: Moon,
  },
  {
    title: "Stronger Relationships",
    description: "Be fully present with the people you care about.",
    icon: Heart,
  },
  {
    title: "Improved Mental Clarity",
    description:
      "Together, we'll help you feel more at peace and less stressed.",
    icon: Brain,
  },
];

export function WhyPowermateWorks() {
  return (
    <FullScreenSection id="why" className="flex items-center justify-center">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="max-w-8xl mx-auto text-center mb-12"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 flex flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            <span>
              Why <span className="text-[#CAFFE5]">Powermate</span>{" "}
              <span>Works?</span>
            </span>
          </h2>

          <EnhancedTypography
            text="More than just blocking apps - Powermate helps you build a life that's calmer and more connected. Here's how:"
            className="text-2xl  sm:text-xl md:text-3xl  text-gray-300 text-center justify-center"
          />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full "
            >
              <Card className="h-full backdrop-blur-sm border-[#CAFFE5] bg-[#CAFFE5] bg-opacity-10  hover:border-[#CAFFE5]/40 transition-all duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl sm:text-3xl text-[#29A5D6] font-bold">
                    <div className="p-2 sm:p-3 rounded-xl mr-3 sm:mr-4 bg-[#CAFFE5]/10">
                      <reason.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#CAFFE5]" />
                    </div>
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center">
                  <p className="text-2xl sm:text-2xl text-gray-300 r">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </FullScreenSection>
  );
}

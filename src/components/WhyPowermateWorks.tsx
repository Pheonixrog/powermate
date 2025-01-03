"use client";

import { FullScreenSection } from "./FullScreenSection";
import { EnhancedTypography } from "./EnhancedTypography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Focus, Moon, Heart, Brain } from 'lucide-react';
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
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span>Why</span>
            <span className="text-[#CAFFE5]">Powermate</span>
            <span>Works?</span>
          </h2>

          <EnhancedTypography
            text="More than just blocking apps - Powermate helps you build a life that's calmer and more connected. Here's how:"
            className="text-lg sm:text-xl md:text-2xl text-gray-300"
          />
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full backdrop-blur-sm border-[#29A5D6]/20 hover:border-[#29A5D6]/40 transition-all duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl sm:text-2xl text-[#CAFFE5] font-bold">
                    <div className="p-2 sm:p-3 rounded-xl mr-3 sm:mr-4 bg-[#CAFFE5]/10">
                      <reason.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#CAFFE5]" />
                    </div>
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center">
                  <p className="text-base sm:text-lg text-gray-300">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </FullScreenSection>
  );
}


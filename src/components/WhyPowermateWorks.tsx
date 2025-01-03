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
    <FullScreenSection id="why">
      <div className="container mx-auto px-4 sm:mx-10">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="flex flex-col md:flex-row items-start md:items-center gap-4 text-center md:text-left">
  <span className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-6">Why</span>
  <span className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#CAFFE5] mb-2 md:mb-6">
    Powermate
  </span>
  <span className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-6">Works?</span>
</h2>

          <EnhancedTypography
            text="More than just blocking apps - Powermate helps you build a life that's calmer and more connected. Here's how:"
            className="text-xl md:text-2xl mb-12 text-gray-300"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full w-full  backdrop-blur-sm border-[#29A5D6]/20 hover:border-[#29A5D6]/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-[#CAFFE5] font-bold">
                    <div className="p-3 rounded-xl  mr-4">
                      <reason.icon className="w-8 h-8 text-[#CAFFE5]" />
                    </div>
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-300">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
}

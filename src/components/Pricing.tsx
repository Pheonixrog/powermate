'use client'

import { ScrollReveal } from './ScrollReveal'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Free Plan",
    price: "$0",
    features: [
      "App Blocking",
      "Time Limits",
      "Group Chatting",
      "5 Time Extensions Per Day",
      "1 Secret Code Per Week"
    ],
    cta: "Get Started"
  },
  {
    name: "Elevate Plan",
    price: "$2.99",
    period: "/month",
    features: [
      "All Free Features",
      "Unlimited Time Extensions",
      "5 Secret Codes Per Week",
      "Priority Support",
      "Ad-free Experience"
    ],
    cta: "Start Free Trial"
  }
]

export function Pricing() {
  return (
    <ScrollReveal>
      <section className="w-full h-full bg-gradient-to-b from-gray-900 to-purple-950 flex items-center justify-center text-white">
        <div className="container px-6 md:px-12 lg:px-24 py-16 ">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-12">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl">
            {plans.map((plan, index) => (
              <Card key={index} className="bg-gray-800 shadow-lg border border-purple-500 rounded-lg transform transition-all duration-300 hover:scale-105">
                <CardHeader className="p-6 text-center">
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-center mb-6">
                    {plan.price}
                    <span className="text-lg font-normal">{plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-6 w-6 text-green-500 mr-3" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg font-medium">
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

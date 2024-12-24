"use client"
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
      <section className="py-16 bg-gray-900" id='pricing'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">Pricing Plans</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className="bg-gray-800 text-white border-purple-500">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-center mb-6">
                    {plan.price}<span className="text-lg font-normal">{plan.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">{plan.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}


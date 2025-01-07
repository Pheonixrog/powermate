"use client"
import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Check} from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { useState } from 'react'
import Link from 'next/link';


export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="flex flex-col bg-gray-950  text-white py-20">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10 ">
        <h1 className="text-3xl font-bold text-center mb-8">Pricing</h1>
        <p className="text-center mb-12">Choose the plan that fits your needs and take control of your screen time</p>
        
        <div className="grid border  md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className=" h-full  rounded-lg border-[#CAFFE5] border-2 shadow-lg overflow-hidden">
            <div className="px-6 py-8 ">
              <h2 className="text-2xl font-bold text-center mb-4">Free Plan</h2>
              <p className="text-center text-gray-400 mb-6">Enjoy Essential Tools For Managing Your App Usage At No Cost</p>
              <div className="text-4xl font-bold text-center mb-6">$0<span className="text-lg font-normal">/month</span></div>
              <Link href="/"> <Button className="w-full">
                Get Started
                </Button></Link>
             
              
              
            </div>
            <div className="px-6 py-8 bg-gray-900">
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-4">
                {[
                  'App Blocking: Limit Access To Distracting Apps.',
                  'Time Limits: Set Daily Time Limits For Your Apps',
                  'Group Chatting: Add Friends To Your Powergroup For Support And Accountability',
                  '5 Time Extensions Per Day: Request Up To 5 Daily Extensions From Your Powergroup',
                  '1 Secret Code Per Week: Use An Emergency Code For Temporary App Access Without Needing Approval.'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 py-4 bg-teal-400">
              <p className="text-center">Free Plan</p>
            </div>
          </div>

          {/* Elevate Plan */}
          <div className=" rounded-lg shadow-lg overflow-hidden border-2 border-[#CAFFE5]">
            <div className="px-6 py-8">
              <div className="bg-[#29A5D6] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">Recommended</div>
              <h2 className="text-2xl font-bold text-center mb-4">Elevate Plan</h2>
              <p className="text-center text-gray-400 mb-6">Unlock The Full Potential Of Focus Tools To Maximize Productivity</p>
              <div className="flex justify-center items-center mb-6">
                <span className="mr-2">Monthly</span>
                <Switch  checked={isYearly} onCheckedChange={setIsYearly} />
                <span className="ml-2">Yearly</span>
              </div>
              {isYearly ? (
                <>
                  <div className="text-4xl font-bold text-center mb-2">$1.67<span className="text-lg font-normal">/month</span></div>
                  <p className="text-center text-sm text-gray-400 mb-4">(Billed Annually At $19.99/Year)</p>
                  <p className="text-center text-green-500 font-semibold mb-4">Save 44%</p>
                </>
              ) : (
                <div className="text-4xl font-bold text-center mb-6">$2.99<span className="text-lg font-normal">/month</span></div>
              )}
              <Link href="/"><Button className="w-full bg-[#29A5D6]  hover:bg-[#29A5D6]/40">Start Free Week</Button></Link>
            </div>
            <div className="px-6 py-8 bg-gray-900">
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span><strong>All Free Features:</strong> Includes Everything From The Free Version</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span><strong>Unlimited Time Extensions:</strong> Request Extra Time From Your Powergroup Anytime, As Often As Needed.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span><strong>5 Secret Codes Per Week:</strong> Enjoy More Emergency Access Without Needing Powergroup Approval.</span>
                </li>
              </ul>
            </div>
            <div className="px-6 py-4 bg-teal-400">
              <p className="text-center">Premium Plan</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


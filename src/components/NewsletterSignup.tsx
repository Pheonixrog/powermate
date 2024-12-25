'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

export function NewsletterSignup() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted:', { firstName, email })
    toast({
      title: "Subscribed!",
      description: "You've successfully signed up for our newsletter.",
    })
    setFirstName('')
    setEmail('')
  }

  return (
    <section className="py-16 h-screen bg-gray-900 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">Stay Updated</h2>
          <p className="text-gray-300 mb-8 text-center">Want updates and tips? Sign up for our newsletter!</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="bg-gray-700 text-white border-gray-600 focus:border-purple-400 w-full p-4 rounded-md"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-700 text-white border-gray-600 focus:border-purple-400 w-full p-4 rounded-md"
              />
            </div>
            <Button type="submit" className="w-full py-4 bg-purple-500 hover:bg-purple-600 text-lg rounded-md">
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-gray-400 mt-6 text-center">
            Get the latest news, tips, and exclusive offers delivered straight to your inbox!
          </p>
        </div>
      </motion.div>
    </section>
  )
}

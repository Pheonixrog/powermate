'use client'

import { motion } from 'framer-motion'

export function NewsletterSignup() {
  return (
    <section className="py-12 min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      >
        <div className="p-6 sm:p-8 lg:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-400 text-center">Stay Updated</h2>
          <p className="text-gray-300 mb-8 text-center">
            Want updates and tips? Sign up for our newsletter!
          </p>
          <form action="https://formspree.io/f/mwppvvlo" method="post">
            <div className="mb-6">
              <label htmlFor="firstName" className="text-white text-md md:text-lg font-semibold block mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="w-full border border-gray-600 bg-gray-700 px-4 py-3 rounded-lg shadow-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-white text-md md:text-lg font-semibold block mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-600 bg-gray-700 px-4 py-3 rounded-lg shadow-md text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                required
              />
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="w-full sm:w-auto px-8 py-3 text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-md hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-400 mt-6 text-center">
            Get the latest news, tips, and exclusive offers delivered straight to your inbox!
          </p>
        </div>
      </motion.div>
    </section>
  )
}

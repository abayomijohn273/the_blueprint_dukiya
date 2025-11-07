"use client"

import { motion } from "framer-motion"

const HeroTextSection = () => {
  return (
    <section className="relative bg-gray-50 py-20 md:py-28 lg:py-32 pt-32 md:pt-36 lg:pt-40 xl:pt-42">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 text-balance leading-tight">
            Build Structure. Form Partnerships. Create Wealth.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            Discover how taking action leads to rewards with THE BLUEPRINT, a dynamic one-day event crafted for ambitious young professionals, entrepreneurs, and future real estate leaders. This unique experience empowers participants to turn their visions into reality, cultivate strategic partnerships, and build enduring wealth in the real estate industry.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("register")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-[#EC712C] transition-all hover:scale-105"
          >
            Register Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroTextSection

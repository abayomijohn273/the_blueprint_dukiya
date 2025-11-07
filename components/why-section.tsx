"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import SectionBadge from "./ui/section-badge"

const WhySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const points = [
    {
      title: "Build Structure",
      description:
        "Create systems that outlive emotions and circumstances. Learn frameworks that successful people use to build lasting wealth.",
    },
    {
      title: "Form Partnerships",
      description:
        "Connect with like-minded individuals and potential partners who share your drive and multiply your potential and impact.",
    },
    {
      title: "Create Wealth",
      description:
        "Tap into the power of real estate as a long-term wealth strategy with insights from industry leaders at Dukiya.",
    },
  ]

  return (
    <section id="why-blueprint" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionBadge number="01" label="WHY THE BLUEPRINT" />
          <h2 className="max-w-6xl mx-auto font-display text-3xl md:text-5xl lg:text-6xl mt-6 mb-6 text-balance">
            In a World Filled with Noise,
            <br />
            <span style={{ color: "#002278" }}>Clarity is Your Greatest Advantage</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            This event brings together visionaries, builders, and dreamers under one roof — people who are not just
            talking about success but actively creating systems that sustain it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-display text-white"
                style={{ backgroundColor: "#002278" }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-2xl mb-4">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhySection

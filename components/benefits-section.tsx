"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import SectionBadge from "./ui/section-badge"

const BenefitsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      title: "Clarity",
      description: "Understand the frameworks that successful people use to build lasting wealth.",
      icon: "💡",
    },
    {
      title: "Connections",
      description: "Meet like-minded individuals and potential partners who share your drive.",
      icon: "🤝",
    },
    {
      title: "Confidence",
      description: "Learn proven systems that reduce fear and uncertainty in business and investment.",
      icon: "🎯",
    },
    {
      title: "Opportunities",
      description: "Get real estate insights directly from industry leaders at Dukiya.",
      icon: "🚀",
    },
    {
      title: "Support",
      description: "Join a network that doesn't end when the event does—it's the beginning of your growth story.",
      icon: "🌟",
    },
  ]

  return (
    <section id="benefits" className="py-20 md:py-32" style={{ backgroundColor: "#e8f4e8" }} ref={ref}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionBadge number="02" label="WHAT YOU'LL GAIN" />
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mt-6 text-balance">
            Transform Your Future in
            <br />
            <span style={{ color: "#EC712C" }}>One Powerful Day</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 hover:scale-101 transition-all ease-in-out duration-200"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="font-display text-2xl mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection

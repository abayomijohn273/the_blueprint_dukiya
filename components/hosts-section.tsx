"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import SectionBadge from "./ui/section-badge"

const HostsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const hosts = [
    {
      name: "Lukman Shobowale",
      title: "Co-founder, Dukiya Investment",
      image: "/lukman.webp",
    },
    {
      name: "Bayo Lawal",
      title: "Co-founder, Dukiya Investment",
      image: "/bayo.webp",
    },
  ]

  return (
    <section id="hosts" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionBadge number="03" label="YOUR HOSTS" />
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mt-6 mb-6 text-balance">
            Learn From The <span style={{ color: "#002278" }}>Visionaries</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            These visionary leaders have built one of Nigeria's fastest-growing real estate brands and now, they want to
            share the blueprint with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {hosts.map((host, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <img
                  src={host.image || "/placeholder.svg"}
                  alt={host.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-2">{host.name}</h3>
              <p className="text-lg" style={{ color: "#EC712C" }}>
                {host.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HostsSection

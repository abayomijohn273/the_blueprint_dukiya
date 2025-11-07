"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import SectionBadge from "./ui/section-badge"

const LocationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionBadge number="05" label="LOCATION" />
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mt-6 mb-6 text-balance">
            Find Us at <span style={{ color: "#002278" }}>Dukiya HQ</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Located in the heart of Lekki Phase 1, at No. 35A Christ Avenue Street, Off Admiralty Road, Lekki Phase 1, Lagos, Nigeria
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl" style={{ height: "500px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1236.3880229762005!2d3.474453549935146!3d6.454876332631491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44158502a1d%3A0x3da00af01375e9d2!2s35%20Christ%20Ave%2C%20off%20Admiralty%20Road%2C%20Lekki%20Phase%201%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1762479600862!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dukiya Investment Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LocationSection

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionBadge from "./ui/section-badge"

const RegistrationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="register" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/luxury-real-estate-lagos-nigeria-modern-architectu.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 34, 120, 0.95)" }} />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionBadge number="04" label="REGISTRATION" dark />
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mt-6 mb-6 text-balance">
            The Time Is Now.
            <br />
            <span style={{ color: "#EC712C" }}>Create Your Future.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed mb-12">
            Don't wait for the perfect moment—create it. Join The Blueprint and be part of a movement of young Nigerians
            building wealth through structure, strategy, and collaboration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12"
        >
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#002278" }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl mb-1">Date</h3>
                <p className="text-gray-600">November 14th, 2025</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#002278" }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl mb-1">Venue</h3>
                <p className="text-gray-600">
                  Dukiya Investment Headquarters
                  <br />
                  No. 35a Christ Avenue Street, Off Admiralty Road
                  <br />
                  Lekki Phase 1, Lagos
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#EC712C" }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl mb-1">Investment</h3>
                <p className="text-gray-600">
                  <span className="line-through text-gray-400">₦250,000</span>{" "}
                  <span className="font-bold text-2xl" style={{ color: "#EC712C" }}>
                    ₦200,000
                  </span>
                  <span className="text-sm block mt-1">Early Bird (Valid till November 7th)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              className="w-full py-4 rounded-full text-lg font-bold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "#002278" }}
            >
              Register Now
            </button>

            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">Questions? Contact us:</p>
              <p>📞 +234 906 201 9993, +234 906 201 9992</p>
              <p>📧 info@dukiyang.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RegistrationSection

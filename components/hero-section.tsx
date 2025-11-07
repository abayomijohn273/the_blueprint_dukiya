"use client"

import { useState } from "react"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import { Autoplay, EffectFade, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const slides = [
  {
    title: "Build Structure, Form Partnerships, Create Wealth",
    subtitle:
      "A one-day transformative experience for young professionals ready to build lasting wealth through real estate.",
    image: "/modern-real-estate-building-luxury-architecture-ni.jpg",
  },
  {
    title: "Join Visionaries, Builders, and Dreamers",
    subtitle: "Learn from industry leaders who built one of Nigeria's fastest-growing real estate brands.",
    image: "/successful-young-nigerian-entrepreneurs-business-m.jpg",
  },
  {
    title: "The Time Is Now. Create Your Future.",
    subtitle: "Don't wait for the perfect moment—create it. November 25th, 2025.",
    image: "/lagos-nigeria-skyline-modern-city-real-estate-deve.jpg",
  },
]

const HeroSection = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="relative h-screen min-h-[600px] pt-20">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
              </div>

              <div className="relative h-full flex items-center justify-center">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                  <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6 text-balance leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <button
                    onClick={() => {
                      const element = document.getElementById("register")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white transition-all hover:scale-105"
                    style={{ backgroundColor: "#002278" }}
                  >
                    Secure Your Seat
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        onClick={() => swiper?.slidePrev()}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiper?.slideToLoop(index)}
            className={`h-1.5 rounded-full transition-all ${
              currentIndex === index ? "w-8 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection

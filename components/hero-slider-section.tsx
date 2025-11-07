"use client"

import { useState } from "react"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import { Autoplay, EffectFade, Navigation, Parallax } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const slides = [
  {
    title: "A Program for Young People Ready to Build Something That Lasts",
    subtitle: "In a world filled with noise, clarity is your greatest advantage",
    image: "/young-nigerian-professionals-business-planning.jpg",
  },
  {
    title: "Build Structure That Outlives Emotions",
    subtitle: "Learn proven systems that reduce fear and uncertainty in business and investment",
    image: "/african-business-partners-collaboration.jpg",
  },
  {
    title: "Form Partnerships That Multiply Impact",
    subtitle: "Meet like-minded individuals and potential partners who share your drive",
    image: "/nigerian-real-estate-professionals.jpg",
  },
]

const HeroSliderSection = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="relative h-144 md:h-184">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Parallax]}
        effect="fade"
        parallax={true}
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
            <div className="relative h-full w-full" data-swiper-parallax="-100">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              </div>

              {/* Content Overlay - Left Side */}
              <div className="relative h-full flex items-center pt-10 md:pt-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                  <div className="max-w-3xl">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 text-balance leading-tight" data-swiper-parallax="-50">
                      {slide.title}
                    </h2>
                    <p data-swiper-parallax="-70" className="text-base md:text-lg text-white/90 text-pretty leading-relaxed">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows - Bottom Left */}
      <div className="absolute bottom-8 left-4 md:left-8 z-10 flex gap-3">
        <button
          onClick={() => swiper?.slidePrev()}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => swiper?.slideNext()}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress Indicators - Bottom Right */}
      <div className="absolute bottom-8 right-4 md:right-8 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiper?.slideToLoop(index)}
            className={`h-1 rounded-full transition-all ${
              currentIndex === index ? "w-12 md:w-16 bg-white" : "w-8 md:w-12 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSliderSection

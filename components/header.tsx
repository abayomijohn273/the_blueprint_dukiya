"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Logo from "../public/logo.svg"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-3xl py-6" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="font-display text-xl md:text-2xl" style={{ color: "#002278" }}>
          <Image src={Logo} alt="Logo" className="w-32"/>
          <span className="sr-only">The Blueprint</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 xl:gap-12">
            <button
              onClick={() => scrollToSection("why-blueprint")}
              className="text-base font-medium text-gray-700 hover:text-[#002278] transition-colors"
            >
              Why Blueprint
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-base font-medium text-gray-700 hover:text-[#002278] transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("hosts")}
              className="text-base font-medium text-gray-700 hover:text-[#002278] transition-colors"
            >
              Hosts
            </button>
          </nav>

          <button
            onClick={() => scrollToSection("register")}
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#EC712C] transition-all hover:scale-105"
          >
            Register Now
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

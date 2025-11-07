import Header from "@/components/header"
import HeroTextSection from "@/components/hero-text-section"
import HeroSliderSection from "@/components/hero-slider-section"
import WhySection from "@/components/why-section"
import BenefitsSection from "@/components/benefits-section"
import HostsSection from "@/components/hosts-section"
import RegistrationSection from "@/components/registration-section"
import LocationSection from "@/components/location-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroTextSection />
      <HeroSliderSection />
      <WhySection />
      <BenefitsSection />
      <HostsSection />
      <RegistrationSection />
      <LocationSection />
      <Footer />
    </main>
  )
}

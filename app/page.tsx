import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"
import { HeroBanner } from "@/components/sections/hero-banner"
import { ServiceCardGrid } from "@/components/sections/service-card-grid"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <ServiceCardGrid />
      </main>
      <FooterInfoBar />
    </div>
  )
}

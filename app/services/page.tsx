import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"
import { ServiceCardGrid } from "@/components/sections/service-card-grid"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">서비스</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">NEXVALUEUP의 전문 서비스를 확인하세요</p>
          </div>
          <ServiceCardGrid />
        </div>
      </main>
      <FooterInfoBar />
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"

export function HeroBanner() {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      const headerOffset = 64 // Header height
      const elementPosition = servicesSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative w-full bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              고객들의 미래가치를 <span className="text-primary">UP!</span>하고
              <br />
              기업의 지속가능한 경영을 지원하는
              <br />
              <span className="text-secondary">전문 파트너</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              지속가능한 미래 가치를 설계하는 Value-up Partner가 되겠습니다.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
              onClick={handleScrollToServices}
            >
              서비스 찾기
            </Button>
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              회사 소개
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

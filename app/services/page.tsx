import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/constants"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb />
      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          {/* Page Title */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">서비스</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              지속가능한 미래 가치를 설계하는 <span className="text-[#00C4FF] font-bold">Value-up Partner</span>가 되기 위한,
              <br />
              넥스밸류업의 주요 사업을 소개합니다.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service) => {
              // 서비스별 배경색 결정
              const cardBgColor =
                service.id === "ax" || service.id === "esg" || service.id === "public"
                  ? "bg-[#044E92]"
                  : service.id === "dx" || service.id === "performance"
                  ? "bg-[#0282B6]"
                  : "bg-[#044E92]" // Default

              return (
                <Card
                  key={service.id}
                  className={`${cardBgColor} text-white border-0 hover:shadow-xl transition-all duration-300 flex flex-col`}
                >
                  <CardHeader className="flex-1 pb-4">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-3xl">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <CardTitle
                      className="text-lg font-bold mb-3 text-white leading-tight min-h-14 flex items-start"
                    >
                      {service.title}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="text-white/90 text-sm leading-relaxed">
                      {service.summary}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <Link href={`/services/${service.slug}`}>
                      <Button
                        variant="ghost"
                        className="w-full bg-white text-[#044E92] hover:bg-white/90 shadow-md font-medium"
                      >
                        자세히 보기 ▷
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
      <FooterInfoBar />
    </div>
  )
}

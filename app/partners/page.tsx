import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { partners } from "@/lib/constants"
import Image from "next/image"

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">파트너</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              넥스밸류업과 지속가능한 미래 가치를 설계하는
              <br />
              Value-up Partner를 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-8 rounded-lg border bg-card hover:shadow-md transition-shadow"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={80}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <FooterInfoBar />
    </div>
  )
}

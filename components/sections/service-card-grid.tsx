import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/constants"
import { ArrowRight } from "lucide-react"

export function ServiceCardGrid() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">고객님에게 꼭 맞는 맞춤 상품을 찾아보세요</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            지속가능한 미래 가치를 설계하는 Value-up Partner가 되기 위한,
            <br />
            넥스밸류업의 주요 사업을 소개합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-lg leading-snug text-balance">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm text-pretty leading-relaxed">{service.summary}</CardDescription>
                <Link href={`/services/${service.slug}`}>
                  <Button variant="ghost" size="sm" className="w-full group-hover:text-primary transition-colors">
                    자세히 보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

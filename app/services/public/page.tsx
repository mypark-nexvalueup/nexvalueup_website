import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/constants"

export default function PublicServicePage() {
  const service = services.find((s) => s.id === "public")

  if (!service) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{service.title}</h1>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Main Description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <FooterInfoBar />
    </div>
  )
}


"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mainServices } from "@/lib/constants"
import { Search } from "lucide-react"

export function ServiceCardGrid() {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Text and Button */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              고객님에게 꼭 맞는
              <br />
              맞춤 상품을 찾아보세요.
            </h2>
            <Button
              size="lg"
              className="bg-[#0066FF] hover:bg-[#0052cc] text-white px-8 py-6 text-base rounded-lg shadow-lg shadow-blue-100"
              onClick={handleScrollToServices}
            >
              <Search className="mr-2 h-5 w-5" />
              서비스 찾기
            </Button>
          </div>

          {/* Right side - Horizontal Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainServices.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-lg bg-white relative overflow-hidden"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Content area */}
                  <div className="flex-1 mb-4">
                    <CardTitle className="text-base md:text-lg font-bold text-foreground mb-3 leading-tight">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {service.summary}
                    </CardDescription>
                  </div>
                  
                  {/* Icon positioned at bottom right */}
                  <div className="flex justify-end mt-auto">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      {service.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

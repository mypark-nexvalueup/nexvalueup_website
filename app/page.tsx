import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"
import { ServiceCardGrid } from "@/components/sections/service-card-grid"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative w-full overflow-hidden">
          {/* Background Image */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
            <Image
              src="/Background.png"
              alt="Background"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
          
          {/* Buttons Overlay */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16 z-10 flex flex-col gap-3">
            <Link href="/about">
              <button className="group relative w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] px-6 py-3 md:px-8 md:py-4 rounded-lg bg-gradient-to-r from-white to-[#21476A] hover:opacity-90 transition-opacity shadow-lg">
                <span className="text-white font-medium text-sm md:text-base flex items-center justify-between gap-2">
                  <span>회사 소개 바로가기</span>
                  <span className="text-gray-300">&gt;&gt;&gt;</span>
                </span>
              </button>
            </Link>
            
            <Link href="/services">
              <button className="group relative w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] px-6 py-3 md:px-8 md:py-4 rounded-lg bg-gradient-to-r from-white to-[#21476A] hover:opacity-90 transition-opacity shadow-lg">
                <span className="text-white font-medium text-sm md:text-base flex items-center justify-between gap-2">
                  <span>서비스 소개 바로가기</span>
                  <span className="text-gray-300">&gt;&gt;&gt;</span>
                </span>
              </button>
            </Link>
          </div>
        </section>
        
        <ServiceCardGrid />
      </main>
      <FooterInfoBar />
    </div>
  )
}

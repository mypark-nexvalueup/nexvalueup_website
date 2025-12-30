import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"
import { MapPin, Train, Bus } from "lucide-react"
import Image from "next/image"

export default function LocationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">오시는 길</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Textual Information */}
            <div className="space-y-12">
              {/* Seoul Office */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#044E92] rounded-full flex items-center justify-center text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    서울 사무소 <span className="text-muted-foreground text-xl">(07213)</span>
                  </h2>
                </div>
                <div className="space-y-2 pl-16 text-muted-foreground">
                  <p>서울시 영등포구 양평로 61 404호</p>
                  <p>서울시 영등포구 당산동5가 33-9 404호</p>
                </div>

                <div className="space-y-4 pl-16">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#044E92] rounded-full flex items-center justify-center text-white">
                      <Train className="h-5 w-5" />
                    </div>
                    <p className="text-foreground text-lg font-semibold">지하철</p>
                  </div>
                  <p className="text-muted-foreground pl-12">
                    당산역 ②·⑨호선 12번 출구 선유도 방면으로 150m 직진
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#044E92] rounded-full flex items-center justify-center text-white">
                      <Bus className="h-5 w-5" />
                    </div>
                    <p className="text-foreground text-lg font-semibold">버스</p>
                  </div>
                  <p className="text-muted-foreground pl-12">
                    당산119안전센터, 당산역 정류장 (605, 761, 700 / 6623, 5714, 6514, 5620)
                  </p>
                </div>
              </div>

              {/* Cheonan Office */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#044E92] rounded-full flex items-center justify-center text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    천안 사무소 <span className="text-muted-foreground text-xl">(31164)</span>
                  </h2>
                </div>
                <div className="space-y-2 pl-16 text-muted-foreground">
                  <p>천안시 서북구 불당9길 18 101호</p>
                  <p>천안시 서북구 불당동 1073 101호</p>
                </div>

                <div className="space-y-4 pl-16">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#044E92] rounded-full flex items-center justify-center text-white">
                      <Train className="h-5 w-5" />
                    </div>
                    <p className="text-foreground text-lg font-semibold">기차</p>
                  </div>
                  <p className="text-muted-foreground pl-12">
                    (KTX) 천안아산역, (무궁화) 아산역
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#044E92] rounded-full flex items-center justify-center text-white">
                      <Bus className="h-5 w-5" />
                    </div>
                    <p className="text-foreground text-lg font-semibold">버스</p>
                  </div>
                  <p className="text-muted-foreground pl-12">
                    월봉고등학교 정류장 (갤러리아백화점 방면) (990 / 1, 21)
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Map Placeholders */}
            <div className="space-y-12">
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-lg text-gray-500">
                <p>서울 사무소 지도</p>
              </div>
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-lg text-gray-500">
                <p>천안 사무소 지도</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterInfoBar />
    </div>
  )
}


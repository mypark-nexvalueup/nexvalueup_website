import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"

export default function OrganizationPage() {
  const divisions = [
    {
      id: "management",
      name: "경영관리실",
      color: "bg-[#003F6A]",
      departments: [
        "총무·인사 관리",
        "재무·회계 관리",
        "노무·법무 관리",
      ],
    },
    {
      id: "consulting",
      name: "컨설팅사업본부",
      color: "bg-[#055497]",
      departments: [
        "컨설팅·서비스 기획",
        "프로젝트 관리",
        "성과 관리·대외 협력",
      ],
    },
    {
      id: "ai-platform",
      name: "AI플랫폼사업본부",
      color: "bg-[#15C9E8]",
      departments: [
        "기술·서비스 개발",
        "R&D 연구 개발",
        "플랫폼·솔루션 개발",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">조직도</h1>
          </div>

          {/* Organizational Chart */}
          <div className="relative">
            {/* CEO Level */}
            <div className="flex flex-col items-center mb-12">
              <div className="relative w-full max-w-5xl">
                {/* CEO Box - Centered */}
                <div className="flex justify-center mb-8">
                  <div className="bg-gradient-to-r from-[#044E92] to-[#00C4FF] rounded-lg px-12 py-6 text-white font-bold text-xl md:text-2xl shadow-lg">
                    CEO
                  </div>
                </div>

                {/* Connection Lines from CEO */}
                <div className="relative flex justify-center h-16">
                  {/* Main vertical line down from CEO */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

                  {/* Horizontal branch to Advisory Group */}
                  <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gray-300 translate-x-1/2"></div>

                  {/* Advisory Group - Right side */}
                  <div className="absolute top-1/2 left-1/2 translate-x-[calc(100%+4rem)] -translate-y-1/2 flex items-center">
                    <div className="bg-gray-200 rounded-lg px-6 py-3 text-gray-700 font-semibold text-sm md:text-base whitespace-nowrap">
                      사업 자문단
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Three Divisions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {divisions.map((division, index) => (
                <div key={division.id} className="flex flex-col items-center relative">
                  {/* Connection Line from top to Division */}
                  <div className="w-0.5 h-8 bg-gray-300 mb-4"></div>

                  {/* Division Box */}
                  <div className={`${division.color} rounded-lg px-6 py-4 mb-4 w-full text-white font-bold text-base md:text-lg text-center shadow-md`}>
                    {division.name}
                  </div>

                  {/* Departments List - No connection lines */}
                  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 space-y-2 w-full">
                    {division.departments.map((dept, deptIndex) => (
                      <div
                        key={deptIndex}
                        className="bg-gray-200 rounded-lg px-4 py-2 text-gray-700 font-medium text-sm text-center"
                      >
                        {dept}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <FooterInfoBar />
    </div>
  )
}


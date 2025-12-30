import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"

export default function StrategyPage() {
  const strategicPillars = [
    {
      id: "client-centric",
      title: "Client-centric\n고객 중심",
      objective: "고객 가치 실현을 위한 실행 전문성 강화",
      actions: [
        "고객 맞춤형 Value-up 전략 프레임워크 구축",
        "공공·산업 특화 실행 컨설팅 역량 강화",
        "고객 성과 기반의 프로젝트 운영 체계 고도화",
      ],
    },
    {
      id: "future-oriented",
      title: "Future-oriented\n미래 지향",
      objective: "미래 가치 기반의 전략 기획 역량 강화",
      actions: [
        "산업·기술·정책 기반 전략 리서치 체계 구축",
        "미래 가치 성장 중심 전략 로드맵 개발",
        "신사업 및 신규 서비스 포트폴리오 발굴",
      ],
    },
    {
      id: "innovation",
      title: "Innovation\n기술 혁신",
      objective: "기술 혁신을 통한 가치 창출 역량 강화",
      actions: [
        "AI 기반의 플랫폼 서비스 역량 고도화",
        "ESG·안전·공급망 대응 솔루션 개발",
        "기술 기반 신규 서비스 모델 발굴 및 사업화",
      ],
    },
    {
      id: "sustainability",
      title: "Sustainability\n지속가능성",
      objective: "책임 기반의 지속가능 경영 체계 강화",
      actions: [
        "ESG 기반 경영·운영체계 확립",
        "데이터 기반 경영관리·의사결정 체계 구축",
        "인재·지식기반의 지속가능 성장 인프라 마련",
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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">경영전략체계</h1>
          </div>

          {/* Mission & Vision */}
          <div className="flex flex-col items-center mb-16 space-y-6">
            {/* Mission */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full font-semibold text-sm mb-2">
                Mission
              </div>
              <div className="bg-[#044E92] text-white px-8 py-4 rounded-lg text-lg md:text-xl font-bold text-center shadow-md">
                실행 중심의 전략과 기술로 공공과 산업의 미래 가치를 높인다.
              </div>
            </div>
            {/* Vision */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full font-semibold text-sm mb-2">
                Vision
              </div>
              <div className="bg-[#044E92] text-white px-10 py-5 rounded-lg text-xl md:text-2xl font-bold text-center shadow-lg">
                지속가능한 미래 가치를 설계하는 Value-up 파트너
              </div>
            </div>
          </div>

          {/* Strategic Pillars */}
          <div className="relative flex flex-col items-center">
            {/* Vertical line from Vision to Pillars */}
            <div className="w-0.5 h-16 bg-gray-300 mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-full">
              {strategicPillars.map((pillar, index) => (
                <div key={pillar.id} className="flex flex-col items-center text-center relative">
                  {/* Connection line from main horizontal line */}
                  <div className="w-0.5 h-8 bg-gray-300 mb-4"></div>

                  {/* Pillar Title */}
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm mb-3 whitespace-pre-line">
                    {pillar.title}
                  </div>

                  {/* Objective */}
                  <div className="bg-[#044E92] text-white px-5 py-3 rounded-lg text-base font-semibold mb-4 w-full shadow-sm">
                    {pillar.objective}
                  </div>

                  {/* Actions */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 w-full text-left space-y-2">
                    {pillar.actions.map((action, actionIndex) => (
                      <p key={actionIndex} className="text-sm text-gray-700">
                        - {action}
                      </p>
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


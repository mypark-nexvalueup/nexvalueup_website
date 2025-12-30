import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { MapPin, Train, Bus } from "lucide-react"

export default function AboutPage() {
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
      <Breadcrumb />
      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          {/* Page Title */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              넥스밸류업을 소개합니다
            </p>
          </div>

          {/* CEO Message Section */}
          <section className="w-full py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">CEO 인사말</h2>
              <p className="text-lg text-muted-foreground">CEO Message</p>
            </div>

            {/* Key Message Banner */}
            <div className="w-full bg-[#FAFAFA] py-10 md:py-14 mb-12 rounded-lg">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-center leading-relaxed">
                  지속가능한 미래 가치를 설계하는 <span className="text-[#00C4FF]">Value-up Partner</span>가 되겠습니다.
                </h3>
              </div>
            </div>

            {/* CEO Message Content */}
            <div className="max-w-4xl mx-auto">
              {/* Greeting */}
              <div className="mb-8 md:mb-12 space-y-2">
                <p className="text-xl md:text-2xl font-bold text-foreground">
                  안녕하십니까.
                </p>
                <p className="text-xl md:text-2xl font-bold text-foreground">
                  넥스밸류업 주식회사 대표이사 이상학입니다.
                </p>
              </div>

              {/* Main Content */}
              <div className="space-y-6 md:space-y-8 text-foreground leading-relaxed">
                <div className="text-base md:text-lg">
                  <p className="mb-4">
                    넥스밸류업은 공공과 산업의 미래가치를 한 단계 더 높이는(<span className="font-semibold text-[#044E92]">Value-up</span>) 것을 사명으로 삼고, <span className="font-semibold">"지속가능한 미래 가치의 설계 및 실행을 지원하는 전문 파트너"</span>를 목표로 설립되었습니다.
                  </p>
                </div>

                <div className="text-base md:text-lg">
                  <p className="mb-4">
                    조직이 급변하는 경영환경 속에서 지속 가능한 성장을 이루기 위해서는 전략과 기술, 성과관리가 체계적이고 유기적으로 연결된 실행력이 무엇보다 중요합니다.
                  </p>
                </div>
                
                <div className="text-base md:text-lg">
                  <p className="mb-4">
                    넥스밸류업은 내외부 핵심 역량을 통합하여 고객의 미래를 준비하고, 함께 성장하는 파트너가 되고자 합니다.
                  </p>
                </div>
                
                <div className="text-base md:text-lg">
                  <p className="mb-4">
                    당사는 <span className="font-semibold">① AI·데이터 기반 안전보건(AX) 플랫폼 개발</span>, <span className="font-semibold">② 디지털 물류·유통(DX) 통합 플랫폼 구축</span>, <span className="font-semibold">③ ESG·공급망 규제 대응을 위한 ESG 경영 컨설팅 및 플랫폼 서비스</span>,
                    <span className="font-semibold"> ④ 성과 개선을 위한 경영전략 및 경영평가·성과관리 컨설팅</span>, <span className="font-semibold">⑤ 정부·공공기관 정책 연구 및 사업 운영 지원</span> 등을 통해 기업과 공공의 미래 가치를 높이는 <span className="font-semibold text-[#044E92]">Total Solution</span>을 제공하고 있습니다.
                  </p>
                </div>
                
                <div className="text-base md:text-lg">
                  <p className="mb-4">
                    넥스밸류업은 단순한 자문이나 컨설팅을 넘어 시스템 구축과 디지털 전환이라는 실행 중심의 <span className="font-semibold text-[#044E92]">가치 혁신(Value Innovation)</span>을 중심으로,
                    데이터 기반의 문제 해결, 전략적인 성과 극대화를 설계하고 디지털 기술로 솔루션을 연결하여 귀사의 실질적인 변화와 성장을 지원할 수 있습니다.
                  </p>
                </div>
                
                <div className="text-base md:text-lg">
                  <p className="mb-4">
                    넥스밸류업이 앞으로도 더 안전한 산업 환경, 더 효율적이고 디지털화된 공급망, 더 투명하고 지속가능한 경영체계구축을 위해 끊임없이 나아가는 모습을 지켜봐주십시오.
                  </p>
                </div>
                
                <div className="text-base md:text-lg">
                  <p className="mb-4">
                    고객의 성공과 <span className="font-semibold text-[#044E92]">Value-up</span>을 지원하는 파트너, 미래를 먼저 생각하고 성과로 증명하는 함께 성장해 나가는 기업이 되겠습니다.
                  </p>
                </div>

                <div className="text-base md:text-lg">
                  <p className="mb-4">
                    감사합니다.
                  </p>
                </div>
              </div>
                
              {/* Signature */}
              <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200">
                <div className="space-y-2 text-right">
                  <p className="text-xl md:text-2xl font-bold text-foreground">
                    Nexvalueup
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-muted-foreground">
                    대표이사 이상학 올림
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full border-t border-gray-200"></div>

        {/* Strategy Section */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Title */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">경영전략체계</h2>
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
        </section>

        {/* Divider */}
        <div className="w-full border-t border-gray-200"></div>

        {/* Organization Section */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Section Title */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">조직도</h2>
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
        </section>

        {/* Divider */}
        <div className="w-full border-t border-gray-200"></div>

        {/* Location Section */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Section Title */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">오시는 길</h2>
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
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      서울 사무소 <span className="text-muted-foreground text-xl">(07213)</span>
                    </h3>
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
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      천안 사무소 <span className="text-muted-foreground text-xl">(31164)</span>
                    </h3>
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
        </section>
        </div>
      </main>
      <FooterInfoBar />
    </div>
  )
}

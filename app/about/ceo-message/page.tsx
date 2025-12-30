import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"

export default function CEOMessagePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        {/* Page Title Section */}
        <section className="w-full bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                CEO 인사말
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                CEO Message
              </p>
            </div>
          </div>
        </section>

        {/* Key Message Banner */}
        <section className="w-full bg-[#FAFAFA] py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-center leading-relaxed">
                지속가능한 미래 가치를 설계하는 <span className="text-[#00C4FF]">Value-up Partner</span>가 되겠습니다.
              </h2>
            </div>
          </div>
        </section>

        {/* CEO Message Content */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
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
        </section>
      </main>
      <FooterInfoBar />
    </div>
  )
}



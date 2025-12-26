import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"
import { projects } from "@/lib/constants"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">프로젝트</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              넥스밸류업의 파트너와 함께 성과를 만들어낸
              <br />
              Value-up Project를 소개합니다.
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {projects.map((yearGroup) => (
              <div key={yearGroup.year} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-bold text-xl">
                    {yearGroup.year}
                  </div>
                </div>
                <div className="grid gap-4 pl-4 md:pl-12">
                  {yearGroup.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-secondary" />
                      <p className="text-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <FooterInfoBar />
    </div>
  )
}

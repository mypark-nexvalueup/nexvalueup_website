import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { projects } from "@/lib/constants"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb />
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

          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-4 font-bold text-lg border border-border">2025</th>
                    <th className="text-left p-4 font-bold text-lg border border-border">2025</th>
                    <th className="text-left p-4 font-bold text-lg border border-border">2025</th>
                    <th className="text-left p-4 font-bold text-lg border border-border">2025</th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    // 모든 프로젝트를 평탄화하고 4개씩 행으로 나누기
                    const allProjects: Array<{ year: number | string; item: string }> = []
                    projects.forEach((yearGroup) => {
                      yearGroup.items.forEach((item) => {
                        allProjects.push({ year: yearGroup.year, item })
                      })
                    })

                    const rows = []
                    for (let i = 0; i < allProjects.length; i += 4) {
                      const rowItems = allProjects.slice(i, i + 4)
                      rows.push(
                        <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                          {rowItems.map((project, idx) => (
                            <td key={idx} className="p-4 text-sm leading-relaxed border border-border">
                              {project.item}
                            </td>
                          ))}
                          {/* 빈 셀 채우기 */}
                          {Array.from({ length: 4 - rowItems.length }).map((_, idx) => (
                            <td key={`empty-${idx}`} className="p-4 border border-border"></td>
                          ))}
                        </tr>
                      )
                    }
                    return rows
                  })()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <FooterInfoBar />
    </div>
  )
}

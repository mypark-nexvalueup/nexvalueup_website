"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export function Breadcrumb() {
  const pathname = usePathname()
  
  // 경로를 배열로 변환
  const paths = pathname.split("/").filter(Boolean)
  
  // 경로 이름 매핑
  const pathNames: Record<string, string> = {
    "about": "About Us",
    "services": "서비스",
    "projects": "프로젝트",
    "partners": "파트너",
    "ceo-message": "CEO Message",
    "strategy": "경영전략체계",
    "organization": "조직도",
    "location": "오시는 길",
    "ax": "AX 기반 안전보건 통합 플랫폼 서비스",
    "dx": "DX 기반 물류유통 통합 플랫폼 서비스",
    "esg": "ESG 경영 컨설팅 및 플랫폼 서비스",
    "performance": "성과주의경영 기반 경영 전략 컨설팅",
    "public": "정부 주도 공공사업",
  }

  // breadcrumb 항목 생성
  const breadcrumbItems = [
    { name: "홈", path: "/" },
    ...paths.map((path, index) => ({
      name: pathNames[path] || path,
      path: "/" + paths.slice(0, index + 1).join("/"),
    })),
  ]

  // 홈페이지에서는 breadcrumb 표시 안 함
  if (pathname === "/") {
    return null
  }

  return (
    <div className="breadcrumb border-b border-gray-200 bg-white">
      <div className="container mx-auto pl-6 max-w-7xl">
        <ol className="flex items-center gap-2 py-3 text-sm text-gray-600">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && <span className="text-gray-400">/</span>}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-[#044E92] transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}


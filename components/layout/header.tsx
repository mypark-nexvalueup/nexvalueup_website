"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)

  const navigation = [
    {
      name: "About Us",
      href: "/about",
      submenu: [
        { name: "CEO Message", href: "/about/ceo-message" },
        { name: "경영전략체계", href: "/about/strategy" },
        { name: "조직도", href: "/about/organization" },
        { name: "오시는 길", href: "/about/location" },
      ],
    },
    {
      name: "서비스",
      href: "/services",
      submenu: [
        { name: "AX 기반 안전보건 통합 플랫폼 서비스", href: "/services/ax" },
        { name: "DX 기반 물류유통 통합 플랫폼 서비스", href: "/services/dx" },
        { name: "ESG 경영 컨설팅 및 플랫폼 서비스", href: "/services/esg" },
        { name: "성과주의경영 기반 경영 전략 컨설팅", href: "/services/performance" },
        { name: "정부 주도 공공사업", href: "/services/public" },
      ],
    },
    {
      name: "프로젝트",
      href: "/projects",
    },
    {
      name: "파트너",
      href: "/partners",
    },
  ]

  return (
    <header className="top-5 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex h-16 items-center justify-between pl-6 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <div className="relative h-14 w-[250px] sm:w-[300px] md:w-[350px]">
            <Image 
              src="/LOGO_text.png" 
              alt="넥스밸류업 로고" 
              fill 
              className="object-contain object-left" 
              priority 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[#044E92] transition-colors flex items-center gap-1"
              >
                {item.name}
                {item.submenu && (
                  <ChevronDown className={`h-4 w-4 transition-transform ${hoveredMenu === item.name ? 'rotate-180' : ''}`} />
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {item.submenu && (
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-200 ${
                    hoveredMenu === item.name
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#044E92] hover:text-white transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Language Toggle */}
        <div className="hidden md:flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs bg-[#0066FF] text-white hover:bg-[#0052cc] rounded-full px-3 h-7 font-medium"
          >
            KR
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs text-gray-600 hover:text-gray-900 rounded-full px-3 h-7"
          >
            EN
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#044E92] transition-colors py-2 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-1 flex flex-col gap-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="text-xs text-gray-600 hover:text-[#044E92] transition-colors py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-1 pt-2 border-t border-gray-200">
              <Button variant="ghost" size="sm" className="text-xs bg-[#0066FF] text-white hover:bg-[#0052cc] rounded-full px-3 h-7">
                KR
              </Button>
              <Button variant="ghost" size="sm" className="text-xs text-gray-600 hover:text-gray-900 rounded-full px-3 h-7">
                EN
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

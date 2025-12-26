"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "About Us", href: "/about" },
    { name: "서비스", href: "/services" },
    { name: "프로젝트", href: "/projects" },
    { name: "파트너", href: "/partners" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">NEXVALUEUP</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Language Toggle */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-xs">
            KR
          </Button>
          <span className="text-muted-foreground">|</span>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
            EN
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t">
              <Button variant="ghost" size="sm" className="text-xs">
                KR
              </Button>
              <span className="text-muted-foreground">|</span>
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                EN
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

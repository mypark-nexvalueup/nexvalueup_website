import { Header } from "@/components/layout/header"
import { FooterInfoBar } from "@/components/layout/footer-info-bar"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">넥스밸류업을 소개합니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/about/ceo-message">
              <Button
                variant="outline"
                className="w-full h-32 text-xl hover:border-primary hover:text-primary transition-colors bg-transparent"
              >
                CEO Message
              </Button>
            </Link>
            <Link href="/about/strategy">
              <Button
                variant="outline"
                className="w-full h-32 text-xl hover:border-primary hover:text-primary transition-colors bg-transparent"
              >
                경영전략체계
              </Button>
            </Link>
            <Link href="/about/organization">
              <Button
                variant="outline"
                className="w-full h-32 text-xl hover:border-primary hover:text-primary transition-colors bg-transparent"
              >
                조직도
              </Button>
            </Link>
            <Link href="/about/location">
              <Button
                variant="outline"
                className="w-full h-32 text-xl hover:border-primary hover:text-primary transition-colors bg-transparent"
              >
                오시는 길
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <FooterInfoBar />
    </div>
  )
}

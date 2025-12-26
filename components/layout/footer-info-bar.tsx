export function FooterInfoBar() {
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-muted-foreground">
          {/* Company Info */}
          <div className="space-y-1">
            <p className="font-semibold text-foreground">넥스밸류업 주식회사</p>
            <p>대표이사 이상학</p>
            <p>사업자번호 192-88-01626</p>
          </div>

          {/* Address */}
          <div className="space-y-1">
            <p>서울시 영등포구 양평로 61 4층 404호 (07213)</p>
            <p>대표전화 02-2039-0494</p>
          </div>

          {/* Business Hours */}
          <div className="space-y-1">
            <p>이용가능시간 : 평일 09:00~18:00</p>
          </div>
        </div>

        {/* Mobile Compact View */}
        <div className="md:hidden mt-4 pt-4 border-t text-xs text-muted-foreground space-y-1">
          <p>© 2025 NEXVALUEUP. All rights reserved.</p>
        </div>

        {/* Desktop Copyright */}
        <div className="hidden md:block mt-6 pt-4 border-t text-xs text-muted-foreground text-center">
          <p>© 2025 NEXVALUEUP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

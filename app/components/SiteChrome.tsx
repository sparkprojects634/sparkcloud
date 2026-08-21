'use client'

import { usePathname } from 'next/navigation'

import Header from './Header'
import Footer from './Footer'

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const hideHeaderFooter =
    pathname === '/web-design-development' ||
    pathname.startsWith('/web-design-development/')

  return (
    <>
      {!hideHeaderFooter && <Header />}

      {children}

      {!hideHeaderFooter && <Footer />}
    </>
  )
}
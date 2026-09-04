import type { Metadata } from 'next'
import Script from 'next/script'
import localFont from 'next/font/local'

import './globals.css'
import SiteChrome from './components/SiteChrome'
import AppWrapper from './components/AppWrapper'

const monaSans = localFont({
  src: './fonts/MonaSans-VariableFont_wdth,wght.ttf',
  variable: '--font-mona',
  display: 'swap',
})

const monaSansNarrow = localFont({
  src: [
    {
      path: './fonts/Mona-Sans-RegularNarrow.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Mona-Sans-BoldNarrow.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mona-narrow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Kolkata | SparkCloud',
  description:
    'SparkCloud is the best digital marketing agency in Kolkata, providing comprehensive digital marketing solutions to help your business grow.',

  verification: {
    google: '2WpRZWhZ6PcrYwhp4muKuURLHCEeekiARLJWQOAXIrU',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} ${monaSansNarrow.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2GRNVLH83T"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2GRNVLH83T');
          `}
        </Script>

        <AppWrapper>
          <SiteChrome>
            {children}
          </SiteChrome>
        </AppWrapper>

      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  )
}
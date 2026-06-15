import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const monaSans = Mona_Sans({
  variable: "--font-monasans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Kolkata | SparkCloud",
  description: "SparkCloud is the best digital marketing agency in Kolkata, providing comprehensive digital marketing solutions to help your business grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

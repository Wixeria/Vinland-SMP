import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ComingSoon from "@/components/ui/soon"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Vinland SMP",
  description: "Vinland SMP'e katıl - deneyimi dibine kadar yaşa!"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const showComingSoon = true // true ise site kapalı mesajı

  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialiased`}>
        {showComingSoon && <ComingSoon />}
        {!showComingSoon && children}
      </body>
    </html>
  )
}

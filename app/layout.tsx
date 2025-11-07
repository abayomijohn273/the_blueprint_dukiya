import type React from "react"
import { Inter, Archivo_Black } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata = {
  title: "The Blueprint - Build Structure, Form Partnerships, Create Wealth",
  description:
    "A one-day transformative experience for young professionals, entrepreneurs, and aspiring real estate players ready to build lasting wealth through real estate.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${archivoBlack.variable}`}>
      <body>{children}</body>
    </html>
  )
}

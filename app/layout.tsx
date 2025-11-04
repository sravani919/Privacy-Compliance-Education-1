import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { SideNavigation } from "@/components/side-navigation"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "PRICOMP - Privacy Compliance Education Project",
  description:
    "NSF SaTC:EDU project developing curriculum, hands-on labs, and research platform for privacy compliance education",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SideNavigation />
        </Suspense>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}

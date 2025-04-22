import type React from "react"
import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotProvider } from "@/components/chatbot/chatbot-provider"
import { Toaster } from "@/components/ui/toaster"


export const metadata = {
  title: "WellnessConnect - Mental Health Support",
  description: "A platform providing mental health support and resources with AI-powered assistance.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ChatbotProvider>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <Toaster />
          </ChatbotProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'
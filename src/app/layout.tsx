import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { PageViewTracker } from "@/components/providers/PageViewTracker";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatbotPlaceholder } from "@/components/layout/ChatbotPlaceholder";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anna-ai-automation.vercel.app"),
  title: {
    default: " Anna AI Automation",
    template: "%s | Anna AI Automation",
  },
  description:
    "Explore Jordan Rivera's UX design portfolio : case studies, skills, and contact information.",
  keywords: [
    "AI automation",
    "DSPS",
    "demand planning",
    "supply chain AI",
    "enterprise agents",
    "n8n",
    "SAP integration",
    "SaaS planning",
  ],
  authors: [{ name: "Anna AI Automation" }],
  openGraph: {
    title: "Anna AI Automation",
    description: "Futuristic, enterprise-grade AI automation partner.",
    url: "https://anna-ai-automation.vercel.app",
    siteName: "Anna AI Automation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anna AI Automation",
    description: "Transform planning, agents, and integrations with governed AI.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <PageViewTracker />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatbotPlaceholder />
        </ThemeProvider>
      </body>
    </html>
  );
}



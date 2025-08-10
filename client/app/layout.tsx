import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SolSweep - Reclaim Your Unused SOL on Solana",
  description:
    "SolSweep scans your wallet for unused Solana accounts, closes them, and returns rent-exempt SOL directly to you. Fast, secure, and fully decentralized.",
  keywords: [
    "Solana rent reclaim",
    "Solana unused accounts",
    "close Solana accounts",
    "reclaim SOL",
    "Solana rent-exempt",
    "Solana wallet cleanup",
    "decentralized Solana tool",
    "blockchain rent recovery",
    "SolSweep"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.solsweep.vercel.app",
    title: "SolSweep - Reclaim Your Unused SOL on Solana",
    description:
      "Easily close unused Solana accounts and reclaim your rent-exempt SOL with SolSweep. Built for security and efficiency.",
    siteName: "SolSweep",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolSweep - Reclaim Your Unused SOL on Solana",
    description:
      "Reclaim rent-exempt SOL by closing unused Solana accounts in just a few clicks. Powered by Solana blockchain.",
    creator: "@0x4nud33p",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} font-primary antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

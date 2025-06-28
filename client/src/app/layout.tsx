import './globals.css'
import { AppProviders } from '@/components/app-providers'
import { AppLayout } from '@/components/app-layout'
import React from 'react'
import { Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Solmate',
  description:
    'The Web3 dating platform where trust is built on-chain. No more ghosting. Real commitment. Real connections.',
}


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="font-spaceGrotesk antialiased scroll-smooth">
        <AppProviders>
          <AppLayout>{children}</AppLayout>
        </AppProviders>
      </body>
    </html>
  )
}

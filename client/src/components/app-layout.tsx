'use client'

import { Toaster } from './ui/sonner'
import React from 'react'

export function AppLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{children}</main>
      <Toaster />
    </>
  )
}

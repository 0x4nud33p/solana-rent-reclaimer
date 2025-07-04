'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Menu, X } from 'lucide-react'
import { WalletButton } from '@/components/solana/solana-provider'

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setIsVisible(currentY < lastScrollY || currentY < 100)
      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 w-[85%] max-w-6xl rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-lg font-spaceGrotesk"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-white">SolMate</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-slate-200 hover:text-white text-sm font-medium">
              Features
            </a>
            <a href="#trust" className="text-slate-200 hover:text-white text-sm font-medium">
              Proof of Love
            </a>
            <a href="#nfts" className="text-slate-200 hover:text-white text-sm font-medium">
              HeartLock NFTs
            </a>
            <WalletButton />
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 w-full z-40 bg-white/10 backdrop-blur-xl border-t border-white/10 py-6 px-6 flex flex-col items-center gap-4 md:hidden font-spaceGrotesk"
          >
            <a href="#features" className="text-slate-200 hover:text-white text-sm font-medium" onClick={closeMobile}>
              Features
            </a>
            <a href="#trust" className="text-slate-200 hover:text-white text-sm font-medium" onClick={closeMobile}>
              Proof of Love
            </a>
            <a href="#nfts" className="text-slate-200 hover:text-white text-sm font-medium" onClick={closeMobile}>
              HeartLock NFTs
            </a>
            <WalletButton />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

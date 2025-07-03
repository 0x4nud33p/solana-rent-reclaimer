'use client'

import { Button } from '@/components/ui/button'
import { Heart, Sparkles, Play, Plus } from 'lucide-react'
import { LoveAnimation } from './animations/LoveAnimation'
import { LoveHomeAnimation } from './animations/LoveHome'

const Hero = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden font-spaceGrotesk">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-purple-950/20"></div>

      {/* Minimal background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto mt-10">
        {/* Main headline with better typography */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Stake Your Heart.
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Match With Intention.
          </span>
        </h1>

        {/* Clean subtext */}
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          The Web3 dating platform where trust is built on-chain. No more ghosting. Real commitment. Real connections.
        </p>

        {/* Simplified CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Get Started
          </Button>
        </div>

        {/* Clean animation placeholder */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-10 border border-slate-700">
          <div className="flex items-center justify-center">
            <div className="h-75 w-75 relative">
              <LoveHomeAnimation />
            </div>
            <Plus className="h-30 w-30 text-pink-400 animate-pulse" />
            <div className="h-75 w-75 relative">
              <LoveAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

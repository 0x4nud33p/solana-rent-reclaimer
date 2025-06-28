import { Heart } from 'lucide-react'
import { WalletButton } from '@/components/solana/solana-provider'

export const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-4 w-[90%] max-w-5xl rounded-sm border border-white/10 bg-white/10 backdrop-blur-xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-white">SolMate</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="text-slate-200 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-slate-200 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            How it Works
          </a>
          <a
            href="#nfts"
            className="text-slate-200 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            HeartLock NFTs
          </a>
          <WalletButton />
        </div>
      </div>
    </header>
  )
}

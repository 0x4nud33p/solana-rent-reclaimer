
import { Heart, Star, Trophy, TrendingUp } from "lucide-react";

const FeatureHeartLock = () => {
  return (
    <section id="nfts" className="py-24 px-6 font-spaceGrotesk">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Clean text content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">HeartLock NFTs</h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              When two hearts connect and successfully complete their first date, they can mint a unique HeartLock NFT
              together. This commemorative token represents the beginning of their journey.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Star className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-slate-300">Unique couple NFTs minted on successful dates</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Trophy className="h-4 w-4 text-pink-400" />
                </div>
                <span className="text-slate-300">Tradeable digital collectibles</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <span className="text-slate-300">Proof of genuine connections</span>
              </div>
            </div>
          </div>

          {/* Right column - Clean animation placeholder */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-12 border border-slate-700">
            <div className="text-center">
              <div className="h-64 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                    <Heart className="h-16 w-16 text-pink-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm">HeartLock NFT Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default FeatureHeartLock;

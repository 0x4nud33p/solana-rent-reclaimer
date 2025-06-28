
import { Trophy, Star, Shield, Heart } from "lucide-react";

const FeatureTrustScore = () => {
  return (
    <section className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Clean section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trust Score System
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Build your reputation through genuine connections and unlock exclusive features
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Clean Trust Score UI */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-6">Your Trust Score</h3>
            
            {/* Clean progress bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-slate-300">Trust Level</span>
                <span className="text-purple-400 font-semibold">85/100</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500" style={{width: '85%'}}></div>
              </div>
            </div>

            {/* Clean achievement badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                <Trophy className="h-6 w-6 text-yellow-400 mb-2" />
                <div className="text-sm text-white font-medium">First Date</div>
                <div className="text-xs text-slate-400">Completed</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                <Star className="h-6 w-6 text-yellow-400 mb-2" />
                <div className="text-sm text-white font-medium">5-Star Rating</div>
                <div className="text-xs text-slate-400">Highly rated</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                <Shield className="h-6 w-6 text-green-400 mb-2" />
                <div className="text-sm text-white font-medium">Verified</div>
                <div className="text-xs text-slate-400">Identity confirmed</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                <Heart className="h-6 w-6 text-pink-400 mb-2" />
                <div className="text-sm text-white font-medium">Heartbreaker</div>
                <div className="text-xs text-slate-400">10+ dates</div>
              </div>
            </div>
          </div>

          {/* Right column - Clean animation */}
          <div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8">
              <div className="text-center">
                <div className="h-48 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 border-4 border-slate-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">85</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-yellow-400" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">Trust Score Visualization</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Level Up Your Dating</h3>
              <p className="text-slate-300">
                Complete dates, receive positive feedback, and stake consistently to increase your Trust Score. 
                Higher scores unlock premium features and exclusive matches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTrustScore;

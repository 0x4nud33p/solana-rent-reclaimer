
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-purple-950/20"></div>
      
      {/* Minimal background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Clean logo section */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
            <Heart className="w-7 h-7 text-white" />
          </div>
        </div>

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
          The Web3 dating platform where trust is built on-chain. 
          No more ghosting. Real commitment. Real connections.
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
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 font-semibold rounded-xl transition-all duration-300"
          >
            <Play className="mr-2 h-4 w-4" />
            Watch Demo
          </Button>
        </div>

        {/* Clean animation placeholder */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <div className="h-32 flex items-center justify-center">
            <div className="flex space-x-6">
              <Heart className="h-12 w-12 text-pink-400 animate-pulse" />
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SOL</span>
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-sm mt-4">Interactive demo coming soon</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

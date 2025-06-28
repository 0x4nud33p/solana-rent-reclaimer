
import { Button } from "@/components/ui/button";
import { Rocket, Heart, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-purple-950/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Join SolMate
        </h2>
        <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
          Put your SOL where your heart is
        </p>
        
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
          Ready to revolutionize your dating life? Join thousands of users who've found meaningful connections through commitment-based matching.
        </p>

        <Button 
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-16"
        >
          <Rocket className="mr-3 h-5 w-5" />
          Launch dApp
        </Button>

        {/* Clean animation placeholder */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <div className="h-32 flex items-center justify-center">
            <div className="flex space-x-6">
              <Heart className="h-10 w-10 text-pink-400" />
              <ArrowRight className="h-6 w-6 text-slate-400 self-center" />
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SOL</span>
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-sm mt-4">Start your journey</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;


import { Shield, Lock, CheckCircle } from "lucide-react";

const FeatureProofOfLove = () => {
  const features = [
    {
      icon: Shield,
      title: "Stake Before You Date",
      description: "Both parties stake SOL tokens to show serious intent. No more time wasters or casual encounters."
    },
    {
      icon: Lock,
      title: "No More Ghosting",
      description: "Funds are locked until both parties confirm the date happened. Accountability meets romance."
    },
    {
      icon: CheckCircle,
      title: "Mutual Confirmation",
      description: "Both parties must confirm to unlock funds. Fair, transparent, and trustworthy dating."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Clean section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proof of Love
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Revolutionary technology that brings accountability and trust to modern dating
          </p>
        </div>

        {/* Clean feature grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Clean animation placeholder */}
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center">
          <div className="h-32 flex items-center justify-center">
            <div className="flex space-x-8">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                <Lock className="h-6 w-6 text-pink-400" />
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-sm mt-4">Interactive proof-of-love demo</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureProofOfLove;

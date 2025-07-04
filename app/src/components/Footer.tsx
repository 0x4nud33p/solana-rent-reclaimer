
import { Heart, Twitter, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Clean logo and brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">
                SolMate
              </h4>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              The future of dating is here. Stake your commitment, find your match, and build lasting connections on the blockchain.
            </p>
            <div className="flex items-center space-x-3">
              <span className="text-slate-400 text-sm">Powered by</span>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-lg">
                <span className="text-white font-medium text-sm">Solana</span>
              </div>
            </div>
          </div>

          {/* Clean navigation */}
          <div>
            <h5 className="text-white font-medium mb-4">Platform</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">How it Works</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Trust Score</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">HeartLock NFTs</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Safety</a></li>
            </ul>
          </div>

          {/* Clean social & legal */}
          <div>
            <h5 className="text-white font-medium mb-4">Connect</h5>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 SolMate. All rights reserved. Built with ❤️ on Solana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

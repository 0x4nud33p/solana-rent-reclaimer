
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureProofOfLove from "@/components/FeatureProofOfLove";
import FeatureHeartLock from "@/components/FeatureHeartLock";
import FeatureTrustScore from "@/components/FeatureTrustScore";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <FeatureProofOfLove />
      <FeatureHeartLock />
      <FeatureTrustScore />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;

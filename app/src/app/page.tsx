import CallToAction from '@/components/CallToAction'
import FeatureHeartLock from '@/components/FeatureHeartLock'
import FeatureProofOfLove from '@/components/FeatureProofOfLove'
import FeatureTrustScore from '@/components/FeatureTrustScore'
import { Header } from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeatureProofOfLove />
      <FeatureHeartLock />
      <FeatureTrustScore />
      <CallToAction />
    </div>
  )
}

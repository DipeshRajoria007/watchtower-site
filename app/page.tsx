import { BackgroundGrid } from './components/BackgroundGrid'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProductDemo } from './components/ProductDemo'
import { WhyWatchtower } from './components/WhyWatchtower'
import { HowItWorks } from './components/HowItWorks'
import { Proof } from './components/Proof'
import { FAQ } from './components/FAQ'
import { Workflows } from './components/Workflows'
import { CTAFooter } from './components/CTAFooter'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E8E8ED] relative scroll-smooth">
      <BackgroundGrid />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
        <ProductDemo />
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
        <WhyWatchtower />
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
        <HowItWorks />
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
        <Workflows />
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
        <Proof />
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
        <FAQ />
        <CTAFooter />
      </div>
    </div>
  )
}

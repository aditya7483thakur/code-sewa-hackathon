import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import CountdownTimer from '@/components/countdown-timer'
import AboutSection from '@/components/about-section'
import HackathonTracks from '@/components/hackathon-tracks'
import ProblemStatements from '@/components/problem-statements'
import ScheduleTimeline from '@/components/schedule-timeline'
import PrizesSection from '@/components/prizes-section'
import FaqSection from '@/components/faq-section'
import Footer from '@/components/footer'
import WaveBackground from '@/components/WaveBackground'
import dynamic from 'next/dynamic'
import { TracingBeam } from '@/components/ui/tracing-beam'

const InteractiveConstellation = dynamic(() => import('@/components/InteractiveConstellation'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">

      <WaveBackground />
      <InteractiveConstellation />
      <Navigation />
      <TracingBeam className=''>
      <main className="relative md:z-10">
      
        <HeroSection />
        <CountdownTimer />
        <AboutSection />
        <HackathonTracks />
        <ProblemStatements />
        <ScheduleTimeline />
        <PrizesSection />
        <FaqSection />
       
      </main>
      <Footer />
      </TracingBeam>
    </div>
  )
}


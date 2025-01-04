import { Metadata } from 'next'
import MentorsList from '@/components/mentors-list'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import InteractiveConstellation from '@/components/InteractiveConstellation'

export const metadata: Metadata = {
  title: 'Mentors | CodeSeva Hackathon',
  description: 'Meet our expert mentors who will guide you through the CodeSeva Hackathon.',
}

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InteractiveConstellation />
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24 relative z-10">
        <h1 className="text-5xl font-bold text-center mb-12">Our Mentors</h1>
        <p className="text-center text-lg mb-12 text-foreground/80 max-w-2xl mx-auto">
          Meet the brilliant minds who will guide and inspire you throughout the CodeSeva Hackathon. Our mentors bring a wealth of experience and expertise to help you succeed.
        </p>
        <MentorsList />
      </main>
      <Footer />
    </div>
  )
}


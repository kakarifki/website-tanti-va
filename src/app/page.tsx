import About from '@/components/About'
import Hero from '@/components/Hero'
import Services from '@/components/Service'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero />
        <About />
        <Services />
        <Testimonials />
    </main>
  )
}

import About from '@/components/About'
import Contacts from '@/components/Contact'
import Hero from '@/components/Hero'
import Services from '@/components/Service'
import Testimonials from '@/components/Testimonials'
import FloatingButton from '@/components/FloatingButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contacts />
        <FloatingButton />
    </main>
  )
}

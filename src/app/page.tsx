import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Cities from '@/components/Cities'
import Driver from '@/components/Driver'
import Safety from '@/components/Safety'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Cities />
      <Driver />
      <Safety />
      <Download />
      <Footer />
    </main>
  )
}
import Image from 'next/image'
import Contact from './contact/page'
import Services from './services/page'
import AreaPage from './area/page'
import About from './about/page'

export default function Home() {
  return (
    <main className="min-h-screen md:px-24 md:pt-5 md:pb-5">
      <About />
      <AreaPage />
      <Services />
      <Contact />
    </main>
  )
}

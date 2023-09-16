import Image from 'next/image'
import Contact from './contact/page'
import Services from './services/page'
import AreaPage from './area/page'

export default function Home() {
  return (
    <main className="min-h-screen md:px-24 md:pt-16 md:pb-5">

      <AreaPage />
      <Services />
      <Contact />
    </main>
  )
}

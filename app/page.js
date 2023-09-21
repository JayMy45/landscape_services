import Image from 'next/image'
import Contact from './contact/page'
import Services from './services/page'
import AreaPage from './area/page'
import About from './about/page'
import CarouselPage from './carousel/page'

export default function Home() {
  return (
    <main className="min-h-screen md:px-24 md:pt-5 md:pb-5">
      <div className='flex justify-center bg-black bg-opacity-30 rounded-t-xl w-full'>
        <Image src="/JonesLandService2.png" height={200} width={350} alt='Jones Landscaping Services' />
      </div>
      <CarouselPage />
      <About />
      <AreaPage />
      <Services />
      <Contact />
    </main>
  )
}

import Image from 'next/image'
import Contact from './contact/page'
import Services from './services/page'
import AreaPage from './area/page'
import About from './about/page'
import CarouselPage from './carousel/page'

export default function Home() {
  return (
    <main className="min-h-screen md:px-24 md:pt-5 md:pb-5">
      <div className='flex justify-center bg-black bg-opacity-30 rounded-t-lg w-full py-3 px-2'>
        <Image className="hidden dark:block" src="/JonesLandService4.png" height={200} width={350} alt='Jones Landscaping Services' />
        <Image className="dark:hidden block" src="/JonesLandService5.png" height={200} width={350} alt='Jones Landscaping Services' />
        {/* <h1 className='text-blue-50 font-bold'>Jones Landscaping Services</h1> */}
      </div>
      <CarouselPage />
      <About />
      <AreaPage />
      <Services />
      <Contact />
    </main>
  )
}

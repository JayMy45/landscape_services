import Image from 'next/image'
import Contact from './contact/page'
import Services from './services/page'
import AreaPage from './area/page'
import About from './about/page'
import CarouselPage from './carousel/page'

export default function Home() {
  return (
    <main className="min-h-screen md:px-24 md:pt-5 md:pb-5">
      <div className='flex justify-center bg-stone-500 bg-opacity-50 dark:bg-stone-700 dark:bg-opacity-70 md:rounded-t-lg w-full py-3 px-2'>
        <Image className="hidden dark:block" src="/JonesLandService4.png" height={200} width={375} alt='Jones Landscaping Services' />
        <Image className="dark:hidden block" src="/JonesLandService5.png" height={200} width={375} alt='Jones Landscaping Services' />
      </div>
      <CarouselPage />
      <div className='h-96 bg-stone-700 rounded-b-lg p-7'>
        <div className='border w-48 h-80 rounded-lg mx-auto'>

        </div>
      </div>
      <About />
      <AreaPage />
      <Services />
      <Contact />
    </main>
  )
}

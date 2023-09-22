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
      <div className='h-96 bg-stone-700 rounded-b-lg p-10 flex items-center justify-center'>
        <div className='h-fit rounded-lg w-44 p-10 bg-zinc-600 px-7 py-2 shadow-lg'>
          <h2 className='text-slate-200 text-lg font-semibold py-2'>Mowing and Trimming</h2>
          <h2 className='text-slate-200 text-md pt-2'>starts at</h2>
          <h1 className='text-yellow-700 text-6xl font-bold pb-4'>$85</h1>
          <h2 className='text-slate-300 text-xs pb-2'>No Matter Lot Size</h2>
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
      <About />
      <AreaPage />
      <Services />
      <Contact />
    </main>
  )
}

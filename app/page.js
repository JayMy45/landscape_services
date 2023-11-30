import Image from 'next/image'
import Contact from './contact/page'
import Services from './services/page'
import AreaPage from './area/page'
import About from './about/page'
import CarouselPage from './carousel/page'
import { BsCash, BsFillCreditCardFill } from 'react-icons/bs'
import { SiCashapp } from "react-icons/si"
import { FaCcVisa } from "react-icons/fa"

export default function Home() {



  return (
    <main className="min-h-screen md:px-10 lg:px-24 xl:px-40 md:pt-5 md:pb-5">

      <div id='home-section' className='flex justify-center bg-stone-500 bg-opacity-50 dark:bg-stone-700 dark:bg-opacity-70 md:rounded-t-lg w-full py-3 px-2'>
        <div className='hidden dark:block'>
          <Image className="" src="/JonesLandService4.png" height={200} width={375} alt='Jones Landscaping Services' />
        </div>
        <div className='dark:hidden block'>
          <Image className="" src="/JonesLandService5.png" height={200} width={375} alt='Jones Landscaping Services' />
        </div>
        <div className='hidden'>
          <h1>Jones Landscaping Services</h1>
        </div>
      </div>
      <CarouselPage />
      <div className=' bg-stone-500 bg-opacity-50 dark:bg-stone-700 dark:bg-opacity-70 md:rounded-b-lg  flex flex-col md:flex-row'>
        <div className=' pt-10 px-2 md:p-10 flex justify-center items-center w-full h-full md:w-1/2 space-x-2 lg:space-x-4'>

          <div className='h-52 rounded-lg w-44 p-10 bg-zinc-400 dark:bg-zinc-600 px-4 py-1 lg:px-7 lg:py-2 shadow-lg'>
            <h2 className='text-slate-200 text-lg font-semibold pt-2'>Mowing and Trimming</h2>
            <h2 className='text-yellow-200 text-md pt-2'>starts at</h2>
            <h1 className='text-orange-950 dark:text-yellow-700 text-6xl font-bold pb-2'>$85</h1>
            <h2 className='text-slate-300 text-xs pb-2 italic'>all property sizes</h2>
          </div>

          <div className='h-52 rounded-lg w-44 bg-zinc-400 dark:bg-zinc-600 px-4 py-5 lg:px-7 lg:py-2 shadow-lg'>
            <h2 className='p-3 text-slate-200 text-lg pt-2 italic'>Additional Charges will be applied for extra <span className='hover:text-blue-500'><a href='#services'>Services</a></span></h2>
          </div>

        </div>
        <div className='p-3 pb-10 md:p-10 md:w-1/2 md:flex'>
          <div className='p-10 flex flex-col h-full w-full lg:bg-zinc-500 lg:bg-opacity-10 lg:dark:bg-zinc-600 lg:dark:bg-opacity-10 rounded-md lg:shadow-sm space-y-4'>
            <h2 className='text-md text-slate-200 lg:text-normal text-center italic'>Accepted forms of payment</h2>
            <div className='flex flex-row justify-center items-center space-x-0 lg:space-x-3'>

              <div className='flex flex-col items-center justify-center p-1 space-y-1'>
                <BsCash size={50} className='ml-1  bg-slate-200 rounded-lg text-green-500 p-1' />
                <h3 className='text-center text-xs text-slate-200'>Cash</h3>
              </div>

              <div className='flex flex-col items-center justify-center space-y-1 p-1'>
                <SiCashapp size={50} className='text-green-500' />
                <h3 className='text-center text-xs text-slate-200'>CashApp</h3>
              </div>

              <div className='flex flex-col items-center justify-center space-y-1 p-1'>
                <FaCcVisa size={50} className='text-slate-200' />
                <h3 className='text-center text-xs text-slate-200'>VISA</h3>
              </div>

              <div className='flex flex-col items-center justify-center space-y-1 p-1'>
                <BsFillCreditCardFill size={50} className='text-slate-200' />
                <h3 className='text-center text-xs text-slate-200'>Credit/Debit</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
      <About />
      <AreaPage />
      <Services />
      <Contact />
    </main>
  )
}

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
    <main className="min-h-screen md:px-24 md:pt-5 md:pb-5">
      <div className='flex justify-center bg-stone-500 bg-opacity-50 dark:bg-stone-700 dark:bg-opacity-70 md:rounded-t-lg w-full py-3 px-2'>
        <Image className="hidden dark:block" src="/JonesLandService4.png" height={200} width={375} alt='Jones Landscaping Services' />
        <Image className="dark:hidden block" src="/JonesLandService5.png" height={200} width={375} alt='Jones Landscaping Services' />
      </div>
      <CarouselPage />
      <div className=' bg-stone-700 rounded-b-lg  flex flex-col md:flex-row'>
        <div className=' p-10 flex flex-row items-center w-fit md:w-1/2 justify-center space-x-4'>

          <div className='h-52 rounded-lg w-44 p-10 bg-zinc-600 px-7 py-2 shadow-lg'>
            <h2 className='text-slate-200 text-lg font-semibold pt-2'>Mowing and Trimming</h2>
            <h2 className='text-slate-200 text-md pt-2'>starts at</h2>
            <h1 className='text-yellow-700 text-6xl font-bold pb-2'>$85</h1>
            <h2 className='text-slate-300 text-xs pb-2 italic'>all property sizes</h2>
          </div>

          <div className='h-52 rounded-lg w-44 bg-zinc-600 px-7 py-5 shadow-lg'>
            <h2 className='text-slate-200 text-lg pt-2 italic'>Additional Charges will be applied for Extra Services</h2>
          </div>

        </div>
        <div className=' p-10 w-1/2 flex'>
          <div className='p-10 flex flex-col h-full w-full p-10 bg-zinc-600 bg-opacity-20 rounded-md shadow-sm space-y-4'>
            <h2 className='text-center italic'>Accepted forms of payment</h2>
            <div className='flex flex-row justify-center items-center space-x-3'>

              <div className='flex flex-col items-center justify-center p-1 space-y-1'>
                <BsCash size={50} className='ml-1  bg-slate-200 rounded-lg text-green-500 p-1' />
                <h3 className='text-center text-xs'>Cash</h3>
              </div>

              <div className='flex flex-col items-center justify-center space-y-1 p-1'>
                <SiCashapp size={50} className='text-green-500' />
                <h3 className='text-center text-xs'>CashApp</h3>
              </div>

              <div className='flex flex-col items-center justify-center space-y-1 p-1'>
                <FaCcVisa size={50} className='text-slate-200' />
                <h3 className='text-center text-xs'>CashApp</h3>
              </div>

              <div className='flex flex-col items-center justify-center space-y-1 p-1'>
                <BsFillCreditCardFill size={50} className='text-slate-200' />
                <h3 className='text-center text-xs'>Credit/Debit</h3>
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

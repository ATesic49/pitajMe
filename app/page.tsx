import Image from 'next/image'
import hero from '@/public/svgs/Books.svg'
export default function Home() {
  return (
    <main>
      <div className='min-h-[100vh] grid lg:grid-cols-2 gap-6 bg-gradient-to-tr from-transparent from-50% to-green-200'>
        <div className='flex flex-col gap-8 justify-center items-center'>
          <h1 className='bg-amber-400 lg:text-8xl text-5xl font-bold text-transparent p-2 relative h1'>Pitaj me</h1>
          <p className='font-semibold tracking-wider  text-lg w-8/12  md:text-xl  md:text-left text-center'>Jedini i najbolji sajt za vezbanje testova.</p>
          <button className=' border-[1.5px] rounded-lg  border-amber-400 text-amber-400 py-[.4em] overflow-hidden after:rounded-full after:aspect-square after:w-3 px-6 mt-8 text-xl tracking-widest  relative after:-translate-x-1/2 after:absolute after:top-0 after:-translate-y-1/2 hover:after:top-1/2 after:duration-[.5s] duration-[.5s] hover:text-white z-1 after:z-[-1] hover:after:w-full after:p-2 after:box-content hover:after:bg-amber-400 after:left-[50%]'>Počni.</button>
        </div>
        <div className='flex justify-center items-center w-11/12 mx-[auto]' >
          <Image src={hero} width={500} height={500} alt='Slika'></Image>

        </div>
      </div>
    </main >
  )
}

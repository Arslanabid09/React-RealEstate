import React from 'react';
import { Input } from '../Components/Index';

export const Contact = () => {
  return (
    <main className='font-SpaceGrotesk'>
      <section className="flex flex-col gap-5 px-10   items-start justify-center min-h-screen">
  {/* Headline */}
  <h1 className="   w-[70%] text-5xl sm:text-6xl  tracking-wider  md:text-7xl lg:text-9xl">Let’s Work Together</h1>
</section>
<form className='flex flex-col gap-y-5'>
  <div className='flex justify-evenly'><label htmlFor="name" className='text-6xl'>Please share your </label><Input/>,</div>
  <div><Input/>And</div>

  <div><textarea name="" id="" className=' font-SpaceGrotesk bg-red-400 h-12 placeholder:absolute placeholder:top-1 placeholder:left-8 outline-none border-b border-black placeholder:text-4xl placeholder:text-center'></textarea></div>
</form>
    </main>
  )
}

import React from 'react'
import { WhatweDo } from '../Components'

const Work = () => {
  return (
    <main className='font-SpaceGrotesk px-4'>
      {/* section 1 */}
      <section className='flex flex-col gap-10 md:gap-8 justify-center  min-h-screen'>
        <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold  uppercase'>What we do?</h1>
        <p className='w-full font-SpaceGrotesk md:w-[70%]  font-light sm:text-lg  md:text-xl text-  text-gray-500'>At Vibe, we collaborate closely with business owners and leaders to implement strategic development plans that elevate premier projects and drive nationwide expansions for top-tier brands. Vibe specializes in aligning real estate strategies with business goals to fuel growth across diverse sectors – from established corporations to innovative startups and emerging enterprises.</p>
      </section>
    {/* section 2 */}
    <section className='space-y-20'>
      <h2 className='text-center text-3xl underline'>what we do</h2>
      <div className='flex flex-col md:flex-row items-center gap-10 '>
      <WhatweDo title={'Creating lasting partnerships while building meaningful places.'} desc={'BOND partners with the nation’s leading owners and developers to transform large-scale mixed-use projects into wholly unique retail destinations.'}/>
        <hr className=' border-black w-[80%] md:w-1 bg-black md:h-44  md:rotate-0  ' />
        <WhatweDo title={'Growing the footprint of distinctive brands.'} desc={'BOND advises in a principal-adjacent role on growth plans and national brand rollouts for nationally leading hospitality groups.'}/>
      </div>
    </section>
    </main>
  )
}

export default Work
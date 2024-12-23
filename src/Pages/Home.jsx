import React from 'react'

const Home = () => {
  return (
    <main className=' font-Anton'>
      {/* section 1  */}
      <section className="flex flex-col gap-5 px-10   items-center justify-center min-h-screen">
  {/* Headline */}
  <h1 className=" text-center  text-5xl sm:text-6xl  tracking-wider  md:text-7xl lg:text-8xl font-bold">Connecting Homes Seamlessly.</h1>
  
  {/* Description */}
  {/* todo:will add the text mask animation in it */}
  <p className='w-full font-SpaceGrotesk md:w-[70%]  font-light text-lg  md:text-xl text-center  text-gray-500'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit corrupti facere quo. 
    Earum magnam eum exercitationem nihil officiis, aliquid, aliquam nobis beatae quis totam 
    amet consequatur non quisquam iste.
  </p>
</section>
{/* section 2 */}
<section className='flex flex-col items-center '>
<hr className=' border-black w-5/6 mx-auto' />
<p className=' w-[86%] leading-relaxed font-SpaceGrotesk text-2xl text-left py-16'><span className='underline font-medium' >Our mission centers on the connections between people:</span> how they unite to drive innovation, foster sustainable enterprises, and breathe vitality into their surroundings. We are dedicated to nurturing communities that are dynamic, enduring, and inclusive, ensuring opportunities and prosperity for everyone</p>  
<hr className=' border-black w-5/6 mx-auto' />
</section>
    </main>
  )
}

export default Home
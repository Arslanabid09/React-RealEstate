import React from 'react'

const WhatweDo = ({
    title,
    desc
}) => {
  return (
    <div className='space-y-3'>
    <h3 className='text-2xl md:base lg:text-3xl '>{title}</h3>
    <p className='text-gray-500 md:text-lg text-base'> {desc}</p>
        </div>
  )
}

export default WhatweDo
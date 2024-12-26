import React from 'react'

export const Input = ({
  className,
  type,
  placeholder
}) => {
  return (
    <input type={type} className={`${className}  font-SpaceGrotesk border-b bg-transparent border-black placeholder:text-2xl text-2xl outline-none placeholder:text-black pt-8`} placeholder={placeholder} />
  )
}

import React from 'react'
import bg3 from '../../../src/Assests/bg3.webp' 

export default function Bg2() {
  return (
    <>
      <div className='relative flex items-center justify-center mt-16 mb-16'>
        {/* Image */}
        <img className='w-full h-[70vh] object-cover' src={bg3} alt="Background"/>

        {/* Black Shade */}
        <div className='absolute inset-0 bg-black opacity-50'></div>

        {/* Content Over Image (Optional) */}
        <div className='absolute font-montserrat max-lg:text-2xl max-sm:text-xl text-5xl w-[95%] text-white max-lg:w-[90%] max-sm:w-[90%] max-xl:w-[90%] flex flex-col items-center justify-center'>
         "Your mental health matters. Let’s take the first step together."
        </div>
      </div>
    </>
  )
}

import React from 'react'
import Ripple from '../magicui/ripple'
import BlurIn from '../magicui/blur-in'

const Demo = () => {
  return (
    <div className='h-80 flex overflow-hidden md:col-span-3 md:row-span-1 col-span-3 bg-neutral-50/5 backdrop-blur border border-gray-600/50 rounded-[30px] relative justify-center items-center rounded-bl-xl rounded-tr-[4px] p-20'>
        <p className="animate-pulse z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        Coming Soon
        </p>

        <Ripple/>
    </div>
  )
}

export default Demo
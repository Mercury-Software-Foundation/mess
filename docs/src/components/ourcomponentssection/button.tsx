import { div } from 'framer-motion/client'
import React from 'react'

function button() {
  return (
    <div className='flex  flex-col gap-5 justify-center items-center bg-white/10 border-none rounded-[30px] backdrop-blur-3xl p-20 shadow-md'>
      <div className='flex flex-row gap-4  '>
        <button className=' rounded-[8px] border-none px-[20px] py-[10px] bg-[#1174BC] text-[20px] cursor-pointer text-white'>Contained</button>
        <button className='border-2 rounded-[8px] border-[#1174BC] px-[20px] py-[10px] bg-transparent text-[20px] cursor-pointer text-[#1174BC] hover:bg-[#1174BC] hover:text-white'>Outlined</button>
        <button className='border-none bg-transparent text-[20px] cursor-pointer text-[#1174BC]'>Text</button>
      </div>
      <div className='flex flex-row gap-4  '>
        <button className=' rounded-[8px] border-none px-[20px] py-[10px] bg-[#1174BC] text-[16px] cursor-pointer text-white'>Medium</button>
        <button className='border-2 rounded-[8px] border-[#1174BC] px-[20px] py-[10px] bg-transparent text-[16px] cursor-pointer text-[#0071E3] hover:bg-[#1174BC] hover:text-white'>Medium</button>
        <button className='border-none bg-transparent text-[16px] cursor-pointer text-[#1174BC]'>Medium</button>
      </div>
      <div className='flex flex-row gap-4  '>
        <button className=' rounded-[8px] border-none px-[15px] py-[8px] bg-[#1174BC] text-[14px] cursor-pointer text-white'>Small</button>
        <button className='border-2 rounded-[8px] border-[#1174BC] px-[15px] py-[8px] bg-transparent text-[14px] cursor-pointer text-[#1174BC] hover:bg-[#1174BC] hover:text-white'>Small</button>
        <button className='border-none bg-transparent text-[14px] cursor-pointer text-[#1174BC]'>Small</button>
      </div>
    </div>

  )
}

export default button

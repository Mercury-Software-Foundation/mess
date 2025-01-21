import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-4xl  py-12 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 grid-cols-1  gap-10">
        {/* Left Section */}
        <div className="col-span-2">
          <h3 className="text-2xl text-[20px] font-semibold leading-snug text-black">
            Subscribe to the Mercury newsletter to stay up-to-date with the latest releases
          </h3>
          <div className="relative w-full">
      <input
        type="email"
        placeholder="Enter your email"
        className="border border-none shadow-xl bg-white/5 backdrop-blur-md px-4 py-3 rounded-full w-full  text-[16px] font-Manrope-Medium "
      />
      <MdArrowOutward className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[20px] cursor-pointer " />
    </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-2  md:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className='flex flex-col gap-4'>
            <h4 className="font-semibold mb-0 text-black">Company</h4>
            <div className='text-[16px] mb-0 flex flex-col gap-2 cursor-pointer'>
              <a className='mb-0 text-black'>Mercury</a>
              <a className='mb-0 text-black'>Vithi</a>
            </div>
          </div>
        
          <div className='flex flex-col gap-4'>
            <h4 className="font-semibold mb-0 text-black">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className='text-black'>
                GitHub
              </a>
              <a href="#" className='text-black'>
                LinkedIn
              </a>
              <a href="#" className='text-black'>
                X
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto mt-8 text-sm text-gray-600 text-center md:text-left">
      <p>
        ©2024 GSAP – A Webflow Product. All rights reserved.{" "}
        <a href="#" >
          Privacy Policy
        </a>
        .{" "}
        <a href="#" className="hover:underline">
          Terms of Use
        </a>
      </p>
    </div> */}
    </footer>
  )
}

export default Footer

'use client';
import React from 'react';
import Navbar from '../NavBar';
import { MdArrowOutward, MdOutlineArrowOutward } from 'react-icons/md';
import "../../app.css";

function Homepage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden ">
    {/* <div className="fixed top-0 left-0 w-full z-10">
      <Navbar />
    </div> */}
    <div className="flex flex-col items-center justify-center text-center text-black px-8 h-screen ">
      <div className="   p-8  bg-transparent max-w-2xl  ">
        <h1 className="font-Safiro text-[4rem]  ">MESS</h1>
        <div className='flex flex-col gap-4'>

        <div className="flex items-center justify-center space-x-3 text-sm text-[#505050]">
          <span className='font-Safiro'>Avinash</span>
          <span>/</span>
          <span className='font-Safiro'>YEAR. 2023</span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-700 text-start w-[50%] line-clamp-2 font-Safiro">
            A NodeCrud application is a basic framework for building a backend API that allows you to manage data effectively. 
            It serves as a foundation for more complex applications and helps you learn fundamental concepts of Node.js, Express.js, 
            and database interactions.
          </p>
          <div>
            <button className="flex flex-row gap-2 justify-center items-center px-4 py-2 border-black border rounded-[14px] text-sm  font-Safiro hover:bg-black hover:text-white trasation duration-300 ease-in-out">
              VISIT <MdOutlineArrowOutward />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Homepage

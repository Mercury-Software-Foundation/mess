import React from "react";
import { MdArrowOutward } from "react-icons/md";
import {  AnimatedVisitButton } from "../AnimatedButton";
import Navbar from "../Navbar";
import Usage from "../Usage";
import { TypewriterEffectSmooth } from "./TextReveal";

function HeroBanner() {
 
  return (
    <div className=" flex flex-col items-center justify-center relative overflow-hidden">
       <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center text-center text-black px-8 ">
        <div className="bg-transparent max-w-[74rem] text-black">
        <TypewriterEffectSmooth
  words={[
    { text: "Effortlessly" },
    { text: "Style" },
    { text: "Responsive" },
    { text: "Designs" },
    { text: "in Your" },
    { text: "HTML." },
  ]}
/>
          {/* <h1 className="font-Manrope-Bold text-[4rem]">
            Effortlessly Style Responsive Designs Directly in Your HTML.
          </h1> */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-700 text-center w-[80%] font-Manrope-Light">
              Mess allows you to style responsive and customizable designs directly in your HTML. Use intuitive class names, built-in breakpoints, and customizable configurations to streamline your workflow and build faster.
            </p>
          </div>
        </div>

        {/* Visit Button */}
        
<div>
  
</div>
<AnimatedVisitButton/>
      </div>
   
    </div>
  );
}

export default HeroBanner;

import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { AnimatedVisitButton } from "../AnimatedButton";
import Navbar from "../Navbar";
import Usage from "../Usage";
import { TypewriterEffectSmooth } from "./TextReveal";
import gsap from "gsap";

function HeroBanner() {
  useEffect(() => {
    // Select elements
    const TextReval = document.querySelectorAll(".text");
    const TextReval1 = document.querySelectorAll(".text1");
    const words = document.querySelectorAll(".word");
    const tl = gsap.timeline();

    // Animate the first line of text
    gsap.fromTo(
      TextReval,
      {
        yPercent: 100, // Start below the original position
        opacity: 0, // Fully transparent
        filter: "blur(10px)", // Initial blur effect
      },
      {
        duration: 1.5,
        yPercent: 0, // Move to the original position
        opacity: 1, // Fully visible
        filter: "blur(0px)", // Remove blur
        ease: "power4.out",
        stagger: 0.1,
      }
    );

    // Animate the second line of text
    gsap.fromTo(
      TextReval1,
      {
        yPercent: 100,
        opacity: 0,
        filter: "blur(10px)", // Initial blur effect
      },
      {
        duration: 2.5,
        yPercent: 0,
        opacity: 1,
        filter: "blur(0px)", // Remove blur
        ease: "power4.out",
        stagger: 0.1,
        delay: 0.5, // Delay for staggered effect
      }
    );
    gsap.fromTo(
      words,
      {
        yPercent: 200, // Start below the original position
        opacity: 0, // Fully transparent
        filter: "blur(20px)", // Initial blur effect
      },
      {
        duration: 3,
        yPercent: 0, // Move to the original position
        opacity: 1, // Fully visible
        filter: "blur(0px)", // Remove blur
        ease: "power4.out",
        stagger: 0.1, // Animate words sequentially
      }
    );
    


  }, []);
  return (
    <div className=" flex flex-col items-center justify-center relative overflow-hidden">
      {/* <div className="fixed top-0 left-0 w-full z-10">
        <Navbar />
      </div> */}
      <div className="flex flex-col gap-4 items-center justify-center text-center  text-black md:px-8 px-4 ">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text md:text-5xl text-2xl w-[100%] mb-0">Effortlessly Style Responsive</h1>
          <h1 className="text1 md:text-5xl text-2xl w-[100%] mb-0">Designs in Your HTML.</h1>
        </div>
        <div className="bg-transparent max-w-[74rem] text-black">
          {/* <TypewriterEffectSmooth
  words={[
    { text: "Effortlessly" },
    { text: "Style" },
    { text: "Responsive" },
    { text: "Designs" },
    { text: "in Your" },
    { text: "HTML." },
  ]}
/> */}
          {/* <h1 className="font-Manrope-Bold text-[4rem]">
            Effortlessly Style Responsive Designs Directly in Your HTML.
          </h1> */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-700 text-center   md:w-[80%] font-Manrope-Light word mb-0">
              Mess allows you to style responsive and customizable designs directly in your HTML. Use intuitive class names, built-in breakpoints, and customizable configurations to streamline your workflow and build faster.
            </p>
          </div>
        </div>
        <AnimatedVisitButton className="animated-button" />
      </div>

    </div>
  );
}

export default HeroBanner;

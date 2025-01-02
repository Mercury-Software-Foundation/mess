import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../App.css";
import { CodeDisplay } from "../Sample";

gsap.registerPlugin(ScrollTrigger);

export default function Section({ slides }) {
  useEffect(() => {
    const sections = document.querySelectorAll(".pin-section");
  
    sections.forEach((section, i) => {
      const slidesEls = section.querySelectorAll(".slide");
      const colorBoxes = section.querySelectorAll(".color-box");
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${slides.length * 100}%`,
          pin: true,
          scrub: true,
          id: i + 1,
        },
      });
  
      slidesEls.forEach((slide, index) => {
        // Animate left slides
        tl.to(
          slide,
          {
            autoAlpha: 1, // Fade in
            duration: 0.3,
          },
          index * 1 // Sequentially trigger each slide
        );
  
        if (index !== slides.length - 1) {
          // Only fade out if not the last slide
          tl.to(
            slide,
            {
              autoAlpha: 1, // Fade out
              duration: 0.3,
            },
            (index + 0.7) // Delay before moving out
          );
        }
  
        // Animate right color boxes
        tl.to(
          colorBoxes[index],
          {
            y: "0%",
            autoAlpha: 1,
            duration: 0.3,
          },
          index * 1
        );
  
        if (index !== slides.length - 1) {
          // Only fade out if not the last color box
          tl.to(
            colorBoxes[index],
            {
              y: "-100%",
              autoAlpha: 0,
              duration: 0.3,
            },
            (index + 0.7)
          );
        }
      });
  
      // Set the initial visibility of the first slide and color box
      gsap.set(slidesEls[0], { autoAlpha: 1 });
      gsap.set(colorBoxes[0], { y: "0%", autoAlpha: 1 });
    });
  }, [slides]);
  
  
  

  const codes = [
    `
<figure className="bg-slate-100 rounded-xl p-8 md:flex">
  <img
    className="w-full h-full md:w-48 md:h-auto rounded-full mx-auto"
    src="/path-to-image.jpg"
    alt="Sarah Dayan"
  />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale on large
        teams. It’s easy to customize, adapts to any design, and the build
        size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    `,
    `
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
</div>
    `,
    `
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
    `,
    `
<ul className="list-disc pl-5">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
    `,
  ];

  return (
    <div>
      <div className="px-36 h-screen flex items-center justify-center section pin-section">
        <div className="grid grid-cols-2 gap-10 h-full items-center">
          {/* Left Section: Slides */}
          <div className="w-[800px] h-[200px] flex items-start justify-start relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="slide center absolute inset-0 opacity-0 transition-opacity duration-300 flex items-center justify-center -ml-[250px]"
              >
                <h1 className="text-red-700 bg-white rounded-2xl text-4xl w-[400px] h-[200px] font-bold flex flex-col justify-center text-center">
                  {slide.text}
                </h1>
              </div>
            ))}
          </div>

          {/* Right Section: CodeDisplay */}
          <div className="relative w-[800px] h-[400px] justify-self-center flex items-center">
            {codes.map((code, index) => (
              <div
                key={index}
                className="color-box absolute inset-0 w-full h-full opacity-0 transform translate-y-full"
              >
                <CodeDisplay code={code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

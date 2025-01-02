import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin, GSDevTools } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, GSDevTools);

const OurWork = () => {
  useEffect(() => {
    const slides = gsap.utils.toArray<HTMLDivElement>(".carousel__item");
    const tl = gsap.timeline();

    const myST = ScrollTrigger.create({
      animation: tl,
      id: "st",
      trigger: ".our-work",
      start: "top top",
      end: "+=500%",
      pin: ".our-work",
      scrub: true,
      snap: {
        snapTo: 1 / slides.length, // Snap to each slide
      },
      markers: true,
    });

    gsap.set(slides, { yPercent: 125, scale: 0.5, opacity: 0 });

    slides.forEach((slide, i) => {
      const previousSlide = slides[i - 1];
      if (previousSlide) {
        tl.to(slide, { opacity: 1, yPercent: 0, scale: 1 }, 0.5 * (i - 1))
          .to(previousSlide, { opacity: 0, yPercent: -125, scale: 0.5 }, "<")
          .add(`our-work-${i + 1}`);
      } else {
        tl.to(slide, { yPercent: 0, opacity: 1, scale: 1, duration: 0 }, 0).add(`our-work-${i + 1}`, "+=0.5");
      }
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div>
      <section className="our-work relative flex items-center overflow-hidden bg-gradient-to-b from-gray-800 via-gray-900 to-black h-screen">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
              <div className="">
                {['SLIDE ONE', 'SLIDE TWO', 'SLIDE THREE', 'SLIDE FOUR'].map((text, index) => (
                  <div
                    key={index}
                    className={`slide center opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                  >
                    <h1 className="text-red-900 bg-slate-950 h-[100px] w-[500px] text-center flex flex-col justify-center rounded-3xl">
                      {text}
                    </h1>
                  </div>
                ))}
              </div>
            
            <div className="relative">
              <div className="relative min-h-[440px] w-full">
                <div className="carousel__item absolute top-0 left-0 w-full h-full opacity-0 bg-white/10 border border-white/20 rounded-lg flex flex-col justify-center items-center">
                  <div className="text-6xl font-bold text-white">1</div>
                  <h2 className="text-2xl font-semibold text-white">Image 1</h2>
                </div>
                <div className="carousel__item absolute top-0 left-0 w-full h-full opacity-0 bg-white/10 border border-white/20 rounded-lg flex flex-col justify-center items-center">
                  <div className="text-6xl font-bold text-white">2</div>
                  <h2 className="text-2xl font-semibold text-white">Image 2</h2>
                </div>
                <div className="carousel__item absolute top-0 left-0 w-full h-full opacity-0 bg-white/10 border border-white/20 rounded-lg flex flex-col justify-center items-center">
                  <div className="text-6xl font-bold text-white">3</div>
                  <h2 className="text-2xl font-semibold text-white">Image 3</h2>
                </div>
                <div className="carousel__item absolute top-0 left-0 w-full h-full opacity-0 bg-white/10 border border-white/20 rounded-lg flex flex-col justify-center items-center">
                  <div className="text-6xl font-bold text-white">4</div>
                  <h2 className="text-2xl font-semibold text-white">Image 4</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;

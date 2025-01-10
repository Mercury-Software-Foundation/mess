"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { MdArrowOutward } from "react-icons/md";
import { cn } from "../lib/utils";

export const AnimatedVisitButton = ({
  text = "Get Started",
  className,
}: {
  text?: string;
  className?: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = (event: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const enterTimeline = gsap.timeline();
    enterTimeline.fromTo(
      buttonRef.current.querySelector(".hover-overlay"),
      {
        clipPath: `circle(0% at ${x}px ${y}px)`,
      },
      {
        clipPath: "circle(150% at 50% 50%)",
        duration: 0.6,
        ease: "power2.inOut",
      }
    );
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const leaveTimeline = gsap.timeline();
    leaveTimeline.fromTo(
      buttonRef.current.querySelector(".hover-overlay"),
      {
        clipPath: "circle(150% at 50% 50%)",
      },
      {
        clipPath: `circle(0% at ${x}px ${y}px)`,
        duration: 0.4,
        ease: "power2.inOut",
      }
    );
  };

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative flex flex-row gap-2 justify-center items-center px-8 py-2 border-black border rounded-full text-[16px] font-Manrope-Bold overflow-hidden text-black bg-white hover:text-white transition cursor-pointer",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="z-10">{text}</span>
      <MdArrowOutward className="z-10" />
      <div
        className="hover-overlay absolute inset-0 bg-black z-0"
        style={{
          clipPath: "circle(0% at 50% 50%)",
        }}
      ></div>
    </button>
  );
};

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
    const side = calculateMouseDirection(event, rect);

    const enterTimeline = gsap.timeline();
    enterTimeline.fromTo(
      buttonRef.current.querySelector(".hover-overlay"),
      {
        clipPath: getClipPath(side, "in", rect, event),
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
    const leaveTimeline = gsap.timeline();
    leaveTimeline.fromTo(
      buttonRef.current.querySelector(".hover-overlay"),
      {
        clipPath: "circle(150% at 50% 50%)",
      },
      {
        clipPath: getClipPathFromCursor(rect, event),
        duration: 0.4,
        ease: "power2.inOut",
      }
    );
  };

  const calculateMouseDirection = (
    event: React.MouseEvent,
    rect: DOMRect
  ): "top" | "bottom" | "left" | "right" => {
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    const angle = Math.atan2(y, x) * (180 / Math.PI);

    if (angle >= -45 && angle <= 45) return "right";
    if (angle > 45 && angle <= 135) return "bottom";
    if (angle > 135 || angle <= -135) return "left";
    return "top";
  };

  const getClipPath = (
    side: "top" | "bottom" | "left" | "right",
    action: "in" | "out",
    rect: DOMRect,
    event: React.MouseEvent
  ) => {
    const size = action === "in" ? "0%" : "150%";
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    switch (side) {
      case "top":
        return `circle(${size} at ${x}px 0%)`;
      case "bottom":
        return `circle(${size} at ${x}px 100%)`;
      case "left":
        return `circle(${size} at 0% ${y}px)`;
      case "right":
        return `circle(${size} at 100% ${y}px)`;
    }
  };

  const getClipPathFromCursor = (rect: DOMRect, event: React.MouseEvent) => {
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return `circle(0% at ${x}px ${y}px)`;
  };

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative flex flex-row gap-2 justify-center items-center px-8 py-2 border-black border rounded-full text-[16px] font-Manrope-Bold overflow-hidden text-black bg-white hover:text-white transition",
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

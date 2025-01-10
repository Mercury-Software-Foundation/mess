import React from "react";
import '../App.css'
 export const TestimonialCard = () => {
  return (
    <div className="bg-slate-100 rounded-xl p-8 md:flex md:space-x-6">
      <img
        src="/path-to-image.jpg"
        alt="Sarah Dayan"
        className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto"
      />
      <div className="text-center md:text-left">
        <blockquote className="text-lg font-medium">
          <p>
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium mt-4">
          <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
          <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </div>
  );
};

export const CodeDisplay = () => {
  
  

  return (
    <div className="space-y-4">
      {codes.map((code, index) => (
        <pre
          key={index}
          className="bg-gray-800 text-white rounded-xl p-4 overflow-auto max-h-[400px] w-full no-scrollbar"
        >
          <code className="block whitespace-pre">{code}</code>
        </pre>
      ))}
    </div>
  );
};




const CodeOutputLayout = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      <div className="flex-1">
        <CodeDisplay />
      </div>
      <div className="flex-1">
        <TestimonialCard />
      </div>
    </div>
  );
};

export default CodeOutputLayout;
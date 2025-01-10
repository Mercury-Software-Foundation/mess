'use client';

import { FaHeart } from "react-icons/fa";
import React, { useState } from "react";

function Card() {
  const [screenSize, setScreenSize] = useState<"sm" | "lg">("sm");

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex  justify-center gap-5 mb-5">
        <button
          onClick={() => setScreenSize("sm")}
          className={`${
            screenSize === "sm" ? "bg-blue-800 hover:bg-blue-900" : "bg-gray-300"
          } text-white py-2 px-5 rounded font-bold transition-colors duration-300 cursor-pointer`}
        >
          Mobile
        </button>
        <button
          onClick={() => setScreenSize("lg")}
          className={`${
            screenSize === "lg" ? "bg-blue-800 hover:bg-blue-900" : "bg-gray-300"
          } text-white py-2 px-5 rounded font-bold transition-colors duration-300 cursor-pointer`}
        >
          Desktop
        </button>
      </div>

    
      <div
        className={`grid shadow-lg rounded-2xl mx-auto text-sm ${
          screenSize === "lg"
            ? "w-1/2 grid-cols-3 grid-rows-2 gap-5"
            : "w-[350px] grid-cols-1 grid-rows-auto gap-2"
        }`}
      >
       
        <div
          className={`${
            screenSize === "lg"
              ? "col-span-1 row-span-2 rounded-l-2xl"
              : "col-span-1 rounded-t-2xl"
          }`}
        >
          <img
            src="https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:1355,w:1080)/data/mothercare/02-july-2022/410317164_Z003_1.jpg"
            alt="Card Image"
            className={`w-full object-cover ${
              screenSize === "sm"
                ? "h-[200px] rounded-t-2xl"
                : "h-full rounded-l-2xl"
            }`}
          />
        </div>

        <div
          className={`${
            screenSize === "lg"
              ? "col-span-2 row-span-1 py-5 px-2 border-b border-gray-300"
              : "col-span-1 p-5 border-b border-gray-300"
          }`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h2 className={`font-bold ${screenSize === "sm" ? "text-lg" : "text-xl"}`}>
                 Title
              </h2>
              <span className={`text-gray-500 ${screenSize === "sm" ? "text-lg" : "text-xl"}`}>
                $110.00
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-gray-500">In stock</span>
              <div className={`flex ${screenSize === "sm" ? "gap-2 flex-wrap" : "gap-5"}`}>
                <button className="bg-blue-800 text-white py-1 px-3 rounded cursor-pointer">
                  XS
                </button>
                <button className="py-1 px-3 border border-gray-300 cursor-pointer">S</button>
                <button className="py-1 px-3 border border-gray-300 cursor-pointer">M</button>
                <button className="py-1 px-3 border border-gray-300 cursor-pointer">L</button>
                <button className="py-1 px-3 border border-gray-300 cursor-pointer">XL</button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            screenSize === "lg"
              ? "col-span-2 row-span-1 py-3 px-2"
              : "col-span-1 py-3 px-5"
          }`}
        >
          <div className="flex flex-col gap-7">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <button className="bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-900 cursor-pointer">
                  Buy now
                </button>
                <button className="border border-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-100 cursor-pointer">
                  Add to cart
                </button>
              </div>
              <button className="border border-gray-300 py-2 px-4 rounded-lg cursor-pointer">
                <FaHeart className="text-gray-500" />
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
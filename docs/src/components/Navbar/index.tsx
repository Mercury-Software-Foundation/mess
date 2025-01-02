// components/Navbar.js
"use client"
import { useState } from "react";
import { FloatingDock } from "../SampleNAvBar";
import { IconBrandGithub, IconBrandX, IconExchange, IconBook , IconNewSection, IconTerminal2, IconPackage } from "@tabler/icons-react";

export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconBook  className="h-full w-full text-black " />
      ),
      href: "#",
    },
 
    {
      title: "Products",
      icon: (
<svg width="2500" height="977" viewBox="0 0 256 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
  <path d="M0 0v85.498h71.166V99.83H128V85.498h128V0H0z" fill="#000000"/>
  <path d="M42.502 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V14.332H42.502zM85.498 14.332v71.166h28.664V71.166h28.17V14.332H85.498zM128 56.834h-13.838v-28.17H128v28.17zM184.834 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V28.664h14.332v42.502h14.332V14.332h-57.328z" fill="#000000"/>
</svg>
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-black" />
      ),
      href: "#",
    },
    
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-black" />
      ),
      href: "#",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-black" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-black" />
      ),
      href: "#",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              {/* <img
                className="h-8 w-8"
                src="/logo.svg" // Replace with your logo path
                alt="Logo"
              /> */}
              <span className="ml-2 text-xl font-semibold text-gray-800">
                Mess
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
           
            <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
          >
            Docs
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
          >
            Components
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
          >
            Blog
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
          >
            Showcase
          </a>
        </div>
      )}
    </nav>
  );
}
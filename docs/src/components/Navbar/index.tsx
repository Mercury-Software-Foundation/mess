"use client";
import { useState } from "react";
import { FloatingDock } from "../SampleNAvBar";
import {
  IconBrandGithub,
  IconBrandX,
  IconBook,
} from "@tabler/icons-react";
import { FaNpm } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: <IoDocumentTextOutline className="h-full w-full text-black"/>,
      href: "#",
    },
    {
      title: "Products",
      icon: <FaNpm   className="h-full w-full text-black"/> ,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-black" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-black" />,
      href: "#",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center w-full">
      <nav className="sticky top-0 bg-white/5  backdrop-blur-lg border border-gray-300 rounded-full z-50 max-w-4xl w-full">
        <div className="px-6 py-2">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center z-30 cursor-pointer">
              <a href="#" className="flex items-center">
                <span className="ml-2 text-xl font-semibold text-gray-800 cursor-pointer">
                  Mess
                </span>
              </a>
            </div>
            <div className="hidden md:flex space-x-8 z-30">
              <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
              />
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-gray-600 focus:outline-none">
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
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 rounded-b-full">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-500"
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true); // Hide navbar when scrolling down
      } else {
        setHidden(false); // Show navbar when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full px-8 lg:px-16 py-5 bg-[#0a192f] bg-opacity-90 backdrop-blur-md flex justify-between items-center transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } z-50`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="relative flex items-center justify-center border border-[#64ffda] text-lg w-12 h-12 rounded-xl text-[#64ffda] font-mono transition-all duration-500 ease-in-out group overflow-hidden"
      >
        <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:text-[#0a192f]">
          D
        </span>
        <span className="absolute inset-0 bg-[#64ffda] w-full h-full transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
      </Link>

      {/* Navbar Links */}
      <nav className="hidden md:flex items-center space-x-8 text-[#ccd6f6] text-sm font-mono">
        {["About", "Experience", "Projects", "Contact"].map((item, index) => (
          <Link
            key={index}
            href={`#${item.toLowerCase()}`}
            className="group flex items-center space-x-2 transition-all duration-300 ease-in-out"
          >
            <span className="text-[#64ffda] transition-all duration-300 ease-in-out transform group-hover:-translate-y-1">
              {`0${index + 1}.`}
            </span>
            <span className="text-[#ccd6f6] transition-all duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:text-[#64ffda]">
              {item}
            </span>
          </Link>
        ))}

        {/* Resume Button */}
        <Link
          href="/resume.pdf"
          target="_blank"
          className="relative inline-flex items-center border border-[#64ffda] px-4 py-2 rounded-md text-[#64ffda] font-mono transition-all duration-500 ease-in-out group overflow-hidden"
        >
          <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:text-[#0a192f]">
            Resume
          </span>
          <span className="absolute inset-0 bg-[#64ffda] w-full h-full transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
        </Link>
      </nav>
    </header>
  );
}

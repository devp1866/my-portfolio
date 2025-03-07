"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Optimize scroll event with useEffect cleanup and throttling
  useEffect(() => {
    let throttleTimer;
    
    const handleScroll = () => {
      if (throttleTimer) return;
      
      throttleTimer = setTimeout(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setHidden(true); // Hide navbar when scrolling down
        } else {
          setHidden(false); // Show navbar when scrolling up
        }
        setLastScrollY(currentScrollY);
        throttleTimer = null;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(throttleTimer);
    };
  }, [lastScrollY]);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Function to handle page reload
  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default Link behavior
    window.location.reload();
  };

  return (
    <>
      <Head>
        <meta name="description" content="Portfolio and professional experience of a web developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>
      
      <header
        className={`fixed top-0 w-full px-4 sm:px-8 lg:px-16 py-5 bg-[#0a192f] bg-opacity-90 backdrop-blur-md flex justify-between items-center transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } z-50`}
        role="banner"
        aria-label="Main navigation"
      >
        {/* Logo with reload functionality */}
        <Link
          href="/"
          className="relative flex items-center justify-center border border-[#64ffda] text-lg w-12 h-12 rounded-xl text-[#64ffda] font-mono transition-all duration-500 ease-in-out group overflow-hidden"
          onClick={handleLogoClick}
          aria-label="Home page"
        >
          <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:text-[#0a192f]">
            D
          </span>
          <span className="absolute inset-0 bg-[#64ffda] w-full h-full transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
        </Link>

        {/* Navbar Links - Desktop */}
        <nav 
          className="hidden md:flex items-center space-x-8 text-[#ccd6f6] text-sm font-mono"
          aria-label="Desktop navigation"
        >
          {["About", "Experience", "Projects", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              className="group flex items-center space-x-2 transition-all duration-300 ease-in-out"
              aria-label={`Navigate to ${item} section`}
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
            href="https://drive.google.com/file/d/1zCpfsOyP7dH9fca3tw-L-vjHPpVaWT_6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center border border-[#64ffda] px-4 py-2 rounded-md text-[#64ffda] font-mono transition-all duration-500 ease-in-out group overflow-hidden"
            aria-label="Download resume"
          >
            <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:text-[#0a192f]">
              Resume
            </span>
            <span className="absolute inset-0 bg-[#64ffda] w-full h-full transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#64ffda] z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex flex-col justify-between w-6 h-5">
            <span className={`bg-[#64ffda] h-0.5 w-full transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`bg-[#64ffda] h-0.5 w-full transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-[#64ffda] h-0.5 w-full transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-[#0a192f] bg-opacity-95 z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav 
          className="flex flex-col items-center space-y-8 text-[#ccd6f6] text-lg font-mono"
          aria-label="Mobile navigation"
        >
          {["About", "Experience", "Projects", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              className="group flex flex-col items-center transition-all duration-300 ease-in-out"
              onClick={() => setMobileMenuOpen(false)}
              aria-label={`Navigate to ${item} section`}
            >
              <span className="text-[#64ffda] mb-1">
                {`0${index + 1}.`}
              </span>
              <span className="text-[#ccd6f6] group-hover:text-[#64ffda]">
                {item}
              </span>
            </Link>
          ))}

          {/* Resume Button */}
          <Link
            href="https://drive.google.com/file/d/1zCpfsOyP7dH9fca3tw-L-vjHPpVaWT_6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center border border-[#64ffda] px-6 py-3 rounded-md text-[#64ffda] font-mono transition-all duration-500 ease-in-out group overflow-hidden mt-4"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Download resume"
          >
            <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:text-[#0a192f]">
              Resume
            </span>
            <span className="absolute inset-0 bg-[#64ffda] w-full h-full transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          </Link>
        </nav>
      </div>
    </>
  );
}
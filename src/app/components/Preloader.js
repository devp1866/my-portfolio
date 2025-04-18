"use client";
import { useState, useEffect } from "react";

const Preloader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Dynamically import and register the helix loader
    const loadHelix = async () => {
      const { helix } = await import('ldrs');
      helix.register();
    };
    
    loadHelix();

    // Main timer for the preloader
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 800); // Calls onComplete after fade-out
    }, 2000); // Preloader duration

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#0a192f] z-50 transition-opacity duration-800 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="preloader-container">
        {/* Helix loader from ldrs */}
        <l-helix
          size="130"
          speed="2.5"
          color="#64ffda"
        ></l-helix>
      </div>
      
      {/* Loading text */}
      {/* <div className="mt-4 text-teal-300 text-md tracking-widest">
        LOADING
      </div> */}
    </div>
  );
};

export default Preloader;
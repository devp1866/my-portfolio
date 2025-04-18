"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

export default function Hero() {
  const [viewportHeight, setViewportHeight] = useState("100vh");

  // Fix for mobile viewport height issues with debounced resize handler
  const updateHeight = useCallback(() => {
    const vh = window.innerHeight;
    setViewportHeight(`${vh}px`);
  }, []);

  useEffect(() => {
    // Set initial height immediately
    updateHeight();
    
    // Debounced resize handler for better performance
    let resizeTimer;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateHeight, 100);
    };
    
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Add orientation change listener for mobile devices
    window.addEventListener("orientationchange", updateHeight, { passive: true });
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", updateHeight);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, [updateHeight]);

  // Animation variants for consistent animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        delay: custom * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0] // cubic-bezier easing
      }
    })
  };

  return (
    <section
      id="hero"
      style={{ height: viewportHeight }}
      className="flex flex-col justify-center items-start text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-32 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Smooth Appear Animation with optimized animation config */}
      <motion.h1
        className="text-[#64ffda] text-base md:text-lg font-mono mb-2 md:mb-4"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeInUp}
      >
        Hi, my name is
      </motion.h1>

      <motion.h2
        className="text-[#ccd6f6] text-4xl sm:text-5xl md:text-7xl font-bold mb-2 md:mb-3"
        initial="hidden"
        animate="visible"
        custom={2}
        variants={fadeInUp}
      >
        Devkumar Patel.
      </motion.h2>

      <motion.h3
        className="text-[#8892b0] text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-5"
        initial="hidden"
        animate="visible"
        custom={3}
        variants={fadeInUp}
      >
        Building, breaking and learning.
      </motion.h3>

      <motion.p
        className="text-[#8892b0] max-w-lg md:max-w-2xl text-base md:text-lg leading-relaxed mb-6 md:mb-10"
        initial="hidden"
        animate="visible"
        custom={4}
        variants={fadeInUp}
      >
        I bring ideas to life through code, exploring Web3, machine learning, and making scalable apps. Always experimenting, learning, and building impactful digital experiences—powered by curiosity,
        <span className="hidden sm:inline"><br/></span> creativity and{" "}
        <span className="text-[#64ffda]">relentlessness</span>.
      </motion.p>

      {/* Call to Action Button with smooth animation and proper aria attributes */}
      <motion.a
        href="#projects"
        className="relative inline-flex items-center border border-[#64ffda] px-5 sm:px-6 py-2.5 sm:py-3 font-bold rounded-md text-[#64ffda] font-mono text-sm tracking-wide transition-all duration-500 ease-in-out group overflow-hidden"
        initial="hidden"
        animate="visible"
        custom={5}
        variants={fadeInUp}
        aria-label="View my projects"
      >
        <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:text-[#0a192f]">
          Check my course!
        </span>
        <span className="absolute inset-0 bg-[#64ffda] w-full h-full transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
      </motion.a>
    </section>
  );
}
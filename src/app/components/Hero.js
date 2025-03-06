"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-start h-screen text-left max-w-7xl mx-auto px-6 lg:px-32"
    >
      {/* Smooth Appear Animation */}
      <motion.h1
        className="text-[#64ffda] text-base md:text-lg font-mono mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Hi, my name is
      </motion.h1>

      <motion.h2
        className="text-[#ccd6f6] text-5xl md:text-7xl font-bold mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Devkumar Patel.
      </motion.h2>

      <motion.h3
        className="text-[#8892b0] text-4xl md:text-6xl font-bold mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I build things for the web.
      </motion.h3>

      <motion.p
        className="text-[#8892b0] max-w-lg md:max-w-2xl text-sm md:text-xl leading-relaxed mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <span className="text-[#64ffda]">Upstatement</span>.
      </motion.p>

      {/* Call to Action Button */}
      <motion.a
        href="#projects"
        className="relative inline-flex items-center border border-[#64ffda] px-6 py-3 font-bold rounded-md text-[#64ffda] font-mono text-sm tracking-wide transition-all duration-500 ease-in-out group overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:text-[#0a192f]">
          Check my course!
        </span>
        <span className="absolute inset-0 bg-[#64ffda] w-full h-full transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
      </motion.a>

    </section>
  );
}

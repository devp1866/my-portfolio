"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import profilePic from '@/app/public/profile.jpg'; // Import the image correctly

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Handle image loading optimization
  const [imageLoaded, setImageLoaded] = useState(false);

  // Fix hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section 
      id="about" 
      className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 py-16 md:py-24"
      ref={ref}
      aria-label="About me section"
    >
      {/* Section Title with Animation */}
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-[#ccd6f6] flex items-center whitespace-nowrap ml-4 md:ml-20"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[#64ffda] text-base md:text-lg mr-2 md:mr-3">01.</span> About Me
        <div className="ml-3 md:ml-5 h-[1px] w-16 md:w-32 lg:w-64 bg-[#233554]"></div>
      </motion.h2>

      {/* Content Layout */}
      <motion.div 
        className="flex flex-col md:flex-row items-start md:items-center mt-8 gap-8 md:gap-12 md:w-[90%] lg:w-[85%] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Text Container - Slightly Wider */}
        <motion.div 
          className="w-full md:w-[70%] text-base md:text-lg text-[#8892b0] leading-relaxed space-y-4"
          variants={itemVariants}
        >
          <p>
            Hey there! I'm Devkumar Patel, a tech enthusiast who loves experimenting with code and exploring new possibilities in Web3, machine learning, and software development. My journey started with curiosity—tinkering with websites, breaking things (a lot), and figuring out how to make them better. The thrill of problem-solving and continuous learning keeps me inspired.
          </p>
          <p>
            Fast forward to today, I've worked on a variety of projects, from building data-driven models to exploring decentralized technologies, constantly pushing myself to learn and grow.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>

          {/* Skills List with Animation */}
          <motion.ul 
            className="grid grid-cols-2 gap-2 text-sm md:text-base font-mono text-[#64ffda] mt-4"
            variants={itemVariants}
          >
            <li className="flex items-center">
              <span className="mr-2">⚡</span> JavaScript (ES6+)
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚡</span> React & Next.js
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚡</span> Machine learning
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚡</span> Python
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚡</span> Solana
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚡</span> Linux
            </li>
          </motion.ul>
        </motion.div>

        {/* Image Container with Optimized Loading */}
        <motion.div 
          className="relative group w-[220px] h-[270px] md:w-[280px] md:h-[330px] flex-shrink-0 mx-auto md:mx-0"
          variants={itemVariants}
        >
          {isMounted && (
            <>
              {/* Themed Overlay */}
              <div className="absolute inset-3 bg-[#64ffda] opacity-30 rounded-lg transition-opacity duration-300 group-hover:opacity-0"></div>
              
              {/* Image with Optimized Loading */}
              <div className={`transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                  src={profilePic}
                  alt="Profile Picture of Devkumar Patel"
                  width={250}
                  height={300}
                  quality={90}
                  priority={true}
                  onLoad={() => setImageLoaded(true)}
                  className="rounded-lg transition duration-300 transform group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Loading Placeholder */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-[#233554] rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-[#64ffda] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Border Outline Effect */}
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg -translate-x-2 -translate-y-2 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
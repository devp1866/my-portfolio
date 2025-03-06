"use client";
import Image from "next/image";
import profilePic from '@/app/public/profile.jpg'

export default function About() {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-8 lg:px-24 py-24">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-[#ccd6f6] flex ml-20 items-center whitespace-nowrap">
        <span className="text-[#64ffda] text-lg mr-3">01.</span> About Me
        <div className="ml-5 h-[1px] w-3xs bg-[#233554]"></div>
      </h2>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row items-start mt-8 gap-12 md:w-[85%] mx-auto">
        {/* Text Container - Slightly Wider */}
        <div className="w-full md:w-[70%] text-lg text-[#8892b0] leading-relaxed space-y-4">
          <p>
            Hello! My name is [Your Name], and I love building things that live
            on the internet. My interest in web development started back in
            [year] when I discovered HTML & CSS, which led me to explore modern
            frameworks and libraries. Fast-forward to today, I’ve had the opportunity to work on a variety
            of projects, including interactive web apps, scalable backend
            systems, and optimized performance for user-friendly experiences.
          </p>
          <p>
            Fast-forward to today, I’ve had the opportunity to work on a variety
            of projects, including interactive web apps, scalable backend
            systems, and optimized performance for user-friendly experiences.
          </p>
          <p>
            Here are a few technologies I’ve been working with recently:
          </p>

          {/* Skills List */}
          <ul className="grid grid-cols-2 text-sm font-mono text-[#64ffda] mt-4">
            <li>⚡ JavaScript (ES6+)</li>
            <li>⚡ React & Next.js</li>
            <li>⚡ Tailwind CSS</li>
            <li>⚡ TypeScript</li>
            <li>⚡ Node.js</li>
            <li>⚡ GraphQL</li>
          </ul>
        </div>

        {/* Image Container with Hover Effect */}
        <div className="relative group w-[280px] h-[330px] flex-shrink-0">
          {/* Themed Overlay */}
          <div className="absolute inset-3 bg-[#64ffda] opacity-30 rounded-lg transition duration-300 group-hover:opacity-0"></div>
          
          {/* Image with Hover Effect */}
          <Image
            src={profilePic}
            alt="Profile Picture"
            width={250}
            className="rounded-lg transition duration-300 transform group-hover:scale-105 grayscale group-hover:grayscale-0"
          />
          
          {/* Border Outline Effect */}
          <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg -translate-x-2 -translate-y-2 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></div>
        </div>
      </div>
    </section>
  );
}

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
          Hey there! I'm Devkumar Patel, a tech enthusiast who loves experimenting with code and exploring new possibilities in Web3, machine learning, and software development. My journey started with curiosity—tinkering with websites, breaking things (a lot), and figuring out how to make them better. The thrill of problem-solving and continuous learning keeps me inspired.
          </p>
          <p>
          Fast forward to today, I've worked on a variety of projects, from building data-driven models to exploring decentralized technologies, constantly pushing myself to learn and grow.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>

          {/* Skills List */}
          <ul className="grid grid-cols-2 text-sm font-mono text-[#64ffda] mt-4">
            <li>⚡ JavaScript (ES6+)</li>
            <li>⚡ React & Next.js</li>
            <li>⚡ Machine learning</li>
            <li>⚡ Python</li>
            <li>⚡ Solana</li>
            <li>⚡ Linux</li>
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

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          #about {
            padding: 16px 12px;
          }
          
          #about h2 {
            margin-left: 4px;
            font-size: 1.5rem;
          }
          
          #about h2 span {
            font-size: 1rem;
          }
          
          #about .flex-col {
            align-items: center;
            gap: 2rem;
          }
          
          #about .relative.group {
            width: 220px;
            height: 270px;
            margin: 0 auto;
          }
          
          #about .text-lg {
            font-size: 1rem;
          }
          
          #about .grid {
            gap: 0.5rem;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
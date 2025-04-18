"use client";
import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profilePic1 from '@/app/public/profile1.jpg';
import profilePic2 from '@/app/public/profile2.jpg';

export default function Projects() {
  // Project data array - moved outside component for better memory management
  const projectsData = useMemo(() => [
    {
      title: "Halcyon Theme",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      image: profilePic2,
      altText: "Halcyon Theme Preview",
      technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      links: {
        github: "#",
        external: "https://github.com/devp1866"
      },
      featured: true,
      position: "right" // Content on right, image on left
    },
    {
      title: "Spotify Profile",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      image: profilePic1,
      altText: "Spotify Profile Preview",
      technologies: ["React", "Node.js", "Express", "Spotify API", "Heroku"],
      links: {
        github: "#",
        external: "https://github.com/devp1866"
      },
      featured: true,
      position: "left" // Content on left, image on right
    },
    
    // Add more projects as needed
  ], []);

  // Extracted SVG icons for better maintainability
  const GithubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
    </svg>
  );

  const ExternalLinkIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
    </svg>
  );

  // Function to render project description with proper links
  const renderDescription = (description) => {
    if (description.includes('on Visual')) {
      const firstPart = description.split('on ')[0];
      return (
        <>
          {firstPart} on{' '}
          <Link href="#" className="text-teal-400 hover:underline">
            Visual Studio Marketplace
          </Link>
          ,{' '}
          <Link href="#" className="text-teal-400 hover:underline">
            Package Control
          </Link>
          ,{' '}
          <Link href="#" className="text-teal-400 hover:underline">
            Atom Package Manager
          </Link>
          , and npm.
        </>
      );
    }
    return description;
  };

  return (
    <section id="projects" className="w-full bg-[#0a192f] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12 flex ml-0 items-center whitespace-nowrap overflow-hidden">
          <span className="text-[#64ffda] text-lg mr-3">03.</span>Some Things I&apos;ve Built
          <div className="ml-5 h-[1px] w-1/4 bg-[#233554]"></div>
        </h2>

        {/* Projects mapped from array */}
        {projectsData.map((project, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 relative">
            {/* Project Image */}
            <div
              className={`lg:col-span-7 ${project.position === 'right' ? 'lg:order-1' : 'lg:order-2'} order-2`}
            >
              <div className="relative group">
                <Link href={project.links.external} aria-label={`View ${project.title}`}>
                  <div className="absolute w-full h-full bg-teal-500 bg-opacity-10 z-10 rounded-md opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div className="relative w-full h-full overflow-hidden rounded-md">
                    <Image
                      src={project.image}
                      alt={project.altText}
                      width={700}
                      height={400}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdQImO7dMJgAAAABJRU5ErkJggg=="
                      className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                    />
                    {project.position === 'left' && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        {/* Spotify icon or other project-specific elements can go here */}
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            </div>

            {/* Project Details */}
            <div 
              className={`lg:col-span-5 ${
                project.position === 'right' ? 'lg:order-2' : 'lg:order-1'
              } order-1 flex flex-col justify-center`}
            >
              <div className={`${project.position === 'right' ? 'lg:text-right text-right' : ''} mb-2`}>
                <span className="text-teal-400 text-sm">Featured Project</span>
              </div>
              <h3 className={`text-2xl font-semibold text-[#ccd6f6] ${project.position === 'right' ? 'lg:text-right text-right' : ''} mb-6`}>
                <Link href={project.links.external} className="hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </Link>
              </h3>

              {/* Description Box - with position-specific styling */}
              <div 
                className={`bg-[#112240] p-6 rounded-md shadow-xl z-20 mb-6 relative w-full lg:w-[120%] ${
                  project.position === 'right'
                    ? 'lg:transform lg:-translate-x-22 translate-x-0'
                    : 'lg:-translate-x-0'
                }`}
              >
                <p className="text-[#ccd6f6] text-sm leading-relaxed">
                  {renderDescription(project.description)}
                </p>
              </div>

              {/* Tech Stack */}
              <div className={`flex flex-wrap ${project.position === 'right' ? 'lg:justify-end justify-end' : ''} gap-x-4 gap-y-2 text-[#ccd6f6] text-sm mt-2`}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>

              {/* Links */}
              <div className={`flex ${project.position === 'right' ? 'lg:justify-end justify-end' : ''} space-x-5 mt-6`}>
                <Link
                  href={project.links.github}
                  aria-label={`GitHub Repository for ${project.title}`}
                  className="text-[#ccd6f6] hover:text-teal-400 transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                </Link>
                <Link
                  href={project.links.external}
                  aria-label={`External Link for ${project.title}`}
                  className="text-[#ccd6f6] hover:text-teal-400 transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLinkIcon />
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Learn More button positioned at the bottom right of the section with translation effect */}
        <div className="flex justify-center lg:justify-end mt-4">
          <Link
            href="https://github.com/devp1866"
            className="relative inline-flex items-center border border-[#64ffda] px-6 py-3 rounded text-[#64ffda] font-mono transition-all duration-500 ease-in-out group overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Learn more on GitHub"
          >
            <span className="relative z-10 transition-all duration-500 ease-in-out group-hover:text-[#0a192f]">
              Learn More
            </span>
            <span className="absolute inset-0 bg-[#64ffda] w-full h-full transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          </Link>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          #projects {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          #projects h2 {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            white-space: nowrap;
            overflow: hidden;
          }
          
          #projects h2 .ml-5 {
            width: 30%;
          }
          
          #projects .grid {
            gap: 1.5rem;
            margin-bottom: 3rem;
          }
          
          #projects .text-2xl {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }
          
          #projects .bg-\\[\\#112240\\] {
            width: 100% !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
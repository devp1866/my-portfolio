"use client";
import { useState, useEffect, useCallback, memo } from "react";
import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";

// Move projects data outside of the component to prevent unnecessary re-renders
const projects = [
  {
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    tech: ["Algolia", "WordPress", "PHP"],
    link: "#",
    github: "#",
  },
  {
    title: "Time to Have More Fun",
    description:
      "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    link: "https://time-to-have-more-fun.now.sh",
    github: "#",
  },
  {
    title: "Building a Headless Mobile App CMS From Scratch",
    description:
      "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
    tech: ["Node", "Express", "Firebase", "Vue"],
    link: "#",
    github: "#",
  },
  {
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    tech: ["Algolia", "WordPress", "PHP"],
    link: "#",
    github: "#",
  },
  {
    title: "Time to Have More Fun",
    description:
      "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    link: "https://time-to-have-more-fun.now.sh",
    github: "#",
  },
  {
    title: "Building a Headless Mobile App CMS From Scratch",
    description:
      "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
    tech: ["Node", "Express", "Firebase", "Vue"],
    link: "#",
    github: "#",
  },
  {
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    tech: ["Algolia", "WordPress", "PHP"],
    link: "#",
    github: "#",
  },
  {
    title: "Time to Have More Fun",
    description:
      "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    link: "https://time-to-have-more-fun.now.sh",
    github: "#",
  },
  {
    title: "Building a Headless Mobile App CMS From Scratch",
    description:
      "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
    tech: ["Node", "Express", "Firebase", "Vue"],
    link: "#",
    github: "#",
  },
  {
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    tech: ["Algolia", "WordPress", "PHP"],
    link: "#",
    github: "#",
  },
  {
    title: "Time to Have More Fun",
    description:
      "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    link: "https://time-to-have-more-fun.now.sh",
    github: "#",
  },
  {
    title: "Building a Headless Mobile App CMS From Scratch",
    description:
      "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
    tech: ["Node", "Express", "Firebase", "Vue"],
    link: "#",
    github: "#",
  },
];

// Memoized ProjectCard component to prevent unnecessary re-renders
const ProjectCard = memo(({ project, index }) => {
  const projectUrl = project.link || project.github;

  return (
    <div
      key={index}
      className="bg-[#112240] p-6 rounded-md shadow-lg hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full project-card"
    >
      {/* Top Section - Icons */}
      <div className="flex items-center justify-between mb-4 card-icons">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-teal-300" aria-label={`Folder icon for ${project.title}`}>
          <FiFolder className="text-3xl" />
        </a>
        <div className="flex space-x-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-teal-300 transition"
              aria-label={`GitHub link for ${project.title}`}
            >
              <FiGithub size={20} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-teal-300 transition"
              aria-label={`External link for ${project.title}`}
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Middle Section - Title & Description */}
      <div className="flex-grow">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
          <h3 className="text-lg font-semibold text-[#ccd6f6] project-title">{project.title}</h3>
        </a>
        <p className="text-[#8892b0] text-sm mt-2 project-description">{project.description}</p>
      </div>

      {/* Bottom Section - Tech Stack */}
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs text-[#8892b0] bg-gray-800 px-2 py-1 rounded tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

// Set display name for the memoized component (helps with debugging)
ProjectCard.displayName = 'ProjectCard';

export default function OtherProjects() {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Memoize the checkIsMobile function to prevent recreation on each render
  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Check if device is mobile on mount and when window resizes
  useEffect(() => {
    // Initial check - use safe check for window to avoid Vercel SSR issues
    if (typeof window !== 'undefined') {
      checkIsMobile();
      
      // Add event listener for window resize with debounce
      let resizeTimer;
      const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(checkIsMobile, 100);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimer);
      };
    }
  }, [checkIsMobile]);
    
  // Display 4 projects initially on mobile, 6 on desktop
  const initialCount = isMobile ? 4 : 6;
  const displayedProjects = showMore ? projects : projects.slice(0, initialCount);
  
  // Toggle show more/less with proper focus management
  const toggleShowMore = () => {
    setShowMore(prev => !prev);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 mt-16">
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding-left: 16px !important;
            padding-right: 16px !important;
            margin-top: 3rem !important;
          }
          h2 {
            font-size: 1.5rem !important;
          }
          .grid {
            gap: 1rem !important;
          }
          .project-card {
            padding: 1rem !important;
          }
          .show-more-btn {
            margin-top: 2rem !important;
            margin-bottom: 2rem !important;
            font-size: 0.875rem !important;
          }
        }
        @media (max-width: 480px) {
          section {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          .tech-tag {
            font-size: 0.65rem !important;
            padding: 0.25rem 0.5rem !important;
          }
          .card-icons {
            margin-bottom: 0.75rem !important;
          }
          .project-title {
            font-size: 1rem !important;
          }
          .project-description {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
      
      <h2 className="text-center text-3xl font-semibold text-[#ccd6f6]">
        Other Noteworthy Projects
      </h2>
      <div className="text-center my-3">
        <a href="#" className="text-teal-300 text-sm hover:underline">
          View the archives
        </a>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} index={index} />
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {projects.length > initialCount && (
        <div className="text-center mt-15 mb-4">
          <button
            onClick={toggleShowMore}
            className="px-6 py-2 text-teal-300 border border-teal-300 rounded hover:bg-teal-300 hover:text-gray-900 transition show-more-btn"
            aria-expanded={showMore}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}
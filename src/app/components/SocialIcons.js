"use client";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function SocialIcons() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile on initial load
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1130); // 768px is typical md breakpoint
    };
    
    // Set initial state
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile version (horizontal at bottom)
  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center pb-4 z-40 bg-gradient-to-t from-[#0a192f] to-transparent pt-4">
        <div className="flex flex-row items-center space-x-6">
          <a href="https://github.com/devp1866" target="_blank" className="text-[#ccd6f6] hover:text-green-400 text-xl">
            <FaGithub />
          </a>
          <a href="https://instagram.com/_devpatel_7" target="_blank" className="text-[#ccd6f6] hover:text-green-400 text-xl">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/devp1866" target="_blank" className="text-[#ccd6f6] hover:text-green-400 text-xl">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/devp1866/" target="_blank" className="text-[#ccd6f6] hover:text-green-400 text-xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
    );
  }

  // Desktop version (vertical on left side)
  return (
    <div className="fixed bottom-0 left-8 flex flex-col items-center space-y-7">
      <a href="https://github.com/devp1866" target="_blank" className="text-[#ccd6f6] hover:text-green-400 text-2xl">
        <FaGithub />
      </a>
      <a href="https://instagram.com/_devpatel_7" target="_blank" className="text-[#ccd6f6] hover:text-green-400 text-2xl">
        <FaInstagram />
      </a>
      <a href="https://twitter.com/devp1866" target="_blank" className="text-[#ccd6f6] hover:text-green-400 text-2xl">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/in/devp1866/" target="_blank" className="text-[#ccd6f6] hover:text-green-400 text-2xl">
        <FaLinkedin />
      </a>
      <div className="w-[2px] h-24 bg-[#ccd6f6] mt-2"></div> {/* Vertical line */}
    </div>
  );
}
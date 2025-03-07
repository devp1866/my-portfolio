"use client";
import { useEffect, useState } from "react";

export default function Email() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile on initial load
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900); // 768px is typical md breakpoint
    };
    
    // Set initial state
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile version (hidden to avoid cluttering the mobile view)
  if (isMobile) {
    return null; // Hide on mobile as the email will be accessible through the footer or contact section
  }

  // Desktop version (vertical on right side)
  return (
    <div className="fixed bottom-0 right-8 flex flex-col items-center space-y-1">
      <a
        href="mailto:devp1866@gmail.com"
        className="text-[#64ffda] text-sm tracking-widest hover:underline mb-4"
        style={{ writingMode: "vertical-rl" }}
      >
        devp1866@gmail.com
      </a>
      <div className="w-[2px] h-24 bg-[#ccd6f6]"></div>
    </div>
  );
}
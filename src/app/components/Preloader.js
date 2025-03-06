"use client";
import { useState, useEffect } from "react";

const Preloader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500); // Calls `onComplete` after fade-out
    }, 2000); // Preloader duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-[#0a192f] z-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <svg
        width="80"
        height="90"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse"
      >
        <polygon
          stroke="#64ffda"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="50,5 95,27 95,72 50,95 5,72 5,27"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fill="#64ffda"
          fontSize="32"
          fontWeight="bold"
        >
          D
        </text>
      </svg>
    </div>
  );
};

export default Preloader;

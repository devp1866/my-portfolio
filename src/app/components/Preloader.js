"use client";
import { useState, useEffect } from "react";

const Preloader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animation timeline effect
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 4; // Increment speed
      });
    }, 80);

    // Main timer for the preloader
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 800); // Calls `onComplete` after fade-out
    }, 2000); // Preloader duration

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#0a192f] z-50 transition-opacity duration-800 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <style jsx>{`
        @keyframes rotatePolygon {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes dash {
          0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
          100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(100, 255, 218, 0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(100, 255, 218, 0.8)); }
        }
        
        @keyframes fadeInOut {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
        
        @media (max-width: 768px) {
          .progress-bar {
            width: 80% !important;
            max-width: 300px !important;
          }
          .preloader-container svg {
            width: 70px !important;
            height: 80px !important;
          }
        }
      `}</style>
      
      <div className="preloader-container relative mb-8">
        {/* Background hexagon with glow effect */}
        <svg
          width="90"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            animation: "glow 2s ease-in-out infinite",
            opacity: 0.3,
          }}
        >
          <polygon
            fill="rgba(100, 255, 218, 0.1)"
            points="50,5 95,27 95,72 50,95 5,72 5,27"
          />
        </svg>
        
        {/* Main hexagon with rotation */}
        <svg
          width="80"
          height="90"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            animation: "rotatePolygon 10s linear infinite",
          }}
        >
          <polygon
            stroke="#64ffda"
            strokeWidth="3"
            strokeDasharray="90, 150"
            strokeDashoffset="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(100, 255, 218, 0.05)"
            points="50,5 95,27 95,72 50,95 5,72 5,27"
            style={{
              animation: "dash 1.5s ease-in-out infinite",
            }}
          />
        </svg>
        
        {/* Letter D with pulse effect */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              fill="#64ffda"
              fontSize="32"
              fontWeight="bold"
              style={{
                animation: "fadeInOut 2s infinite",
              }}
            >
              D
            </text>
          </svg>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="progress-bar w-64 h-1 bg-gray-700 rounded-full mt-4 overflow-hidden">
        <div 
          className="h-full bg-teal-300 rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Loading text */}
      <div 
        className="mt-4 text-teal-300 text-sm tracking-widest"
        style={{
          animation: "fadeInOut 2s infinite",
        }}
      >
        LOADING
      </div>
    </div>
  );
};

export default Preloader;
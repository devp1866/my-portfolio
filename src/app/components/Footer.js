import React from "react";

export default function Footer() {
  return (
    <footer className="w-full text-center py-6 text-[#8892b0] text-sm">
      <a
        href="https://github.com/bchiang7"
        target="_blank"
        rel="noopener noreferrer"
        className="group transition duration-300 hover:text-teal-300"
      >
        <span className="block transition-transform group-hover:-translate-y-1">
          Designed & Built by Devkumar Patel
        </span>
        <span className="block mt-2 transition-transform group-hover:-translate-y-1">
          ★ 1729  ⚖ 1729
        </span>
      </a>
    </footer>
  );
}

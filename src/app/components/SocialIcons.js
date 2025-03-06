"use client";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="fixed bottom-0 left-8 flex flex-col items-center space-y-7">
      <a href="https://github.com" target="_blank" className="text-[#ccd6f6] hover:text-green-400 text-2xl">
        <FaGithub />
      </a>
      <a href="https://instagram.com" target="_blank" className="text-[#ccd6f6] hover:text-green-400 text-2xl">
        <FaInstagram />
      </a>
      <a href="https://twitter.com" target="_blank" className="text-[#ccd6f6] hover:text-green-400 text-2xl">
        <FaTwitter />
      </a>
      <a href="https://linkedin.com" target="_blank" className="text-[#ccd6f6] hover:text-green-400 text-2xl">
        <FaLinkedin />
      </a>
      <div className="w-[2px] h-24 bg-[#ccd6f6] mt-2"></div> {/* Vertical line */}
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for smooth appearance animation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px"
        }
      );

      const contactSection = document.getElementById("contact");
      if (contactSection) {
        observer.observe(contactSection);
      }

      return () => {
        if (contactSection) {
          observer.unobserve(contactSection);
        }
      };
    }
  }, []);

  // Email configuration
  const emailAddress = "your.email@example.com";
  
  // Function to handle email click with analytics tracking
  const handleEmailClick = () => {
    // Optional: Add analytics tracking here if needed in the future
    // Example: if (window.gtag) window.gtag('event', 'contact', { method: 'email' });
  };

  // CSS classes for animation
  const animationClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  return (
    <section
      id="contact"
      className={`h-screen flex flex-col justify-center items-center text-center px-6 transition-all duration-700 ease-in-out ${animationClasses}`}
      aria-labelledby="contact-heading"
    >
      <h2 className="text-teal-300 text-sm font-semibold tracking-widest mb-4">
        04. What&apos;s Next?
      </h2>
      <h3 id="contact-heading" className="text-[#ccd6f6] text-5xl font-bold mb-5">
        Get In Touch
      </h3>
      <p className="text-[#8892b0] text-lg max-w-lg mb-12">
        Although I&apos;m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I&apos;ll
        try my best to get back to you!
      </p>

      <a
        href={`mailto:${emailAddress}`}
        onClick={handleEmailClick}
        className="px-8 py-3 border border-teal-300 text-teal-300 text-lg rounded-sm hover:bg-teal-300 hover:text-gray-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Send me an email"
        rel="noopener noreferrer"
      >
        Say Hello
      </a>
    </section>
  );
}
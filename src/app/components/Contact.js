import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <h2 className="text-teal-300 text-sm font-semibold tracking-widest mb-4">
        04. What's Next?
      </h2>
      <h3 className="text-[#ccd6f6] text-5xl font-bold mb-5">Get In Touch</h3>
      <p className="text-[#8892b0] text-lg max-w-lg mb-12">
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>

      <a
        href="mailto:your.email@example.com"
        className="px-8 py-3 border border-teal-300 text-teal-300 text-lg rounded-sm hover:bg-teal-300 hover:text-gray-900 transition duration-300"
      >
        Say Hello
      </a>
    </section>
  );
}

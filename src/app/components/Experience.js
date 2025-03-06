"use client";
import { useState } from "react";

const experienceData = [
    {
        company: "Upstatement",
        position: "Lead Engineer",
        duration: "May 2018 — Present",
        details: [
            "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
            "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements.",
            "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.",
            "Provide leadership within the engineering department through close collaboration, knowledge sharing, and mentorship.",
        ],
    },
    {
        company: "Scout Studio",
        position: "Frontend Developer",
        duration: "May 2014 — June 2016",
        details: [
            "Designed and built interactive user interfaces with React and modern frontend technologies.",
            "Implemented best practices for accessibility and performance optimization.",
        ],
    },
    {
        company: "Apple",
        position: "Software Engineer",
        duration: "July 2016 — May 2018",
        details: [
            "Developed and maintained key features in Apple's internal tools and platforms.",
            "Worked with cross-functional teams to improve performance and scalability.",
            "Contributed to open-source projects and helped mentor junior developers.",
        ],
    },
    {
        company: "Scout Studio",
        position: "Frontend Developer",
        duration: "May 2014 — June 2016",
        details: [
            "Designed and built interactive user interfaces with React and modern frontend technologies.",
            "Implemented best practices for accessibility and performance optimization.",
        ],
    },
];

export default function Experience() {
    const [selectedJob, setSelectedJob] = useState(0);

    return (
        <section id="experience" className="w-full min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-8 lg:px-24 py-24">
            {/* Section Title */}
            <h2 className="text-[#ccd6f6] text-3xl font-bold flex items-center mb-15">
                <span className="text-[#64ffda] text-lg mr-3">02.</span> Where I&apos;ve Worked
                <span className="ml-5 w-1/4 h-[1px] bg-[#233554]"></span>
            </h2>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Sidebar */}
                <div className="md:w-1/4 relative">

                    {experienceData.map((job, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedJob(index)}
                            className={`block px-5 py-4 w-full text-left text-base font-mono transition-all duration-300 ${selectedJob === index
                                    ? "text-[#64ffda] bg-[#233554]"
                                    : "text-[#8892b0] hover:bg-[#112240]"
                                }`}
                        >
                            {job.company}
                        </button>
                    ))}
                    {/* Sidebar Indicator */}
                    <div className="absolute left-0 top-0 w-[2px] bg-[#233554]" style={{ height: `${experienceData.length * 56}px` }}></div>
                </div>

                {/* Right Content - Full Height */}
                <div className="md:w-3/4 md:pl-10 min-h-[450px] flex flex-col">
                    {/* Position + Company */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-[#ccd6f6] text-lg font-semibold">
                            {experienceData[selectedJob].position}{" "}
                            <span className="text-[#64ffda]">@ {experienceData[selectedJob].company}</span>
                        </h3>
                        <p className="text-[#8892b0] text-sm">{experienceData[selectedJob].duration}</p>
                    </div>

                    {/* Description */}
                    <ul className="text-[#8892b0] text-base space-y-4 leading-relaxed">
                        {experienceData[selectedJob].details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                                <span className="text-[#64ffda]">▹</span>
                                <p>{detail}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}

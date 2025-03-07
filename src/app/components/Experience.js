"use client";
import Link from "next/link";
import { useState } from "react";

const experienceData = [
    {
        company: "IIT Madras",
        name: "IIT Madras (Online)",
        Link: "https://study.iitm.ac.in/ds/index.html",
        position: "Student",
        duration: "Sep 2023 — Present",
        details: [
            "Pursuing BS in Data Science at IIT Madras, gaining expertise in statistical analysis, machine learning, and computational thinking.",
            "Engaging in hands-on projects that apply data-driven insights to real-world problems, enhancing analytical and problem-solving skills.",
            "Continuously learning and exploring advanced topics in AI, big data, and predictive modeling to stay at the forefront of technology.",
            "Collaborating with peers and mentors to build a strong foundation in data science and its applications across industries."
        ],
    },
    {
        company: "LDRP-ITR",
        name: "LDRP-ITR Gandhinagar",
        Link: "https://www.ldrp.ac.in/",
        position: "Student",
        duration: "July 2023 — May 2027",
        details: [
            "Pursuing a BE in Computer Engineering at LDRP-ITR, focusing on software development, algorithms, and system architecture.",
            "Working on hands-on projects that enhance problem-solving skills and practical knowledge in computing technologies.",
            "Exploring areas like data structures, networking, and software engineering to build a strong technical foundation.",
        ],
    },
    {
        company: "JNV Mehsana",
        name: "Jawahar Navodaya Vidyalaya",
        Link: "https://navodaya.gov.in/nvs/nvs-school/MEHSANA/en/home",
        position: "Student",
        duration: "July 2016 — May 2023",
        details: [
            "Spent 7 years at Jawahar Navodaya Vidyalaya (JNV) Mehsana, developing a strong academic foundation and a disciplined mindset.",
            "Honed leadership, teamwork, and problem-solving skills through rigorous academics and extracurricular activities.",
            "Proudly represented as a national-level handball player, demonstrating dedication, resilience, and a competitive spirit.",
            "Actively participated in various school events, fostering a passion for continuous learning and personal growth."
        ],
    },
];

export default function Experience() {
    const [selectedJob, setSelectedJob] = useState(0);

    return (
        <section id="experience" className="w-full min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-8 lg:px-24 py-24">
            {/* Section Title */}
            <h2 className="text-[#ccd6f6] text-3xl font-bold flex items-center mb-15 whitespace-nowrap overflow-hidden">
                <span className="text-[#64ffda] text-lg mr-3">02.</span> Where I&apos;ve Worked
                <span className="ml-5 w-1/4 h-[1px] bg-[#233554]"></span>
            </h2>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Sidebar */}
                <div className="md:w-1/4 relative">
                    <div className="flex md:block overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal">
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
                    </div>
                    {/* Sidebar Indicator */}
                    <div className="absolute left-0 top-0 w-[2px] bg-[#233554] hidden md:block" style={{ height: `${experienceData.length * 56}px` }}></div>
                    
                    {/* Mobile Indicator (horizontal) */}
                    <div className="md:hidden absolute bottom-0 left-0 h-[2px] bg-[#233554]" style={{ width: '100%' }}></div>
                </div>

                {/* Right Content - Full Height */}
                <div className="md:w-3/4 md:pl-10 min-h-[450px] flex flex-col mt-6 md:mt-0">
                    {/* Position + Company */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <h3 className="text-[#ccd6f6] text-lg font-semibold">
                            {experienceData[selectedJob].position}{" "}
                            <Link
                                href={experienceData[selectedJob].Link}
                            >
                                <span className="text-[#64ffda]">@ {experienceData[selectedJob].name}</span>
                            </Link>
                        </h3>
                        <p className="text-[#8892b0] text-sm mt-1 sm:mt-0">{experienceData[selectedJob].duration}</p>
                    </div>

                    {/* Description */}
                    <ul className="text-[#8892b0] text-base space-y-4 leading-relaxed">
                        {experienceData[selectedJob].details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                                <span className="text-[#64ffda] flex-shrink-0">▹</span>
                                <p>{detail}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile-specific styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    #experience {
                        min-height: auto;
                        padding-top: 4rem;
                        padding-bottom: 4rem;
                    }
                    
                    #experience h2 {
                        font-size: 1.5rem;
                        margin-bottom: 2rem;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                    
                    #experience h2 span:last-child {
                        width: 30%;
                    }
                    
                    #experience button {
                        padding: 0.75rem 1rem;
                        min-width: 120px;
                    }
                }
            `}</style>
        </section>
    );
}
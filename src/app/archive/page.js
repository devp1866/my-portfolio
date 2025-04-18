"use client";
import React from 'react';
import Link from 'next/link';

function Archive() {
  const projects = [
    {
      year: 2022,
      title: 'Harvard Business School Design System',
      madeAt: 'Upstatement',
      builtWith: 'Storybook · React · TypeScript',
      link: '#'
    },
    {
      year: 2022,
      title: 'Threadable',
      madeAt: 'Upstatement',
      builtWith: 'React Native · Ruby on Rails · Firebase',
      link: '#'
    },
    {
      year: 2022,
      title: 'Pratt',
      madeAt: 'Upstatement',
      builtWith: 'WordPress · Timber · WordPress Multisite · Gutenberg · JS',
      link: '#'
    },
    {
        year: 2022,
        title: 'Harvard Business School Design System',
        madeAt: 'Upstatement',
        builtWith: 'Storybook · React · TypeScript',
        link: '#'
      },
      {
        year: 2022,
        title: 'Threadable',
        madeAt: 'Upstatement',
        builtWith: 'React Native · Ruby on Rails · Firebase',
        link: '#'
      },
      {
        year: 2022,
        title: 'Pratt',
        madeAt: 'Upstatement',
        builtWith: 'WordPress · Timber · WordPress Multisite · Gutenberg · JS',
        link: '#'
      },
      {
        year: 2022,
        title: 'Harvard Business School Design System',
        madeAt: 'Upstatement',
        builtWith: 'Storybook · React · TypeScript',
        link: '#'
      },
      {
        year: 2022,
        title: 'Threadable',
        madeAt: 'Upstatement',
        builtWith: 'React Native · Ruby on Rails · Firebase',
        link: '#'
      },
      {
        year: 2022,
        title: 'Pratt',
        madeAt: 'Upstatement',
        builtWith: 'WordPress · Timber · WordPress Multisite · Gutenberg · JS',
        link: '#'
      },
      {
        year: 2022,
        title: 'Harvard Business School Design System',
        madeAt: 'Upstatement',
        builtWith: 'Storybook · React · TypeScript',
        link: '#'
      },
      {
        year: 2022,
        title: 'Threadable',
        madeAt: 'Upstatement',
        builtWith: 'React Native · Ruby on Rails · Firebase',
        link: '#'
      },
      {
        year: 2022,
        title: 'Pratt',
        madeAt: 'Upstatement',
        builtWith: 'WordPress · Timber · WordPress Multisite · Gutenberg · JS',
        link: '#'
      },
      {
        year: 2022,
        title: 'Harvard Business School Design System',
        madeAt: 'Upstatement',
        builtWith: 'Storybook · React · TypeScript',
        link: '#'
      },
      {
        year: 2022,
        title: 'Threadable',
        madeAt: 'Upstatement',
        builtWith: 'React Native · Ruby on Rails · Firebase',
        link: '#'
      },
      {
        year: 2022,
        title: 'Pratt',
        madeAt: 'Upstatement',
        builtWith: 'WordPress · Timber · WordPress Multisite · Gutenberg · JS',
        link: '#'
      },
  ];

  return (
    <div className="relative min-h-screen bg-[#112240] text-white px-8 pt-32"> 
      {/* ✅ pt-32 (128px) ensures content appears below navbar */}
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold mb-2">Archive</h1>
        <p className="text-[#ccd6f6] mb-16">A big list of things I've worked on</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left">
                <th className="py-4 pr-6 font-normal text-[#ccd6f6]">Year</th>
                <th className="py-4 pr-6 font-normal text-[#ccd6f6]">Title</th>
                <th className="py-4 pr-6 font-normal text-[#ccd6f6]">Made at</th>
                <th className="py-4 pr-6 font-normal text-[#ccd6f6]">Built with</th>
                <th className="py-4 pr-6 font-normal text-[#ccd6f6]">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr 
                  key={index} 
                  className="border-b border-[#172a45]/30 hover:bg-[#172a45]/30 transition-colors"
                >
                  <td className="py-4 pr-6 text-[#ccd6f6]">{project.year}</td>
                  <td className="py-4 pr-6 font-medium">{project.title}</td>
                  <td className="py-4 pr-6 text-[#ccd6f6]">{project.madeAt}</td>
                  <td className="py-4 pr-6 text-[#ccd6f6]">{project.builtWith}</td>
                  <td className="py-4">
                    <Link href={project.link}>
                      <div className="text-[#ccd6f6] hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Archive;
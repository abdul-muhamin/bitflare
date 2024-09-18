"use client";
import React, { useState, useEffect } from 'react';
import AnimatedLineDiv from './AnimatedLineDiv';
import Link from 'next/link'; // Import Link from Next.js
import { FiArrowRight } from 'react-icons/fi';
interface Project {
  id: number;
  src: string;
  alt: string;
  name: string;
  icon: string;
  url: string;
}

const ServicesProject: React.FC = () => {
  const [recentProjects, setRecentProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/data.json') // Fetch data from the public folder
      .then((response) => response.json())
      .then((data) => setRecentProjects(data.servicesProjects))
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

  return (
    <div className="bg-white py-16 px-12 lg:px-20">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
        <div className='flex justify-start items-center mb-4 mt-2'>
          <AnimatedLineDiv width="w-72" height="h-2" />
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-4">
          {recentProjects.map((project) => (
            <Link key={project.id} href={project.url} passHref>
              <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-[450px] h-[200px] lg:h-[300px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex w-full justify-between items-center">
                    <span className="text-white text-3xl font-normal">{project.name}</span>
                    <div className="text-white text-3xl border rounded-full p-2">
                      <FiArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Work Button */}
        <div className="mt-8 text-center">
          <Link href="/our-work">
            <button className="bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition">
              View all work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesProject;

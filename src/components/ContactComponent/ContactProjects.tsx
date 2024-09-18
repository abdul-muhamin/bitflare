"use client";
import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Project } from '../../utils/interface'; // Adjust the import path as needed
import Link from 'next/link';

const ContactProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      setProjects(data.projects);
    };

    fetchData();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Function to filter projects based on the selected category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  // Map icon names to components
  const iconComponents: { [key: string]: JSX.Element } = {
    "FiArrowRight": <FiArrowRight />
    // Add more icon mappings here if needed
  };

  return (
    <div className="bg-white py-16 px-12 lg:px-20">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="flex justify-center mb-8 space-x-4">
          {['All', 'Web Development', 'AI/ChatGPT', 'Chrome Extensions', 'Game Development'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 border-b-2 text-2xl font-bold ${selectedCategory === category ? 'border-teal-500' : 'border-transparent'} font-medium hover:border-teal-500`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={project.url} passHref>
              <div className="relative border rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <img src={project.src} alt={project.alt} className="w-full h-56 object-cover" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex w-full justify-between items-center">
                    <span className="text-white text-3xl font-normal">{project.name}</span>
                    <div className="text-white text-3xl border rounded-full p-2">
                      {iconComponents[project.icon]}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Work Button */}
        <div className="mt-8 text-center">
          <Link href="/ourWork">
            <button className="bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition">
              View all work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactProjects;

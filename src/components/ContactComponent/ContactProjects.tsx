"use client";
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  icon: JSX.Element;
}

const ContactProjects: React.FC = () => {
  const projects = [
    { id: 1, src: "/images/team.png", alt: "Project 1", category: "Web Development", name: "Project 1", icon: <FiArrowRight /> },
    { id: 2, src: "/images/team.png", alt: "Project 2", category: "Web Development", name: "Project 2", icon: <FiArrowRight /> },
    { id: 3, src: "/images/team.png", alt: "Project 3", category: "Web Development", name: "Project 3", icon: <FiArrowRight /> },
    { id: 4, src: "/images/team.png", alt: "Project 4", category: "Web Development", name: "Project 4", icon: <FiArrowRight /> },
    { id: 5, src: "/images/team.png", alt: "Project 5", category: "Web Development", name: "Project 5", icon: <FiArrowRight /> },
    { id: 6, src: "/images/team.png", alt: "Project 6", category: "Web Development", name: "Project 6", icon: <FiArrowRight /> },
    { id: 7, src: "/images/team.png", alt: "Project 7", category: "Web Development", name: "Project 7", icon: <FiArrowRight /> },
    { id: 8, src: "/images/team.png", alt: "Project 8", category: "Web Development", name: "Project 8", icon: <FiArrowRight /> }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Function to filter projects based on the selected category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-white py-16 px-12 lg:px-20">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="flex justify-center mb-8 space-x-4">
          {['All', 'Web Development', 'AI/ChatGPT', 'Chrome Extensions', 'Game Development'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 border-b-2 text-2xl font-bold  ${selectedCategory === category ? 'border-teal-500' : 'border-transparent'} font-medium hover:border-teal-500`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="relative border rounded-lg overflow-hidden shadow-lg">
              <img src={project.src} alt={project.name} className="w-full h-56 object-cover" />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end p-4">
                <div className="flex w-full justify-between items-center">
                  <span className="text-white text-3xl font-normal">{project.name}</span>
                  <div className="text-white text-3xl border rounded-full p-2">{project.icon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Work Button */}
        <div className="mt-8 text-center">
          <button className="bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition">
            View all work
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactProjects;

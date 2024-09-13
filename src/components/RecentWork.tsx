import React from 'react';
import AnimatedLineDiv from './AnimatedLineDiv';
import { FiArrowRight } from 'react-icons/fi';

const RecentWork = () => {
  const projects = [
    { id: 1, src: "/images/team.png", alt: "Project 1", name: "Project 1", icon: <FiArrowRight /> },
    { id: 2, src: "/images/team.png", alt: "Project 2", name: "Project 2", icon: <FiArrowRight /> },
    { id: 3, src: "/images/team.png", alt: "Project 3", name: "Project 3", icon: <FiArrowRight /> },
    { id: 4, src: "/images/team.png", alt: "Project 4", name: "Project 4", icon: <FiArrowRight /> },
    { id: 5, src: "/images/team.png", alt: "Project 5", name: "Project 5", icon: <FiArrowRight /> },
    { id: 6, src: "/images/team.png", alt: "Project 6", name: "Project 6", icon: <FiArrowRight /> },
    { id: 7, src: "/images/team.png", alt: "Project 7", name: "Project 7", icon: <FiArrowRight /> },
    { id: 8, src: "/images/team.png", alt: "Project 8", name: "Project 8", icon: <FiArrowRight /> }
  ];

  return (
    <div className="bg-white py-16 px-12 lg:px-20">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-800">
          Our Recent Work
        </h2>
        <div className='flex justify-start items-center mb-4 mt-2'>
          <AnimatedLineDiv width="w-72" height="h-2"/>
        </div>
        <p className="text-gray-600 mb-8">
          Some of the esteemed projects we worked upon, to give you a glimpse of the way we work.
        </p>

        {/* Project Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
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
};

export default RecentWork;

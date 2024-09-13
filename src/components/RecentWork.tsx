import React from 'react';

const RecentWork = () => {
  const projects = [
    { id: 1, src: "/images/team.png", alt: "Project 1" },
    { id: 2, src: "/images/team.png", alt: "Project 2" },
    { id: 3, src: "/images/team.png", alt: "Project 3" },
    { id: 4, src: "/images/team.png", alt: "Project 4" },
    { id: 5, src: "/images/team.png", alt: "Project 5" },
    { id: 6, src: "/images/team.png", alt: "Project 6" },
    { id: 7, src: "/images/team.png", alt: "Project 7" },
    { id: 8, src: "/images/team.png", alt: "Project 8" }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Recent Work
        </h2>
        <p className="text-gray-600 mb-8">
          Some of the esteemed projects we worked upon, to give you a glimpse of the way we work.
        </p>

        {/* Project Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          {/* First row on large screens */}
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} className="overflow-hidden rounded-lg shadow-lg lg:col-span-1 lg:row-span-1">
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transition transform hover:scale-105"
              />
            </div>
          ))}
          {/* Second row on large screens */}
          <div className="lg:col-span-2 lg:row-span-2 grid grid-cols-2 gap-4">
            {projects.slice(3, 5).map((project) => (
              <div key={project.id} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover transition transform hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg lg:col-span-1 lg:row-span-1">
            <img
              src={projects[5].src}
              alt={projects[5].alt}
              className="w-full h-full object-cover transition transform hover:scale-105"
            />
          </div>
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

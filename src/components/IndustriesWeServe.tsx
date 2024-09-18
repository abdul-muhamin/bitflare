"use client"
import React, { useState, useEffect } from 'react';
import AnimatedLineDiv from './AnimatedLineDiv';
import { FaUniversity, FaGraduationCap, FaPlayCircle, FaUtensils, FaGamepad, FaHeartbeat, FaHome, FaFutbol, FaTruck, FaPlane } from 'react-icons/fa';
import { Industry } from '../utils/interface'; // Import the interface

const iconMap: { [key: string]: JSX.Element } = {
  FaUniversity: <FaUniversity />,
  FaGraduationCap: <FaGraduationCap />,
  FaPlayCircle: <FaPlayCircle />,
  FaUtensils: <FaUtensils />,
  FaGamepad: <FaGamepad />,
  FaHeartbeat: <FaHeartbeat />,
  FaHome: <FaHome />,
  FaFutbol: <FaFutbol />,
  FaTruck: <FaTruck />,
  FaPlane: <FaPlane />,
};

const IndustriesWeServe: React.FC = () => {
  const [industries, setIndustries] = useState<Industry[]>([]);

  useEffect(() => {
    // Fetch the industries data from the public data.json file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setIndustries(data.industries))
      .catch((err) => console.error('Error fetching industries:', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 text-left tracking-wider mb-2">
          INDUSTRIES WE SERVE
        </h2>
        <div>
          <AnimatedLineDiv />
        </div>
        <p className="mt-4 text-gray-600 text-2xl font-semibold text-left">
          Our mobile and web development expertise extends to various popular industries, you can find a few of them below.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md transition duration-300 border-4 border-transparent hover:border-green "
          >
            {/* Render the icon with a larger size */}
            <div className="text-6xl mb-4 text-center" style={{ color: industry.color }}>
              {iconMap[industry.icon]}
            </div>
            <h3 className="text-xl font-medium text-gray-800 text-center">{industry.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;

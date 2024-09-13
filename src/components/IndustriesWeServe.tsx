import React from 'react';
import AnimatedLineDiv from './AnimatedLineDiv';
import { FaUniversity ,FaGraduationCap , FaPlayCircle , FaUtensils ,FaGamepad , FaHeartbeat , FaHome ,FaFutbol , FaTruck ,FaPlane   } from "react-icons/fa";


const industries = [
  { name: 'Bank', icon: <FaUniversity style={{color:"green"}} />  },
  { name: 'Education', icon: <FaGraduationCap style={{color:"green"}} /> },
  { name: 'Entertainment', icon: <FaPlayCircle style={{color:"yellow"}} /> },
  { name: 'Food', icon: <FaUtensils style={{color:"green"}} /> },
  { name: 'Gaming', icon: <FaGamepad style={{color:"green"}} /> },
  { name: 'Health', icon: <FaHeartbeat style={{color:"pink"}} /> },
  { name: 'Real Estate', icon: <FaHome style={{color:"pink"}}  /> },
  { name: 'Sports', icon: <FaFutbol style={{color:"yellow"}} /> },
  { name: 'Transport', icon: <FaTruck style={{color:"yellow"}} /> },
  { name: 'Travel', icon: <FaPlane style={{color:"pink"}} /> },
];

const IndustriesWeServe: React.FC = () => {
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
            className="industries-box flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md transition duration-300 border-4 border-transparent"
          >
            {/* Render the icon with a larger size */}
            <div className="text-6xl mb-4 text-center">{industry.icon}</div>
            <h3 className="text-xl font-medium text-gray-800 text-center">{industry.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;

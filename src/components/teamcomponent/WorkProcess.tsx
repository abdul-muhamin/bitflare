// components/WorkProcess.tsx
"use client"
import { useState, useEffect } from 'react';
import { FaLightbulb, FaFileAlt, FaPencilRuler, FaCode, FaClipboardCheck, FaRocket } from 'react-icons/fa';
import AnimatedLineDiv from '../AnimatedLineDiv';
import { ProcessStep } from '../../utils/interface';
import processStepsData from '../../../public/data.json'; // Importing the JSON file

// Map the icon names from JSON to actual icon components
const iconMap: { [key: string]: JSX.Element } = {
  FaLightbulb: <FaLightbulb className="text-yellow-400 w-1/2 h-1/2" />,
  FaFileAlt: <FaFileAlt className="text-teal-500 w-1/2 h-1/2" />,
  FaPencilRuler: <FaPencilRuler className="text-pink-500 w-1/2 h-1/2" />,
  FaCode: <FaCode className="text-teal-500 w-1/2 h-1/2" />,
  FaClipboardCheck: <FaClipboardCheck className="text-yellow-400 w-1/2 h-1/2" />,
  FaRocket: <FaRocket className="text-pink-500 w-1/2 h-1/2" />
};

const WorkProcess = () => {
  const [processSteps, setProcessSteps] = useState<ProcessStep[]>([]);

  useEffect(() => {
    // Extract the process steps from the JSON data and map icons
    const stepsWithIcons = (processStepsData.processData || []).map((step: any) => ({
      ...step,
      icon: iconMap[step.icon] || null // Map icon names to actual icons
    }));
    setProcessSteps(stepsWithIcons);
  }, []);

  return (
    <>
      <div className="container mx-auto p-8 text-center">
        {/* Title Section */}
        <h2 className="text-3xl font-semibold mb-5 text-left">WORK PROCESS</h2>
        <AnimatedLineDiv />
        <div className="flex justify-center mb-4">
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-500"></div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 w-1/2 mb-10 text-left">
          We choose the best development methodology depending on your project, ensuring the lowest TAT, along with the lowest development cost.
        </p>

        {/* Process Steps */}
        <div className="flex flex-wrap justify-center space-x-6">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-10">
              <div className="flex items-center justify-center w-40 h-40 rounded-full border-2 border-gray-300 mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-medium">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* consult with experts */}
      <div className='bg-gray-800 text-white py-12 px-8'>
        <div className='flex flex-col justify-center align-middle text-white'>
          <h1 className='text-center text-3xl font-bold'>CONSULT WITH EXPERTS REGARDING YOUR PROJECT</h1>
          <div className='flex justify-center text-center mt-4 mb-6'>
            <AnimatedLineDiv />
          </div>
          <p className='text-center text-xl font-normal mt-2'>
            We have a team who’s ready to make your dreams into a reality. Let us know what you have in mind.
          </p>
          <div className="mt-8 text-center">
            <button className="bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition">
              Let's Have A Talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkProcess;

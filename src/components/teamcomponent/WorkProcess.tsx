// components/WorkProcess.tsx
import { FaLightbulb } from 'react-icons/fa'; // Idea icon
import { FaFileAlt } from 'react-icons/fa';   // Blueprint icon
import { FaPencilRuler } from 'react-icons/fa'; // Design icon
import { FaCode } from 'react-icons/fa';       // Development icon
import { FaClipboardCheck } from 'react-icons/fa'; // Testing icon
import { FaRocket } from 'react-icons/fa';     // Launch icon
import AnimatedLineDiv from '../AnimatedLineDiv';

const processSteps = [
  { title: 'Idea', icon: <FaLightbulb className="text-yellow-400 w-1/2 h-1/2" />, description: 'Idea phase' },
  { title: 'Blueprint', icon: <FaFileAlt className="text-teal-500 w-1/2 h-1/2" />, description: 'Blueprint phase' },
  { title: 'Design', icon: <FaPencilRuler className="text-pink-500 w-1/2 h-1/2" />, description: 'Design phase' },
  { title: 'Development', icon: <FaCode className="text-teal-500 w-1/2 h-1/2" />, description: 'Development phase' },
  { title: 'Testing', icon: <FaClipboardCheck className="text-yellow-400 w-1/2 h-1/2" />, description: 'Testing phase' },
  { title: 'Launch', icon: <FaRocket className="text-pink-500 w-1/2 h-1/2" />, description: 'Launch phase' },
];

const WorkProcess = () => {
  return (
    <>
    <div className="container mx-auto p-8 text-center">
      {/* Title Section */}
      <h2 className="text-3xl font-semibold mb-5 text-left">WORK PROCESS</h2>
      <AnimatedLineDiv/>
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
          </div>
        ))}
      </div>
    </div>

    {/* consult with experts */}

    <div className='bg-gray-800 text-white py-12 px-8'>
        <div className='flex flex-col justify-center align-middle text-white'>
            <h1 className='text-center text-3xl font-bold'>CONSULT WITH EXPERTS REGARDING YOUR PROJECT</h1>
            <div className='flex justify-center text-center mt-4 mb-6'>
            <AnimatedLineDiv /></div>
            <p className='text-center text-xl font-normal mt-2'>We have a team who’s ready to make your dreams into a reality. Let us know what you have in mind.</p>
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

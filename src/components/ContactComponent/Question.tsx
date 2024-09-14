import React from 'react';
import { FaEnvelope ,FaShoppingBag ,FaMap  } from 'react-icons/fa'; // Tailwind HeroIcons
import AnimatedLineDiv from '../AnimatedLineDiv';

const Question: React.FC = () => {
  return (
    <section className="py-16 px-16">
      <div className="text-left mb-12">
        <h2 className="text-3xl font-bold px-10">HAVE A QUESTION?</h2>
        {/* Optional Underline Decoration */}
        <div className='px-10 my-5'>
        <AnimatedLineDiv/>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-0 max-w-5xl mx-auto">
        {/* General Inquiry Card */}
        <div className="flex flex-col items-center text-center p-6 border-2 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <FaEnvelope className="h-12 w-12 text-teal-600 mb-4" />
          <h3 className="text-lg font-semibold">General inquiry</h3>
          <p className="text-gray-500">info@ripeseed.io</p>
        </div>

        {/* Career Inquiry Card */}
        <div className="flex flex-col items-center text-center p-6 border-2 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <FaShoppingBag className="h-12 w-12 text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold">Career</h3>
          <p className="text-gray-500">hr@ripeseed.io</p>
        </div>

        {/* Office Location Card */}
        <div className="flex flex-col items-center text-center p-6 border-2 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
          <FaMap className="h-12 w-12 text-pink-400 mb-4" />
          <h3 className="text-lg font-semibold">Office</h3>
          <p className="text-gray-500">
            881-C, Ground Floor, Faisal Town, Lahore, 54570
          </p>
        </div>
      </div>
    </section>
  );
};

export default Question;

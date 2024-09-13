import Image from 'next/image';
import { FC } from 'react';
import AnimatedLineDiv from '../AnimatedLineDiv'
const TeamSpotlight: FC = () => {
  return (
    <>
<div className="max-w-7xl mx-auto text-left mt-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
        TEAM SPOTLIGHT
        </h2>
        <AnimatedLineDiv/>
        <p className="text-lg w-1/2 text-gray-600 mb-10 pt-6">
          
Team work, skill development, work hard & party harder defines the core of everything we do in our office all day
        </p>
        </div>




    <section className="flex flex-col sm:flex-row justify-center items-center py-10 bg-white">
      {/* Left Section: Image with custom shapes */}
      <div className="relative w-full sm:w-1/2 flex justify-center">
        {/* Team Image */}
        <Image 
          src="/images/team2.png"  // Use correct image path
          alt="Team Photo"
          width={500}
          height={400}
          className="rounded-lg"
        />

        {/* Top-left pink and yellow shapes */}
        <div className="absolute top-[-20px] left-[-20px] flex">
          <div className="w-14 h-14 bg-pink-500 rounded-full"></div>
          <div className="w-14 h-14 bg-yellow-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        </div>

        {/* Bottom-right teal and yellow shapes */}
        <div className="absolute bottom-[-20px] right-[-20px] flex">
          <div className="w-14 h-14 bg-yellow-500 rounded-full"></div>
          <div className="w-14 h-14 bg-teal-700" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        </div>
      </div>

      {/* Right Section: Content */}
      <div className="w-full sm:w-1/2 px-6 sm:px-12">
        {/* Heading with number */}
        <div className="flex items-center mb-4">
          <h2 className="text-6xl font-extrabold text-gray-200">01</h2>
          <h3 className="text-xl text-teal-700 ml-2">ENVIRONMENT</h3>
        </div>

        {/* Sub-heading */}
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Hear From our Latest Team Members
        </h3>

        {/* Paragraph */}
        <p className="text-gray-600 leading-relaxed">
          As a team, we are smarter than each of us, so we welcome and encourage differences of opinion.
          Our philosophy is that passionate disagreement and challenging one another’s ideas are key to
          delivering exceptional results. We believe in learning continuously and committing relentlessly
          to our clients, leading our team toward becoming the most preferred tech partner for our growing
          set of clients.
        </p>
      </div>
    </section>

    {/* 2nd row */}
    <section className="flex flex-col overflow-hidden sm:flex-row-reverse justify-center items-center py-10 bg-white">
  {/* Right Section: Image with custom shapes (Now on the right) */}
  <div className="relative w-full sm:w-1/2 flex justify-center">
    {/* Team Image */}
    <Image 
      src="/images/team2.png"  // Use correct image path
      alt="Team Photo"
      width={500}
      height={400}
      className="rounded-lg"
    />

    {/* Top-left pink and yellow shapes */}
    <div className="absolute top-[-20px] left-[-20px] flex">
      <div className="w-14 h-14 bg-pink-500 rounded-full"></div>
      <div className="w-14 h-14 bg-yellow-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
    </div>

    {/* Bottom-right teal and yellow shapes */}
    <div className="absolute bottom-[-20px] right-[-20px] flex">
      <div className="w-14 h-14 bg-yellow-500 rounded-full"></div>
      <div className="w-14 h-14 bg-teal-700" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
    </div>
  </div>

  {/* Left Section: Content (Now on the left) */}
  <div className="w-full sm:w-1/2 px-6 sm:px-12">
    {/* Heading with number */}
    <div className="flex items-center mb-4">
      <h2 className="text-6xl font-extrabold text-gray-200">02</h2>
      <h3 className="text-xl text-teal-700 ml-2">ENVIRONMENT</h3>
    </div>

    {/* Sub-heading */}
    <h3 className="text-3xl font-bold text-gray-800 mb-4">
      Hear From our Latest Team Members
    </h3>

    {/* Paragraph */}
    <p className="text-gray-600 leading-relaxed">
      As a team, we are smarter than each of us, so we welcome and encourage differences of opinion.
      Our philosophy is that passionate disagreement and challenging one another’s ideas are key to
      delivering exceptional results. We believe in learning continuously and committing relentlessly
      to our clients, leading our team toward becoming the most preferred tech partner for our growing
      set of clients.
    </p>
  </div>
</section>


{/* 3rd row */}

<section className="flex flex-col sm:flex-row justify-center items-center py-10 bg-white">
      {/* Left Section: Image with custom shapes */}
      <div className="relative w-full sm:w-1/2 flex justify-center">
        {/* Team Image */}
        <Image 
          src="/images/team2.png"  // Use correct image path
          alt="Team Photo"
          width={500}
          height={400}
          className="rounded-lg"
        />

        {/* Top-left pink and yellow shapes */}
        <div className="absolute top-[-20px] left-[-20px] flex">
          <div className="w-14 h-14 bg-pink-500 rounded-full"></div>
          <div className="w-14 h-14 bg-yellow-500" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        </div>

        {/* Bottom-right teal and yellow shapes */}
        <div className="absolute bottom-[-20px] right-[-20px] flex">
          <div className="w-14 h-14 bg-yellow-500 rounded-full"></div>
          <div className="w-14 h-14 bg-teal-700" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        </div>
      </div>

      {/* Right Section: Content */}
      <div className="w-full sm:w-1/2 px-6 sm:px-12">
        {/* Heading with number */}
        <div className="flex items-center mb-4">
          <h2 className="text-6xl font-extrabold text-gray-200">03</h2>
          <h3 className="text-xl text-teal-700 ml-2">ENVIRONMENT</h3>
        </div>

        {/* Sub-heading */}
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Hear From our Latest Team Members
        </h3>

        {/* Paragraph */}
        <p className="text-gray-600 leading-relaxed">
          As a team, we are smarter than each of us, so we welcome and encourage differences of opinion.
          Our philosophy is that passionate disagreement and challenging one another’s ideas are key to
          delivering exceptional results. We believe in learning continuously and committing relentlessly
          to our clients, leading our team toward becoming the most preferred tech partner for our growing
          set of clients.
        </p>
      </div>
    </section>
    </>
  );
};

export default TeamSpotlight;

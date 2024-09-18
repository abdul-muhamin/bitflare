// pages/index.tsx
"use client"
import { useState, useEffect, useRef } from 'react';
import Line from './Lines'; 
import Link from 'next/link';
const Home: React.FC = () => {
  const windowHeight = useRef<number>(typeof window !== 'undefined' ? window.innerHeight : 0);
  const windowWidth = useRef<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  const [randomPoints, setRandomPoints] = useState<{ xOffset: number; yOffset: number }[]>([]);
  const [cursorOffset, setCursorOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const getRandomInteger = (max: number): number => Math.floor(Math.random() * max);

  const generateRandomPoints = () => {
    const points = [];
    for (let i = 0; i < 4; i++) {
      const xOffset = getRandomInteger(windowWidth.current);
      const yOffset = getRandomInteger(windowHeight.current);
      points.push({ xOffset, yOffset });
    }
    setRandomPoints(points);
  };

  const handleMouseMove = (event: MouseEvent) => {
    setCursorOffset({ x: event.pageX, y: event.pageY });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      const interval = setInterval(generateRandomPoints, 2000);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white px-20 mt-5">
      {/* SVG Background with Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {cursorOffset.x && (
          <svg width="100%" height="100%">
            {randomPoints.map((point, index) => (
              <Line key={index} x1={cursorOffset.x} y1={cursorOffset.y} x2={point.xOffset} y2={point.yOffset} />
            ))}
          </svg>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-row items-center justify-center">
        <div className="text-center lg:text-start px-4 lg:mt-32">
          <h1 className="text-3xl text-black leading-1 lg:leading-[1.05] font-bold mb-4 lg:text-6xl  lg:text-start max-w-[65rem]">
            TRANSFORMING IDEAS INTO INNOVATIVE<span className="text-yellow"> SOFTWARE SOLUTIONS</span>
          </h1>
          <p className="text-gray-600 my-12 lg:w-[30rem] font-normal">
            Unleash your potential with end-to-end solutions for consultation, development, deployment, and growth in the dynamic world of innovation.
          </p>
          <Link href={'./contactUs'}>
          <button className="bg-green text-white px-8 py-4 rounded hover:bg-green-700">Contact us</button></Link>
        </div>
        <div className="flex mt-8 space-x-4 sm:content-none">
          {/* Images */}
          <div className='hidden lg:flex flex-row relative'>
          <div className="bg-white shadow-md rounded-full p-4  relative top-[-150px]">
            <img src="/images/net.png" alt=".NET Core" className="h-12 w-full grayscale-[100%] hover:grayscale-0 "/>
          </div>
          <div className="bg-white shadow-md rounded-full p-4 relative top-[150px] left-[-80px]">
            <img src="/images/go.png" alt="Go" className="h-12 w-full grayscale-[100%] hover:grayscale-0"/>
          </div>
          <div className="bg-white shadow-md rounded-full p-4 ">
            <img src="/images/dj.png" alt="Django" className="h-12 w-full grayscale-[100%] hover:grayscale-0"/>
          </div>
          <div className="bg-white shadow-md rounded-full p-4 relative top-[-150px] right-[-80px]">
            <img src="/images/aws.png" alt="AWS" className="h-12 w-full grayscale-[100%] hover:grayscale-0"/>
          </div>
          <div className="bg-white shadow-md rounded-full p-4 relative top-[150px] right-[-80px]">
            <img src="/images/angular.png" alt="Angular" className="h-12 w-full grayscale-[100%] hover:grayscale-0"/>
          </div>
          <div className="bg-white shadow-md rounded-full p-4">
            <img src="/images/react.png" alt="React" className="h-12 w-full grayscale-[100%] hover:grayscale-0"/>
          </div>
        </div>
        </div>
        {/* Additional content such as images */}
      </div>
    </div>
  );
};

export default Home;

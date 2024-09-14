"use client";
import { useState, useEffect } from "react";
import { ServiceItem } from "../utils/interface"; // Import the interface
import AnimatedLineDiv from './AnimatedLineDiv';
import data from "../../public/data.json"; // Import the entire data JSON

export default function DedicatedServices() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Extract dedicatedServices from the JSON data
  const { dedicatedServices } = data;

  const itemSelected = (index: number) => {
    setSelectedServiceIndex(index === selectedServiceIndex ? null : index); // Toggle selection
  };

  // Check screen size to detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024); // adjust breakpoint for mobile/tablet
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col lg:flex-row justify-evenly items-start">
      {/* Left Sidebar */}
      <div className="bg-gray-900 w-full md:flex-1 lg:flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">DEDICATED SERVICES</h2>
        <p className="text-gray-400 mb-8">
          Creating high-performance websites & apps, using the latest technologies.
        </p>
        <ul className="space-y-6">
          {dedicatedServices.map((item: ServiceItem, index: number) => (
            <div key={index} className="relative">
              <li
                className="cursor-pointer hover:bg-gray-700 hover:rounded-lg p-6"
                onClick={() => itemSelected(index)}
              >
                {item.Label}
              </li>

              {/* Show details directly below the selected item */}
              {isMobileView && selectedServiceIndex === index && (
                <div className="bg-white mt-2 p-6 rounded-lg text-black">
                  {/* AnimatedLineDiv will show only when a service is selected */}
                  <div className='flex justify-start items-start mb-4'>
                    <AnimatedLineDiv />
                  </div>
                  <ul className="text-md space-y-3">
                    {item.item1 && <li>{item.item1}</li>}
                    {item.item2 && <li>{item.item2}</li>}
                    {item.item3 && <li>{item.item3}</li>}
                    {item.item4 && <li>{item.item4}</li>}
                    {item.item5 && <li>{item.item5}</li>}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>

      {/* Right Content (only shown on large screens) */}
      <div className={`hidden lg:flex lg:flex-col md:flex-1 bg-white text-gray-900 p-12`}>
        {selectedServiceIndex !== null && (
          <>
            <h2 className="text-4xl font-bold mb-6">{dedicatedServices[selectedServiceIndex].Label}</h2>
            <p className="text-xl mb-6">{dedicatedServices[selectedServiceIndex].description}</p>
            <ul className="text-lg space-y-4">
              {dedicatedServices[selectedServiceIndex].item1 && <li>{dedicatedServices[selectedServiceIndex].item1}</li>}
              {dedicatedServices[selectedServiceIndex].item2 && <li>{dedicatedServices[selectedServiceIndex].item2}</li>}
              {dedicatedServices[selectedServiceIndex].item3 && <li>{dedicatedServices[selectedServiceIndex].item3}</li>}
              {dedicatedServices[selectedServiceIndex].item4 && <li>{dedicatedServices[selectedServiceIndex].item4}</li>}
              {dedicatedServices[selectedServiceIndex].item5 && <li>{dedicatedServices[selectedServiceIndex].item5}</li>}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

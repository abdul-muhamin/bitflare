import Image from 'next/image';


export default function Home() {
    return (
      <div className="min-h-screen flex flex-row items-center justify-center bg-white px-20">
        <div className="text-start px-4">
          <h1 className="text-5xl font-bold mb-4 leading-tight lg:text-start max-w-[50rem]">
            TRANSFORMING IDEAS INTO <span className="text-yellow-500">INNOVATIVE SOFTWARE SOLUTIONS</span>
          </h1>
          <p className="text-gray-600 my-12 lg:w-[30rem]">
            Unleash your potential with end-to-end solutions for consultation, development, deployment, and growth in the dynamic world of innovation.
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded hover:bg-green-700">
            Contact us
          </button>
        </div>
        <div className="flex mt-8 space-x-4 sm:content-none">
          {/* Images */}
          <div className='flex flex-row lg:flex  md:hidden sm:hidden'>
          <div className="bg-white shadow-md rounded-full p-4">
            <img src="/images/net.png" alt=".NET Core" className="h-12 w-full grayscale-[100%] hover:grayscale-0"/>
          </div>
          <div className="bg-white shadow-md rounded-full p-4">
            <img src="/images/go.png" alt="Go" className="h-12 w-full grayscale-[100%] hover:grayscale-0"/>
          </div>
          <div className="bg-white shadow-md rounded-full p-4">
            <img src="/images/dj.png" alt="Django" className="h-12 w-full grayscale-[100%] hover:grayscale-0"/>
          </div>
          <div className="bg-white shadow-md rounded-full p-4">
            <img src="/images/aws.png" alt="AWS" className="h-12 w-full grayscale-[100%] hover:grayscale-0"/>
          </div>
          <div className="bg-white shadow-md rounded-full p-4">
            <img src="/images/angular.png" alt="Angular" className="h-12 w-full grayscale-[100%] hover:grayscale-0"/>
          </div>
          <div className="bg-white shadow-md rounded-full p-4">
            <img src="/images/react.png" alt="React" className="h-12 w-full grayscale-[100%] hover:grayscale-0"/>
          </div>
        </div>
        </div>
      </div>
    );
  }
  
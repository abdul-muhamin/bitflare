// src/components/AboutUs.tsx
import React from 'react';
import Image from 'next/image';
import Technologies from '../../components/Technologies'
import AnimatedLineDiv from '@/components/AnimatedLineDiv';
import TimelineAbout from '@/utils/TimelineAbout';
import IndustriesWeServe from '@/components/IndustriesWeServe';
import Testimonial from '@/components/Testimonial';
import FeaturedBlogs from '@/components/FeaturedBlog';
import ContactForm from '@/components/ContactForm';
import ReusableHome from '@/utils/ReusableHome';
const AboutUs = () => {
  return (
    <>
    {/* <ReusableHome Heading='ABOUT US' Paragraph='Creating beautiful digital products engineered to drive growth for the world’s leading brands.' ButtonContent='Discuss your project' /> */}
    <section className="relative flex mt-24 items-left justify-left bg-background-about bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3f3d56] to-transparent"></div>

        {/* Content */}
        <div className="text-left items-left relative z-10 px-32 py-20">
          <h1 className="text-6xl font-bold text-white mb-4">ABOUT US</h1>
          <p className="text-xl/10 text-white mb-8 max-w-lg">
          Creating beautiful digital products engineered to drive growth for the world’s leading brands.
          </p>
          <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-500 transition duration-300">
          Discuss your project
          </button>
        </div>
      </section>
    
    {/* tech */}
    <div>
      <Technologies/>
      </div>

      {/* how we are */}
      <div className="bg-white py-12 px-6 lg:py-16 lg:px-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 lg:order-1">
        
          <h2 className="mt-8 text-3xl lg:text-4xl font-bold ">About RipeSeed</h2>
          <div className='flex justify-start items-center mt-1 mb-4'>
          <AnimatedLineDiv/></div>
          <p className="text-xl lg:text-2xl text-gray-700 mb-4">We're Your Partner In Your Success</p>
          <p className="text-gray-600 mb-6">
          RipeSeed is a custom software development company specializing in developing high-quality web and mobile applications that enable startups, individuals, and small and medium-sized businesses to flourish in the digital age. Our expert software developers, designers, and engineers collaborate to create custom software solutions to meet your business's specific requirements. Our extensive services include website development, app development, UI/UX design, automation tools, AI/ChatGPT, Chrome extensions, and AWS/cloud services. We specialize in working with clients in various niches and industries, including the health tech, ed-tech, and med-tech industries. Our dedication to staying on the cutting edge of technology sets us apart from our competitors. We take pride in keeping up with the latest trends and technologies to offer our clients the best solutions.
          </p>
          
        </div>
        <div className="lg:w-1/2 flex flex-col items-center lg:pl-16 lg:order-2">
          <div className="mb-4 relative w-40 h-40 lg:w-64 lg:h-64">
            <Image src="/images/team.png" alt="Team Photo" layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/>
            <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2  text-center text-lg ">30+ <br /> worldwide clients</div>
          </div>
          <div className="flex space-x-4">
            <div className="w-32 h-32 lg:w-48 lg:h-48 relative">
              <Image src="/images/team2.png" alt="Team Working" layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/>
            </div>
            <div className="w-32 h-32 lg:w-48 lg:h-48 relative">
              <Image src="/images/team3.png" alt="Team Discussion" layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* timeline */}
    <TimelineAbout/>
    <IndustriesWeServe/>
    <Testimonial/>
    <FeaturedBlogs/>
    <ContactForm/>

    </>
  );
};

export default AboutUs;

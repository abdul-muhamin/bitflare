import React from 'react'
import Technologies from "../../components/Technologies"
import AnimatedLineDiv from '@/components/AnimatedLineDiv'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa';
import ExecutiveTeam from '@/components/teamcomponent/ExecutiveTeam';
import WorkProcess from '@/components/teamcomponent/WorkProcess';
import WhyUs from '@/components/teamcomponent/WhyUs';
import FeaturedBlogs from '@/components/FeaturedBlog';
import ContactForm from '@/components/ContactForm';
import ReusableHome from '../../utils/ReusableHome'
const team = () => {
  return (
    <>
<ReusableHome Heading= {"OUR TEAM"} Paragraph ={"Meet our team of engineers, thinkers, creators, designers, and world class problem solvers."  } ButtonContent={'Discuss your project'} />
    
<div className='relative bottom-16'>
      <Technologies/>
      </div>

 {/* how we are */}
 <div className="bg-white py-12 px-6 lg:py-16 lg:px-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 lg:order-1">
        
          <h2 className="mt-8 text-3xl lg:text-4xl font-bold capitalize ">We are one big families</h2>
          <div className='flex justify-start items-center mt-1 mb-4'>
          <AnimatedLineDiv/></div>
          
          <p className="text-gray-600 mb-6">
          Our vision isn’t all about treating the clients right, a major part of it also focuses on how we treat our employees, and ensure both our clients, and our team, always remain satisfied to the peak. What makes us different is the balance of work and enjoyment we ensure, along with our resolve to promote learning and exposure for all our team members.
          </p>
          <ul className='flex flex-col justify-start align-middle gap-4'>
            <li className='flex flex-row justify-start align-middle text-center gap-x-2' > <span className='border rounded-full bg-teal-600 p-2'><FaCheck/></span><h1 className='text-center text-2xl font-semibold'>Team With High Skills</h1> </li>
            <li className=' flex flex-row justify-start align-middle text-center gap-x-2' > <span className='border rounded-full bg-teal-600 p-2'><FaCheck/></span><h1 className='text-center text-2xl font-semibold'>Professional & Dedicated Services</h1> </li>
            
          </ul>
          <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-500 transition duration-300 mt-5">
          Let's Get A Quote
  </button>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center lg:pl-16 lg:order-2">
        <div className="mb-4 relative w-60 h-40 lg:w-[400px] lg:h-[300px] border-4 border-white">
            <Image src="/images/team.png" alt="Team Photo" layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/>
            <div className="absolute p-1 font-light  top-[-30px] left-[-30px] bg-green text-white lg:font-normal lg:px-2 lg:py-2   text-center text-lg ">30+ <br /> worldwide clients</div>
          </div>
          <div className="flex space-x-4">
            <div className="w-32 h-32 lg:w-48 lg:h-32 relative right-[50px] top-[-60px] lg:right-[80px] border-4 border-white">
              <Image src="/images/team2.png" alt="Team Working" layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/>
            </div>
            <div className="w-44 h-32 lg:w-52 lg:h-44 relative top-[-40px] left-[40px] border-4 border-white">
              <Image src="/images/team3.png" alt="Team Discussion" layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* team executive */}
    <ExecutiveTeam/>
    <WorkProcess/>
    <WhyUs/>
    <FeaturedBlogs/>
    <ContactForm/>
    </>
  )
}

export default team

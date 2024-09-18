import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Image from 'next/image';
import AnimatedLineDiv from '@/components/AnimatedLineDiv';
export default function TimelineAbout() {
  return (
    <>
    <div className='my-4'><h1 className='text-4xl font-bold text-center tracking- '>HISTORY</h1>
    </div>
    <div className='flex justify-center align-middle'><AnimatedLineDiv/></div>
    <div className='hidden lg:flex mt-[200px]'>
    <Timeline    position="alternate">
      <TimelineItem className='h-[400px]'>
        <TimelineOppositeContent color="text.secondary">
        <div className=" mt-20 lg:w-56 lg:h-48 relative">
        <Image src="/images/blog1.png" alt="Team Discussion" layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/></div> 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className='bg-red' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <h1 className='text-2xl font-bold'>We started from</h1>
            <p className='text-xl font-normal py-10'>Our journey began with humble beginnings, taking on small projects with a determined spirit. We poured our efforts into delivering quality solutions and earning client satisfaction. The positive feedback and praise we received from our clients fueled our motivation to expand our network and reach new heights. As we grew, we joined Upwork, a leading freelance marketplace. Our commitment to excellence and client satisfaction translated into success on this platform. Today, we are proud to have achieved an impressive 95% job success rate on Upwork, with the prestigious.</p>
          </div>

        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        <div className=" mt-20 lg:w-56 lg:h-48 relative">
        <Image src="/images/team3.png" alt="Team Discussion" layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/></div> 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className='bg-green' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div className='text-left px-10'>
            <h1 className='text-2xl font-bold'>Our Mission</h1>
            <p className='text-xl font-normal py-10'>Since our founding in 2021, we have been driven by a mission to deliver outstanding value to our clients while providing our engineering talent with exposure to the business side of software development. We take pride in being at the forefront of emerging technologies and trends, ensuring our clients can access the most innovative solutions.</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        <div className=" mt-20 lg:w-56 lg:h-48 relative">
        <Image src="/images/team2.png" alt="Team Discussion" layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/></div> 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  className='bg-yellow' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><div className='text-left px-10'>
            <h1 className='text-2xl font-bold'>Future</h1>
            <p className='text-xl font-normal py-10'>Reflecting on how far we have come, we embrace the future with excitement and determination. We envision a future where our software solutions will revolutionize industries, making a lasting impact on businesses and individuals alike. Our team of skilled developers, designers, and innovators is constantly honing their expertise to tackle the challenges of tomorrow head-on.</p>
          </div></TimelineContent>
      </TimelineItem>
      
    </Timeline>
    </div>
    <div className='flex flex-col lg:hidden'>
        <div className="mb-10">
        <div className="m-auto mt-10 p-10 relative h-[200px] w-[80%]">
            <Image src="/images/team3.png" alt="Team Discussion" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
          </div>
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold">We started from</h1>
            <p className="text-xl font-normal py-4">
              Our journey began with humble beginnings, taking on small projects with a determined spirit...
            </p>
          </div>
        </div>

        <div className="mb-10">
          <div className="p-10 m-auto relative h-[200px] w-[80%]">
            <Image src="/images/team3.png" alt="Team Discussion" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
          </div>
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold">Our Mission</h1>
            <p className="text-xl font-normal py-4">
              Since our founding in 2021, we have been driven by a mission to deliver outstanding value...
            </p>
          </div>
        </div>

        <div className="mb-10">
          <div className="p-10 m-auto relative h-[200px] w-[80%]">
            <Image src="/images/team3.png" alt="Team Discussion" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
          </div>
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold">Future</h1>
            <p className="text-xl font-normal py-4">
              Reflecting on how far we have come, we embrace the future with excitement and determination...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

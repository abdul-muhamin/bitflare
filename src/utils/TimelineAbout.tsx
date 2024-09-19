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
      <div className="my-4">
        <h1 className="text-4xl font-bold text-center tracking-wide">HISTORY</h1>
      </div>
      <div className="flex justify-center align-middle">
        <AnimatedLineDiv />
      </div>

      <div className="mt-[200px] lg:px-24 px-4">
        {/* Timeline for large screens */}
        <div className="hidden lg:flex">
          <Timeline position="alternate">
            {/* First Timeline Item */}
            <TimelineItem className="lg:h-[400px] h-[600px] ">
              <TimelineOppositeContent color="text.secondary ">
                <div className="mt-20 lg:w-56 lg:h-48 w-full h-48 relative ">
                  <Image
                    src="/images/team.png"
                    alt="Team Discussion"
                    fill
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-yellow" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="px-4 lg:px-0">
                  <h1 className="text-2xl font-bold">We started from</h1>
                  <p className="text-xl font-normal py-5">
                  Our journey began with humble beginnings, taking on small projects with a determined spirit. We poured our efforts into delivering quality solutions and earning client satisfaction. The positive feedback and praise we received from our clients fueled our motivation to expand our network and reach new heights. As we grew, we joined Upwork, a leading freelance marketplace. Our commitment to excellence and client satisfaction translated into success on this platform. Today, we are proud to have achieved an impressive 95% job success rate on Upwork, with the prestigious.
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>

            {/* Second Timeline Item */}
            <TimelineItem className="lg:h-[400px] h-[600px] py-8">
              <TimelineOppositeContent color="text.secondary">
                <div className="mt-20 lg:w-56 lg:h-48 w-full h-48 relative">
                  <Image
                    src="/images/team2.png"
                    alt="Team Mission"
                    fill
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-green" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="px-4 lg:px-0 lg:text-left">
                  <h1 className="text-2xl font-bold">Our Mission</h1>
                  <p className="text-xl font-normal py-5">
                  Since our founding in 2021, we have been driven by a mission to deliver outstanding value to our clients while providing our engineering talent with exposure to the business side of software development. We take pride in being at the forefront of emerging technologies and trends, ensuring our clients can access the most innovative solutions.
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>

            {/* Third Timeline Item */}
            <TimelineItem className="lg:h-[400px] h-[600px] py-8">
              <TimelineOppositeContent color="text.secondary">
                <div className="mt-20 lg:w-56 lg:h-48 w-full h-48 relative">
                  <Image
                    src="/images/team3.png"
                    alt="Team Future"
                    fill
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-yellow" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="px-4 lg:px-0">
                  <h1 className="text-2xl font-bold">Future</h1>
                  <p className="text-xl font-normal py-10">
                  Reflecting on how far we have come, we embrace the future with excitement and determination. We envision a future where our software solutions will revolutionize industries, making a lasting impact on businesses and individuals alike. Our team of skilled developers, designers, and innovators is constantly honing their expertise to tackle the challenges of tomorrow head-on.
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        {/* Stacked layout for small screens */}
        <div className="block lg:hidden">
          {/* First Item */}
          <div className="flex flex-col items-center mt-10">
            <Image
              src="/images/team3.png"
              alt="Team Discussion"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h1 className="text-2xl font-bold mt-4">We started from</h1>
            <p className="text-lg text-center mt-2">
            Our journey began with humble beginnings, taking on small projects with a determined spirit. We poured our efforts into delivering quality solutions and earning client satisfaction. The positive feedback and praise we received from our clients fueled our motivation to expand our network and reach new heights. As we grew, we joined Upwork, a leading freelance marketplace. Our commitment to excellence and client satisfaction translated into success on this platform. Today, we are proud to have achieved an impressive 95% job success rate on Upwork, with the prestigious.
            </p>
          </div>

          {/* Second Item */}
          <div className="flex flex-col items-center mt-10">
            <Image
              src="/images/team2.png"
              alt="Team Mission"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h1 className="text-2xl font-bold mt-4">Our Mission</h1>
            <p className="text-lg text-center mt-2">
            Since our founding in 2021, we have been driven by a mission to deliver outstanding value to our clients while providing our engineering talent with exposure to the business side of software development. We take pride in being at the forefront of emerging technologies and trends, ensuring our clients can access the most innovative solutions.
            </p>
          </div>

          {/* Third Item */}
          <div className="flex flex-col items-center mt-10">
            <Image
              src="/images/benefit6.png"
              alt="Team Future"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <h1 className="text-2xl font-bold mt-4">Future</h1>
            <p className="text-lg text-center mt-2">
            Reflecting on how far we have come, we embrace the future with excitement and determination. We envision a future where our software solutions will revolutionize industries, making a lasting impact on businesses and individuals alike. Our team of skilled developers, designers, and innovators is constantly honing their expertise to tackle the challenges of tomorrow head-on.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

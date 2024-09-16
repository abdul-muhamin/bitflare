import Image from 'next/image';
import AnimatedLineDiv from './AnimatedLineDiv';
export default function WhoWeAre() {
  return (
    <div className="bg-white py-12 px-6 lg:py-16 lg:px-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 lg:order-1">
        
          <h2 className="mt-8 text-3xl lg:text-4xl font-bold ">WHO WE ARE</h2>
          <div className='flex justify-start items-center mt-1 mb-4'>
          <AnimatedLineDiv/></div>
          <p className="text-xl lg:text-2xl text-gray-700 mb-4">We're your partner in your success</p>
          <p className="text-gray-600 mb-6">
            RipeSeed is a leading custom software development company specializing in high-quality web and mobile applications for startups, individuals, and small to medium-sized businesses. With a team of expert developers, designers, and engineers, we deliver tailored software solutions to meet your specific needs.
          </p>
          <p className="text-gray-600 mb-6">
            Since our establishment in 2021, we have been dedicated to providing outstanding value and staying ahead of emerging technologies and trends. Our comprehensive services include website development, app development, UI/UX design, automation tools, AI/ChatGPT, Chrome extensions, and AWS/cloud services.
          </p>
          <p className="text-gray-600 mb-6">
            With a track record of success, including generating over $500k+ in revenue, delivering 10,000+ hours of work on Upwork, and launching three in-house games, we are committed to exceeding expectations and helping your business thrive.
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center  lg:pl-16 lg:order-2">
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
  );
}

import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <div className="bg-white py-16 px-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 lg:order-1">
          <h2 className="text-4xl font-bold mb-6">WHO WE ARE</h2>
          <p className="text-2xl text-gray-700 mb-4">We're your partner in your success</p>
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
        <div className="lg:w-1/2 flex flex-col items-center lg:pl-16 lg:order-2">
          <div className="mb-4 relative w-64 h-64">
            <Image src="/images/team.png" alt="Team Photo" layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/>
            <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2  text-center text-lg ">30+ <br /> worldwide clients</div>
          </div>
          <div className="flex space-x-4">
            <div className="w-48 h-48 relative">
              <Image src="/images/team2.png" alt="Team Working" layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/>
            </div>
            <div className="w-48 h-48 relative">
              <Image src="/images/team3.png" alt="Team Discussion" layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

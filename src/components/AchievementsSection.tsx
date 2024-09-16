import Image from 'next/image';

export default function AchievementsSection() {
  return (
    <div className="bg-[#3f3d56] text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
        
        {/* First Achievement */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/g.png" // Replace with the actual path to the Gatsby icon
            alt="Gatsby Partner"
            width={64}
            height={64}
          />
          <p className="mt-4 text-center text-lg">Official partner with Gatsby</p>
        </div>

        {/* Second Achievement */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/mail.png" // Replace with the actual path to the Upwork icon
            alt="Upwork Top Rated"
            width={64}
            height={64}
          />
          <p className="mt-4 text-center text-lg">Top rated Plus on Upwork</p>
        </div>

        {/* Third Achievement */}
        <div className="flex flex-col items-center">
          <p className="text-6xl font-bold text-yellow-400">90+</p>
          <p className="mt-4 text-center text-lg">Completed projects</p>
        </div>

      </div>
    </div>
  );
}

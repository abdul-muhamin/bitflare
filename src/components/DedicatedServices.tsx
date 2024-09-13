export default function DedicatedServices() {
    return (
      <div className="min-h-screen  text-white flex justify-evenly align-middle">
        {/* Left Sidebar */}
        <div className="bg-gray-900 w-full md:flex-1 lg:flex-1 p-8">
          <h2 className="text-2xl font-bold mb-6">DEDICATED SERVICES</h2>
          <p className="text-gray-400 mb-8">
            Creating high-performance websites & apps, using the latest technologies.
          </p>
          <ul className="w-2/3 ">
            <li className="cursor-pointer space-y-6 hover:bg-gray-700 hover:rounded-lg p-6">
              <span className="">UI/UX</span>
            </li>
            <li className="cursor-pointer space-y-6 hover:bg-gray-700 hover:rounded-lg p-6">Cloud Services</li>
            <li className="cursor-pointer space-y-6 hover:bg-gray-700 hover:rounded-lg p-6">AI/ChatGPT</li>
            <li className="cursor-pointer space-y-6 hover:bg-gray-700 hover:rounded-lg p-6">App Development</li>
            <li className=" cursor-pointer space-y-6 hover:bg-gray-700 hover:rounded-lg p-6">Chrome Extensions</li>
            <li className="cursor-pointer space-y-6 hover:bg-gray-700 hover:rounded-lg p-6">DevOps</li>
            <li className="cursor-pointer space-y-6 hover:bg-gray-700 hover:rounded-lg p-6">Game Development</li>
            <li className=" cursor-pointer space-y-6 hover:bg-gray-700 hover:rounded-lg p-6">Web Development</li>
            <li className=" cursor-pointer space-y-6 hover:bg-gray-700 hover:rounded-lg p-6">Automation Tools</li>
          </ul>
        </div>
  
        {/* Right Content */}
        <div className="hidden lg:block md:flex-1 bg-white text-gray-900 p-12">
          <h2 className="text-4xl font-bold mb-6">UI/UX</h2>
          <p className="text-xl mb-6">
            RipeSeed provides UI/UX services that prioritize engaging and intuitive user experiences. We leverage Sketch, Figma, Adobe XD, and InVision, utilizing an iterative design process and prototyping to bring your vision to life. Our collaborative approach ensures seamless, human-centric design that boosts user engagement and satisfaction.
          </p>
          <ul className="text-lg space-y-4">
            <li>Figma</li>
            <li>Prototyping</li>
          </ul>
        </div>
      </div>
    );
  }
  
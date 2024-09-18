import ConsultWithTeam from '@/components/CareerComponent/ConsultWithTeam';
import Testimonial from '@/components/Testimonial';
import Image from 'next/image';
import Technologies from "@/components/Technologies"
import { MdEmail , MdLocationPin} from 'react-icons/md';
import ContactForm from '@/components/ContactForm';
const ProjectDetail: React.FC = () => {
  return (
    <>
    <div className="container mx-auto py-4 px-4  lg:px-24">
      {/* Top Section - Image and Text */}
      <div className="flex flex-col md:flex-row items-start md:items-start space-x-2">
        {/* Left - Image */}
        <div className="w-full md:w-2/3">
          <Image
            src="/images/webprojects2.png" // Replace with your image path
            alt="Project image"
            width={1000}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Right - Text Section */}
        {/* <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold">Invest in a sustainable future</h2>
          <p className="text-gray-700">Australia’s most innovative carbon trading platform</p>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-md">
            Start website
          </button>
        </div> */}
        <div className='w-full md:w-2/6 md:pl-8 mt-4 md:mt-0 space-y-10 justify-start align-top'>
        <div>
            <h4 className="text-lg font-semibold">Client Name</h4>
            <p className="text-gray-700">Sahir Nadeem</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Company Name</h4>
            <p className="text-gray-700">Mindevolved</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Technology</h4>
            <div className="space-x-2 mt-2">
              <span className="bg-gray-200 px-3 py-1 rounded-md">React.js</span>
              <span className="bg-gray-200 px-3 py-1 rounded-md">Node.js</span>
              <span className="bg-gray-200 px-3 py-1 rounded-md">Mongoose</span>
              <span className="bg-gray-200 px-3 py-1 rounded-md">MongoDB</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Platform Availability</h4>
            <p className="text-gray-700">Web</p>
          </div>
        </div>


      </div>



      {/* Bottom Section - About, Client's Need, Solution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
        {/* Left Section - Texts */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">About Project</h3>
            <p className="text-gray-700">
              BetaCarbon, a cutting-edge fintech startup headquartered in Australia, specializes in
              providing users with a seamless platform for buying and selling carbon credits.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Client’s Need</h3>
            <p className="text-gray-700">
              The client approached BetaCarbon with specific requirements to enhance their crypto
              trading platform. These requirements included improving the overall look and feel,
              fixing bugs, and deploying on AWS servers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Solution</h3>
            <p className="text-gray-700">
              The web app’s UI underwent a comprehensive revamp, resulting in a modern design.
              Reusable components were introduced, bugs were addressed, and CI/CD was set up for
              fast delivery.
            </p>
          </div>
        </div>

        {/* Right Section - Client Details */}
        <div className="space-y-6">
          

          <div>
            <h4 className="text-lg font-semibold">Need Help?</h4>
            <p className="text-gray-700">
              Let us know if you have any concern or query and we will be happy to help.
            </p>

            {/* Contact Section */}
            <div className="my-10 text-xl text-black">
            <div className="flex items-center justify-start space-x-2">
              <span><MdEmail/> </span>
              <span className='align-top'>info@ripeseed.io</span>

            </div>
            <div className="flex mt-14 items-start justify-start space-x-2">
              <span className='align-top'><MdLocationPin/></span>
              <span className='text-black text-xl lg:w-[300px]"'>881-C, Ground Floor, Faisal Town, Lahore, 54570</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <ConsultWithTeam/>
    <Testimonial/>
    <div className='relative bottom-16'>
      <Technologies/>
    </div>
    <ContactForm/>
    </>

  );
};

export default ProjectDetail;

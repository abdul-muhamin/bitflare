import Image from 'next/image';
import AnimatedLineDiv from './AnimatedLineDiv';


const ReasonToConsider: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            REASON TO CONSIDER
          </h2>
          <div>
            <AnimatedLineDiv/>
          </div>
          {/* Colored Line */}
          

          {/* Text */}
          <p className="text-gray-700 mt-10 text-lg mb-6">
            With AWS, businesses access a comprehensive suite of cloud services that revolutionize
            how applications and systems are developed and deployed. From flexible computing power
            to storage, databases, and AI capabilities, AWS offers various tools and services that cater 
            to diverse business needs. By embracing AWS, you unlock a world of benefits.
          </p>
          <p className="text-gray-700 text-lg">
            The scalability and elasticity of AWS infrastructure ensure that your applications can seamlessly handle
            fluctuating workloads, providing an optimal user experience even during peak periods. The ability to pay for 
            only the resources you consume brings cost efficiencies, making it an attractive choice for businesses of all sizes.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <Image
            src='/images/reasonconsider.webp'
            alt="AWS Illustration"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default ReasonToConsider;

import Image from 'next/image';
import Link from 'next/link';
export default function GenerativeAISolutions() {
  return (
    <div className=' text-white p-8 lg:p-8  bg-generative bg-no-repeat bg-cover bg-center'>
        <h2 className="text-2xl lg:text-4xl font-bold mb-6 mt-10 text-center lg:text-center">GET GENERATIVE AI SOLUTIONS NOW!</h2>
    <div className="flex flex-col items-center lg:flex-row lg:items-start justify-between ">
      <div className="order-2 lg:order-1 lg:max-w-md  my-auto lg:mx-20">
        <ul className="space-y-6 mb-6 text-start lg:text-left text-2xl ">
          <li>🤖 Chatbots</li>
          <li>📄 Chrome Extensions</li>
          <li>⚙️ Generative AI</li>
          <li>🔄 Automations</li>
        </ul>
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:mb-0">
          <Link href = {"./our-work"}>
          <button className="bg-yellow text-black px-7 py-3 rounded-lg w-full lg:w-auto lg:text-lg">See our work</button></Link>
          <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg w-full lg:w-auto lg:text-lg">Discuss your project</button>
        </div>
      </div>
      <div className="order-1 lg:order-2 mb-8 lg:mb-0">
        <Image src="/images/aibot.gif" alt="AI Robot" width={500} height={400} className="mx-auto lg:mx-0"/>
      </div>
    </div>
    </div>
  );
}

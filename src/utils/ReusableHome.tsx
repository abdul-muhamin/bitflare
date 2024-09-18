import React from 'react';
import Link from 'next/link';
interface ReuseProps {
  Heading: string;
  Paragraph: string;
  ButtonContent?: string;
  navigate?:string
  
}

const ReusableHome: React.FC<ReuseProps> = ({ Heading, Paragraph, ButtonContent , navigate = "/" }) => {
  return (
    <div>
      <section className="relative flex items-left justify-left bg-background-about bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3f3d56] to-transparent"></div>

        {/* Content */}
        <div className="text-left items-left relative z-10 px-32 py-20">
          <h1 className="text-6xl font-bold text-white mb-4">{Heading}</h1>
          <p className="text-xl/10 text-white mb-8 max-w-lg">
            {Paragraph}
          </p>
          <Link href={navigate}>
          <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-500 transition duration-300">
            {ButtonContent}
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReusableHome;

"use client"
import React,{useState} from 'react'
import AnimatedLineDiv from '../AnimatedLineDiv'
import Image from 'next/image'
interface ExecutiveMember {
    name: string;
    role: string;
    description: string;
    image: string;
  }
  interface TeamMember {
    name: string;
    role: string;
    category: string;
    image: string;
  }
  const teamMembers: TeamMember[] = [
    { name: 'Abdul Wahab', role: 'Software Engineer', category: 'Software Engineer', image: '/images/team.png' },
    { name: 'Adeel Ahmed', role: 'Associate Software Engineer', category: 'Software Engineer', image: '/images/team.png' },
    { name: 'Adnan Ali', role: 'Associate Software Engineer', category: 'Software Engineer', image: '/images/team.png' },
    { name: 'Ahsan Abdullah', role: 'Sales Development Executive', category: 'Business Developer', image: '/images/team.png' },
    { name: 'Aimen Nadeem', role: 'HR Assistant', category: 'HR Manager', image: '/images/team.png' },
    // Add all team members similarly
  ];
  const executiveMember: ExecutiveMember = {
    name: 'Mirza Hashir Baig',
    role: 'Chief Executive Officer',
    description: `Our success is a result of teamwork and building upon our technical expertise and creative style providing a full-service solution to our clients. Led by our CEO, Mirza Hashir Baig who himself is a Cloud genius and a tech enthusiast, together the team has the capabilities to bring together unique and efficient solutions to your technical needs.`,
    image: '/path-to-image.jpg', // replace with your image path
  };
  const categories = ['All', 'Software Engineer', 'Business Developer', 'HR Manager', 'UI/UX Designer'];

const ExecutiveTeam = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMembers = selectedCategory === 'All'
    ? teamMembers
    : teamMembers.filter(member => member.category === selectedCategory);
  return (
    <div>
      <div className="container mx-auto p-5 text-center">
      {/* Title */}
      <h2 className="text-3xl font-semibold mb-5">OUR EXECUTIVE TEAM</h2>
      <div className='flex text-center align-middle justify-center m-auto'><AnimatedLineDiv/></div>
      <div className="flex justify-center mb-4">
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-500"></div>
      </div>

      {/* Description */}
      <p className="text-gray-600 max-w-4xl mx-auto mb-10">
        {executiveMember.description}
      </p>

      {/* Executive Member Info */}
      <div className="flex flex-col items-center">
        <img
          src={executiveMember.image}
          alt={executiveMember.name}
          className="rounded-lg w-40 h-40 object-cover mb-4"
        />
        <h3 className="text-xl font-medium">{executiveMember.name}</h3>
        <p className="text-gray-500">{executiveMember.role}</p>
      </div>
    </div>

    {/* all team  */}
    <div className="container mx-auto p-5">
      {/* Category Filters */}
      <div className="flex justify-center space-x-5 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${selectedCategory === category ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-lg w-32 h-32 object-cover mb-4"
            />
            <h3 className="text-lg font-medium">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-green text-white rounded">Load more</button>
      </div>
    </div>
    </div>
  )
}

export default ExecutiveTeam

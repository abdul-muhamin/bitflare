"use client";
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface Blog {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
  category: string;
}

const SocialBlogs: React.FC = () => {
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Fine Tuning Open Source LLMs",
      author: "Muhammad",
      image: "/images/team.png",
      description: "Fine-tuning open source models like Llama 3.1...",
      category: "AI/ML",
    },
    {
      id: 2,
      title: "Solve Problems with AI",
      author: "Hashir",
      image: "/images/team.png",
      description: "Solve problems, because AI is not your USP anymore...",
      category: "AI/ML",
    },
    {
      id: 3,
      title: "Using Pinecone for Personalized Systems",
      author: "Sidra",
      image: "/images/team.png",
      description: "Using Pinecone to implement a personalized recommendation system...",
      category: "Web Development",
    },
    {
        id: 4,
        title: "Fine Tuning Open Source LLMs",
        author: "Muhammad",
        image: "/images/team.png",
        description: "Fine-tuning open source models like Llama 3.1...",
        category: "AI/ML",
      },
      {
        id: 5,
        title: "Solve Problems with AI",
        author: "Hashir",
        image: "/images/team.png",
        description: "Solve problems, because AI is not your USP anymore...",
        category: "AI/ML",
      },
      {
        id: 6,
        title: "Using Pinecone for Personalized Systems",
        author: "Sidra",
        image: "/images/team.png",
        description: "Using Pinecone to implement a personalized recommendation system...",
        category: "Web Development",
      },
      {
        id: 7,
        title: "Fine Tuning Open Source LLMs",
        author: "Muhammad",
        image: "/images/team.png",
        description: "Fine-tuning open source models like Llama 3.1...",
        category: "AI/ML",
      },
      {
        id: 8,
        title: "Solve Problems with AI",
        author: "Hashir",
        image: "/images/team.png",
        description: "Solve problems, because AI is not your USP anymore...",
        category: "AI/ML",
      },
      {
        id: 9,
        title: "Using Pinecone for Personalized Systems",
        author: "Sidra",
        image: "/images/team.png",
        description: "Using Pinecone to implement a personalized recommendation system...",
        category: "Web Development",
      },
    // Add more blogs...
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook />, link: "#" },
    { name: "Instagram", icon: <FaInstagram />, link: "#" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "#" },
  ];

  const popularBlogs = blogs.slice(0, 3); // Display 3 popular blogs in sidebar

  return (
    <div className="container mx-auto py-36 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <aside className="lg:col-span-1">
          <div className="space-y-6">
            {/* Social Links */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Social Links</h2>
              <div className="flex justify-around">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="flex flex-col items-center text-gray-600 hover:text-teal-500 text-2xl"
                  >
                    <div className="text-2xl">{social.icon}</div>
                    <span className="mt-2 text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Popular Blogs */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Popular Blogs</h2>
              <div className="space-y-4">
                {popularBlogs.map((blog) => (
                  <div key={blog.id} className="flex items-center space-x-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">{blog.title}</h3>
                      <p className="text-sm text-gray-500">By {blog.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Blog Posts Grid */}
        <section className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="border rounded-lg shadow-md overflow-hidden">
                {/* Using img instead of next/image */}
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-40 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-sm mt-2 text-gray-700">{blog.description}</p>
                  <p className="text-lg text-blue-500">By {blog.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocialBlogs;

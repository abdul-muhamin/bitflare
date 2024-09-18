"use client";
import React, { useState, useEffect } from 'react';
import AnimatedLineDiv from './AnimatedLineDiv';
import Link from 'next/link';
import { featuredBlog } from '../utils/interface'; // Import the Blog interface

const FeaturedBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<featuredBlog[]>([]);

  useEffect(() => {
    // Fetch the blogs data from the public data.json file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data.featuredBlogs))
      .catch((err) => console.error('Error fetching blogs:', err));
  }, []);

  return (
    <div className="bg-white py-16 px-10">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Featured Blogs</h2>
        <div className="flex justify-start items-center mt-1 mb-4">
          <AnimatedLineDiv />
        </div>
        <p className="text-gray-600 mb-8">
          Want to know about the latest technology trends? You can find all of them here.
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={blog.link} passHref>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                  <p className="text-blue-500 mt-2">By {blog.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="mt-8 text-center">
          <Link href="/blogs">
            <button className="bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition">
              View all articles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;

"use client";
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Blog } from '../../utils/interface'; // Adjust import path as needed

const SocialBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        setError('Failed to load data');
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook />, link: "#" },
    { name: "Instagram", icon: <FaInstagram />, link: "#" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "#" },
  ];

  const popularBlogs = blogs.slice(0, 3); // Display 3 popular blogs in sidebar

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
              <a key={blog.id} href={blog.url} className="border rounded-lg shadow-md overflow-hidden">
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
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocialBlogs;

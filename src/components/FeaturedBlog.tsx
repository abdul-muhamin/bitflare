import React from 'react';

const FeaturedBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Fine tuning open source LLMs like Llama 3.1, Mistral, and Gemma - the right way!",
      author: "Muhammad Norais",
      image: "/images/team.png",
      link: "#",
    },
    {
      id: 2,
      title: "Solve problems, because AI is not your USP anymore",
      author: "Hashir Baig",
      image: "/images/team.png",
      link: "#",
    },
    {
      id: 3,
      title: "Using Pinecone to implement a personalized recommendations system",
      author: "Sidra Rasool",
      image: "/images/team.png",
      link: "#",
    },
  ];

  return (
    <div className="bg-white py-16 px-10">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Featured Blogs
        </h2>
        <p className="text-gray-600 mb-8">
          Want to know about the latest technology trends? You can find all of them here.
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover hover:scale-125 transition-all duration-300 ease-in-out" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-blue-500 mt-2">By {blog.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="mt-8 text-center">
          <button className="bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition">
            View all articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;

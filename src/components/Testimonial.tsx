// components/TestimonialCarousel.jsx
"use client"
import { useEffect, useState } from "react";
import Image from 'next/image';

const testimonials = [
  {
    name: "Willy",
    position: "Head of Technology",
    image: "/images/team.png",
    testimonial: "Team RipeSeed communicates well and gets the specified job completed in time. Often, they go beyond and suggest other solutions to make the final solutions better.",
  },
  {
    name: "sd",
    position: "Head",
    image: "/images/team.png",
    testimonial: "Team RipeSeed communicates well and gets the specified job completed in time. Often, they go beyond and suggest other solutions to make the final solutions better.",
  },
  {
    name: "sad",
    position: "Head of Technology",
    image: "/images/team.png",
    testimonial: "Team RipeSeed communicates well and gets the specified job completed in time. Often, they go beyond and suggest other solutions to make the final solutions better.",
  },
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000); // Adjust timing for animation speed
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <div className="bg-slate-400 py-10">
        <h2 className="text-center text-2xl font-semibold mb-4">TESTIMONIALS</h2>
        <p className="text-center text-xl font-normal">What our client has to say</p>
      <div className="relative w-full max-w-4xl mx-auto p-10 my-20 bg-gray-100 rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`min-w-full flex flex-col items-center justify-center p-4 relative transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 absolute top-[-45px] z-20 object-cover"
              />
              <h3 className="text-lg font-bold mt-12">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
              <blockquote className="text-center text-gray-700 mt-4">
                {testimonial.testimonial}
              </blockquote>
            </div>
          ))}
        </div>
        {/* Dots Indicator */}
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-pink-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      </div>
  );
};

export default Testimonial;

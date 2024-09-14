// components/TestimonialCarousel.tsx
"use client";
import { useEffect, useState } from "react";
import AnimatedLineDiv from './AnimatedLineDiv';
import { TestimonialData } from '../utils/interface';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch the testimonials data from JSON file
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setTestimonials(data.testimonials))
      .catch(error => console.error('Error fetching data:', error));

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Adjust timing for animation speed

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="bg-[#e8e9eb] overflow-hidden py-10">
      <h2 className="text-center text-2xl font-semibold mb-4">TESTIMONIALS</h2>
      <div className='flex justify-center items-center mt-1 mb-4'>
        <AnimatedLineDiv />
      </div>
      <p className="text-center text-xl font-normal">What our client has to say</p>
      <div className="relative w-full max-w-7xl mx-auto p-10 my-20">
        <div className="relative">
          <div
            className="flex transition ease-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`min-w-full flex flex-col items-center justify-center h-[400px] relative transition-opacity duration-500 bg-gray-100 rounded-lg shadow-lg ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-40 h-40 rounded-full mb-4 absolute top-[-70px] border-4 border-green z-20 object-cover"
                />
                <h1 className="text-2xl font-bold">{testimonial.name}</h1>
                <h1 className="text-gray-500 font-normal text-xl">{testimonial.position}</h1>
                <p className="text-center text-gray-700 mt-4">
                  {testimonial.testimonial}
                </p>
              </div>
            ))}
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 w-10 h-10 text-slate-200 text-xl bg-slate-300 rounded-full flex items-center justify-center"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 w-10 h-10 text-slate-200 text-xl bg-slate-300 rounded-full flex items-center justify-center"
          >
            &gt;
          </button>
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

// components/TestimonialCarousel.tsx
"use client";
import React, { useEffect, useState } from 'react';

const TestimonialCarousel: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  
  useEffect(() => {
    async function loadImages() {
      const fetchedImages = await fetch('/data.json').then(res => res.json()).then(data => data.images);
      setImages(fetchedImages);
    }
    loadImages();
  }, []);

  return (
    <div className="relative overflow-hidden w-[80%] m-auto bg-gray-100 shadow-lg">
      <div className="hidden md:flex justify-start align-middle animate-scroll">
        {images.concat(images).map((src, index) => (
          <div key={index} className="flex-none mx-10 self-center py-5">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="grayscale-[100%] hover:grayscale-0 w-[100px] h-[100px] object-cover rounded-full shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;

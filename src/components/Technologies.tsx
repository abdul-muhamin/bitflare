// components/TestimonialCarousel.jsx


const images = [
    '/images/team.png',
    '/images/team.png',
    '/images/team.png',
    '/images/team.png',
    '/images/team.png',
    '/images/team.png',
    '/images/team.png',
    '/images/team.png',
  ];
  
  const TestimonialCarousel = () => {
    return (
      <div className="relative overflow-hidden w-[80%] m-auto bg-gray-100  ">
        <div className=" hidden md:flex justify-start align-middle animate-scroll">
          {images.concat(images).map((src, index) => (  // Duplicate images for seamless scrolling
            <div key={index} className="flex-none mx-2 self-center py-10">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className=" w-[100px] h-[100px] object-cover rounded-full shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TestimonialCarousel;
  
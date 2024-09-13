
const images = [
    '/images/aws.png',
    '/images/dj.png',
    '/images/g.png',
    '/images/go.png',
    '/images/react.png',
    '/images/qirolab.png',
    
  ];
  
  const TestimonialCarousel = () => {
    return (
      <div className="relative overflow-hidden w-[80%] m-auto bg-gray-100 shadow-lg  ">
        <div className=" hidden md:flex justify-start align-middle animate-scroll">
          {images.concat(images).map((src, index) => (  
            <div key={index} className="flex-none mx-10 self-center py-10">
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
  
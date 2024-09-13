"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedLineDivProps {
  colors?: string[];  // Optional: allows customizing the colors
  duration?: number;  // Optional: allows customizing the animation duration
  width?: string;     // Optional: allows customizing the width
  height?: string;    // Optional: allows customizing the height
}

const AnimatedLineDiv: React.FC<AnimatedLineDivProps> = ({
  colors = ["yellow", "red", "green"],
  duration = 1.5,
  width = "w-56", // Default width
  height = "h-1", // Default height
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null); // Using a ref for each section

  // Function to check if the element is in the viewport
  const handleScroll = () => {
    const section = sectionRef.current;
    if (section) {
      const rect = section.getBoundingClientRect();
      const isInViewport =
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      setIsVisible(isInViewport);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Check visibility on load
    handleScroll();

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`overflow-hidden h-[2px]`}>
      <motion.div
        ref={sectionRef} // Use ref instead of id
        className={`flex w-52 h-[2px]`}
        initial={{ x: "-100%" }} // Start from outside the viewport
        animate={isVisible ? { x: 0 } : { x: "-100%" }} // Move left to right when visible
        transition={{ duration, ease: "easeInOut" }} // Adjust animation speed and easing
      >
        {colors.map((color, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="flex-1"
            style={{ backgroundColor: color }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedLineDiv;

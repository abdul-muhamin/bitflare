import React, { useState } from "react";
import { navLinks } from "./navlinks";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

interface SubLink {
  Head: string;
}

interface NavLink {
  name: string;
  submenu: boolean;
  sublinks?: SubLink[];
}

const NavbarLinks: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setHoveredLink(name);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div className="relative">
      {/* Flex container to center items */}
      <div className="flex justify-center space-x-16">  {/* Reapplied space-x for horizontal spacing */}
        {navLinks.map((link, index) => (
          <div
            key={link.name}
            className={`relative ${index !== 0 ? 'ml-8' : ''}`}  // Add margin-left to all except first
            onMouseEnter={() => handleMouseEnter(link.name)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Parent NavLink */}
            <div className="px-3 text-left cursor-pointer">
              <h1 className="py-7 flex justify-between items-center hover:text-teal-500">
                {link.name}
                {link.submenu && (
                  <span className="text-xl">
                    {hoveredLink === link.name ? (
                      <IoChevronUpOutline width="20px" height="20px" />
                    ) : (
                      <IoChevronDownOutline width="20px" height="20px" />
                    )}
                  </span>
                )}
              </h1>
            </div>

            {/* Dropdown Menu */}
            {link.submenu && hoveredLink === link.name && (
              <div
                className="absolute left-0 bg-gray-800 text-white rounded shadow-lg z-10 transition-opacity duration-300"
                style={{ width: "300px" }}
              >
                <div className="flex flex-col space-y-3 cursor-pointer">
                  {link.sublinks?.map((mysublinks) => (
                    <div
                      key={mysublinks.Head}
                      className="p-3 hover:bg-gray-700"
                    >
                      <h1 className="text-lg px-4 py-4">{mysublinks.Head}</h1>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarLinks;

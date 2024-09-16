import React, { useState } from "react";
import { navLinks } from "./navlinks";
import Link from "next/link";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const NavbarLinks: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null); // Main link hover state
  const [hoveredSubLink, setHoveredSubLink] = useState<string | null>(null); // Submenu hover state

  // Handles showing the submenu of the hovered main link
  const handleMouseEnterLink = (name: string) => {
    setHoveredLink(name);
    setHoveredSubLink(null); // Reset sublink when hovering a new main link
  };

  // Handles hiding the main submenu after mouse leave
  const handleMouseLeaveLink = () => {
    setHoveredLink(null);
    setHoveredSubLink(null); // Also reset the sublink
  };

  // Handles showing sublink items when hovering on a sublink
  const handleMouseEnterSubLink = (head: string) => {
    setHoveredSubLink(head);
  };

  // Handles hiding the sublink after mouse leave
  const handleMouseLeaveSubLink = () => {
    setHoveredSubLink(null);
  };

  return (
    <div className="relative">
      <div className="flex justify-center space-x-16">
        {navLinks.map((link, index) => (
          <div
            key={link.name}
            className={`relative ${index !== 0 ? "ml-8" : ""}`}
            onMouseEnter={() => handleMouseEnterLink(link.name)}
            onMouseLeave={handleMouseLeaveLink} // Close both main and submenus when leaving
          >
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

            {/* Main Dropdown Menu */}
            {link.submenu && hoveredLink === link.name && (
              <div
                className="absolute left-0 top-full bg-gray-800 text-white rounded shadow-lg z-10 transition-opacity duration-300"
                style={{ width: "300px" }}
                onMouseEnter={() => handleMouseEnterLink(link.name)}
                onMouseLeave={handleMouseLeaveLink}
              >
                <div className="flex flex-col space-y-3 cursor-pointer">
                  {link.sublinks?.map((sublink) => (
                    <div
                      key={sublink.Head}
                      className="relative group"
                      onMouseEnter={() => handleMouseEnterSubLink(sublink.Head)}
                      onMouseLeave={handleMouseLeaveSubLink}
                    >
                      <div className="p-3 hover:bg-gray-700">
                        <h1 className="text-lg px-4 py-4">
                          {sublink.url ? (
                            <Link href={sublink.url}>{sublink.Head}</Link>
                          ) : (
                            sublink.Head
                          )}
                        </h1>
                      </div>

                      {/* Right-Aligned Submenu for Children */}
                      {sublink.children && hoveredSubLink === sublink.Head && (
                        <div
                          className="absolute top-0 left-full bg-gray-800 text-white rounded shadow-lg z-20 transition-opacity duration-300"
                          style={{
                            width: "250px",
                            marginLeft: "10px", // Adds space between parent and child menu
                            transform: "translateX(280px)", // Pushes the submenu to the right
                          }}
                        >
                          <div className="flex flex-col space-y-2 cursor-pointer">
                            {sublink.children.map((child) => (
                              <div key={child.Head} className="hover:bg-gray-700">
                                <h1 className="text-sm px-4 py-4">
                                  <Link href={child.url || "#"}>{child.Head}</Link>
                                </h1>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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

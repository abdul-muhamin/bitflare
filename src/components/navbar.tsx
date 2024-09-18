"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavbarLinks from "@/utils/navbarLinks";
import { FaPhone } from 'react-icons/fa';
import { PopupWidget } from 'react-calendly';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const calendlyUrl = 'https://calendly.com/rehany7xa';
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  return (
    <nav
      className={`bg-white border-b relative top-0 left-0 w-full z-50 transition-transform ${
        scrolling ? "py-2" : "py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10 font-normal transition-all">
        {/* Logo */}
        <div className="text-3xl font-[500] text-teal-600">
          <Link href={'/'} >
          ripeseed<span className="text-orange-500">.io</span></Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex flex-row justify-center items-center gap-8">
          <ul className="flex space-x-8 text-gray-700 text-xl">
            <NavbarLinks />
            <li>
              <Link href="/ourWork" className="hover:text-teal-500">
                Our Work
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-teal-500">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contactUs" className="hover:text-teal-500">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Request a Quote Button */}
          <div className="flex items-center">
          <Link href={"/requestQuote"}>
            <button className="bg-[#ff6584] text-white py-3 px-4 rounded-md  transition">
              Request a quote
            </button></Link>
            
          </div>
          <div className="flex items-center text-[#00a884] p-4 border-2 rounded-full shadow-lg">
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <FaPhone style={{ transform: 'scaleX(-1)' }} className="text-2xl "/>
            </a>
          </div>
        </div>
      </div>
     

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 w-full px-6 py-4">
          <ul className="flex flex-col items-start space-y-4 text-white mt-4">
            <li>
              <Link href="">Company</Link>
            </li>
            <li>
              <Link href="">Our Services</Link>
            </li>
            <li>
              <Link href="/ourWork">Our Work</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/contactUs">Contact Us</Link>
            </li>
          </ul>
          <div className="flex flex-row justify-around items-center gap-1 mt-5">
        <button className=" w-1/2 p-2 text-white bg-pink-500 font-bold rounded align-middle">
          Request a quote
        </button>
        <button className="w-1/2 p-2 text-white bg-green hover:bg-green font-bold rounded align-middle">
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              Book a meeting
            </a>
        </button>
      </div>
        </div>
      )}
    </nav>
  );
}

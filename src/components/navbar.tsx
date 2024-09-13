'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Adjust the value as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-white border fixed top-0 left-0 w-full z-50 transition-transform ${
      scrolling ? 'py-2' : 'py-5'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10 font-normal transition-all">
        {/* Logo */}
        <div className={`text-3xl font-[500] text-teal-600 transition-transform ${
          scrolling ? 'text-2xl' : 'text-3xl'
        }`}>
          ripeseed<span className="text-orange-500">.io</span>
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
            <li>
              <Link href="/company" className="hover:text-teal-500">Company</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-teal-500">Our Services</Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-teal-500">Our Work</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-teal-500">Blogs</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-500">Contact Us</Link>
            </li>
          </ul>

          {/* Request a Quote Button */}
          <div className="flex items-center">
            <button className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition">
              Request a quote
            </button>
          </div>

          {/* Phone Icon */}
          <div className="rounded-full bg-gray-100 p-3">
            <svg
              className="w-6 h-6 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l1.414 1.414a1 1 0 01.293.707V7a1 1 0 01-.293.707L7.586 9.414A16.014 16.014 0 0014.586 16.414l1.707-1.707A1 1 0 0117 14h1.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0121 17.414V20a2 2 0 01-2 2h-2c-8.284 0-15-6.716-15-15V5z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#3f3d56] w-full px-6 py-4">
          <ul className="flex flex-col items-start space-y-4 text-white mt-4">
            <li>
              <Link href="/company">Company</Link>
            </li>
            <li>
              <Link href="/services">Our Services</Link>
            </li>
            <li>
              <Link href="/work">Our Work</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className='flex flex-row items-center justify-center gap-2 mt-4'>
            <button className="bg-pink-500 text-white py-2 px-4 rounded-md">
              Request a quote
            </button>
            <button className="bg-teal-600 text-white py-2 px-4 rounded-md">
              Book a meeting
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

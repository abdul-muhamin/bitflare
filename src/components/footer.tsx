'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#3f3d56] text-white pt-[100px] px-10 z-[-1]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 ">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-teal-600">ripeseed<span className="text-orange-500">.io</span></h2>
          <p className="mt-2 text-gray-300">
            We harvest your requirements into living products!
          </p>
          <div className="mt-4 text-lg space-y-2 text-gray-400">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0h7m-7 0l-2-2m2 2l2-2m0 2v5m0-5V7m0 5l-2 2m2-2l2 2"></path>
              </svg>
              <span>info@ripeseed.io</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1l1.37 9.93a1.5 1.5 0 001.49 1.32h11.28a1.5 1.5 0 001.49-1.32L20 10h1m-9-6h.02M7.51 8H16.5"></path>
              </svg>
              <span>881-C, Ground Floor, Faisal Town, Lahore, 54570</span>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-lg text-gray-300">COMPANY</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-300">SUPPORT</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><Link href="/contact">Contact us</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-bold text-lg text-gray-300">SOCIAL LINKS</h3>
          <div className="mt-4 flex space-x-4">
            <Link href="https://www.facebook.com" target="_blank">
              <FaFacebookF className="w-6 h-6 hover:text-teal-600 transition" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram className="w-6 h-6 hover:text-teal-600 transition" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <FaLinkedinIn className="w-6 h-6 hover:text-teal-600 transition" />
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
              <FaYoutube className="w-6 h-6 hover:text-teal-600 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xl text-gray-400 pt-24 pb-8">
        &copy; RipeSeed 2023. All Right Reserved
      </div>
    </footer>
  );
}

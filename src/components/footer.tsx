'use client';
import React from 'react';
import Link from 'next/link';
import { MdEmail , MdLocationPin} from 'react-icons/md';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#3f3d56] text-white pt-[100px] px-20 ">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 ">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold text-teal-600">bitflare<span className="text-orange-500">.io</span></h2>
          <p className="my-2 text-white text-xl lg:w-[300px]">
            We harvest your requirements into living products!
          </p>
          <div className="my-10 text-lg text-white">
            <div className="flex items-center justify-start space-x-2">
              <span><MdEmail/> </span>
              <span className='align-top'>info@bitflare.io</span>

            </div>
            <div className="flex mt-14 m-auto items-center lg:items-start justify-start space-x-2">
              <span><MdLocationPin/></span>
              <span className='text-white align-text-top text-lg lg:w-[300px]"'>881-C, Ground Floor, Faisal Town, Lahore, 54570</span>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex justify-between  lg:justify-around items-start">
          <div>
            <h3 className="font-bold text-xl ">COMPANY</h3>
            <ul className="mt-4 space-y-4 text-lg font-normal ">
              <li><Link href="/about-us">About us</Link></li>
              <li><Link href="/our-work">Work</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
            </ul>
          </div>
          <div className='align-top justify-start'>
            <h3 className="font-bold text-xl ">SUPPORT</h3>
            <ul className="mt-4 space-y-4 text-lg font-normal ">
              <li><Link href="/contact-us">Contact us</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-bold text-xl ">SOCIAL LINKS</h3>
          <div className="mt-4 flex space-x-4">
            <Link href="#" target="_blank">
              <img src='/images/facebook.png' className='w-10 border-none rounded-full' />
            </Link>
            <Link href="#" target="_blank">
              
              <img src='/images/instagram.png' className='w-10 rounded-full' />
            </Link>
            <Link href="#" target="_blank">
              <img src='/images/linkedIn.png' className='w-10 rounded-full' />
            </Link>
            <Link href="#" target="_blank">
              <img src='/images/yt.png' className='w-10 rounded-full' />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xl  pt-10 pb-8">
        &copy; Bitflare.io 2024. All Right Reserved
      </div>
    </footer>
  );
}

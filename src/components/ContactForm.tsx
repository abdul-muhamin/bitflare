"use client";
import React from "react";
import AnimatedLineDiv from "./AnimatedLineDiv";
const ContactForm = () => {
  return (
    <div className="max-w-full mx-auto px-12 bg-white rounded-lg ">
      {/* Heading Section */}
      <div className="my-8 px-8">
        <h2 className="text-3xl font-bold text-black mb-2">INTERESTED IN WORKING WITH US?</h2>
        <div className='flex justify-start items-center mt-1 mb-4'>
          <AnimatedLineDiv/></div>
        <p className="text-lg text-gray-600">Let's talk and get started</p>
      </div>

      {/* Form Section */}
      <form className="grid grid-cols-1  md:grid-cols-2 gap-6 max-w-7xl mx-auto p-10 bg-[#e8e9eb] rounded-lg shadow-lg">
        {/* First Name Input */}
        <input
          type="text"
          placeholder="First Name*"
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        
        {/* Last Name Input */}
        <input
          type="text"
          placeholder="Last Name*"
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email*"
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        {/* Phone Number Input */}
        <input
          type="tel"
          placeholder="Phone Number*"
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        {/* Dropdown for 'What are you looking for?' */}
        <select
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black font-[1.3125rem]"
          required
        >
          <option value="" disabled selected >
            What are you looking for?*
          </option>
          <option value="UX/UI">UI/UX</option>
          <option value="Chrome Extantion">Chrome Extantion</option>
          <option value="Cloud Services">Cloud Services</option>
          <option value="Web/Mobile Application">Web/Mobile Application</option>
          <option value="game-development">Game Development</option>
          <option value="Consultancy">Consultancy</option>
          <option value="Others">Others</option>
          {/* Add more options as needed */}
        </select>

        {/* Dropdown for 'Select Budget' */}
        <select
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        >
          <option value="" disabled selected>
            Select Budget*
          </option>
          <option value="5000">$5,000</option>
          <option value="5000-10000">$10,000</option>
          <option value="20000">$20,000</option>
          <option value="not found yet">Not Found Yet</option>
          {/* Add more options as needed */}
        </select>

        {/* Textarea for 'How Can We Help' */}
        <textarea
          rows={6}
          placeholder="How Can We Help?*"
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black md:col-span-2"
          required
        ></textarea>

        {/* Submit Button Container */}
        <div className="flex justify-center md:col-span-2">
          <button
            type="submit"
            className="bg-green text-white px-12 py-4 font-normal rounded-md shadow-md focus:ring-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

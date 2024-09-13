"use client";
import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
      {/* Heading Section */}
      <div className="my-8 px-8">
        <h2 className="text-3xl font-bold text-black mb-2">INTERESTED IN WORKING WITH US?</h2>
        <p className="text-lg text-gray-600">Let's talk and get started</p>
      </div>

      {/* Form Section */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto p-16 bg-gray-100 rounded-lg shadow-lg">
        {/* First Name Input */}
        <input
          type="text"
          placeholder="First Name*"
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
        
        {/* Last Name Input */}
        <input
          type="text"
          placeholder="Last Name*"
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email*"
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />

        {/* Phone Number Input */}
        <input
          type="tel"
          placeholder="Phone Number*"
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />

        {/* Dropdown for 'What are you looking for?' */}
        <select
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        >
          <option value="" disabled selected>
            What are you looking for?*
          </option>
          <option value="web-development">Web Development</option>
          <option value="app-development">App Development</option>
          <option value="seo">SEO</option>
          {/* Add more options as needed */}
        </select>

        {/* Dropdown for 'Select Budget' */}
        <select
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        >
          <option value="" disabled selected>
            Select Budget*
          </option>
          <option value="1000-5000">$1,000 - $5,000</option>
          <option value="5000-10000">$5,000 - $10,000</option>
          {/* Add more options as needed */}
        </select>

        {/* Textarea for 'How Can We Help' */}
        <textarea
          rows={6}
          placeholder="How Can We Help?*"
          className="p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 md:col-span-2"
          required
        ></textarea>

        {/* Submit Button Container */}
        <div className="flex justify-center md:col-span-2">
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-pink-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

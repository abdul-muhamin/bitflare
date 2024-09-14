import React from 'react';

const RequestForm: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 bg-gray-100 p-8 rounded-lg shadow-md">
        <h1 className='text-left my-2 text-2xl font-bold text-green'>Tell Us About Yourself</h1>
      <form className="space-y-6">
        {/* Full Name and Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input 
              type="text" 
              name="full-name" 
              id="full-name" 
              required 
              placeholder='Full Name*'
              className="mt-1 py-6 px-3 block w-full text-2xl placeholder:text-xl border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <select 
              id="country" 
              name="country" 
              className="mt-1 block w-full pl-3 py-6 px-3 text-2xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            >
              <option>Select Country</option>
              <option>Canada</option>
              <option>USA</option>
            </select>
          </div>
        </div>

        {/* Email and Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              placeholder='Email*'
              className="mt-1 block w-full py-6 px-3 text-2xl placeholder:text-xl border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <input 
              type="text" 
              name="phone-number" 
              id="phone-number" 
              required 
              placeholder='Phone Number*'
              className="mt-1 block w-full py-6 px-3 text-2xl placeholder:text-xl border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Text Area */}
        <div>
          <label htmlFor="project-details" className="block text-2xl font-bold text-green ">Tell Us About Your Project</label>
          <textarea 
            id="project-details" 
            name="project-details" 
            rows={4} 
            required
            placeholder='How can we help*' 
            className="mt-1 block w-full py-6 px-3 text-2xl placeholder:text-xl border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Checkboxes */}
        <div>
          <label className="block text-lg font-medium text-gray-700">What Are You Looking For?</label>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600"/>
                <span className="ml-2 text-gray-700 text-lg">Mobile App Development</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600"/>
                <span className="ml-2 text-gray-700 text-lg">Web Development</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600"/>
                <span className="ml-2 text-gray-700 text-lg">Readymade Solutions</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600"/>
                <span className="ml-2 text-gray-700 text-lg">Custom Software</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600"/>
                <span className="ml-2 text-gray-700 text-lg">Hire Dedicated Developer</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600"/>
                <span className="ml-2 text-gray-700 text-lg">Frontend</span>
              </label>
            </div>
          </div>
        </div>

        {/* Budget Selection */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Select Your Budget</label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <button type="button" className="w-full bg-gray-200 py-4 px-5 text-lg rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Under $5,000</button>
            <button type="button" className="w-full bg-gray-200 py-4 px-5 text-lg rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Under $10,000</button>
            <button type="button" className="w-full bg-gray-200 py-4 px-5 text-lg rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Under $20,000</button>
            <button type="button" className="w-full bg-gray-200 py-4 px-5 text-lg rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Not Founded Yet</button>
          </div>
        </div>

        {/* Submit Button */}
        <div className='flex justify-center'>
          <button 
            type="submit" 
            className=" mx-auto bg-indigo-600 text-white py-3 px-10 text-lg rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RequestForm;

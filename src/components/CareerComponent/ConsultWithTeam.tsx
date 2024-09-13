import React from 'react'
import AnimatedLineDiv from '../AnimatedLineDiv'
const ConsultWithTeam = () => {
  return (
    <div className='bg-gray-800 text-white py-12 px-8'>
        <div className='flex flex-col justify-center align-middle text-white'>
            <h1 className='text-center text-3xl font-bold'>CONSULT WITH EXPERTS REGARDING YOUR PROJECT</h1>
            <div className='flex justify-center text-center mt-4 mb-6'>
            <AnimatedLineDiv /></div>
            <p className='text-center text-xl font-normal mt-2'>We have a team who’s ready to make your dreams into a reality. Let us know what you have in mind.</p>
            <div className="mt-8 text-center">
          <button className="bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition">
          Join Us
          </button>
        </div>
        </div>
    </div>
  )
}

export default ConsultWithTeam

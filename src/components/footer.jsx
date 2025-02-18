import React from 'react'

const footer = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full bg-gray-200 p-4 text-center md:flex-row md:justify-around md:p-6'>
        <p className='mb-2 md:mb-0'>Made By Robert Ortiz</p>
        <p>Built using React, Vite, & Tailwind </p>
      </div>
    </>
  );
}

export default footer
import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundpg = () => {
  return (
    <div><div className='flex justify-center items-center min-h-screen bg-amber-800 font-game text-center m-auto'>
      <div>
        <h1>404 Not Found</h1>
        <p className='mt-4'>The page you're looking for doesn't exist.</p>
        <Link to="/"
          className='text-center inline-block m-20 font-bold px-3.5 py-3 bg-[#767676] text-shadow-[-1px_-1px_black,1px_1px_white]  rounded-lg shadow-[0_0.2em_gray] cursor-pointer'
        >
          Go Back Home
        </Link>
      </div>
    </div></div>
  )
}

export default NotFoundpg
import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <div className='min-h-screen font-game  bg-amber-800 text-amber-200'>
        <h1 className='text-xl mb-10 pt-10'>Welcome!!!</h1>
        <p className='text-lg/12'>
          I hope you have come here to play a game. <br /> Select the Button
          Below when you are ready to go to the next page.
        </p>
        <Link to="/Instructions" className='text-center inline-block m-30 font-bold px-3.5 py-3 bg-[#767676] text-shadow-[-1px_-1px_black,1px_1px_white]  rounded-lg shadow-[0_0.2em_gray] cursor-pointer animate-flash'>
          Next Page
        </Link>
      </div>
    </>
  );
};

export default Homepage;

import React from 'react';
import { Link } from 'react-router-dom';
import heart from "../assets/Sprite_heart.png"
import rock from "../assets/BgObject_Rock.png"
import scissors from "../assets/F0XOKY4KPR7VNM1.png"
import paper from "../assets/FU5DSZMKPR7VNLZ.png"


const Instructionspg = () => {
  return (
    <>
      <div className='bg-amber-800 text-amber-200 font-game min-h-screen'>
        <h1 className='text-xl md:text-2xl py-10 text-center'>
          Well the rules are pretty simple.
        </h1>
        <p className='flex justify-center pb-10'>
          You are given three lives{' '}
          <img className='w-6 ml-3' src={heart} alt='heart icon' />
          <img className='w-6 ml-1' src={heart} alt='heart icon' />
          <img className='w-6 ml-1' src={heart} alt='heart icon' />
        </p>
        <p className='text-center'>
          Each round you have to chose between three objects:
        </p>
        <div className='flex flex-col md:flex-row pt-10 gap-4 items-center mx-auto text-black'>
          <div className='flex flex-col md:flex-row pt-10 gap-4 items-center mx-auto text-blac'>
            {/* Rock Card */}
            <div className='bg-gray-300 rounded-xl shadow-xl p-4 w-full md:w-72 sm:w-64 text-center'>
              <img className='h-20 m-auto mt-3' src={rock} alt='rock icon' />
              <h2 className='mt-8 text-center'>Large Rock!</h2>
              <p className='text-[0.7em] text-center'>
                Get Ready to smash your foes
              </p>
            </div>
            {/* Scissors Card */}

            <div className='bg-gray-300 rounded-xl shadow-xl p-4 w-full md:w-72 sm:w-64 text-center'>
              <img
                className='h-24 m-auto rotate-180'
                src={scissors}
                alt='scissors logo'
              />
              <h2 className='mt-7 text-center'>Sharp Scissors!</h2>
              <p className='text-[0.7em] text-center'>
                You will slice through your opponents
              </p>
            </div>
            {/* Paper Card */}

            <div className='bg-gray-300 rounded-xl shadow-xl p-4 w-full md:w-72 sm:w-64 text-center'>
              <img
                className='h-18 m-auto rotate-5'
                src={paper}
                alt='paper icon'
              />
              <h2 className='mt-8 text-center'>A piece of Paper?</h2>
              <p className='text-[0.7em] text-center pt-1'>
                Yeah... It's just paper
              </p>
            </div>
          </div>
        </div>
        <p className='w-5/6 mx-auto pt-10'>
          You're Opponent will choose one of the three. It will be a fight to
          the death!!
        </p>
        <Link
          to='/Game'
          className='text-center inline-block m-30 font-bold px-3.5 py-3 bg-[#767676] text-shadow-[-1px_-1px_black,1px_1px_white]  rounded-lg shadow-[0_0.2em_gray] cursor-pointer animate-flash uppercase mt-8'
        >
          Game Time!!!
        </Link>
      </div>
    </>
  );
};

export default Instructionspg;

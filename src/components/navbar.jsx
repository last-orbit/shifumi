import React from 'react';
import { Link } from 'react-router-dom';
import githublogo from '../assets/github_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsq7.svg';
import linkedinlogo from '../assets/linkedin_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsqp.png';
import home from '../assets/kisspng-pixel-art-portable-network-graphics-transparency-i-abigaelampaposs-gallery-5d3430c123fcb7.5463292415637014411474.png'

const navbar = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row font-game justify-between items-center w-full bg-gray-200 p-4'>
        <Link
          to='/'
          className=' style-none pl-5 flex items-center'
          Alt='Homeicon'
        >
          Home <img className='h-12 w-12' src={home} alt='Home icon' />
        </Link>
        <div className='flex flex-col md:flex-row w-full md:w-xl justify-around items-center mt-4 md:mt-0'>
          <Link to='/Instructions' className=''>
            {' '}
            How To Play
          </Link>
          <Link to='/Game' className='mb-2 md:mb-0'>
            {' '}
            Play Time
          </Link>
          <div className='flex gap-2 items-center'>
            <Link to='https://github.com/last-orbit'>
              <img className='h-12 w-8' src={githublogo} alt='github logo' />
            </Link>
            <Link>
              <img className='h-8 w-8' src={linkedinlogo} alt='linkedin logo' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;

import React from 'react';
import { FaMaxcdn } from 'react-icons/fa';

const Feature = () => {
  return (
    <>
      <div className='m-6 w-60 h-60 bg-background text-center rounded-3xl justify-between flex flex-col items-center'>
        <FaMaxcdn className='text-primary text-7xl h-full'></FaMaxcdn>
        <div className='flex flex-col justify-between h-full'>
          <p className='text-2xl'>CDN</p>
          <div className='h-14 w-full bg-textSecondary align-self-end rounded-b-3xl'>
            <p className='self-center'>Easily Edit Your Own Content With Netlify CMS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;

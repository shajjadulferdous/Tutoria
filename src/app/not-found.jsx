export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
      <div className='my-20 space-y-3'>
         <h1 className='text-9xl font-bold text-center text-[#35858E] animate-pulse'>404</h1>
         <p className='text-center text-2xl text-gray-900'> Page Not Found </p>
         <p className='text-center text-gray-600'>Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or perhaps never existed.</p>
         <div className='flex justify-center items-center '>
         <Link className='text-center btn bg-[#35858E] text-white ' href={'/'}>Go Home Page</Link>
         </div>
      </div>
  );
};

export default NotFound;
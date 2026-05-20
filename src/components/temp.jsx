import Image from 'next/image';
import React from 'react';

const Temp = () => {
    return (
         <div className='h-screen flex justify-center items-center flex-col'>
                     <div>
                        <Image src={'/assests/tutoria.png'} alt="logo" width={120} height={120} className='grayscale-100'></Image>
                     </div>
                    <h1 className='font-semibold text-xl text-gray-600'>Sign up for EduApa</h1>
                    <div>
                        <form >
                        <fieldset className="fieldset rounded-box w-85 sm:w-100  p-4">       
        
                        <label className="label text-gray-600 font-semibold text-[16px]">Email</label>
                        <input type="email"  className="input outline-none w-85 sm:w-100  hover:border-blue-500 hover:border-2" placeholder="Email" />
                      
                        <label className="label text-gray-600 font-semibold text-[16px]">Name</label>
                        <input type="text"  className="input outline-none w-85 sm:w-100  hover:border-blue-500 hover:border-2" placeholder="Your Name" />
                         
                        <label className="label text-gray-600 font-semibold text-[16px]">Photo</label>
                        <input type="text"  className="input outline-none w-85 sm:w-100  hover:border-blue-500 hover:border-2" placeholder="URL" />
        
                        <label className="label text-gray-600 font-semibold text-[16px]">Password</label>
                        <input type="password"  className="input outline-none w-85 sm:w-100  hover:border-blue-500 hover:border-2" placeholder="Password" />
        
                        <button type='submit' className="btn bg-orange-600 text-white mt-4">Create Account</button>
                        </fieldset>
                        </form>
                        
                    </div>
                </div>
    );
};

export default Temp;
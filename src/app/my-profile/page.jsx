'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
const ProfilePage = () => {
    const { data: session , isPending } = authClient.useSession()
    const user = session?.user;
    return (
        isPending ?  <div className="flex justify-center items-center h-[50vh]">
            <span className="loading loading-spinner loading-lg text-[#35858E]"></span>
            </div> :<div className='flex justify-center items-center'>
           <div className='flex justify-center items-center flex-col my-10 space-y-3 p-10 shadow-md w-95'>
            <div className='w-50 h-50'>
                <Image src={user?.image ||'assests/tutoria.png'} alt='user image' width={200} height={200} className='w-full h-full rounded-full'></Image>
            </div>
             <h1 className='text-2xl font-bold mt-3 text-center'>{user?.name.toUpperCase() || "user name"}</h1>
             <div className='flex justify-between gap-2'>
                <p>Name:</p>
                <p>{user?.name || "user name"}</p>
             </div>
             <div className='flex justify-between gap-2'>
                 <p>Email:</p>
                 <p>{user?.email || "eduapa@gmail.com"}</p>
             </div>
            
              <div className='flex gap-5'>
                 <Link href={'/'} className='btn bg-[#35858E] text-white' onClick={async()=>{await authClient.signOut(); }}>Logout</Link>
              </div>
           </div>
        </div>
    );
};

export default ProfilePage;
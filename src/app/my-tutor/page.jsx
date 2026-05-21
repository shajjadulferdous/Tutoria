import DeleteDialog from '@/components/DeleteDialog';
import EditCard from '@/components/EditCard';
import { getAddMyTutor } from '@/lib/action';
import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import Image from 'next/image';

import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';


const MyTutorPage = async() => {
    const handleRevalidate = async()=>{
        'use server';
        revalidatePath('\my-tutor')
    }
    const session = await auth.api.getSession({
      headers: await headers()
    })

    const user = session?.user;
    
    const {token} = await auth.api.getToken({
      headers: await headers()
    })

    const myTutors = await getAddMyTutor(user?.id ,token);
    if (myTutors.length == 0){
         return <div className='my-20 w-11/12 mx-auto flex flex-col justify-center items-center'>
               <h1 className="text-3xl font-bold text-gray-800"> No Data Found </h1>
                <p className="text-gray-500 mt-2 text-center">
                    We could not find any data to display right now.
                    Please try again later or add new data.
                </p>
         </div>
    }
    return (
        <div>
            {
                myTutors.map((tutor , index) => <div key={index} className='bg-white p-10 shadow-sm flex flex-col sm:flex-row justify-between'>
                     <div  className='flex gap-5  rounded-2xl flex-col sm:flex-row sm:justify-start justify-center'>
                              <div className='relative w-32 h-32 md:w-40 md:h-40 overflow-hidden border-4 border-white rounded-xl'>
                                 <Image src={tutor.photo} alt={`${tutor.name}.png`} fill unoptimized className='object-cover'></Image>
                              </div>
                              <div className='space-y-3'>
                                 <h1 className='text-3xl sm:text-4xl  font-extrabold flex items-center gap-2'>{tutor.name} <MdVerifiedUser className='text-[#35858E]'></MdVerifiedUser></h1>
                                 <p className='flex items-center gap-2 text-xl'><FaGraduationCap className='text-[#35858E]'/> Studies at {tutor.institution}</p>
                                 <div className='flex gap-2 flex-col sm:flex-row'>
                                    <span className='flex gap-2 px-3 text-slate-600 items-center py-2 bg-gray-200 w-fit rounded-full'><FaBriefcase></FaBriefcase>{tutor.experience} Experience</span>
                                    <span className='flex gap-2 px-3 items-center font-bold py-2 text-[#35858E] bg-gray-200 w-fit rounded-full'>Mode : {tutor.teachingMode}</span>
                                 </div>
                              </div>
                           </div>
                           <div className='flex gap-2'>
                               <span><EditCard handleRevalidate={handleRevalidate} tutor={tutor}></EditCard></span>
                               <span><DeleteDialog handleRevalidate={handleRevalidate} id={tutor._id} name={tutor?.name}></DeleteDialog></span>
                           </div>
                </div>)
            }
        </div>
    );
};

export default MyTutorPage;
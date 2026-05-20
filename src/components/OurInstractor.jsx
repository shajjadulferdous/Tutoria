import { getTutors } from '@/lib/action';
import React from 'react';
import TutorCard from './TutorCard';
import Link from 'next/link';

const OurInstractor = async() => {
    const tutors = await getTutors(5);

    return (
        <div className=''>
             <p className='text-center text-gray-600 text-xl'>MEET THE TEAM</p>
             <h1 className='text-5xl font-extrabold text-center mt-2'>Learn From The Best <span className='text-[#35858E]'>Tutor</span> </h1>
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-11/12 mx-auto my-10'>
                 {
                    tutors.map(tutor =>  <TutorCard key={tutor.id} tutor={tutor}></TutorCard>)
                 }
             </div>
              <div className='flex justify-center items-center'>
                      <Link href={'/tutors'} className="btn btn-xs+2031 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#35858E] text-white font-normal text-xl p-5">Meet Our Instructors                   
                      </Link>                  
             </div>
        </div>
    );
};


export default OurInstractor;

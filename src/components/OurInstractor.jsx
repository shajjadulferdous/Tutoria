import { getTutors } from '@/lib/action';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import TutorCard from './TutorCard';

const OurInstractor = async() => {
    const tutors = await getTutors(5);
    // console.log(tutors);
    return (
        <div className='my-20'>
             <p className='text-center text-gray-600 text-xl'>MEET THE TEAM</p>
             <h1 className='text-5xl font-extrabold text-center'>Learn From The Best <span className='text-[#35858E]'>Tutor</span> </h1>
             <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto my-10'>
                 {
                    tutors.map(tutor =>  <TutorCard key={tutor.id} tutor={tutor}></TutorCard>)
                 }
             </div>
        </div>
    );
};

export default OurInstractor;
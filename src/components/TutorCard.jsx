import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';

const TutorCard = ({tutor}) => {
    return (
        <div>
             <div className='group relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md transition-all duration-300 hover:shadow-xl'>
                    <Image src={tutor.photo} alt='tutor.png'  fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    unoptimized></Image>
                </div>
                <div className='space-y-1.5'>
                    <h1 className='text-3xl font-bold mt-3 text-center'>{tutor.name}</h1>
                    <div className='flex justify-between items-center'> 
                        <div>
                            <p className='flex gap-3 items-center text-gray-600'> <FaChalkboardTeacher /> Expert at {tutor.subject}</p>
                            <p className='flex gap-3 items-center text-gray-600'><IoLocation /> {tutor.location}</p>
                        </div>
                        <div>
                            <span className='px-3 py-2 border border-gray-600 rounded-full text-gray-600 mt-3'>{tutor?.teachingMode}</span>
                        </div>
                    </div>

                    <Button className={'bg-[#35858E] w-full'}>Book Now</Button>
                </div>
        </div>
    );
};

export default TutorCard;
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { PiStudent } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { MdCalendarMonth } from 'react-icons/md';
import { SiKnowledgebase } from 'react-icons/si';
import Link from 'next/link';

const TutorCard = ({tutor}) => {
    return (
        <div className='relative'>
             <div className='group relative aspect-square w-full overflow-hidden rounded-2xl  bg-slate-100 shadow-md transition-all duration-300 hover:shadow-xl'>
                    <Image src={tutor.photo} alt='tutor.png'  fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    unoptimized></Image>
                </div>
                <span className='absolute top-2 right-2 text-white bg-slate-600 px-2 py-1 rounded-full text-sm flex items-center gap-1'><SiKnowledgebase />{tutor?.experience} Exp</span>
                <div className='space-y-1.5'>
                     <h1 className='text-3xl font-bold mt-3 text-[#35858E]'>{tutor.name}</h1>
                     <p className="flex items-center gap-2 text-gray-600">
                    <PiStudent className="text-lg" />
                    <span>
                        Studies at {" "}
                        <span className="font-semibold text-gray-900">
                        {tutor.institution}
                        </span>
                    </span>
                    </p>
                     <hr className='text-slate-400' />
                    <div className='flex justify-between items-center'> 
                        <div>
                            <p className='flex gap-3 items-center text-gray-600'> <FaChalkboardTeacher className='text-[#35858E]' /> <span> Expert at <span className='font-semibold'>{tutor.subject}</span> </span></p>
                            <p className='flex gap-3 items-center text-gray-600'><IoLocation className='text-red-500' /> {tutor.location}</p>
                            <p className='flex items-center gap-3'><IoMdTime className='text-blue-500' /> {tutor.timeSlot}</p>
                        </div>
                        <div>
                            <p className='flex items-center gap-2'><MdCalendarMonth className='text-orange-500'/>{tutor.availableDays}</p>
                        </div>
                    </div>

                   <Link href={`/tutors/${tutor._id}`}>
                      <Button  className={'bg-[#35858E] w-full'}>Book Now</Button>
                   </Link>
                </div>
        </div>
    );
};

export default TutorCard;
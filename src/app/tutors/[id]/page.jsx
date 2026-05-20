import { getDetailsTutor } from '@/lib/action';
import Image from 'next/image';
import React from 'react';
import { Button, Modal } from '@heroui/react';
import { 
  FaChalkboardTeacher, FaRegClock, FaGraduationCap, 
  FaBriefcase, FaCalendarCheck, FaHourglassHalf, FaAward 
} from 'react-icons/fa';
import { IoLocation, IoArrowBackOutline } from 'react-icons/io5';
import { MdCalendarMonth, MdVerifiedUser } from 'react-icons/md';
import Link from 'next/link';
import { ModalForm } from '@/components/ModalForm';

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const details = await getDetailsTutor(id);

  return (
     <>
       <div className='w-11/12 mx-auto my-20'>
           <div className='flex gap-5 p-10 shadow-sm bg-white rounded-2xl flex-col sm:flex-row sm:justify-start justify-center'>
              <div className='relative w-32 h-32 md:w-40 md:h-40 overflow-hidden border-4 border-white rounded-xl'>
                 <Image src={details.photo} alt={`${details.name}.png`} fill unoptimized className='object-cover'></Image>
              </div>
              <div className='space-y-3'>
                 <h1 className='text-4xl font-extrabold flex items-center gap-2'>{details.name} <MdVerifiedUser className='text-[#35858E]'></MdVerifiedUser></h1>
                 <p className='flex items-center gap-2 text-xl'><FaGraduationCap className='text-[#35858E]'/> Studies at {details.institution}</p>
                 <div className='flex gap-2'>
                    <span className='flex gap-2 px-3 text-slate-600 items-center py-2 bg-gray-200 w-fit rounded-full'><FaBriefcase></FaBriefcase>{details.experience} Experience</span>
                    <span className='flex gap-2 px-3 items-center font-bold py-2 text-[#35858E] bg-gray-200 w-fit rounded-full'>Mode : {details.teachingMode}</span>
                 </div>
              </div>
           </div>
           
           <div className='grid grid-cols-1 md:grid-cols-3  gap-3'>
               <div className='md:col-span-2'>
               <div className='p-10 bg-white my-5 rounded-2xl shadow-sm'>
                    <h1 className='flex items-center uppercase gap-2 text-xl font-bold mb-2'><FaChalkboardTeacher/> Teaching Domain</h1>
                    <hr className='text-slate-300' />
                    <div>
                        <div className='flex justify-between p-3 bg-slate-50 mt-3'>
                           <div>
                               <h2 className='text-slate-500'>PRIMARY SPECALIZATION</h2>
                               <p className='text-xl font-bold'>{details.subject}</p>
                           </div>
                           <div className='px-3 py-3 text-center bg-white rounded-3xl border-2 border-slate-300 w-fit'>
                               Curriculam Verified
                           </div>
                        </div>
                         <p className=" text-slate-600 leading-relaxed pt-2 my-3 text-normal">
                        Learn from an active professional. Sessions are tailored entirely toward comprehensive, goal-oriented skill milestones, ensuring complex concepts are structurally broken down into accessible, intuitive workflows.
                      </p>
                    </div>
               </div>
               <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <FaCalendarCheck className="text-[#35858E]" /> Availability & Logistics
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                  <MdCalendarMonth className="text-2xl text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Weekly Schedule</h4>
                    <p className="font-bold text-slate-800 mt-1">{details.availableDays}</p>
                    <p className="text-sm text-slate-500 mt-0.5">Fixed matching sessions</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                  <FaRegClock className="text-2xl text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Daily Time Slot</h4>
                    <p className=" font-bold text-slate-800 mt-1">{details.timeSlot}</p>
                    <p className="text-sm text-slate-500 mt-0.5">Bangladesh Standard Time (BST)</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                  <IoLocation className="text-2xl text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Operational Location</h4>
                    <p className="font-bold text-slate-800 mt-1">{details.location}, Bangladesh</p>
                    <p className="text-sm text-slate-500 mt-0.5">Available for physical home options</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                  <FaHourglassHalf className="text-2xl text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Session Kick-Off</h4>
                    <p className="font-bold text-slate-800 mt-1">{details.sessionStartDate}</p>
                    <p className="text-sm text-slate-500 mt-0.5">Booking protects original slot</p>
                  </div>
                </div>
              </div>

               </div>
               </div>
                <div className='p-10  bg-white mt-5 h-fit space-y-3 md:col-span-1'>
                    <h1 className='uppercase text-slate-500'>Rate Enhancement</h1>
                    <p className='text-slate-500'> <span className='font-bold text-2xl text-black'>${details.hourlyFee}</span>/Hour</p>
                    <hr className='text-slate-200 my-3'/>
                    <div className='text-slate-500 flex justify-between text-sm'>
                       <p>Available Slot Left</p>
                       <span className='border border-green-400 bg-green-50 px-2 py-1  rounded-full'>{details.totalSlot} Open Space</span>
                    </div>
                    <div className='text-slate-500 flex justify-between text-sm'>
                       <p>Platform Booking Fee</p>
                       <span className='text-sm'>FREE</span>
                    </div>
                    <div className='text-slate-500 flex justify-between text-sm'>
                       <p>Commitment Type</p>
                       <span className='uppercase text-sm'>FLEXIBLE/month-by-month</span>
                    </div>
                    <ModalForm tutor={details}></ModalForm>
                </div>
           </div>
       </div>
     </>
  );
};

export default TutorDetailsPage;
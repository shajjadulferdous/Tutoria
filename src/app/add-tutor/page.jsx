'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Dropdown, Header, Label } from '@heroui/react';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { CiLocationOn } from 'react-icons/ci';
import { MdPeopleOutline, MdSchedule, MdSubject } from 'react-icons/md';

const AddTutorPage = () => {
    const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession();
    const user = session?.user;
    const [selected, setSelected] = useState('');
    const handleSubmit = async(formData)=>{
        const tutorDetails = Object.fromEntries(formData.entries());
        tutorDetails.addedBy = user?.id;
        tutorDetails.teachingMode = selected?.currentKey;
        const { data, error } = await authClient.token();
        if (error){
            toast.error('Token Invalid Please Login Again');
            return;
        }
        const {token} = data;
        const res = await fetch(`http://localhost:8080/my-tutors`,
            {
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                     "Authorization": `Bearer ${token}`
                },
                body:JSON.stringify(tutorDetails)
            }
        )
        if(!res.ok){
            toast.error('Something went wrong');
            return;
        }
        redirect('/my-tutor');
    }
    return (
        
        <div className='w-11/12 max-w-7xl mx-auto my-15'>
            <h1 className='font-bold text-4xl text-center'>Add New Tutor</h1>
            <p className='text-center text-slate-600 mt-3'>Fill in the details below to register a new tutor on the platform.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-3'>
                <div className='p-3 bg-white flex justify-center items-center gap-2'>
                    <span className='font-bold  w-10 h-10 bg-[#35858E] flex justify-center items-center text-white rounded-full'>1</span>
                    <p className='text-[#35858E] font-bold'>Basic Info</p>
                </div>
                <div className='p-3 bg-white flex justify-center items-center gap-2'>
                    <span className='font-bold  w-10 h-10 bg-[#35858E] flex justify-center items-center text-white rounded-full'>2</span>
                    <p className='text-[#35858E] font-bold'>Schedule</p>
                </div>
                <div className='p-3 bg-white flex justify-center items-center gap-2'>
                    <span className='font-bold  w-10 h-10 bg-[#35858E] flex justify-center items-center text-white rounded-full'>3</span>
                    <p className='text-[#35858E] font-bold'>Details</p>
                </div>
                <div className='p-3 bg-white flex justify-center items-center gap-5'>
                    <span className='font-bold  w-10 h-10 bg-[#35858E] flex justify-center items-center text-white rounded-full'>4</span>
                    <p className='text-[#35858E] font-bold'>Preferences</p>
                </div>
            </div>
             <form action={handleSubmit} className='grid grid-cols-1 space-y-5  my-20 justify-center'>
                <div className='w-full h-full space-y-2'>
                 <div className='flex gap-3'>
                    <div className='w-12 h-12 rounded-full bg-[#35858E] text-white flex items-center justify-center'>
                        <MdPeopleOutline className='w-6 h-6' />
                    </div>
                    <div>
                        <h2 className='font-bold text-xl'>Personal Information</h2>
                        <p className='text-slate-600'>Tutors identity and photo</p>
                    </div>
                 </div>
                <div className='flex flex-col'>
                     <label className="font-bold">Tutor Full Name</label>
                     <input type="text" name='name' className="w-full input outline-none hover:border-[#35858E]" placeholder="e.g Md Shajjadul ferdous" required />
                 </div>
                  <div className='flex flex-col'>
                     <label className="font-bold">Tutor Photo URL</label>
                     <input type="text" name='photo' className="w-full input outline-none hover:border-[#35858E]" placeholder="image url" required/>
                     <p className='text-slate-600 text-sm'>Paste the direct image link from imgbb or postimage</p>
                 </div>
                </div>

                <div className='w-full h-full space-y-2'>
                 <div className='flex gap-3'>
                    <div className='w-12 h-12 rounded-full bg-[#35858E] text-white flex items-center justify-center'>
                        <MdSubject className='w-6 h-6' />
                    </div>
                    <div>
                        <h2 className='font-bold text-xl'>Subject & Institution</h2>
                        <p className='text-slate-600'>Academic background and teaching area</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                     <label className="font-bold">Subject / Category</label>
                     <input type="text" name='subject'required className="input w-full outline-none hover:border-[#35858E]" placeholder="e.g Mathmatics" />
                 </div>
                  <div className='flex flex-col'>
                     <label className="font-bold">Institution</label>
                     <input type="text" name='institution' required className="input w-full outline-none hover:border-[#35858E]" placeholder="e.g. University of Dhaka" />
                   
                 </div>
                  <div className='flex flex-col'>
                     <label className="font-bold">Experience</label>
                     <input type="text" name='experience' className="input w-full outline-none hover:border-[#35858E]" placeholder="e.g. 3years" />
                  
                 </div>
                </div>
                 
                 <div className='w-full h-full space-y-2'>
                 <div className='flex gap-3'>
                    <div className='w-12 h-12 rounded-full bg-[#35858E] text-white flex items-center justify-center'>
                        <CiLocationOn className='w-6 h-6' />
                    </div>
                    <div>
                        <h2 className='font-bold text-xl'>Location & Teaching Mode</h2>
                        <p className='text-slate-600'>Where and how the tutor teaches</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                     <label className="font-bold">Area</label>
                     <input type="text" name='location' className="input w-full outline-none hover:border-[#35858E]" placeholder="e.g Mathmatics" />
                 </div>
                  <div className='flex flex-col gap-2'>
                  <label className="font-bold">Teaching Mode</label>

                    <Dropdown>
                        <Button
                        className="input outline-none w-full bg-white border border-slate-300 hover:border-[#35858E] rounded-xl px-4 flex justify-between items-center shadow-none text-black"
                        >
                        <span className="capitalize text-slate-700">
                            {Array.from(selected)[0] || 'Select teaching mode'}
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-slate-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                            />
                        </svg>
                        </Button>
                        
                        <Dropdown.Popover className=" rounded-2xl border border-slate-200 shadow-xl">
                        <Dropdown.Menu
                            selectedKeys={selected}
                            selectionMode="single"
                            onSelectionChange={setSelected}
                        >
                            <Dropdown.Section title="Teaching Mode">
                            <Dropdown.Item
                                id="online"
                                className="py-3 rounded-lg hover:bg-[#35858E]/10"
                            >
                                Online
                            </Dropdown.Item>

                            <Dropdown.Item
                                id="offline"
                                className="py-3 rounded-lg hover:bg-[#35858E]/10"
                            >
                                Offline
                            </Dropdown.Item>

                            <Dropdown.Item
                                id="both"
                                className="py-3 rounded-lg hover:bg-[#35858E]/10"
                            >
                                Both
                            </Dropdown.Item>

                            </Dropdown.Section>
                        </Dropdown.Menu>
                        </Dropdown.Popover>
                   </Dropdown>
                    <p className="text-sm text-slate-500">
                        Choose how the tutor will conduct classes
                    </p>
                </div>
                </div>

                <div className='w-full h-full space-y-2'>
                 <div className='flex gap-3'>
                    <div className='w-12 h-12 rounded-full bg-[#35858E] text-white flex items-center justify-center'>
                      <MdSchedule className='w-6 h-6' />
                    </div>
                    <div>
                        <h2 className='font-bold text-xl'>Schedule & Availability</h2>
                        <p className='text-slate-600'>Days, time slots, and session start date</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                     <label className="font-bold">Available Days</label>
                     <input type="text" name='availableDays' className="input w-full outline-none hover:border-[#35858E]" placeholder="e.g Sat-Thu" required/>
                 </div>
                  <div className='flex flex-col'>
                     <label className="font-bold">Available Time Slot</label>
                     <input type="text" name='timeSlot' className="input w-full outline-none hover:border-[#35858E]" placeholder="e.g. 3.00-5.00 P.M" required />
                   
                 </div>
                  <div className='flex flex-col'>
                     <label className="font-bold">Session Start Date</label>
                     <input type="date" name='sessionStartDate' required className="input w-full outline-none hover:border-[#35858E]" placeholder="e.g. 3years" />
                 </div>
                  <div className='flex flex-col'>
                     <label className="font-bold">Total Slots</label>
                     <input type="text" name='totalSlot' required className="input w-full outline-none hover:border-[#35858E]" placeholder="e.g. 20" />
                     <p className='text-slate-600 text-sm'>Max number of students</p>
                 </div>
                 <div className='flex flex-col'>
                     <label className="font-bold">Hourly Fee</label>
                     <input type="text" name='hourlyFee' required className="input w-full outline-none hover:border-[#35858E]" placeholder="e.g. 500" />
                     <p className='text-slate-600 text-sm'>Amount in Dollers</p>
                 </div>
                </div>

                 <Button type='submit' className={`bg-[#35858E]  mt-4 w-full`}>Register Tutor</Button>
             </form>
        </div>
    );
};

export default AddTutorPage;
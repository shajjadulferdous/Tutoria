import React from 'react';
const steps = [
  {
    number: '01',
    icon: '🔍',
    title: 'Find Your Tutor',
    desc: 'Browse hundreds of verified tutors by subject, availability, price, and teaching mode — online, in-person, or both.',
    color: '#0ea5e9',
    bg: '#e0f2fe',
  },
  {
    number: '02',
    icon: '📅',
    title: 'Book a Session',
    desc: 'Pick a time slot that fits your schedule. Flexible bookings with instant confirmation — no waiting around.',
    color: '#8b5cf6',
    bg: '#ede9fe',
  },
  {
    number: '03',
    icon: '🎯',
    title: 'Start Learning',
    desc: 'Connect with your tutor on your first session. Track progress, take notes, and grow with every class.',
    color: '#10b981',
    bg: '#d1fae5',
  },
];
const ExtraSectionTwo = () => {
    return (
        <div className='my-20'>
            <h1 className='text-5xl font-bold text-center '>
                Master New Skills on <br/> <span className='text-[#7DA78C]'>on your schedule</span> 
            </h1>
            <p className='text-center mt-3 text-xl'>Getting started takes less than 5 minutes. Find a tutor, pick a slot, and start learning today.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-11/12 mx-auto gap-8 mt-10 '>
                {
                    steps.map(step => <div key={step.number} className='relative space-y-3 text-slate-600 shadow-sm hover:shadow-md transition-all hover:-translate-0.5 duration-300 p-10 rounded-sm'>
                        <div className={`text-3xl  bg-[${step.bg}] p-3 rounded-full border border-slate-400  w-fit`}>{step.icon}</div>
                         <h1 className='text-xl font-semibold'>{step.title}</h1>
                         <p className='max-w-2xl'>{step.desc}</p>
                         <p className='absolute top-2 right-2 p-2 rounded-full border-slate-200 border'>{step.number}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ExtraSectionTwo;
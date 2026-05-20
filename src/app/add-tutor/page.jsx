import React from 'react';

const AddTutorPage = () => {
    return (
        <div className='w-11/12 max-w-7xl mx-auto my-20'>
            <h1 className='font-bold text-4xl'>Add New Tutor</h1>
            <p>Fill in the details below to register a new tutor on the platform.</p>
            <div className='grid grid-cols-4 gap-2 mt-3'>
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
                <div className='p-3 bg-white flex justify-center items-center gap-2'>
                    <span className='font-bold  w-10 h-10 bg-[#35858E] flex justify-center items-center text-white rounded-full'>4</span>
                    <p className='text-[#35858E] font-bold'>Preferences</p>
                </div>
            </div>
        </div>
    );
};

export default AddTutorPage;
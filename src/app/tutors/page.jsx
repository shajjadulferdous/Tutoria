import TutorCard from '@/components/TutorCard';
import { getTutors } from '@/lib/action';
import React from 'react';

const page = async() => {
    const tutors = await getTutors(0);
    
    return (
        <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto my-10'>
                 {
                    tutors.map((tutor, index )=>  <TutorCard key={index} tutor={tutor}></TutorCard>)
                 }
         </div>
    );
};

export default page;
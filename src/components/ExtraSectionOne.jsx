import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLock } from "react-icons/ci";

const extraInformaton = [
  {
    "id": 1,
    "title": "Offering All types of Courses",
    "description": "Access a wide variety of online courses designed to improve your learning experience.",
    "icon": "📋"
  },
  {
    "id": 2,
    "title": "Online consultation for all",
    "description": "Get expert online consultation and guidance from experienced professionals.",
    "icon": "📑"
  },
  {
    "id": 3,
    "title": "A great investment for future",
    "description": "Invest in your future with quality education and skill development programs.",
    "icon": "👥"
  },
  {
    "id": 4,
    "title": "Best results guaranteed",
    "description": "We ensure better learning outcomes and high-quality educational support.",
    "icon": "🏅"
  },
  {
    "id": 5,
    "title": "Easy to connect with anyone",
    "description": "Connect with tutors, mentors, and learners from anywhere in the world.",
    "icon": "🌍"
  },
  {
    "id": 6,
    "title": "All verified tutors for you",
    "description": "Learn from trusted and verified tutors to ensure the best experience.",
    "icon": "👨‍🏫"
  }
]
const ExtraSectionOne = () => {
    return (
        <div className='py-20 flex justify-center '>
            <div className='space-y-2 w-11/12'>
                 <h1 className='text-center  text-2xl'>Better Learning. <span className='text-[#35858E]'> Better Results</span> </h1>
                 <h1 className='text-4xl font-bold  text-center'>Online education platform for all</h1>
                 <p className='text-center text-xl max-w-4xl mx-auto'>Tutoria is a modern, personalized learning platform dedicated to empowering student journeys by connecting them with expert tutors who match their unique academic goals.</p>
                 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mx-auto gap-6 my-8 text-[#35858E] '>
                     {
                        extraInformaton.map( information => <div key={information.id} className='flex gap-3 p-3 justify-center items-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group'>
                         <div className='text-3xl'>
                             {information.icon}
                         </div>
                          <div className='space-y-1 '>
                              <h1 className='text-xl font-semibold'>{information.title}</h1>
                              <p>{information.description}</p>
                          </div>

                     </div>)
                     }
                  
                 </div>
                  <div className='flex justify-center items-center'>
                      {/* <Button ></Button> */}
                      <Link href={'/login'} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#35858E] text-white font-normal text-xl p-5">Join our Community
                       <CiLock className='' />
                      </Link>                  
                  </div>
            </div>
        </div>
    );
};

export default ExtraSectionOne;
'use client'
import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
    const bgImage = [
        'https://images.unsplash.com/photo-1620919235663-61eb4a25bb51',
        'https://images.unsplash.com/photo-1583468982228-19f19164aee2',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'
    ];

    return (
        <div className='relative h-screen w-full overflow-hidden'>

            <div className='absolute inset-0 z-0 h-full w-full'>
                <Swiper 
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 3500, 
                        disableOnInteraction: false,
                    }}
                    speed={1200} 
                    loop={true}
                    className="mySwiper h-full w-full z-50"
                >
                    {
                        bgImage.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div 
                                    className='h-full w-full bg-cover bg-center z-50'
                                    style={{ backgroundImage: `url(${image})` }}
                                ></div>   
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className="absolute inset-0 bg-[#35858E] opacity-75 mix-blend-multiply z-10"></div>

            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className='max-w-4xl mx-auto text-center px-6'>
                    
                    <span className="inline-block text-[#E6EEC9] uppercase tracking-widest font-semibold text-sm mb-4 bg-[#7DA78C]/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
                        Welcome to Tutoria
                    </span>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        Empowering Learner Journeys, <br />
                        <span className="text-[#E6EEC9]">One Session at a Time</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
                        Connect with expert tutors, level up your skillset, and achieve your academic goals with personalized, flexible learning.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 bg-[#E6EEC9] text-[#35858E] font-bold rounded-lg shadow-lg hover:bg-[#7DA78C] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5">
                            Find a Tutor
                        </button>

                        <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                            How it Works
                        </button>
                    </div>

                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent opacity-10 z-20"></div>

        </div>
    );
};

export default Banner;